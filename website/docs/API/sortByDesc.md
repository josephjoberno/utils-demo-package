

# sortByDesc

## Description
Sorts an array of objects by a specified key in descending order.

## Parameters
- `array: T[]`: The array to sort.
- `key: keyof T`: The key to sort by.

## Returns
- `T[]`: An array of objects sorted by the specified key in descending order.

## Example
```typescript
import { utils } from 'utils-ts-package';

const items = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const sortedItems = utils.sortByDesc(items, 'name');
console.log(sortedItems); // Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
