---
sidebar_position: 3
sidebar_label: delay
---
# delay

## Description
Creates a delay (timeout) that can be used to delay execution within asynchronous functions.

## Parameters
- `ms: number`: The number of milliseconds to delay.

## Returns
- `Promise<void>`: A promise that resolves after the specified delay.

## Example
```typescript
import { utils } from 'utils-demo-package';

async function delayedHello() {
    await utils.delay(1000);
    console.log("Hello after 1 second");
}


delayedHello();
