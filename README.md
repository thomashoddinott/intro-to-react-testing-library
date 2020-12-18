### Intro to React Testing Library - https://www.youtube.com/watch?v=YQLn7ycfzEo

`yarn add @testing-library/react @testing-library/jest-dom`

Testing [Header.jsx](./src/Header.jsx) with [Header.test.js](./src/Header.test.js) 

`yarn test`

Generates a [snapshot](./src/__snapshots__/Header.test.js.snap) - `u` to update

Using a **data-testid** attribute allows us to easily fetch and test fragments of HTML:

_Header.jsx_

```jsx
...
<h1 data-testid='h1tag' className='fancy-h1'>{text}</h1>
...
```



