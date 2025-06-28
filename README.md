# Portfolio

A modern, responsive personal portfolio website built with React.

## Features

- Hero section with profile, social links, and resume download
- About section with skills and interests
- Projects section with image sliders and project details modal
- Contact section with direct email form and contact info
- Responsive design for all devices
- Smooth animations and modern UI

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Email:** EmailJS (for contact form)
- **Deployment:** Netlify/Vercel or any static hosting

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or as shown in your terminal).

4. **Build for production:**
   ```sh
   npm run build
   ```

### Configuration

- Update your profile info, project details, and contact information in the respective React components.
- Place your `resume.pdf` in the `public` folder for the resume download button to work.
- Configure EmailJS for the contact form (see [EmailJS docs](https://www.emailjs.com/docs/)).

## Folder Structure

```
/src
  /components
  /pages
  main.jsx
index.html
```

## Deployment

You can deploy this site to Netlify, Vercel, or any static hosting provider.

## License

This project is licensed under the MIT License.

---

**Feel free to fork, customize, and use for your own
