# Sale app

In this exercise, you will refactor a legacy app that displays items on sale.
Specifically, you will extract business logic from view logic, both of which
are tangled inside of a React component's `render()` method.

Please complete the following tasks in the `SaleItem` component so that the
failing unit tests pass.

1. Extract a method that calculates a sale price, given a base price and sale percentage.
2. Extract a method that formats an integer as a dollar.
3. Implement `getBasePrice()` and `getSalePrice()` using these extracted methods in order to clean up `render()`.

Walk and talk us through your plan of action.

### Set up

1. In one terminal tab: `npm start`.
2. In another terminal tab: `npm test`. Please keep this tab visible.
