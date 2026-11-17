# Virasat Solutions Website

A fast, mobile-friendly static website built with plain HTML, CSS and JavaScript. No build step, framework or database is required.

## Project structure

```text
virasat-website/
├── index.html             # Home page
├── pages/                 # About, services, products, knowledge and contact pages
├── assets/
│   ├── css/style.css      # Site styles
│   ├── js/script.js       # Navigation and enquiry form
│   └── images/            # Logo, favicon and sample images
├── robots.txt
└── sitemap.xml
```

## Run locally

From the project root:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Update content and images

Edit the relevant page in `index.html` or `pages/`. Replace sample SVGs in `assets/images/` with real photos and update their paths and alt text. Product dimensions should be verified before publishing.

## Receive enquiries

The contact form requires an enquiry and at least one contact method: a valid email address or a phone number containing 7–15 digits. A phone number is checked when supplied.

The form uses Formspree to store submissions. Before launch:

1. Create a form at https://formspree.io and confirm its recipient email.
2. Replace `YOUR_FORM_ID` in the `action` URL in `pages/contact.html` with the ID from your Formspree endpoint.
3. Send a test enquiry and confirm it appears in the Formspree dashboard.

Formspree submissions can be exported as CSV and opened in Excel or Google Sheets. Until the endpoint is configured, the page asks visitors to contact you by email or WhatsApp instead of pretending their enquiry was submitted.

## Go live

Upload the project files to a static host such as Netlify, Cloudflare Pages, GitHub Pages or a cPanel host. Enable HTTPS and update canonical and Open Graph URLs if you use a different domain.

## Business details

Proprietor: Swasti Rani. Registration No. 2610300321009076. MSME MH-27-0249703. GSTN 27AUCPR1941D1ZT.
