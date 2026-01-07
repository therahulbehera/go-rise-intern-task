# Product Listing Application

## Overview

This project is a product listing application built as part of an interview task.
It demonstrates frontend–backend integration, filtering, and data fetching with caching using a modern React and Next.js stack.

## Tech Stack

- **Next.js** – Full-stack React framework used for both frontend and backend
- **React Query (TanStack Query)** – Data fetching, caching, and synchronization
- **Tailwind CSS** – Utility-first styling
- **Radix UI (shadcn/ui)** – Accessible UI primitives

## API Endpoints

- `GET /api/products`
  Returns the list of products.
  Supports query parameters for filtering such as price range, category, and metal type.

- `GET /api/products/[id]`
  Returns details for a single product based on its ID.

## Frontend–Backend Integration

Next.js is used as a unified framework for both frontend and backend, which simplifies integration and reduces overhead.

- API routes are implemented using Next.js route handlers.
- The frontend consumes these APIs using **React Query**.
- React Query caches responses to avoid unnecessary server requests.
- Since the product data is mostly static, caching significantly improves performance and reduces server load.

## Deployment

The application is deployed on **Vercel**.

Reason:

- Native support for Next.js
- Automatic builds and optimizations
- Seamless handling of API routes and static assets

## Improvements With More Time

With additional time, the following improvements would be made:

1. **UX improvements**

   - Better empty states
   - Improved filter interactions
   - Loading skeletons instead of spinners

2. **UI enhancements**

   - Polished layout and visual hierarchy
   - Better responsiveness and accessibility refinements

3. **Performance and SEO**

   - Use **Static Site Generation (SSG)** where possible
   - Use **Server-Side Rendering (SSR)** for SEO-critical pages
   - Faster initial page loads and improved search engine visibility

4. **State Management**

   - Introduce **Redux** for global state management
   - Handle cart state and user-related state in a scalable way
