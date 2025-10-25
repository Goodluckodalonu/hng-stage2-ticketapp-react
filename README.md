# Ticket Management Web App — React Version

This is the **React implementation** of the HNG Stage 2 Multi-Framework Ticket Management App.  
It provides a complete frontend experience for managing tickets, with authentication, dashboard statistics, and full CRUD operations.

---

## Overview

The app allows users to:
- **Sign up / Log in** (simulated authentication using localStorage)
- **Create, view, update, and delete tickets**
- **Track ticket statuses** (“open”, “in_progress”, “closed”)
- **View statistics** on the dashboard
- **Logout securely** (clears session and redirects)

This version was built using **React + Vite**, styled with **vanilla CSS**, and follows the same design and layout as the Vue and Twig implementations.

---

## Frameworks & Libraries Used

| Purpose | Library / Tool |
|----------|----------------|
| Core Framework | [React](https://react.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Routing | [React Router DOM](https://reactrouter.com/) |
| Notifications | [React Hot Toast](https://react-hot-toast.com/) |
| Styling | Vanilla CSS / CSS Modules |
| State Management | useState & useEffect hooks |

---

## Features

**Landing Page**
- Wavy SVG background and decorative circles  
- App name, short description, and call-to-action buttons (“Login”, “Get Started”)  
- Fully responsive layout (max-width: 1440px, centered)

**Authentication**
- Login and Signup pages  
- Form validation (email format, password length)  
- Inline and toast error feedback  
- Simulated with `localStorage` using key: `ticketapp_session`

**Dashboard**
- Displays:
  - Total Tickets
  - Open Tickets
  - Resolved Tickets
- Navigation to Ticket Management screen  
- Logout button clears session and redirects to `/auth/login`

**Ticket Management (CRUD)**
- Create, view, edit, and delete tickets  
- Real-time validation (title & status required)  
- Toast notifications for success/error  
- Confirmation before deletion  
- Tickets persist in `localStorage`

---

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Goodluckodalonu/hng-stage2-ticketapp-react.git
   cd hng-stage2-ticketapp-react
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the app**

   ```bash
   npm run dev
   ```

4. **Open your browser at**

   ```
   http://localhost:5173
   ```

---

## Authentication Details

* Simulated authentication via `localStorage`.
* Key name: `ticketapp_session`
* Protected routes (Dashboard & Tickets) redirect unauthorized users to `/auth/login`.

**Example Credentials**

```
email: test@user.com
password: 123456
```

---

## Data Validation Rules

| Field         | Type   | Required | Notes                                         |
| ------------- | ------ | -------- | --------------------------------------------- |
| `title`       | string | yes        | Must not be empty                             |
| `status`      | string | yes       | Accepts only: `open`, `in_progress`, `closed` |
| `description` | string | no     | Optional (max length: 250 chars)              |

Validation errors show inline or as toast messages.

---

## Layout & Design Consistency

* Max width: **1440px**, centered layout
* Hero section with **SVG wave** background
* **Decorative circles** overlapping hero area
* **Card-style boxes** for tickets and stats
* Responsive:

  * Mobile → stacked layout
  * Tablet/Desktop → grid-based structure
* Color rules:

  * `open` → Green tone
  * `in_progress` → Amber tone
  * `closed` → Gray tone

---

## Accessibility & Best Practices

* Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
* Alt text for all images and icons
* Focus states visible
* Color contrast meets WCAG AA
* Keyboard navigation supported

---

## State & Logic Structure

* **AuthContext** — manages login state & session token
* **TicketContext / Hook** — manages tickets CRUD
* **Pages** — Landing, Login, Signup, Dashboard, Ticket Management
* **Components** — Navbar, Footer, TicketCard, StatsBox, Toasts

---

## Known Issues

* Mock data only (no backend persistence)
* Deleting a ticket requires refresh if multiple users use the same browser session

---

## Related Repositories

| Framework       | Repo Link                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------- |
| Root Repo    | [hng-stage2-ticketapp-root](https://github.com/Goodluckodalonu/hng-stage2-ticketapp-root) |
| Vue Version  | [hng-stage2-ticketapp-vue](https://github.com/Goodluckodalonu/hng-stage2-ticketapp-vue)   |
| Twig Version | [hng-stage2-ticketapp-twig](https://github.com/Goodluckodalonu/hng-stage2-ticketapp-twig) |

---

## Author & Feedback

Built by **Goodluck Odalonu** for **HNG Stage 2 Frontend Task**
This project is **open-source** — feedback and contributions are highly appreciated!

> Feel free to fork, star, and submit issues for improvements.
