# Replit Project Guide

## Overview

This is a modern full-stack web application built for AL-MANSHURIYAH, an Islamic school (Madrasah Aliyah). The project showcases a cyberpunk-themed school website with sections for profiles, galleries, programs, news, and contact information. The application follows a monolithic architecture with a clear separation between client and server components, using React for the frontend and Express.js for the backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom cyberpunk theme variables and shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with custom styling through shadcn/ui
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints
- **Storage**: In-memory storage implementation with interface abstraction for future database integration
- **Development**: Hot module replacement through Vite middleware integration
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Logging**: Custom request/response logging for API endpoints

### Data Management
- **Database Setup**: Drizzle ORM configured for PostgreSQL with Neon Database serverless connection
- **Schema**: User management schema with username/password authentication structure
- **Migrations**: Database migrations managed through Drizzle Kit
- **Type Safety**: Full type inference from database schema to application layer using Drizzle Zod

### Development Environment
- **Monorepo Structure**: Shared types and utilities between client and server
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets)
- **Hot Reloading**: Development server with automatic reload for both client and server changes
- **Replit Integration**: Custom plugins for error overlay and development tools

### Authentication & Session Management
- **Session Storage**: PostgreSQL session store using connect-pg-simple
- **User Management**: Basic user CRUD operations with unique username constraints
- **Password Handling**: Prepared for secure password hashing implementation

### Component Architecture
- **Design System**: Consistent cyberpunk theme with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Component Library**: Reusable UI components built on Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation integration
- **Loading States**: Skeleton components and loading screens for better UX

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **express**: Backend web framework
- **react**: Frontend UI library with hooks and modern patterns

### Database & ORM
- **drizzle-orm**: Type-safe ORM for PostgreSQL interactions
- **drizzle-zod**: Schema validation integration
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **connect-pg-simple**: PostgreSQL session store for Express

### UI & Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/react-***: Accessible UI component primitives
- **framer-motion**: Animation and gesture library
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development plugins

### Form & Validation
- **react-hook-form**: Performant form handling
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library

### Utilities
- **date-fns**: Date manipulation utility
- **nanoid**: URL-safe unique ID generator
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component