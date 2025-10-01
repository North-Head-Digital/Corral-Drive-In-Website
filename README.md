# Corral Drive-In Website

A modern, responsive website for Corral Drive-In restaurant in Long Beach, WA. Built with vanilla HTML, CSS, and JavaScript using Bootstrap 5 for styling and Alpine.js for lightweight interactivity.

## Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Interactive Menu**: Dynamic menu filtering and item display
- **Image Gallery**: Lightbox gallery with smooth animations
- **Interactive Maps**: Leaflet.js integration for location display
- **SEO Optimized**: Meta tags, sitemap, and semantic HTML
- **Performance**: Lazy loading images and optimized assets
- **Accessibility**: WCAG compliant with proper focus management

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Bootstrap 5, Custom CSS
- **Interactivity**: Alpine.js
- **Maps**: Leaflet.js with OpenStreetMap
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins, Dancing Script)

## Project Structure

```
corral-drive-in-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   ├── images/
│   │   └── gallery/        # Gallery images
│   └── data/
│       └── menu.json       # Menu data
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
└── README.md               # This file
```

## Setup Instructions

### Local Development

1. **Clone or download** the repository
2. **Open** the project folder in your preferred code editor
3. **Start a local server** (required for proper functionality):
   - Using Python: `python -m http.server 8000`
   - Using Node.js: `npx serve .`
   - Using VS Code: Install "Live Server" extension
4. **Open** `http://localhost:8000` in your browser

### Deployment Options

#### GitHub Pages (Recommended)
1. **Create** a GitHub repository
2. **Upload** all files to the repository
3. **Enable** GitHub Pages in repository settings
4. **Access** your site at `https://yourusername.github.io/repository-name`

#### Netlify (Alternative)
1. **Sign up** for a free Netlify account
2. **Connect** your GitHub repository or drag & drop files
3. **Deploy** automatically with custom domain support

## Customization

### Menu Items
Edit `assets/data/menu.json` to update menu items, prices, and descriptions.

### Images
Replace placeholder images in `assets/images/` with actual restaurant photos:
- `tsunami-burger-hero.jpg` - Hero section burger image
- `corral-exterior.jpg` - Restaurant exterior
- `gallery/` - Gallery images

### Contact Information
Update contact details in `index.html`:
- Phone number
- Address
- Hours of operation

### Colors and Branding
Modify CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #d32f2f;    /* Main brand color */
    --secondary-color: #ff5722;  /* Secondary color */
    --accent-color: #ffc107;     /* Accent color */
}
```

## Features Overview

### Home Section
- Hero banner with call-to-action
- Restaurant story and values
- Interactive testimonial carousel

### About Section
- Restaurant history timeline
- Family story and values
- Visual timeline with animations

### Menu Section
- Dynamic menu with filtering
- Category-based organization
- Tsunami Challenge modal
- Responsive menu cards

### Gallery Section
- Masonry grid layout
- Lightbox image viewer
- Smooth animations and transitions

### Contact Section
- Interactive map with Leaflet.js
- Contact information
- FAQ accordion
- Business hours

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

- Optimized images with lazy loading
- Minified CSS and JavaScript (production)
- CDN resources for faster loading
- Progressive Web App capabilities

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph protocol
- Structured data markup
- XML sitemap
- Robots.txt configuration

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact the development team or create an issue in the repository.

---

**Corral Drive-In** - Authentic drive-in dining in Long Beach, WA since 1984
