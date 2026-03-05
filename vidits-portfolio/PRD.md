# Product Requirements Document (PRD): Vidit's Portfolio

## 1. Product Overview

**Product Name:** Vidit's Portfolio
**Type:** Web Application (Personal Portfolio)
**Purpose:** To serve as a highly interactive, animated, and visually striking personal portfolio that showcases skills, professional experience, and detailed project case studies (such as Housitize and AuditFlow) to prospective employers and clients.

## 2. Target Audience
*   Technical Recruiters and Hiring Managers
*   Engineering Leaders and Startup Founders
*   Fellow Developers and Peers

## 3. Tech Stack & Technologies
The project relies on a modern, high-performance web development stack:
*   **Framework:** Next.js (v16+, utilizing Turbopack)
*   **Core Library:** React 19
*   **Styling:** Tailwind CSS v4, DaisyUI
*   **Animations:** Framer Motion, GSAP (GreenSock)
*   **UI Primitives:** Radix UI (for accessible dropdowns, dialogs, accordions, etc.)
*   **Icons:** Lucide React, React Icons
*   **Theming:** next-themes (for dark/light mode support)

## 4. Key Features & Functionality

### 4.1. Core Pages & Navigation
*   **Home Page (`/`):** A centralized landing page that provides a holistic overview of the developer’s identity, skills, and top work.
*   **About Page (`/about`):** A deeper dive into the developer's journey, story, and values.
*   **Project Pages (e.g., `/housitize`, `/auditflow`):** Dedicated routes for in-depth case studies of major projects.

### 4.2. Main Components & View Details
*   **Immersive Hero Section:**
    *   Features dynamic, physics-based, or high-fidelity animations (`ShakingPortfolioSection`, `MomentumCard`, `HoverRevealText`).
    *   Serves to immediately capture the visitor's attention and communicate premium design execution.
*   **My Story / About Me:**
    *   Engaging textual narrative component (`StoryContent.js`).
    *   Includes expandable/collapsible details with "Read More/Read Less" actions.
*   **Skills & Tooling:**
    *   Visual representation of technical proficiencies (`SkillsList.js`, `ToolStack.js`).
    *   SVG-powered or interactive badges representing the developer's tech stack, fully keyboard and screen-reader accessible.
*   **Experience & Journey:**
    *   Chronological (`ExperienceJourney`) representation of professional milestones and work history.
*   **Project Archive & Showcases:**
    *   A grid or list section highlighting projects (`MyWork`, `PortfolioSection`, `ProjectArchieve`).
    *   Incorporates advanced carousels (`ImageModal` / `Carousel`) for scrolling through project previews and screenshots with Next/Prev image navigation and keyboard support.
*   **Interactive Elements & Layout:**
    *   **Apple Dock UI:** A sleek, animated dock (`AppleDock`) for navigation or quick links.
    *   **Sticky Buttons:** Context-aware floating action buttons for seamless navigation.

## 5. Non-Functional Requirements (NFRs)

### 5.1. Performance
*   Ensure that pages using heavy GSAP and Framer Motion animations remain extremely fluid (targeting 60+ FPS).
*   Utilize Next.js Server Components and dynamic imports where appropriate to minimize initial JS payload.

### 5.2. Design & User Experience (UX)
*   **Aesthetics:** A premium, modern feel featuring glassmorphism, dynamic micro-interactions, layout transitions, and curated typography.
*   **Responsiveness:** Fluid scaling down to mobile viewports. Animation complexity should gracefully downgrade on lower-end devices or mobile if necessary.
*   **Theming:** Flawless toggling between light and dark modes with visually verified color tokens.

### 5.3. Accessibility (a11y)
*   Ensure all interactive elements (buttons, docks, dialogs) meet WCAG standards.
*   Leverage Radix UI’s built-in accessibilty focus trapping and ARIA attributes for complex components.
*   Ensure users who "prefer-reduced-motion" are accounted for natively by dialing back intensive GSAP/Framer animations.

## 6. Future Expansion
*   Integration with a headless CMS for dynamic project and blog additions.
*   Analytics tracking to observe user interaction times over specific project case studies.
