const assert = require('assert');
const add = require('./index');
const math = require('./math');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-1, 1), 0);

// Test de l'addition
assert.strictEqual(math.add(2, 3), 5);
assert.strictEqual(math.add(-1, -1), -2);

// Test de la soustraction
assert.strictEqual(math.subtract(5, 3), 2);
assert.strictEqual(math.subtract(0, 0), 0);

// Test de la multiplication
assert.strictEqual(math.multiply(2, 3), 6);
assert.strictEqual(math.multiply(0, 5), 0);

// Test de la division
assert.strictEqual(math.divide(6, 3), 2);
assert.throws(() => math.divide(1, 0), Error);
 
console.log("✅ Tests passed!");
