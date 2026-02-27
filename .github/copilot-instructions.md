# GitHub Copilot Instructions for This Project

## Project Context

This is a React + Vite portfolio website with multiple pages, deployed to GitHub Pages. The codebase uses modern JavaScript (ES2020+) with JSDoc for type hints to maximize AI assistance.

## Code Style & Patterns

### React Components
- Use functional components with modern JavaScript
- Prefer named exports over default exports for better refactoring
- Use React hooks (useState, useEffect, useCallback, useMemo) appropriately
- Add JSDoc comments with `@ai-context` tags to explain component purpose and types

### JavaScript with JSDoc
- Use JSDoc annotations for function parameters, return types, and complex objects
- JSDoc provides type hints for AI tools and IDEs without TypeScript overhead
- Document component props with `@param` tags
- Use `@typedef` for reusable type definitions
- Example:
  ```javascript
  /**
   * @param {Object} props
   * @param {string} props.title - The title to display
   * @param {() => void} props.onClick - Click handler
   */
  function Button({ title, onClick }) {
    // Component code
  }
  ```

### Styling
- CSS files are located in `src/styles/`
- Use CSS custom properties (CSS variables) defined in `index.css`
- Follow BEM naming convention for complex components
- Ensure responsive design (mobile-first approach)

### File Organization
```
src/
  ├── pages/         # Page components (Welcome, Bio, etc.)
  ├── components/    # Reusable components
  ├── styles/        # CSS files
  └── main.jsx       # App entry point
```

## AI-Assisted Development Guidelines

### When Suggesting Code
1. **Always check existing patterns** in the codebase before suggesting new approaches
2. **Prefer consistency** - match the existing code style
3. **Include comments** - especially for complex logic or business rules
4. **Consider accessibility** - add ARIA labels and semantic HTML
5. **Think mobile-first** - ensure responsive design

### Common Patterns to Follow

#### Component Structure
```javascript
/**
 * ComponentName - Brief description
 *
 * @ai-context Explain what this component does and when to use it
 * @param {Object} props
 * @param {string} props.prop1 - Description of prop1
 * @param {number} props.prop2 - Description of prop2
 */
function ComponentName({ prop1, prop2 }) {
  // Hooks at the top
  const [state, setState] = useState(initialValue)

  // Event handlers
  const handleEvent = useCallback(() => {
    // Logic here
  }, [dependencies])

  // Render
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  )
}

export default ComponentName
```

#### CSS Structure
```css
/* Component/Page specific styles */

.component-name {
  /* Use CSS variables */
  color: var(--primary-color);
  padding: var(--section-padding);
}

/* Responsive design */
@media (max-width: 768px) {
  .component-name {
    /* Mobile styles */
  }
}
```

### When Adding New Features

1. **Create components in the right directory**
   - Pages go in `src/pages/`
   - Reusable components in `src/components/`

2. **Add routes in App.jsx**
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Create corresponding CSS file** in `src/styles/`

4. **Update navigation** in relevant components

5. **Test responsiveness** - check mobile, tablet, desktop views

### Performance Considerations

- Use `React.memo()` for expensive components
- Lazy load routes: `const Bio = lazy(() => import('./pages/Bio'))`
- Optimize images (use WebP format when possible)
- Code split large dependencies

### Git Commit Messages

Follow conventional commits:
- `feat: add new feature`
- `fix: resolve bug`
- `refactor: improve code structure`
- `style: update styling`
- `docs: update documentation`
- `chore: update dependencies`

## Deployment

- Built files go to `dist/` directory
- Use `npm run build` before deploying
- Deploy with `npm run deploy` (uses gh-pages)
- Base URL is configured in `vite.config.js`

## Helpful Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run deploy     # Deploy to GitHub Pages
```

## AI Context Tags

Use `@ai-context` in comments to provide context for AI assistants:

```javascript
/**
 * @ai-context This function handles smooth scrolling to sections.
 * It replaces the jQuery smooth scroll from the original site.
 * @param {string} targetId - The ID of the element to scroll to
 */
function smoothScrollTo(targetId) {
  // Implementation
}
```

This helps both GitHub Copilot and Claude understand the codebase better!

## SEO Requirements

This portfolio site is the root deployment for `daviddaniel.tech`. It serves as the crawl entry point for all content including the research subsite at `/research/`.

### Critical Rules

- **`public/robots.txt`** is the canonical robots.txt for the entire daviddaniel.tech domain. Do not remove it or move it to another location.
- **`index.html`** must always contain a server-rendered (non-JS) link to `/research/` so search engine crawlers can discover the research subsite. Do not remove the `<noscript>` block or the crawlable anchor link.
- Any navigation changes must preserve crawlable links to the research section.
- The `<head>` section of `index.html` contains structured data (JSON-LD), Open Graph tags, and a canonical URL. These must be maintained when editing the file.
- If new pages are added, consider whether they need `noindex` meta tags (e.g., draft or private content).
