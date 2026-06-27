# Wanderlust Travel — Frontend

A modern, fully responsive travel agency website built with React + Vite + Tailwind CSS.

## Tech Stack
- React 19 + Vite 8
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)
- JavaScript only (no TypeScript)

## Features
- Loading screen with animated compass
- Sticky glassmorphism navbar with dark/light toggle
- Full-screen hero with parallax-style overlay
- Destination cards with hover zoom
- Package cards with ratings and services
- Why Choose Us with floating stat cards
- Interactive testimonials carousel
- Masonry photo gallery
- Contact form UI
- Animated footer with newsletter
- Scroll-to-top button
- Dark mode (persisted to localStorage)
- Lazy-loaded sections via React.Suspense
- Scroll-triggered animations via Framer Motion

## Setup

```bash
npm install
npm run dev       # development at http://localhost:5173
npm run build     # production build
npm run preview   # preview production build
```

## Project Structure

```
src/
  components/
    Footer.jsx          # Footer with newsletter + links
    LoadingScreen.jsx   # Animated intro screen
    Navbar.jsx          # Sticky nav with mobile hamburger
    ScrollToTop.jsx     # Floating scroll-to-top button
    SectionHeader.jsx   # Reusable section title block
  sections/
    Hero.jsx            # Full-screen hero
    Destinations.jsx    # Destination cards grid
    Packages.jsx        # Package cards
    WhyChooseUs.jsx     # Feature highlights + image
    Testimonials.jsx    # Review carousel
    Gallery.jsx         # Masonry photo grid
    Contact.jsx         # Contact form + info
  data/
    destinations.js     # All mock travel data
  hooks/
    useDarkMode.js      # Dark mode toggle with persistence
    useScrollAnimation.js # Scroll-in-view utility
  App.jsx
  main.jsx
  index.css
```
