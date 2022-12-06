# Trading Platform

v0.2.0

<!-- ![orders](https://gitlab.com/jobtarget/platform/platformorders/uploads/1999868ff5d8ab4e4479af2d15edab39/orders.png) -->

<!-- | Environment | URL                                                                  |
| :---------- | :------------------------------------------------------------------- |
| QA          | [https://qa-orders.jobtarget.com](https://qa-orders.jobtarget.com)   |
| UAT         | [https://uat-orders.jobtarget.com](https://uat-orders.jobtarget.com) |
| Production  | [https://orders.jobtarget.com](https://orders.jobtarget.com)         | -->

## Getting Started

### How To Run

#### Localhost

Once the project has been installed and the `.env` file has been created and populated, type `npm run start` in the terminal to launch the app in the browser.

#### Docker

To create a container for this repo use this command `npm run build:docker` in the terminal and a docker image will be created.

### Running The Unit Tests

This project uses React Testing Library for the unit tests for the components and also for the custom hooks. It uses Jest for the utility function tests. To run the units tests type `npm run test` in the terminal.

## About The App

### Stack

This project uses Typescript everywhere that is currently possible. Typescript helps to catch errors before the build and keeps the component props in check. This app is Nextjs which allows us to have api routes and server-side rendering if needed.

Eslint and Prettier are also setup and used as strict as possible. Eslint is based off of the Airbnb recommended and also uses the JSX a11y plugin to help catch accessibilty issues. Prettier forces the same coding conventions and will automatically format the code based on those settings.

Husky is used as a pre-commit hook to force eslint/prettier to run before any code can be committed. This will help to ensure that no stray console.logs or other issues accidentally get pushed up to the git repo.

For styling, this project utilizes css modules via sass. This allows component level scoped styles without affecting any global styles.
