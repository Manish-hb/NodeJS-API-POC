# Audits API spike

Audits applications API's spike

### Frameworks
- Node 7 + ES6 (Babel)
- Express
- Mongoose

### Developer tools
Input Validation    -   JOI
Security            -   Helmet
Test                -   Jest, Mocha
Authentication      -   Passport
GitHook             -   Huskey
Lint                -   ESLint, Prettier
Code coverage       -   Jest, Istanbul, nyc
Logs                -   Winston
Documentation       -   Swagger

## Instructions

Install mongoDB and start the server**
-   mongod
** This wil be replaced by HBase 


Install yarn
-   npm install -g yarn

Run yarn in the root of your project to install its dependencies
-   yarn

### Server

Start in development mode http://localhost:4040/health-check
-   yarn dev

### Tests

Run tests or code coverage in Jest
-   yarn test
-   yarn test:coverage