# Jason Jiang's Website

A beautiful single-page React TypeScript web application with React Router.

## Features

- **React 18** with TypeScript
- **React Router** for navigation
- **Responsive Design** with mobile-first approach
- **Custom Color Palette**: Aqua marine, baby blue, and wood-colored yellow tones
- **Reusable Components**: TitleText component with multiple size variants

## Color Palette

- **Aqua Marine**: #7FFFD4
- **Baby Blue**: #87CEEB, #F0F8FF, #E0FFFF
- **Wood Yellow**: #D2B48C, #F5F5DC, #8B7355

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── TitleText.tsx      # Reusable title component
│   └── TitleText.css      # Title component styles
├── pages/
│   ├── HomePage.tsx       # Home page component
│   └── HomePage.css       # Home page styles
├── App.tsx                # Main app component with routing
├── App.css                # Global app styles
└── index.tsx              # App entry point
```

## Components

### TitleText

A reusable title component with three size variants:
- `small`: 2rem font size
- `medium`: 3rem font size (default)
- `large`: 4rem font size

```tsx
<TitleText 
  text="Your Title" 
  size="large" 
  className="custom-class" 
/>
```

## Technologies Used

- React 18.2.0
- TypeScript 4.9.5
- React Router DOM 6.8.0
- CSS3 with modern features (backdrop-filter, gradients) 