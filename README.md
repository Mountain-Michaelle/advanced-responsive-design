# Course Registration System

A modern, responsive React application for course registration built from scratch with webpack. This project demonstrates advanced responsive design techniques including media queries, Flexbox, Grid layouts, and responsive media handling.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Webpack Configuration](#webpack-configuration)
   - [Entry & Output](#entry--output)
   - [Loaders](#loaders)
   - [Plugins](#plugins)
   - [Dev Server](#dev-server)
5. [Babel Configuration](#babel-configuration)
6. [React Architecture](#react-architecture)
   - [Context API](#context-api)
   - [Routing](#routing)
7. [Styling & Responsive Design](#styling--responsive-design)
   - [CSS Custom Properties](#css-custom-properties)
   - [Flexbox Layouts](#flexbox-layouts)
   - [CSS Grid Layouts](#css-grid-layouts)
   - [Media Queries](#media-queries)
   - [Responsive Images](#responsive-images)
8. [Getting Started](#getting-started)
9. [Available Scripts](#available-scripts)

---

## Project Overview

This is a multi-step course registration form that guides users through:
1. **Student Information** - Name, email, academic level
2. **Course Selection** - Course, lecturer, grade point preference
3. **Summary** - Review and confirm registration details

The application uses React Context for state management across pages and implements responsive design patterns that adapt to mobile, tablet, and desktop screens.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Webpack 5 |
| Transpiler | Babel 7 |
| Routing | React Router DOM 7 |
| Styling | Plain CSS (no preprocessors) |

---

## Project Structure

```
res_design/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   └── Navbar.jsx      # Navigation component
│   ├── context/
│   │   └── RegistrationContext.jsx  # Global state management
│   ├── pages/
│   │   ├── StudentInfo.jsx # Step 1: Student form
│   │   ├── CourseInfo.jsx  # Step 2: Course selection
│   │   └── Summary.jsx     # Step 3: Review & submit
│   ├── App.jsx             # Main app with routing
│   └── index.js            # Entry point
├── assets/
│   └── css/
│       └── styles.css      # All styles with responsive design
├── .babelrc                # Babel configuration
├── webpack.config.js       # Webpack configuration
├── package.json            # Dependencies
└── .gitignore              # Git ignore rules
```

---

## Webpack Configuration

The webpack configuration (`webpack.config.js`) is built from scratch with all necessary integrations for a modern React project.

### Entry & Output

```javascript
entry: "./src/index.js",
output: {
  path: path.resolve(__dirname, "dist"),
  filename: "bundle.js",
  clean: true
}
```

- **Entry point**: [`src/index.js`](src/index.js) - The application bootstrap file
- **Output**: Compiled bundle saved to `dist/bundle.js`
- **clean: true**: Automatically cleans the output directory before each build

### File Resolution

```javascript
resolve: {
  extensions: [".js", ".jsx"]
}
```

Allows importing files without specifying extensions:
```javascript
import App from "./App";  // Resolves to App.jsx
```

### Loaders

#### 1. Babel Loader (JavaScript/JSX Transpilation)

```javascript
{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react"
      ]
    }
  }
}
```

- **Purpose**: Transpiles modern JavaScript and JSX to browser-compatible code
- **`@babel/preset-env`**: Converts ES6+ syntax to ES5, with `{ modules: false }` preserving ES modules for webpack
- **`@babel/preset-react`**: Transforms JSX syntax to React.createElement calls

#### 2. CSS Loaders (Style Processing)

```javascript
{
  test: /\.css$/i,
  use: ["style-loader", "css-loader"]
}
```

- **css-loader**: Resolves `@import` and `url()` statements in CSS
- **style-loader**: Injects CSS into the DOM as `<style>` tags

#### 3. Asset Loader (Images)

```javascript
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: "asset/resource"
}
```

- Handles image files by emitting them as separate files

### Plugins

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: "./public/index.html"
  })
]
```

- Injects the compiled JavaScript bundle into the HTML template
- Creates `dist/index.html` with the bundle included

### Dev Server

```javascript
devServer: {
  static: {
    directory: path.join(__dirname, "dist")
  },
  port: 3000,
  open: true,
  hot: true,
  historyApiFallback: true
}
```

| Option | Description |
|--------|-------------|
| `port: 3000` | Development server runs on port 3000 |
| `open: true` | Automatically opens browser |
| `hot: true` | Enables Hot Module Replacement (HMR) |
| `historyApiFallback: true` | Serves `index.html` for SPA routing |

---

## Babel Configuration

The project uses Babel 7 with two presets configured in webpack:

| Preset | Purpose |
|--------|---------|
| `@babel/preset-env` | Transpiles ES6+ JavaScript to ES5 |
| `@babel/preset-react` | Transforms JSX to React.createElement |

**Note**: We configure presets directly in webpack rather than using `.babelrc` to ensure consistent behavior across all environments.

---

## React Architecture

### Application Entry Point

The app bootstraps in [`src/index.js`](src/index.js):

```javascript
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RegistrationProvider } from './context/RegistrationContext';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegistrationProvider>
        <App />
      </RegistrationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
```

### Context API

[`RegistrationContext.jsx`](src/context/RegistrationContext.jsx) provides global state management:

```javascript
const initialFormData = {
  name: "",
  email: "",
  level: "",
  course: "",
  lecturer: "",
  gp: ""
};
```

- **`RegistrationProvider`**: Wraps the app to provide form state
- **`useRegistration()`**: Custom hook to access form data and update functions
- **`updateForm()`**: Merges new values with existing form data
- **`resetForm()`**: Clears all form data to initial state

### Routing

[`App.jsx`](src/App.jsx) uses React Router for navigation:

```javascript
<Routes>
  <Route path="/" element={<StudentInfo />} /> 
  <Route path="/course" element={<CourseInfo />} />
  <Route path="/summary" element={<Summary />} />
</Routes>
```

The [`Navbar`](src/components/Navbar.jsx) component provides navigation links with active state highlighting based on the current route.

---

## Styling & Responsive Design

All styles are contained in [`assets/css/styles.css`](assets/css/styles.css) using vanilla CSS (no preprocessors).

### CSS Custom Properties

```css
:root {
  --bg: #f4f7fb;
  --surface: #ffffff;
  --primary: #2563eb;
  --nav: #0f172a;
  --shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}
```

Benefits:
- Single source of truth for colors
- Easy theme modifications
- Improved maintainability

### Flexbox Layouts

Used for 1-dimensional layouts (alignment in a single direction):

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.button-row {
  display: flex;
  gap: 1rem;
}
```

### CSS Grid Layouts

Used for 2-dimensional layouts (rows and columns):

```css
.page-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.5rem;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

### Media Queries

Three breakpoints implement responsive design:

#### Tablet Breakpoint (max-width: 900px)

```css
@media (max-width: 900px) {
  .page-layout {
    grid-template-columns: 1fr;
  }

  .summary-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

- Stacks the two-column layout into single column
- Reduces summary grid to 2 columns

#### Mobile Breakpoint (max-width: 600px)

```css
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
  }

  .menu-toggle {
    display: inline-block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
  }

  .grid-two,
  .summary-grid {
    grid-template-columns: 1fr;
  }

  .button-row {
    flex-direction: column;
  }
}
```

- Collapses horizontal navigation to vertical
- Shows hamburger menu on mobile
- Stacks all grid layouts to single column
- Stacks buttons vertically

### Responsive Images

```css
.responsive-media {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 14px;
  object-fit: cover;
}
```

**Key techniques:**
- `width: 100%`: Image fills container width
- `max-width: 100%`: Prevents overflow
- `height: auto`: Maintains aspect ratio
- `object-fit: cover`: Ensures image fills area without distortion

---

## Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
```

The app will open at `http://localhost:3000` with hot reloading enabled.

### Production Build

```bash
# Build for production
npm run build
```

Output is generated in the `dist/` directory.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `start` | `webpack serve --mode development --open` | Start dev server |
| `build` | `webpack --mode production` | Create production build |
| `test` | `echo "Error: no test specified" && exit 1` | Placeholder test command |

---

## Session 15: Advanced Responsive Design Techniques

This project implements the following advanced responsive design techniques covered in the course:

### a. Media Queries and Responsive Layouts

- **Mobile-first approach**: Base styles for mobile, enhanced via min-width queries
- **Breakpoints**: 900px (tablet), 600px (mobile)
- **Fluid typography**: Using relative units (rem, em, %)

### b. Flexbox and Grid for Responsive Design

- **Flexbox**: Navigation, button rows, navbar layout
- **CSS Grid**: Page layouts, summary card grids, form layouts
- **Dynamic columns**: `repeat(auto-fit, minmax(...))` patterns

### c. Implementing Responsive Images and Media

- **Fluid images**: Percentage-based width with auto height
- **Object-fit**: Maintains aspect ratio in containers
- **Border-radius**: Consistent visual treatment across breakpoints

---

## Future Improvements

- Add form validation with error messages
- Implement actual form submission to backend
- Add loading states and transitions
- Include unit tests with React Testing Library
- Add TypeScript support for type safety
