# Project Road Map

This document serves as an overview of the project from a design standpoint. It aims to outline the intended structure of the application.

## Project Tree Plan

We want one repo, one application.

```
restaurant-platform/
│
├── app/
│ ├── (marketing)/
│ │ ├── page.tsx
│ │ ├── about/
│ │ │ └── page.tsx
│ │ ├── menu/
│ │ │ └── page.tsx
│ │ ├── reservations/
│ │ │ └── page.tsx
│ │ ├── gallery/
│ │ │ └── page.tsx
│ │ └── contact/
│ │ └── page.tsx
│ │
│ ├── login/
│ │ └── page.tsx
│ │
│ └── dashboard/
│ ├── page.tsx
│ ├── menu/
│ │ ├── page.tsx
│ │ ├── new/
│ │ │ └── page.tsx
│ │ └── [id]/
│ │ └── page.tsx
│ ├── reservations/
│ │ └── page.tsx
│ ├── gallery/
│ │ └── page.tsx
│ ├── hours/
│ │ └── page.tsx
│ └── settings/
│ └── page.tsx
│
├── components/
│ ├── marketing/
│ ├── dashboard/
│ └── ui/
│
├── lib/
│ ├── db.ts
│ └── ...
│
├── prisma/
│ └── schema.prisma
│
├── public/
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## End result Project Structure

```
                    Next.js Application
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
      Public Website                 Dashboard
             │                           │
      /                             /dashboard
      /about                        /dashboard/menu
      /menu                         /dashboard/reservations
      /reservations                 /dashboard/gallery
      /gallery                      /dashboard/hours
      /contact                      /dashboard/settings
             │                           │
             └─────────────┬─────────────┘
                           │
                           ▼
                       Database
```

- The dashboard changes data
- The public website displays that data

## Tech Stack

### Frontend:

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend:

- Next.js Server Components
- Server Actions / Route Handlers where appropriate

### Database:

- PostgreSQL

### ORM:

- Prisma

### Authentication:

- Auth.js

### Validation:

- Zod

We can add other libraries only when we actually need them. I do plan to use "Zapier" to automate the reservations process eventually.

## Development Order:

1. Create the application

- install Next.js, Typescript, Tailwind, ESLint
- ensure they are running correctly

2. Build the public website shell

Create:

```
/
 /about
 /menu
 /reservations
 /gallery
 /contact
```

and established the shared components:

```
Navbar
Footer
Layout
```

3. Build the actual restaurant UI

4. Database

Introduce Prisma + PostgreSQL.

Create the necessary models:

```
User
MenuCategory
MenuItem
Reservation
GalleryImage
RestaurantHours
```

5. Connect the Menu

- get menu items from PostgreSQL instead of hard coding them.

6. Authentication

- build "/login" and protect "/dashboard/\*"

7. Dashboard shell

Build the dashboard navigation/layout:

```
Dashboard
├── Overview
├── Menu
├── Reservations
├── Gallery
├── Hours
└── Settings
```

8. Menu CMS

- CRUD for menu categories and items.

9. Reservations

Customer reservation form → database → dashboard.

10. Remaining CMS functionality

Gallery, hours, restaurant information, etc.

11. Polish
    -loading states
    -error handling
    -validation
    -empty states
    -responsive dashboard
    -accessibility
    -authentication/authorization
    -UX improvements

12. Deploy

Probably using vercel
