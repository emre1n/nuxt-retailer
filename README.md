# Retailer App

## Setup

Make sure to install dependencies:

```bash

# pnpm
pnpm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
# pnpm
pnpm preview
```

## Component Architecture

Our component structure follows a feature-first organization principle, promoting maintainability and scalability. Components are organized into the following directories:

### Directory Structure

```
components/
├── ui/                    # Basic UI elements/atoms
│   ├── Button.vue
│   ├── Input.vue
│   ├── Card.vue
│   └── Alert.vue
├── layout/               # Layout components
│   ├── Header.vue
│   ├── Footer.vue
│   ├── Sidebar.vue
│   └── Navigation.vue
├── auth/                 # Authentication related
│   ├── LoginForm.vue
│   └── RegistrationForm.vue
├── forms/                # Form-specific components
│   ├── BaseForm.vue
│   └── FormField.vue
├── features/            # Feature-specific components
│   ├── feed/           # Feed feature components
│   │   ├── Feed.vue
│   │   ├── FeedItem.vue
│   │   └── FeedActions.vue
│   └── profile/        # Profile feature components
│       ├── ProfileCard.vue
│       └── ProfileStats.vue
└── shared/             # Shared composite components
    ├── SearchBar.vue
    └── Pagination.vue
```

### Component Categories

#### UI Components (`/ui`)

Basic, atomic UI elements that are highly reusable across the application. These components:

- Have no business logic
- Are highly reusable
- Accept props for customization
- Example: Button, Input, Card

#### Layout Components (`/layout`)

Components that define the overall structure and layout of the application:

- Header, Footer, Sidebar
- Navigation elements
- Page layouts

#### Feature Components (`/features`)

Components specific to particular features or domains:

- Organized by feature (e.g., feed/, profile/)
- Contains business logic specific to the feature
- May compose multiple UI components
- Example: Feed, ProfileCard

#### Shared Components (`/shared`)

Complex components used across multiple features:

- More complex than UI components
- Reusable across features
- Example: SearchBar, Pagination

#### Auth Components (`/auth`)

Authentication-related components:

- Login forms
- Registration forms
- Password reset forms

#### Form Components (`/forms`)

Form-specific components and utilities:

- Base form components
- Form field wrappers
- Form validation utilities

### Best Practices

1. **Component Naming**

   - Use PascalCase for component names
   - Be descriptive and clear about the component's purpose
   - Prefix feature components with feature name (e.g., `FeedItem.vue`)

2. **Component Organization**

   - Keep related components together in feature directories
   - Don't nest components too deeply (max 2 levels)
   - Create new feature directories for significant features

3. **Component Imports**
   - Use absolute imports with `@` alias
   - Example: `import Button from '@/components/ui/Button.vue'`

## Design System

Our design system provides a consistent visual language across the application through carefully crafted color palettes, typography, and component styles.

### Colors

The color system is built with semantic meaning and accessibility in mind:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',  // Lightest - backgrounds
    100: '#e0f2fe', // Light hover states
    // ...
    600: '#0284c7', // Default primary
    700: '#0369a1', // Hover states
    900: '#0c4a6e', // Darkest - text
  },
  secondary: {
    50: '#f8fafc',  // Light backgrounds
    // ...
    700: '#334155', // Body text
    900: '#0f172a', // Headings
  },
  // Semantic colors
  success: { 50: '#f0fdf4', 500: '#22c55e', 700: '#15803d' },
  error: { 50: '#fef2f2', 500: '#ef4444', 700: '#b91c1c' },
  warning: { 50: '#fffbeb', 500: '#f59e0b', 700: '#b45309' },
}
```

Usage:

- Primary: Main actions, links, and brand elements
- Secondary: UI elements, backgrounds, and text
- Semantic: Success messages, errors, and warnings

### Typography

The type system uses two main fonts:

1. **Inter** (Body Text)

   - Primary font for all body text and UI elements
   - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

2. **Lexend** (Display/Headings)
   - Used for headings and display text
   - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

#### Type Scale

```javascript
fontSize: {
  xs: ['0.75rem', { lineHeight: '1rem' }],     // 12px - captions
  sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px - small text
  base: ['1rem', { lineHeight: '1.5rem' }],     // 16px - body text
  lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px - large body
  xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px - small headings
  '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px - headings
  // ... larger sizes for display text
}
```

#### Usage Examples

```html
<!-- Headings -->
<h1 class="font-display text-4xl font-bold text-secondary-900">
  <h2 class="font-display text-3xl font-semibold text-secondary-900">
    <!-- Body Text -->
    <p class="text-body">Regular paragraph text</p>
    <p class="text-body-sm">Smaller text</p>
    <p class="text-caption">Caption text</p>
  </h2>
</h1>
```

### Component Styles

Components follow these consistent styling patterns:

#### Buttons

- Primary: Solid background with white text
- Secondary: Light background with darker text
- Danger: Red background for destructive actions
- States: Hover, Focus, Disabled, Loading

```html
<button variant="primary" size="md">Primary Action</button>
<button variant="secondary" size="sm">Secondary Action</button>
```

#### Inputs

- Consistent padding and border radius
- Clear focus states with rings
- Error states with red borders
- Disabled states with reduced opacity

```html
<input
  label="Email"
  type="email"
  placeholder="Enter your email"
  :error="errorMessage"
/>
```

### Usage Guidelines

1. **Colors**

   - Use semantic colors appropriately (e.g., error-500 for error states)
   - Maintain sufficient contrast ratios for accessibility
   - Use primary colors sparingly for emphasis

2. **Typography**

   - Stick to the defined type scale
   - Use appropriate font weights for hierarchy
   - Maintain consistent line heights

3. **Components**
   - Use provided component variants instead of custom styles
   - Maintain consistent spacing using the spacing scale
   - Follow accessibility best practices

### Implementation

The design system is implemented using Tailwind CSS. To use it:

1. Import the base styles:

```css
@import '@/assets/css/main.css';
```

2. Use utility classes and components:

```html
<div class="bg-primary-50 p-4">
  <h2 class="font-display text-2xl font-semibold">Title</h2>
  <p class="text-body mt-2">Content</p>
</div>
```

## Development Notes

### Service Worker Route Handling

To handle browser requests for service workers without implementing PWA functionality, we've added a simple route rule in `nuxt.config.ts`:

```typescript
routeRules: {
  '/sw.js': { redirect: '/' }
}
```

This configuration:

- Eliminates the Vue Router warning: `No match found for location with path "/sw.js"`
- Redirects service worker requests to the home page
- Provides a lightweight solution when PWA functionality isn't needed

This approach keeps the console clean without requiring a full PWA implementation.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
