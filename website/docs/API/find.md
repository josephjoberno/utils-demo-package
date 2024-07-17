# find

## Description
Finds an element in an array that satisfies a provided testing function. If no elements satisfy the testing function, `undefined` is returned.

## Parameters
- `array: T[]`: The array to search through.
- `predicate: (item: T) => boolean`: The function used to test each element.

## Returns
- `T | undefined`: Returns the first element that satisfies the predicate, or `undefined` if no element satisfies it.

## Example
```typescript
import { utils } from 'utils-demo-package';

const items = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const found = utils.find(items, item => item.name === "Bob");
console.log(found); // Output: { id: 2, name: "Bob" }
