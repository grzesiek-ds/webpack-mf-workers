import { testValue } from 'myModule/testValue';

console.log('testValue in main thread', testValue);

const worker = new Worker(new URL('./worker', import.meta.url));
