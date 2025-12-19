import assert from "assert";
import Benchmark from "benchmark";

import Big from "big.js"; // needs types
import BigNumber from "bignumber.js";
import { Decimal } from "decimal.js";

const suite = new Benchmark.Suite();

function decimaljs() {
  const dec = new Decimal("1.0000000000000001");
  const dec2 = new Decimal("1.0000000000000002");
  const diff = new Decimal("0.0000000000000001");

  const problem = new Decimal("22222222222222222222").div(2).toFixed(0);

  return [dec.equals(dec2), dec.plus(diff).equals(dec2), problem, new Decimal(2e308).toNumber()];
}

function bigjs() {
  const dec = new Big("1.0000000000000001");
  const dec2 = new Big("1.0000000000000002");
  const diff = new Big("0.0000000000000001");

  const problem = new Big("22222222222222222222").div(2).toFixed(0);

  // Bigjs explodes on the inf number :(
  return [dec.eq(dec2), dec.plus(diff).eq(dec2), problem, new Big(2e308)];
}

function bignumberjs() {
  const dec = new BigNumber("1.0000000000000001");
  const dec2 = new BigNumber("1.0000000000000002");
  const diff = new BigNumber("0.0000000000000001");

  const problem = new BigNumber("22222222222222222222").div(2).toFixed(0);

  return [dec.eq(dec2), dec.plus(diff).eq(dec2), problem, new BigNumber(2e308).toNumber()];
}

const expected = [false, true, "11111111111111111111", Number.POSITIVE_INFINITY];

assert.deepStrictEqual(decimaljs(), expected);
// assert.deepStrictEqual(bigjs(), expected);
assert.deepStrictEqual(bignumberjs(), expected);

suite
  .add("decimal.js", decimaljs)
  //   .add("big.js", bigjs)
  .add("bignumber.js", bignumberjs)

  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });
