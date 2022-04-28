# RockBand

Features Enabled:

- Modularize App Structure
- Typescript Enabled
- Mono Repo Architecture
- Advance NgRx Store Implementation (using EntityAdapter, EntityState, etc.)
- Ng-bootstrap and Bootstrap library integration
- Advance Angular features implementation (@Inject, Token, etc)
- Custom Angular Pipe Module (ProductPipesModule) implemented
- Authentication Module Implmentation (including Auth Gard for protected routes)
- Browser Refresh Implications and implementation of PathLocationStrategy
- Custom HTTP Error Handing using HttpInterceptor
- Using environment variables for external API endpoints
- Git Actions for CI/CD Pipelines
- Code Coverage Enabled for Each Angular Modules
- Application Theme Structured
- Storybook Enabled
- Dockerize Implementation
- Web Content Accessibility Guidelines (WCAG) Compliant
- Shopping Cart Admin Panel Feature Enabled (Inventory Module Only for now)

### Login Module Layout

<img src="./git_assets/login-view.png" width="50%"/>

### Product Module Layout

<img src="./git_assets/prd-view.png" width="50%"/>

### Cart Module Layout

<img src="./git_assets/cart-view.png" width="50%"/>

---

### Project Script Guide:

Navigate to `Frontend-Starter\BE` folder for Backend Mock Services

- Run Development Environment
  - `yarn start`

Navigate to `Frontend-Starter\FE\rock-band` folder for Angular Application

- Setup Application
  - `yarn install`
- Run Retail Customer Application
  - `yarn rock:dev`
  - Once server up, browse the site on http://localhost:4100
- Run Admin Application
  - `yarn radmin:dev`
  - Once server up, browse the site on http://localhost:4200
- Run Storybook
  - `yarn rock:storybook`
- Run Tests for Retail Customer Application
  - `yarn rock:test`
  - `yarn rock:cart:test`
  - `yarn rock:product:test`
- View Code Coverage of the Retail Customer Application
  - `yarn rock:cc`
  - `yarn rock:cart:cc`
  - `yarn rock:product:cc`
- Run Tests for Admin Application
  - `yarn radmin:test`
- View Code Coverage of the Admin Application
  - `radmin:cc`
- Run Lint and Prettier
  - `yarn rock:lint`
  - `yarn rock:format`

### Module-wise Error Handing

<img src="./git_assets/error-handing.png" width="45%"/>

### Code Coverage Report

<img src="./git_assets/cart-code-coverage.png" width="45%"/>
<img src="./git_assets/product-code-coverage.png" width="45%"/>

### Lighthouse Report

<img src="./git_assets/lighthouse-report.png" width="50%"/>

### Admin - Inventory Module Layout

<img src="./git_assets/admin-inventory-view.png" width="50%"/>

### Admin - Inventory Edit Product Layout

<img src="./git_assets/admin-inventory-edit-view.png" width="50%"/>

### Admin - Code Coverage

<img src="./git_assets/admin-code-coverage.png" width="50%"/>

### Storybook Feature

<img src="./git_assets/storybook-view.png" width="45%"/>

This project was generated using [Nx](https://nx.dev).
