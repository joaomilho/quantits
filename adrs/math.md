# math

A library that deals with quantities needs proper math. In JS there are problems both with big and small numbers. For ints, the max is defined by Number.MAX_SAFE_INTEGER and BigInt is the standard solution to go beyond this limit (the `bigint` type in TS), but no such thing exists for floating point numbers. So the reasonable alternative is to use a library that handles these 2 cases, typically by accepting strings and input and overriding all math ops with methods.

I've tried:

- big.js
- bignumber.js
- decimal.js

Big.js is out of the equation because it can't handle Infinity or Nan. The code `new Big(2e308)` simply explodes while other libraries will represent such number as Infinity.

Between decimal and bignumber, decimal is both faster and it [trends better](https://www.npmtrends.com/big.js-vs-bignumber.js-vs-decimal.js-vs-mathjs-vs-numeral-vs-numeraljs).

```
decimal.js x 212,724 ops/sec ±0.86% (82 runs sampled)
bignumber.js x 189,212 ops/sec ±0.71% (92 runs sampled)
```

## Therefore

Use decimal.js.