## What is the issue?

Federated module (defined under `module` folder), can be consumed by main thread in host application (defined under `host` folder), but it can't be consumed by worker thread.

## How to run

```
npm install
npm run start:module
npm run start:host
```

[Open browser](http://localhost:3000) and observe error in console.
