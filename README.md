# David Daniel Portfolio

A modern, multi-page portfolio website built with React and Vite. Uses JSDoc for AI-friendly type hints. Deployed to GitHub Pages.

## 🚀 Features

- **Multi-page React Application** with React Router
- **JSDoc Type Hints** - AI-friendly type documentation without TypeScript overhead
- **Vite** for fast development and optimized builds
- **Responsive Design** - mobile-first approach
- **AI-Assisted Development Ready** - configured for GitHub Copilot and Claude
- **Automated Deployment** to GitHub Pages via GitHub Actions

## 📂 Project Structure

```
.
├── src/
│   ├── pages/           # Page components (Welcome, Bio, etc.)
│   ├── components/      # Reusable components
│   ├── styles/          # CSS files
│   ├── App.jsx          # Main app with routing
│   └── main.jsx         # App entry point
├── public/              # Static assets (images, PDFs, etc.)
├── .github/
│   ├── workflows/       # GitHub Actions
│   └── copilot-instructions.md
├── .vscode/             # VS Code settings
└── old-static-site/     # Backup of original static site
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **JavaScript (ES2020+)** - Modern JavaScript with JSDoc type hints
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with CSS custom properties
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🏃 Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/DavideDaniel/DavideDaniel.github.io.git
cd DavideDaniel.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Building

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

### Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

For manual deployment:

```bash
npm run deploy
```

## 🤖 AI-Assisted Development

This project is optimized for AI-assisted development with both GitHub Copilot and Claude.

### GitHub Copilot Setup

1. Install the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) in VS Code
2. The project includes:
   - Copilot instructions in `.github/copilot-instructions.md`
   - VS Code settings for optimal Copilot experience
   - `@ai-context` tags in code comments for better suggestions

### Claude Code Setup

The project structure and comments are designed to work seamlessly with Claude for:
- Code reviews and refactoring
- Adding new features
- Debugging and optimization
- Documentation

### AI-Friendly Patterns

- **Comprehensive comments** with `@ai-context` tags
- **Consistent code structure** for better pattern recognition
- **JSDoc type annotations** for clear interfaces and better AI understanding
- **Modular components** for easier understanding

## 📝 Code Style

- **ESLint** configuration for React + JSX
- **Prettier** for consistent formatting
- **JSDoc** for inline type documentation and AI assistance
- Run `npm run lint` to check for issues
- Run `npm run format` to auto-format code

## 🎨 Pages

### Welcome Page (`/`)

The landing page that introduces the portfolio and links to different sections.

### Bio Page (`/bio`)

Portfolio page with:
- Professional bio
- Sample work/projects
- Experience and skills
- Testimonials
- Contact information

## 🔄 Migration from Static Site

The original static site (HTML/CSS/jQuery) has been refactored into a modern React application:

- ✅ Vite + React + JavaScript setup
- ✅ Multi-page routing with React Router
- ✅ New welcome page
- ✅ Assets migrated to public folder
- ✅ Modern CSS with custom properties
- ✅ JSDoc annotations for AI assistance
- ⏳ Bio page content migration (in progress)
- ⏳ jQuery to React hooks conversion

The original static site is preserved in `old-static-site/` for reference.

## 📦 NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Deploy to GitHub Pages (gh-pages branch) |

## 🌐 Deployment

### GitHub Actions (Recommended)

The project uses GitHub Actions for automatic deployment:

1. Push to `main` branch
2. GitHub Actions builds the project
3. Deploys to GitHub Pages
4. Site is live at `https://daviddaniel.tech`

### Manual Deployment

```bash
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch.

## 🔧 Configuration

### Vite Configuration

- Base URL: `/` (configured in `vite.config.js`)
- Output directory: `dist`
- Source maps enabled for debugging

### JavaScript Configuration

- Modern ES2020+ features
- JSDoc for type hints and AI assistance
- React JSX transform
- jsconfig.json for better IDE support

### GitHub Pages Settings

Ensure in your repository settings:
1. Go to Settings > Pages
2. Source: GitHub Actions
3. Custom domain (optional): Configure if needed

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [JSDoc Documentation](https://jsdoc.app/)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:

1. Open an issue for bugs or suggestions
2. Fork the repo and experiment
3. Share your improvements

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**David Enoch Daniel** - Web Developer

- GitHub: [@DavideDaniel](https://github.com/DavideDaniel)
- Portfolio: [daviddaniel.tech](https://daviddaniel.tech)

---

Built with ❤️ using React and Vite | Optimized for AI-assisted development with JSDoc
