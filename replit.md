# S.H.E. Women's Wellness & Empowerment Platform

## Overview

S.H.E. (Self-love Healing Evolution) is a women's wellness and empowerment platform created by licensed mental health counselor Peta Williams. The platform focuses on helping women reclaim their power, heal from heartbreak, and create lives filled with purpose, confidence, and joy. It offers digital courses, centering tools, speaking engagements, and empowering merchandise to support women's personal growth and transformation journeys.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system based on wellness brand aesthetics
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI
- **State Management**: TanStack React Query for server state management
- **Design System**: Custom color palette featuring sage green, warm cream, and terracotta with support for dark mode

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with `/api` prefix routing
- **Session Storage**: Connect-pg-simple for PostgreSQL-based session management
- **Development**: Hot module replacement via Vite middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL with Neon Database serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Current Schema**: Basic user management with username/password authentication

### Authentication and Authorization
- **Storage Interface**: Abstracted storage layer supporting both in-memory (development) and PostgreSQL (production)
- **User Management**: UUID-based user identification with unique username constraints
- **Session Handling**: Express session middleware with PostgreSQL persistence

### Development and Deployment
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Development Server**: Integrated Vite dev server with Express API proxy
- **Asset Management**: Static asset serving with path resolution for attached assets
- **Hot Reloading**: Development environment with automatic reload capabilities

### Content Architecture
- **Design Guidelines**: Comprehensive brand standards document defining color palette, typography (Inter + Playfair Display), and component specifications
- **Page Structure**: Modular component architecture with reusable sections for hero, about, courses, and engagement content
- **Asset Integration**: Support for both local and generated image assets with proper path resolution

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React Router (Wouter), React Hook Form with Zod validation
- **UI Framework**: Radix UI component primitives, Lucide React icons, Class Variance Authority for component variants
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer for responsive design

### Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database operations (drizzle-orm, drizzle-zod)
- **Connection Pooling**: Built-in connection management for serverless environments

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development Environment**: Replit-specific plugins for error handling and development experience
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: clsx, tailwind-merge for conditional styling
- **Component Enhancement**: Embla Carousel for interactive content display

### Third-Party Integrations
- **Font Loading**: Google Fonts (Inter and Playfair Display) via CDN
- **Analytics**: Replit development banner for environment detection
- **Asset Management**: Support for attached assets and generated images