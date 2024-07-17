
# sortBy

## Description
Sorts an array of objects by a specified key in ascending order.

## Parameters
- `array: T[]`: The array to sort.
- `key: keyof T`: The key to sort by.

## Returns
- `T[]`: An array of objects sorted by the specified key.

## Example
```typescript
import { utils } from 'utils-demo-package';

const items = [{ id: 1, name: "Bob" }, { id: 2, name: "Alice" }];
const sortedItems = utils.sortBy(items, 'name');
console.log(sortedItems); // Output: [{ id: 2, name: "Alice" }, { id: 1, name: "Bob" }]
