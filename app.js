(function () {
  // ---- footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---- mobile menu
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---- scroll reveal (also fills the skill bars)
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // ---- 3D tilt on cards
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && window.matchMedia && matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.tilt').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--ry', (x * 12).toFixed(2) + 'deg');
        card.style.setProperty('--rx', (-y * 12).toFixed(2) + 'deg');
      });
      card.addEventListener('mouseleave', function () {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });
  }

  // ---- print resume
  var printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  // ---- inquiry form: opens the visitor's email with a ready-made message
  var form = document.getElementById('inquiry-form');
  if (form) {
    var msg = document.getElementById('form-msg');
    var result = document.getElementById('result');
    var preview = document.getElementById('preview');
    var mailLink = document.getElementById('mail-link');
    var gmailLink = document.getElementById('gmail-link');
    var copyBtn = document.getElementById('copy-btn');
    var copyMsg = document.getElementById('copy-msg');
    var owner = form.dataset.owner;
    var ownerName = (form.dataset.name || '').split(' ')[0] || 'there';
    var emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    var phoneRe = /^[0-9+()\-\s]{7,20}$/;

    function val(name) { return form.elements[name].value.trim(); }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.textContent = '';
      msg.className = 'msg';

      var d = {
        topic: val('topic'),
        name: val('name'),
        phone: val('phone'),
        email: val('email'),
        timeline: val('timeline'),
        details: val('details').slice(0, 1200)
      };

      var problem = '';
      if (!d.topic) problem = 'Please choose what your website is about.';
      else if (d.name.length < 2) problem = 'Please enter your name.';
      else if (!phoneRe.test(d.phone)) problem = 'Please enter a valid phone number.';
      else if (!emailRe.test(d.email)) problem = 'Please enter a valid email address.';
      if (problem) {
        msg.textContent = problem;
        msg.className = 'msg error';
        return;
      }

      var subject = 'I want to make a website - ' + d.topic + ' - ' + d.name;
      var body = [
        'Hi ' + ownerName + ',',
        '',
        'I want to make a website.',
        '',
        'Name: ' + d.name,
        'Website topic: ' + d.topic,
        'Phone: ' + d.phone,
        'Email: ' + d.email,
        'Needed: ' + d.timeline,
        '',
        'Details:',
        d.details || '(none)',
        '',
        'Thank you!'
      ].join('\r\n');

      var mailto = 'mailto:' + owner + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(owner) +
        '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      // Backup copy saved by the server (ignored if the site is hosted without a backend).
      fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(d)
      }).catch(function () {});

      preview.textContent = 'To: ' + owner + '\nSubject: ' + subject + '\n\n' + body.replace(/\r\n/g, '\n');
      mailLink.href = mailto;
      gmailLink.href = gmail;
      result.hidden = false;
      result.scrollIntoView({ behavior: 'smooth', block: 'center' });
      msg.textContent = 'Your email is ready. Press send in your email app.';
      msg.className = 'msg ok';

      window.location.href = mailto;
    });

    copyBtn.addEventListener('click', function () {
      var text = preview.textContent;
      function done(ok) {
        copyMsg.textContent = ok ? 'Copied. Paste it into an email to ' + owner + '.' : 'Could not copy. Select the text and copy it manually.';
        copyMsg.className = 'msg ' + (ok ? 'ok' : 'error');
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  }
})();
