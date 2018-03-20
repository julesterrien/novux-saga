# Comparing state management workflows: redux/redux-saga vs redux/thunk/novux

## Get started
```bash
# install all the things
$ npm i
```

```bash
# run the server
$ npm run start:server
```

```bash
# run the frontend using saga
$ npm run start:saga
```

```bash
# run the frontend using novux
$ npm run start:novux
```

```bash
# run tests using saga
$ npm run test:saga
```

```bash
# run tests using novux
$ npm run test:novux
```

## How it works
You'll find 2 src directories: /src and /src-saga.
Both run a tiny react app which renders a list of users, and a button to add new users. 

/src uses thunk/novux to handle state management
/src-saga uses sagas

I tried to keep the /src-saga organized as closely as how we do it in our repos. Let me know if you find differences.

## Insights
To count the number of lines from /src or /src-saga, run `find . -name '*.js' | xargs wc -l`

Redux-saga is ~60% more verbose as it requires code for reducers, actionCreators/actions, sagas (+ all related tests):
- 446 lines of code using saga
- 272 lines of code using thunk/novux
