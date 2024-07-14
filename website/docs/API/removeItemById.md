
# removeItemById

## Description
Removes an item from an array by its ID.

## Parameters
- `array: T[]`: The array from which to remove the item.
- `id: string | number`: The ID of the item to remove.

## Returns
- `T[]`: An array with the item having the specified ID removed.

## Example
```typescript
import { utils } from 'utils-ts-package';

const items = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const remainingItems = utils.removeItemById(items, 2);
console.log(remainingItems); // Output: [{ id: 1, name: "Alice" }]
