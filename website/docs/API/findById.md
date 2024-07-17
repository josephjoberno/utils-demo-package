

# findById

## Description
Finds an element by its ID in an array of objects where each object must have an `id` property.

## Parameters
- `array: T[]`: The array to search through.
- `id: string | number`: The ID of the element to find.

## Returns
- `T | undefined`: Returns the element with the specified ID, or `undefined` if no such element exists.

## Example
```typescript
import { utils } from 'utils-demo-package';

const items = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const foundItem = utils.findById(items, 1);
console.log(foundItem); // Output: { id: 1, name: "Alice" }
