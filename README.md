# AD Tech Solutions - Page :fire:

## Description

Company page for **AD Tech Solutions**, showcasing their services and expertise in technology solutions.

Built with Angular and server-side rendering (SSR) for a fast, SEO-friendly public site.

## Overview

### Main technologies

- **TypeScript**: JavaScript superset for typing;
- **Angular**: Front-End framework, with Server-Side Rendering (SSR) and prerendering;
- **Express**: HTTP server used to serve the Angular SSR build;
- **RxJS**: Reactive programming library used by Angular;
- **Jasmine / Karma**: Testing framework and test runner;
- **Oxlint**: Rust-based JavaScript/TypeScript linter;
- **Oxfmt**: Rust-based formatter for TypeScript, HTML templates, stylesheets, JSON, YAML and Markdown;

---

### Install dependencies

1. Install project dependencies

```shell
npm install
```

#### What to do if the service goes down

- Check the logs;
- Test the dependencies and execution locally;
- Run automated tests;
- If necessary, merge with a hotfix on git;
- Rebuild the project and restart the service;

## Running Locally

```shell
npm run start:dev # start application in development mode
```

## Building

```shell
npm run build          # production build (with prerendering)
npm run build:watch    # development build, rebuilding on file changes
npm run serve:ssr:angular_frontend_boilerplate # serve the SSR build
```

## Interface

- [localhost:3001](http://localhost:3001/) - Application Interface

---

### Project structure

- `src/app` - Application root component and routes;
- `src/pages` - Page components (e.g. homepage, not-found);
- `src/components` - Reusable UI components (navbar, forms, buttons);
- `scripts` - Support scripts (e.g. dependency mocking, security check);

---

### TO DO

- **Concepts**
  - Modularization
    - [x] Dependency Injection
  - Application State
    - [ ] Page state
    - [ ] Global states
  - Components
    - [x] Form
    - [x] NavBar
    - [ ] Toast
    - [ ] DropDown
    - [ ] Modal
    - [ ] Image
    - [ ] Header
    - [ ] Scroller
  - Actions
    - [x] Validations
    - [x] Requests (Http)
    - [ ] Connections (WebSockets)
    - [x] Hooks
- **Tests**
  - [x] Component Render Test
  - [x] Page Render Test
