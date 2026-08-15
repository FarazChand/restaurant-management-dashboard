## Creating Project Directory and Version control

Created an outer directory to wrap our main application for the purpose of taking notes about the design/structure of the application, as well as notes on progress and bugs - without having to clutter the main application. This project is meant to showcase my skills as a developer and will be used on my portfolio. However, it also will serve as a blueprint for future applications - as the concepts, features and technologies used in this project can be re-implemented in future projects.

### Steps:

- created a directory
- created a quick README.md within the directory

### In the terminal:

```
git init
git add .
git commit -m "...some message"
gh repo create restaurant-management-dashboard --public --source=. --remote=origin --push
```

## Creating the main application

```
// in root of repo
npx create-next-app@latest restaurant-management-dashboard
```

- creates our actual application, where our next js app folder will live, and where our website, login and dashboard routes will be located
-

```
Would you like to use TypeScript?        Yes
Would you like to use ESLint?            Yes
Would you like to use Tailwind CSS?      Yes
Would you like your code inside src/?    No
Would you like to use App Router?        Yes
Would you like to use Turbopack?         Yes
Would you like to customize import alias? No
```

### Start Dev Server:

```
cd /restaurant-management-dashboard
npm run dev
```

- should see default Next.js page

## Setting up Application Structure

### Replace default app structure

- in /app/ , deleted default page.tsx
- then created:
  - /app/(marketing) (this is a route group)
  - /app/dashboard
  - /app/page.tsx
  - /app/layout.tsx
  - /app/global.css
  - respective layout and page .tsx for each child route except for /app/login/, which only needs a page.tsx

- then we are just going to add some basic jsx to each page and layout
- after that we should test each route to ensure they run

### Building Public Website Shell

- we replace our skeletons with proper restaurant structure
- the goal is to establish the reusable pieces before building the actual homepage

### Creating Components folder

- created components folder in the root of the project
- created a marketing subdirectory in the components folder
  - created the Navbar and Footer .tsx files

Detailed navbar styles

# THIS IS A TEST
