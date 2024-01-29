# Lazy Routing & data fetching | React Router + React Query

My playground for trying various ways of loading, fetching and caching data using React Router's v6 loaders.

It includes an implementation of a lazy router in React Router v6 using its data routers and loaders, in combination with React Query's caching.

The project also includes global loading indicators for when the routes are loading and various ways of displaying the data, local loading and errors.

## Running the project

This project uses bun!

```
bun install
bun run dev
```

Pick the line you want in `main.jsx` to test different variants (with React Query or without):
```js
// import { run } from './1-react-router'
import { run } from './2-react-router-and-react-query'
```
