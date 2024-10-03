import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should add corectlt', () => {
  const operandA = 1;
  const operandB = 1;
  const actualValue = sum(operandA, operandB);
  const expectValue = 2;
  assert.equal(actualValue, expectValue);
});
