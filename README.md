# Abdul Faridajalal Mohammad - Portfolio Website

A clean, modern, and responsive portfolio website showcasing Abdul Faridajalal Mohammad's professional experience, skills, and achievements as an Azure Data Platform Engineer.

## Features

- Fully responsive design that works on all devices
- Mobile-first approach using modern CSS (Flexbox and Grid)
- Clean and modular code structure
- Vertical timeline for experience section
- Highlighted certifications and achievements
- Smooth scrolling and navigation
- Automatic deployment to GitHub Pages

## File Structure

```
farida-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main styles
│   ├── timeline.css        # Timeline specific styles
│   └── theme.css           # Theme variables and colors
├── js/
│   ├── main.js             # JavaScript functionality
├── assets/
│   ├── images/profile.jpg  # Profile image (add your own)
├── .github/
│   └── workflows/deploy.yml # GitHub Actions deployment
├── README.md               # This file
```

## Editing Content

All text content is easily editable:

1. Open the `index.html` file in any text editor
2. Look for sections marked with `<!-- Editable Section: Section Name -->`
3. Edit the text within these sections
4. Save the file

## Customization

### Colors

The color scheme can be easily changed by editing the variables in `css/theme.css`:

- `--primary-navy: #1B263B;` (Deep Navy)
- `--primary-teal: #5BC0BE;` (Soft Teal)
- `--primary-gray: #E0E1DD;` (Light Gray)

### Profile Image

1. Replace the file at `assets/images/profile.jpg` with your own image
2. Keep the same filename or update the reference in the HTML

## Deployment

This project is set up to automatically deploy to GitHub Pages when changes are pushed to the main branch. To set this up:

1. Create a new GitHub repository
2. Push this project to the repository
3. Go to Settings > Pages
4. Set the source to "GitHub Actions"

## Local Development

To work on this project locally:

1. Clone the repository
2. Open the project in your code editor
3. Use a local development server (e.g., Live Server in VS Code) to preview changes

## License

This project is available for personal use.

---

Created by [Your Name] for Abdul Faridajalal Mohammad