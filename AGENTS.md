# Nexora Systems Limited Website

This repository contains the official website for Nexora Systems Limited.

The website is designed and developed by Web4 Digital Solutions, led by IK Aminu.

## Development

This is a React + Vite + TypeScript website using Tailwind CSS v4.

The project is deployed to GitHub Pages at:

https://ikaminu.github.io/nexsys/

The production application is served from the `/nexsys/` path.

## Project Structure

Start with the task-relevant files below. Follow imports and inspect additional files only when required.

- `src/main.tsx` - Application entry point. Imports global styles and mounts the application.
- `src/App.tsx` - Application root and router integration.
- `src/routes.ts` - Application routes and React Router configuration.
- `src/index.css` - Global styles, Tailwind CSS imports, fonts, theme variables, and global CSS.
- `src/components/` - Reusable interface components and page sections.
- `src/components/layout/` - Shared layout components such as navigation, footer, and page structure.
- `src/components/home/` - Components used specifically by the homepage.
- `src/pages/` - Top-level website pages.
- `src/assets/` - Logos, illustrations, backgrounds, and other locally stored visual assets.
- `index.html` - Vite HTML document shell.
- `package.json` - Project metadata, dependencies, and development/build scripts.
- `vite.config.ts` - Vite configuration, build settings, aliases, and deployment configuration.
- `.mise.toml` - Development toolchain configuration.
- `.github/workflows/` - GitHub Actions workflows responsible for production deployment.

## Technology

- React 19
- React DOM 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- `@vitejs/plugin-react`
- `@tailwindcss/vite`
- GitHub Actions
- GitHub Pages

## Styling

The project uses Tailwind CSS v4 through the `@tailwindcss/vite` plugin.

`src/index.css` is the global CSS entry point.

Use Tailwind utility classes directly in JSX for component-level styling.

Use `src/index.css` for:

- Global styles
- Font configuration
- CSS variables
- Shared visual rules
- Tailwind theme customization
- Global animations or utility styles that are reused across the application

Keep CSS `@import` statements at the beginning of the stylesheet.

## Routing

The application uses React Router.

The production deployment lives under:

`/nexsys/`

The Vite `base` configuration and React Router `basename` must remain consistent with this deployment path.

When adding or changing routes, check both:

- `src/routes.ts`
- Any navigation components or links that reference the route

Do not assume the application is served from the domain root.

## Assets

Visual assets should be stored in `src/assets/` when they are part of the application bundle.

Use the existing Nexora brand assets where appropriate.

Current major brand assets include:

- `nexora-logo.svg`
- `nexora-systems-logo.svg`
- `nexora-skillnet-logo.svg`
- `nexora-marketplace-logo.svg`
- `enyigo-logistics-logo.svg`
- `world-background.svg`

Do not replace, rename, or remove brand assets without checking where they are referenced.

## Website Structure

The website represents Nexora Systems Limited and its business ecosystem.

The primary ventures represented on the website are:

- Nexora Systems
- Nexora SkillNet
- Nexora Marketplace
- Enyigo Logistics

The visual design should communicate a connected technology-driven ecosystem rather than presenting the ventures as unrelated businesses.

## Design Principles

Maintain the existing visual direction unless a task explicitly requires a redesign.

Key principles:

- Clean, modern technology aesthetic
- Dark visual foundation
- Blue and cyan accents
- Strong typography and clear hierarchy
- Controlled use of animation
- Responsive layouts across desktop, tablet, and mobile
- Consistent spacing and alignment
- Fast-loading visual assets
- Minimal unnecessary decoration
- Professional presentation suitable for a corporate technology group

Animations should support the design rather than interfere with usability or performance.

## Responsive Design

Every component and section should work across:

- Desktop
- Laptop
- Tablet
- Mobile

Do not optimize only for a single viewport.

When changing positioning, backgrounds, animations, or large visual elements, check how the change behaves at different screen widths.

Pay particular attention to:

- Navigation
- Hero backgrounds
- Large SVG illustrations
- Venture ecosystem animations
- Text wrapping
- Section spacing
- Buttons
- Images and logos

## Code Quality

- Use TypeScript for application code.
- Use double quotes for strings where consistent with the existing codebase.
- Ensure JSX tags are properly closed.
- Keep braces and parentheses balanced.
- Prefer reusable components over duplicated markup.
- Keep components focused on a clear responsibility.
- Avoid unnecessary dependencies.
- Do not introduce a new library when the existing stack can accomplish the task.
- Preserve existing functionality when making visual changes.
- Do not modify unrelated components when fixing a specific issue.

## Editing Guidelines

Before changing code:

1. Identify the component responsible for the requested behavior.
2. Inspect its surrounding structure and relevant imports.
3. Make the smallest change that solves the problem.
4. Preserve existing styling, animation, responsiveness, and functionality unless the task specifically requires changing them.
5. Check related routes or components when a change affects navigation or shared layout.
6. Build the project after significant changes.

When making experimental visual changes, prefer changes that are easy to revert.

## Deployment

Production deployment is handled through GitHub Actions.

The workflow is located in:

`.github/workflows/deploy.yml`

The application is built using:

`npm run build`

The resulting `dist/` directory is deployed to GitHub Pages.

Do not manually commit generated `dist/` files unless the deployment architecture explicitly requires it.

## Ownership and Attribution

Website designed and developed by Web4 Digital Solutions.

Lead Developer: IK Aminu.

Website:
https://ikaminu.cc.cd

Portfolio:
https://ikaminu.github.io/

The Nexora Systems Limited brand, logos, business information, and client-provided materials remain the property of Nexora Systems Limited or their respective owners.

Development attribution should not be removed without authorization.

## General Rule

When working on this repository, prioritize:

**Understand the existing system → make the smallest appropriate change → preserve existing functionality → verify the result.**

Do not rewrite working components unnecessarily.
