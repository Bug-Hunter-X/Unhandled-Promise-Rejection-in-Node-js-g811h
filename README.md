# Unhandled Promise Rejection in Node.js

This repository demonstrates an example of an unhandled promise rejection error in Node.js and provides a solution.

## Bug Description

Unhandled promise rejections can lead to unexpected crashes in Node.js applications. This example shows a scenario where a promise is rejected without proper error handling.

## Solution

The solution involves using a `.catch()` block to handle any rejected promises and prevent the unhandled rejection warning.

## How to reproduce the Bug

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js`.
4. Observe the unhandled promise rejection warning in the console.