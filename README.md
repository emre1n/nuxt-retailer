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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
