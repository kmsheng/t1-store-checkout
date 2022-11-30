# t1 Store Checkout
Frontend Developer Assessment from [Terminal1](https://hackmd.io/@terminal1/assessment/%2F%40terminal1%2Fassessment-frontend-react),
this mockup implementation is made with Vue 3, Tailwind and Vite and it's fully responsive.

![Screen Shot 2022-11-30 at 1 08 29 PM](https://user-images.githubusercontent.com/880569/204712440-95e2377a-1d61-4935-add4-df909c6cc7e7.jpg)

![Frame 1](https://user-images.githubusercontent.com/880569/204712880-87d90a70-3432-4ea3-a0fe-2d2c9ffd7c65.jpg)


## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Todos
 - Form validations which includes creditcard.
