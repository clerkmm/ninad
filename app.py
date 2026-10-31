"""Ninad Portfolio - multi-page Flask site with a threaded inquiry backend.

Visitors fill in the inquiry form on /contact. The browser then opens their own email
app (or Gmail) with a ready-made message addressed to the owner, so no email password
is needed on the server. As a backup, each inquiry is also saved to inquiries.jsonl by a
background thread pool.
"""
import json
import os
import re
import threading
import time
from concurrent.futures import ThreadPoolExecutor

from flask import Flask, jsonify, render_template, request

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
INQUIRY_FILE = os.path.join(BASE_DIR, "inquiries.jsonl")

OWNER = {
    "site": "Ninad Portfolio",
    "name": "Ninad Goliwale",
    "email": "shrikantgoliwale885@gmail.com",
}

TOPICS = [
    "E-commerce website",
    "Portfolio website",
    "Business / company website",
    "Blog or news website",
    "Education / course website",
    "Web app or dashboard",
    "Landing page",
    "Something else",
]
TIMELINES = ["As soon as possible", "Within 1 month", "2 to 3 months", "Flexible"]

# ---------------------------------------------------------------------------
# IMAGINARY RESUME - replace these details with the real ones.
# ---------------------------------------------------------------------------
RESUME = {
    "name": "Ninad Goliwale",
    "age": 21,
    "role": "Full-Stack Developer & Video Editor",
    "email": OWNER["email"],
    "phone": "+91 90000 00000",
    "links": [
        ("GitHub", "https://github.com/your-username"),
        ("LinkedIn", "https://www.linkedin.com/in/your-username"),
    ],
    "summary": (
        "21-year-old developer who has mastered Python, Java and Node.js. I build fast, "
        "clean websites and backend tools, and I edit gameplay videos with voice-over and "
        "subtitles for my own channel. I like turning an idea into something people can use."
    ),
    "skills": [
        ("Python", 95),
        ("Java", 90),
        ("Node.js", 92),
        ("Flask / Express", 85),
        ("HTML, CSS & JavaScript", 88),
        ("SQL & SQLite", 80),
        ("FFmpeg & video editing", 78),
    ],
    "tools": ["Git", "GitHub", "VS Code", "Postman", "FFmpeg", "Linux", "REST APIs", "Multi-threading"],
    "education": [
        {"title": "B.Sc. in Computer Science", "place": "Example University", "years": "2023 - 2026",
         "note": "Focus on programming, databases and web technologies."},
        {"title": "Higher Secondary (Science)", "place": "Example Junior College", "years": "2021 - 2023",
         "note": "Mathematics and computer science."},
    ],
    "experience": [
        {"title": "Freelance Full-Stack Developer", "place": "Self-employed", "years": "2024 - Present",
         "points": [
             "Build small business websites and web apps with Python (Flask) and Node.js.",
             "Automate repetitive work with Python scripts and background threads.",
             "Deliver responsive, fast pages with a clean, modern design.",
         ]},
        {"title": "Gaming Content Creator & Video Editor", "place": "GT5 gameplay channel", "years": "2023 - Present",
         "points": [
             "Record, edit and publish GT5 gameplay videos with voice-over and subtitles.",
             "Use FFmpeg and editing software for cuts, speed ramps and colour looks.",
             "Plan titles, thumbnails and upload schedules for the channel.",
         ]},
    ],
    "projects": [
        {"name": "Task Tracker", "tags": ["Python", "Flask", "SQLite"],
         "desc": "A multi-user to-do app with reminders and a clean dashboard."},
        {"name": "Realtime Chat", "tags": ["Node.js", "Express", "WebSocket"],
         "desc": "Chat rooms with live typing indicators and message history."},
        {"name": "Library Manager", "tags": ["Java", "JDBC", "MySQL"],
         "desc": "A desktop app that tracks books, members and due dates."},
        {"name": "Auto Subtitle Tool", "tags": ["Python", "FFmpeg"],
         "desc": "Turns a voice-over into timed subtitles and burns them into the video."},
        {"name": "Parallel File Fetcher", "tags": ["Python", "Threads"],
         "desc": "Downloads many files at once with a thread pool and a live progress view."},
        {"name": "Ninad Portfolio", "tags": ["Flask", "CSS 3D", "JavaScript"],
         "desc": "This site: a 3D-styled, multi-page portfolio with an inquiry form."},
    ],
    "achievements": [
        "Completed several full-stack projects from idea to launch.",
        "Runs a gaming channel with regular uploads and edited voice-overs.",
        "Self-taught in Python, Java and Node.js.",
    ],
    "languages": ["English", "Hindi"],
}

# ---------------------------------------------------------------------------
app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024

POOL = ThreadPoolExecutor(max_workers=4)   # background workers for saving inquiries
FILE_LOCK = threading.Lock()
RATE_LOCK = threading.Lock()
RATE = {}

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
PHONE_RE = re.compile(r"^[0-9+()\-\s]{7,20}$")


@app.context_processor
def inject_globals():
    return {"owner": OWNER, "resume": RESUME, "topics": TOPICS, "timelines": TIMELINES}


def save_inquiry(record):
    """Runs in a worker thread: append one inquiry to the JSON-lines file."""
    with FILE_LOCK:
        with open(INQUIRY_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")


def rate_ok(ip):
    now = time.time()
    with RATE_LOCK:
        recent = [t for t in RATE.get(ip, []) if now - t < 3600]
        if len(recent) >= 10:
            RATE[ip] = recent
            return False
        recent.append(now)
        RATE[ip] = recent
        return True


@app.route("/")
def home():
    return render_template("index.html", page="home")


@app.route("/about")
def about():
    return render_template("about.html", page="about")


@app.route("/projects")
def projects():
    return render_template("projects.html", page="projects")


@app.route("/resume")
def resume_page():
    return render_template("resume.html", page="resume")


@app.route("/contact")
def contact():
    return render_template("contact.html", page="contact")


@app.errorhandler(404)
def not_found(_):
    return render_template("404.html", page="404"), 404


@app.post("/api/inquiry")
def inquiry():
    data = request.get_json(silent=True) or {}
    record = {
        "name": str(data.get("name", "")).strip()[:100],
        "email": str(data.get("email", "")).strip()[:200],
        "phone": str(data.get("phone", "")).strip()[:30],
        "topic": str(data.get("topic", "")).strip(),
        "timeline": str(data.get("timeline", "")).strip()[:60],
        "details": str(data.get("details", "")).strip()[:2000],
    }
    if len(record["name"]) < 2:
        return jsonify(error="Please enter your name."), 400
    if not EMAIL_RE.match(record["email"]):
        return jsonify(error="Please enter a valid email address."), 400
    if not PHONE_RE.match(record["phone"]):
        return jsonify(error="Please enter a valid phone number."), 400
    if record["topic"] not in TOPICS:
        return jsonify(error="Please choose a website topic."), 400
    if not rate_ok(request.remote_addr or "unknown"):
        return jsonify(error="Too many requests. Please try again later."), 429

    record["received"] = time.strftime("%Y-%m-%d %H:%M:%S")
    POOL.submit(save_inquiry, record)
    return jsonify(ok=True), 202


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False, threaded=True)
