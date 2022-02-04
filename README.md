### Running Application
```shell
yarn run start # This starts react application
yarn run mock-api # This start json-server as a mock api
```

### Redux
All redux state is persisted to indexeddb via localforage. If you want to clear application state, you should delete indexeddb from:
```
DevTools > Application > Storage > IndexedDB > localforage > Right click > Delete
```

### Mock API

json-server saves all changes via POST requests, to `mock-api/mock-data.json` file. You may need to clear users array.

### Verification Code
Correct verfication code is `123456`.
