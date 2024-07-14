
# isEmpty

## Description
Checks if the given value is empty. It considers a value empty if it is either an empty string, an empty array, an empty object, or `null` or `undefined`.

## Parameters
- `value: any`: The value to check for emptiness.

## Returns
- `boolean`: Returns `true` if the value is empty, otherwise returns `false`.

## Example
```typescript
import { utils } from 'utils-ts-package';

// Checking an empty string
console.log(utils.isEmpty("")); // Output: true

// Checking a non-empty array
console.log(utils.isEmpty([1, 2, 3])); // Output: false

// Checking an empty object
console.log(utils.isEmpty({})); // Output: true
