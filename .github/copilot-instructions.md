# GitHub Copilot Instructions for This Project

## Project Context

This is a React + Vite portfolio website with multiple pages, deployed to GitHub Pages. The codebase follows modern React patterns with TypeScript.

## Code Style & Patterns

### React Components
- Use functional components with TypeScript
- Prefer named exports over default exports for better refactoring
- Use React hooks (useState, useEffect, useCallback, useMemo) appropriately
- Add JSDoc comments with `@ai-context` tags to explain component purpose

### TypeScript
- Use explicit types for props and state
- Avoid `any` type - use `unknown` or proper types
- Leverage type inference where appropriate
- Use interfaces for object shapes

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
  └── main.tsx       # App entry point
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
```typescript
/**
 * ComponentName - Brief description
 *
 * @ai-context Explain what this component does and when to use it
 */
function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Hooks at the top
  const [state, setState] = useState<Type>(initialValue)

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

2. **Add routes in App.tsx**
   ```typescript
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
- Base URL is configured in `vite.config.ts`

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

```typescript
/**
 * @ai-context This function handles smooth scrolling to sections.
 * It replaces the jQuery smooth scroll from the original site.
 */
```

This helps both GitHub Copilot and Claude understand the codebase better!
