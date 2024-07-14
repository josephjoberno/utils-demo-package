
# removeDuplicates

## Description
Removes duplicate values from an array.

## Parameters
- `array: T[]`: The array from which to remove duplicates.

## Returns
- `T[]`: An array containing only unique elements from the original array.

## Example
```typescript
import { utils } from 'utils-ts-package';

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = utils.removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
