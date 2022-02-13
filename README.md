# Simple React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses: 
* [Material UI](https://github.com/mui/material-ui/) for UI 
* [Redux](https://redux.js.org/) for state management
    * Redux with React Hooks: [src/components/CounterHooked.js](./src/components/CounterHooked.js)
    * Connected component: [src/components/CounterConnected.js](./src/components/CounterConnected.js) 
    * [Redux thunk](https://redux.js.org/usage/writing-logic-thunks) and fetching data: [src/features/users](./src/features/users)
* ESLint for linting and formatting files 

## Run
```shell
npm install
npm run start
```

URL: http://localhost:3000/