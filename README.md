# Sunny Side Agency

Frontend Mentor challenge – Agency landing page built with HTML, CSS, JavaScript, and Bootstrap.

My solution to the [Sunny Side Agency landing page](https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef) on Frontend Mentor.

## Overview

Sunnyside is a fully responsive agency landing page built to match the Frontend Mentor design across mobile, tablet, and desktop breakpoints.

## Features

- **Responsive layout**: Optimized for mobile (320–425px), tablet, and desktop screens.
- **Accessible navigation**: Keyboard-friendly “Skip to main content”, clear navigation landmark labeling, and improved screen-reader support.
- **SEO basics**: Includes a descriptive page title and meta description for better search visibility.
- **Dark mode consistency**: Explicitly opts into a light color scheme so device/browser dark mode won’t auto-invert the page.
- **Custom mobile menu**: Hamburger menu opens a custom-styled dropdown and closes on outside click / Escape.

## Built With

- **HTML5** (semantic markup)
- **CSS3**
- **Bootstrap 5**
- **JavaScript (Vanilla JS)**

## Project Structure

```text
.
├── design/             # Frontend Mentor design previews/references
├── images/             # Image assets (desktop + mobile variants)
├── js/
│   └── index.js        # Mobile hamburger menu logic (open/close + ARIA)
├── styles/
│   └── index.css       # Custom styles, responsiveness, accessibility, light-only scheme
└── index.html          # Main page markup and sections
```

## How It Works

- **Keyboard & screen readers**
  - A “Skip to main content” link is available as the first focusable element on the page.
  - The header navigation is labeled for assistive technologies, and decorative icons are hidden from screen readers.
  - To quickly test: press `Tab` on page load to reveal the skip link, then press `Enter` to jump into the main content.

- **Mobile hamburger menu**
  - The hamburger button toggles the mobile dropdown by adding/removing an `is-open` class.
  - It updates `aria-expanded` on the toggle button and `aria-hidden` on the menu for assistive technology.
  - The menu closes when clicking outside, pressing `Escape`, or selecting a link inside.

## Design

The designs for this project are provided by Frontend Mentor and are located in the **`/design`** folder. The folder contains desktop and mobile UI references.

Every detail of the design was followed as closely as possible — including layout, typography, spacing, button styles, hover/active states, and the color palette — using **Bootstrap utilities** combined with **custom CSS**.

## Acknowledgements

- Challenge by **Frontend Mentor**