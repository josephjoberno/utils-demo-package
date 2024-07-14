
# groupBy

## Description
Groups the elements of an array based on the specified key.

## Parameters
- `array: T[]`: The array to group.
- `key: keyof T`: The key on which to group the array elements.

## Returns
- `{ [key: string]: T[] }`: An object with keys representing the grouped property values and values being arrays of elements that correspond to each key.

## Example
```typescript
import { utils } from 'utils-ts-package';

const items = [{ id: 1, type: "fruit", name: "Apple" }, { id: 2, type: "vegetable", name: "Carrot" }];
const groupedByType = utils.groupBy(items, 'type');
console.log(groupedByType);
// Output: { fruit: [{ id: 1, name: "Apple" }], vegetable: [{ id: 2, name: "Carrot" }] }
