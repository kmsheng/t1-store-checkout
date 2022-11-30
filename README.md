# t1 Store Checkout
Frontend Developer Assessment from [Terminal1](https://hackmd.io/@terminal1/assessment/%2F%40terminal1%2Fassessment-frontend-react),

the assessment asks to implement a shopping cart page with frontend framework which includes state management, 

so this mockup implementation is made with Vue 3, Pinia, Tailwindcss and Vite. It's fully responsive for a bonus.

I choose Vue 3 for this project because it provides the simplest syntax for building it.

You may find the demo site [here](https://kmsheng.github.io/t1-store-checkout/)

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

### Directory and file structure

```
.
├── App.vue 
├── assets
│   ├── base.css     // Declaration of tailwind directives.
│   ├── food1.jpg    // Product item images.
│   ├── food2.jpg
│   ├── food3.jpg
│   ├── logo.svg
│   └── main.css
├── components
│   ├── CartList.vue             // Cart item list.
│   ├── CreditcardForm.vue       // Creditcard form component.
│   ├── ExpSelectInput.vue       // Component for creditcard expiration date.
│   ├── FakeCreditcard.vue       // Pure css fake creditcard component.
│   ├── FormLabel.vue            // Label component.
│   ├── LabelInput.vue           // Input with label.
│   ├── QtyInput.vue             // The quantity text input with decrement and increment buttons.
│   └── icons
│       ├── IconArrowLeft.vue    // Left Arrow Icon SVG.
│       ├── IconCross.vue        // Cross Icon SVG.
│       ├── IconMasterCard.vue.  // Pure css Master Card logo.
│       └── IconVisa.vue        // VISA logo SVG file.
├── main.js // Main entry of the project. Vue app is initialzed right here
            // which defines what plugins to use and the import of primary css file.
├── pages
│   ├── CheckoutPage.vue  // Checkout page component.
│   └── __tests__
│       └── CheckoutPage.spec.js    // unit test of CheckoutPage component.
└── stores
    └── product.js  // Product store of Pinia. ( Something similiar to redux store or vuex. )
```

### Todos
 - Form validations which includes creditcard.
