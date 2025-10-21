# Developer Notes - C++ Learning Web Application

##  Quick Start Guide
This section has been deployed at https://4-c-learning-3rd-yr-project.vercel.app/

To deploy locally you must install the prerequisites and and run the following commands in the terminal:
### Prerequisites
- Node.js (version specified in `.nvmrc`)
- npm or yarn package manager

### Installation & Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Architecture Overview

### Core Technologies Stack
- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS + Custom Components + google styles aPI
- **Routing**: React Router DOM
- **State Management**: React Hooks + Context
- **Code Editor**: CodeMirror with Okaidia theme
- **Build Tool**: Vite with custom plugins

### Directory Structure & Purpose

#### `/` (Root)
- **Configuration files** for the entire project
- `.nvmrc`: Node version specification
- `vite.config.js`: Vite build configuration with custom plugins
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS processing setup

#### `/src/` (Main Application Code)
**Core Files:**
- `main.jsx`: Application entry point - React DOM rendering
- `App.jsx`: Root component with routing setup
- `index.css`: Global styles and Tailwind imports

**Component Architecture:**
```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Dialog, etc.)
│   └── lesson/       # Lesson-specific components
│       ├── interactive-elements/  # Code challenges, games, puzzles
│       └── learning-styles/       # Content delivery variations
├── pages/            # Route-level page components
├── data/             # Static data (lessons.js)
└── lib/              # Utility functions and helpers
```

#### `/plugins/` (Build & Development Tools)
- **visual-editor/**: Custom Vite plugins for live content editing
  - `vite-plugin-edit-mode.js`: Enables real-time content editing
  - `vite-plugin-react-inline-editor.js`: React component inline editing
  - `edit-mode-script.js`: Runtime editing functionality
  - `visual-editor-config.js`: Editor configuration

#### `/tools/` (Build Automation)
- `generate-llms.js`: Pre-build script for LLM integration

#### `/public/` (Static Assets)
- `.htaccess`: Apache server configuration
- Static files served directly

#### `/frontend/C++/` (C++ Learning Content)
- C++ specific learning materials and resources

## Key Development Concepts

### Component Hierarchy
```
App.jsx
├── CppIndex.jsx (Landing page)
└── LessonPage.jsx
    ├── LessonHeader.jsx
    ├── LessonNavigation.jsx
    ├── LearningContent.jsx
    │   ├── [LearningStyle]Content.jsx
    └── interactive-elements/
        ├── CodeChallenge.jsx
        ├── CodeEditor.jsx
        └── [InteractiveComponents]
```

### Data Flow
1. **Static Data**: `/src/data/lessons.js` contains lesson definitions
2. **Dynamic Content**: Loaded through React Router params
3. **State Management**: Local component state + React Context for global state

### Styling System
- **Tailwind CSS**: Utility-first styling
- **Custom Components**: Radix UI primitives wrapped in `/src/components/ui/`
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Interactive Features
- **Code Editor**: CodeMirror integration with syntax highlighting
- **Code Challenges**: Interactive coding exercises
- **Learning Games**: Code matching, syntax puzzles
- **AI Tutor**: Intelligent feedback system (AITutor.jsx)

## Adding New Features

### Adding a New Lesson
1. Update `/src/data/lessons.js` with new lesson data
2. Create corresponding components in `/src/components/lesson/`
3. Add interactive elements to `/src/components/lesson/interactive-elements/`

### Adding New UI Components
1. Create component in `/src/components/ui/`
2. Follow existing naming convention (PascalCase)
3. Export from index file if needed

### Adding New Learning Styles
1. Create new component in `/src/components/lesson/learning-styles/`
2. Follow the pattern: `[Style]Content.jsx`
3. Update LearningContent.jsx to include new style

## Debugging & Development Tips

### Common Issues
- **Hot reload not working**: Check Vite config and ensure files are in `/src/`
- **Styling issues**: Verify Tailwind classes and check for CSS conflicts
- **Build failures**: Run `npm run build` locally to debug

### Development Workflow
1. Use `npm run dev` for development with hot reload
2. Test responsive design using browser dev tools
3. Use React DevTools for component inspection
4. Check console for runtime errors

### Performance Optimization
- Code splitting is handled by Vite
- Images should be optimized and placed in `/public/`
- Use React.memo() for expensive components

## Build Process

### Development Build
- Uses Vite dev server
- Hot module replacement enabled
- Source maps included

### Production Build
- Runs `generate-llms.js` first
- Minification with Terser
- Tree-shaking enabled
- Optimized bundles in `/dist/`

## Technology Deep Dive

### React Ecosystem
- **React 18**: Concurrent features, automatic batching
- **React Router DOM v6**: File-based routing with nested routes
- **Framer Motion**: Animation library for smooth transitions

### Code Editor Integration
- **CodeMirror**: Syntax highlighting for C++ code
- **@uiw/react-codemirror**: React wrapper for CodeMirror
- **Okaidia theme**: Dark theme for code editor

### UI Framework
- **Radix UI**: Accessible, unstyled components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Build Tools
- **Vite**: Fast build tool with ES modules
- **PostCSS**: CSS processing with autoprefixer
- **ESLint**: Code linting with React rules

## File Relationships

### Entry Points
```
index.html → main.jsx → App.jsx → [Routes]
```

### Data Dependencies
```
lessons.js → LessonPage.jsx → [Lesson Components]
```

### Styling Chain
```
index.css → Tailwind → Component styles → UI components
```

### Build Dependencies
```
vite.config.js → plugins/ → tools/generate-llms.js
```

## Code Standards

### Naming Conventions
- **Components**: PascalCase (e.g., `CodeChallenge.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Classes**: kebab-case with Tailwind utilities

### Component Structure
```jsx
// Functional components with hooks
export default function ComponentName() {
  // Hooks first
  const [state, setState] = useState()
  
  // Event handlers
  const handleEvent = () => {}
  
  // Render
  return <div>...</div>
}
```

### Import Order
1. React imports
2. Third-party libraries
3. Local components
4. Utilities and helpers
5. Styles and assets

## Learning Content Structure

### Lesson Format
Each lesson in `lessons.js` includes:
- Title and description
- Learning objectives
- Content sections
- Interactive elements
- Assessment questions

### Interactive Elements
- **Code Challenges**: Real-time C++ code execution
- **Syntax Puzzles**: Drag-and-drop code completion
- **Code Matching**: Pairing concepts with implementations
- **Practice Challenges**: Problem-solving exercises

This documentation serves as a comprehensive guide for developers to understand, maintain, and extend the 4_C_Learning web application.