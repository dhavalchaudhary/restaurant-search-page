# Restaurant Search Page

## Contents of this documentation

1.  [Problem Statement](#problem-statement)
2.  [Tradeoffs](#tradeoffs)
3.  [Technical documentation for running the project](#technical-documentation-for-running-the-project)
4.  [Scope for improvement](#scope-for-improvement)

## Problem Statement

Build a restaurant search application that utlises the algolia search service. Additional information about this exercise can be found [here](https://gist.github.com/alexandremeunier/e05e2caaad2aa878c27baf1c2bb752d1)

## Tradeoffs

There were multiple times where some features had to be prioritised over others due to the time contraint, lack of suppport of a few technologies and best practices. This section briefly goes over the two most important tradeoffs -

- Prioritising basic automated testing over the bonus task in the assignment instructions - This was mostly done to improve the stability of the currrent features before implementing newer ones. Also, the tests written are only unit tests and no integration tests due to the time limit for the assignment.
- Using React Instantsearch over React Instantsearch hooks - The solution uses a mix of algolia provided components as well as custom components to provide the best user experience. This was one of the biggest reason to use React Instantsearch because the hooks version does not have any UI components and nor is it compatible with the UI components in the React Instantsearch ibrary. Having said that, hooks have been widely used in the application to manage state. Additionally, this also led to the usage of javascript over typescript in this project because React Instantsearch did not come inbuilt with official typescript bindings as the newer hooks version does.

## Technical documentation for running the project

### Live site - https://algolia-restaurant-search-page.netlify.app/. For best experience, open the site on the web or mobile browser.

### Prerequisites

- Ensure that the node package used in the machine is `v16.15.0`. Using the older/newer versions might result into unforseen issues.
- Ensure that you have `npm` installed in your machine. <br /> _Note - You can also use yarn for all the commands mentioned below by replacing `npm` or `npm run` with `yarn`_

### Running the project

- Install all the dependencies for the project.

```sh
npm install
```

- Add the appropriate environment variables by creating a new `.env` file and copy pasting the content of `.env.dist` into it. Also, please add the relevant api keys in the `.env` file for your app to run correctly.

- Start the project.

```sh
npm start
```

This will automatically open [http://localhost:3000](http://localhost:3000) on the browser and run the app in development mode. The page will reload if you make edits. You will also see any lint errors in the console.

### Running the tests

We use [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) as the basic tools for unit testing. To run all the tests, execute the following command in the terminal

```sh
npm run test
```

### Formatting the code

We use prettier to format all the files according to the rules in `.prettierrc.json`. This keeps our code style consistent across the entire project. To format all the files, exceute the following command in the terminal

```sh
npm run prettier
```

## Scope for improvement

This section contains potential topics to improve user experience and other aspects of the application

- User Experience - This is one of the categories which has a lot of quick wins for this application. Providing search insights (total results returned and more), sorting of restaurants (based on price, distance from user) and adding more filtering options (payment methods) can be few ways to improve the UX significantly.
- Stability
  - Adding support for typescript wll help in reducing the number of potntial bugs in production as well as significantly improve the developer experience.
  - Using a CSS in JS solution (css modules or styled components) instead of global CSS will help in reducing unexpected styling issues caused by writing global css.
  - Adding integration tests in the `App` component. Right now, the application only has unit tests due to time constraints but ideally there should be a healthy coverage of different integration test scenarios.
  - Adding e2e tests using tools like [Cypress](https://www.cypress.io/). These tests replicate real world user scenarios thus increasing our confidence in the app.
- Monitoring and Alerting
  - Integrating tools like [Sentry](https://sentry.io/) or [LogRocket](https://logrocket.com/) for error tracking
  - Adding tools like [LogRocket](https://logrocket.com/) to track application performance metrics
  - Setup automated alerts to catch bugs before they affect a significant user base.
- Automation
  - Adding linters to the project to maintain a style consistency
  - Introducing a CI/CD workflow using tools like [Github Actions](https://github.com/features/actions) or [Circle CI](https://circleci.com/). It will generate builds, run tests and deploy to testing environment when there are code changes on Github.
