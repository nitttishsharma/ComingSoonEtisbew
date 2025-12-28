# Etisbew Interactive - Coming Soon Website

A premium, modern "Coming Soon" landing page featuring an interactive 3D geometric background and a minimalist, aesthetically pleasing UI.

## 🚀 Key Features

- **Interactive 3D Background**: A custom-built Canvas-based geometric pattern engine that shifts and responds to real-time mouse movement.
- **Glassmorphic UI**: Modern interface design using transparency, blur effects, and vibrant teal accents.
- **Smooth Animations**: Powered by `framer-motion` for elegant entry and hovering interactions.
- **Fully Responsive**: Optimized for all screen sizes, from mobile devices to ultra-wide displays.
- **One-Click Communication**: integrated Mail icon with a pre-configured `mailto` link.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with custom utility-first approach and [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit).

## 📂 Project Structure

```text
/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── components/
│   │   └── GeometricBackground.jsx   # Core logic for the 3D animated background
│   ├── App.jsx             # Main application component & UI layout
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles and custom utility classes
├── index.html              # Main HTML template
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🧩 Codebase Highlights

### 1. Interactive Background (`GeometricBackground.jsx`)
This component uses the HTML5 Canvas API and custom 3D projection logic. It simulates several polyhedral shapes (cubes, tetrahedrons, etc.) floating in a 3D coordinate system. 
- **Physics**: Implements 3D elastic collision physics and boundary bouncing.
- **Interactivity**: Captures mouse position to create a parallax effect and shifts the perspective based on user movement.
- **Performance**: Optimized using `requestAnimationFrame` for buttery-smooth 60fps animations.

### 2. UI Layout (`App.jsx`)
The main layout is centered using Flexbox. It uses Framer Motion's `motion` components to animate the heading and text on page load. The footer is integrated directly into the central flow to maintain a clean, focused look.

### 3. Styling System (`index.css`)
To keep the bundle lightweight, we use a custom utility-based CSS system that implements:
- **Neon Glows**: Box shadows and text gradients tailored for a professional "Dark Mode" feel.
- **Responsive Utilities**: Custom `@media` queries for seamless device transitions.
- **Backdrop Filters**: For the glassmorphic subscription and button components.

## 🚦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nitttishsharma/ComingSoonEtisbew.git
   cd ComingSoonEtisbew
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📄 License
© 2025 Etisbew Interactive. All rights reserved.
