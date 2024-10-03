import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function tests', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 harus bernilai 5');
  assert.strictEqual(
    sum(-1, 5),
    0,
    'Sum dengan angka negatif harus bernilai 0'
  );
  assert.strictEqual(
    sum(-1, -5),
    0,
    'Sum dengan dua angka negatif harus bernilai 0'
  );

  // Test dengan argumen non-numeric
  assert.strictEqual(sum('2', 3), 0, 'Sum dengan bukan angka harus bernilai 0');
  assert.strictEqual(sum(2, '3'), 0, 'Sum dengan bukan angka harus bernilai 0');
  assert.strictEqual(
    sum('a', 'b'),
    0,
    'Sum dengan bukan dua angka harus bernilai 0'
  );

  // Test dengan argumen nol
  assert.strictEqual(sum(0, 0), 0, '0 + 0 harus bernilai 0');
  assert.strictEqual(sum(0, 5), 5, '0 + 5 harus bernilai 5');
  assert.strictEqual(sum(5, 0), 5, '5 + 0 harus bernilai 5');
});
