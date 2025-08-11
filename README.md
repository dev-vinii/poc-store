# POC Store

A proof-of-concept e-commerce store demonstrating clean architecture with **Services** for business logic and **Hooks** for React state management.

## Architecture

```
src/
├── services/          # Business logic layer
│   ├── product-service.ts
│   └── cart-service.ts
├── hooks/            # React state management
│   ├── use-products.ts
│   └── use-cart.ts
└── components/       # UI components
    ├── product-card.tsx
    └── cart.tsx
```

### Services Layer
- **product-service.ts** - Product operations and validation
- **cart-service.ts** - Cart business logic and calculations

### Hooks Layer  
- **use-products.ts** - Product data fetching and loading states
- **use-cart.ts** - Cart state management with service integration

### Components
- **product-card.tsx** - Individual product display
- **cart.tsx** - Shopping cart with quantity controls

## Key Features

- ✅ Clean separation of concerns
- ✅ Business logic isolated in services
- ✅ React state managed by custom hooks
- ✅ Components focus purely on UI
- ✅ TypeScript throughout
- ✅ Kebab-case file naming

## Getting Started

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the store in action.

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- React 19