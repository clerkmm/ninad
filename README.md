# Ninad Portfolio

A multi-page, 3D-styled portfolio website built with Flask. Pages: Home, About, Projects, Resume, Contact (website inquiry form), plus a 404 page.

## Run it

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:5000

## How the inquiry form works

1. The visitor chooses a website topic (e-commerce, portfolio, business, ...), then enters name, phone, email, timeline and details.
2. When they press **Create my email**, their own email app opens with a message already written and addressed to **shrikantgoliwale885@gmail.com**. The subject and body say "I want to make a website" and include their name, topic, phone, email and details.
3. If no email app opens, the page shows **Open in Gmail** and **Copy message** buttons.
4. No email password or app password is needed. Nothing is sent until the visitor presses send in their own email.

As a backup, the server also saves each inquiry to `inquiries.jsonl` using a background thread pool. This file contains visitors' personal details, so keep it private.

## Multi-threading

- Flask runs with `threaded=True`.
- A `ThreadPoolExecutor` (4 workers) saves inquiries in the background, with a lock to protect the file.

For hosting, use one worker process with several threads:

```bash
gunicorn -w 1 --threads 8 -b 0.0.0.0:8000 app:app
```

## Edit your details

All resume, skills, projects and contact details are at the top of `app.py` in the `RESUME` dictionary. The details provided are imaginary placeholders: replace the phone number, links, education, experience and projects with your real ones.

The resume page has a **Download / print as PDF** button (use "Save as PDF" in the print dialog).

## Hosting for free

- **Render** (free web service): start command `gunicorn -w 1 --threads 8 app:app`. The free tier sleeps when idle.
- **PythonAnywhere**: free Flask hosting.
- Static hosts such as GitHub Pages do not run Flask. The form still opens the email, but backup saving will not work.
