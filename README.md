# Nua Frontend Assignment

## Live Demo

Add your deployed URL here

Example:

https://nua-assignment-by-ayan.vercel.app

## GitHub Repository

Add your repository URL here

Example:

https://github.com/Ayan-Frontend/Nua_Assessment

---

## Tech Stack

- React 18
- React Router DOM
- Context API
- SCSS Modules
- Vite
- Fake Store API

---

## Features

### Product Listing

- Responsive product grid
- Product image, title and price
- Quick Add to Cart functionality

### Product Detail

- Product image gallery
- Variant selection (color and size)
- Low stock and sold out states
- Quantity selection
- Deep-linkable URL state

### Cart

- Cart drawer
- Update quantity
- Remove items
- Subtotal and total calculation
- Persistent cart using localStorage

### Responsive Design

- Mobile friendly
- Tablet friendly
- Desktop friendly

---

## Setup Instructions

Clone the repository

```bash
git clone <repo-url>
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build project

```bash
npm run build
```

---

## Design Decisions

- Context API and useReducer were used for global cart state management.
- SCSS Modules were used to maintain component scoped styles.
- Product variants were implemented locally because Fake Store API does not provide variant information.
- Cart state is persisted using localStorage to survive page refreshes.

---

## Trade-offs

- Fake Store API provides only one image per product, therefore thumbnail previews reuse the available image.
- Product variants are mocked locally because the API does not provide inventory data.
