# @hyperapp/html
[![Travis CI](https://img.shields.io/travis/hyperapp/html/master.svg)](https://travis-ci.org/hyperapp/html)
[![Codecov](https://img.shields.io/codecov/c/github/hyperapp/html/master.svg)](https://codecov.io/gh/hyperapp/html)
[![npm](https://img.shields.io/npm/v/@hyperapp/html.svg)](https://www.npmjs.org/package/@hyperapp/html)
[![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com "Join us")

Html helper functions for [Hyperapp](https://github.com/hyperapp/hyperapp). Use as an alternative to the built-in `h()` function.

## Installation

Install with npm or Yarn.

<pre>
npm i <a href="https://www.npmjs.com/package/@hyperapp/html">@hyperapp/html</a>
</pre>

Then with a module bundler like [Rollup](https://github.com/rollup/rollup) or [Webpack](https://github.com/webpack/webpack), use as you would anything else.

```jsx
import { h1, div, a } from "@hyperapp/html"
```

Or download directly from [unpkg](https://unpkg.com/@hyperapp/html@latest/dist/html.dist.js) or [jsDelivr](https://cdn.jsdelivr.net/npm/@hyperapp/html@latest/dist/html.dist.js).

```html
<script src="https://unpkg.com/@hyperapp/html"></script>
```

The find the library in `window.html`.

```jsx
const { h1, div, a } = html
```

## Usage

```jsx
const node = h1({ id: "title" }, "Hi.")
```

## Example

[Try it Online](https://codepen.io/Swizz540/pen/VMXVve?editors=0010)

```jsx
app({
  state: {
    count: 0
  },
  view: (state, actions) =>
    main([
      h1({}, state.count),
      button({
        onclick: actions.down,
        disabled: state.count <= 0
      }, "—"),
      button({
        onclick: actions.up
      }, "+")
    ]),
  actions: {
    down: state => ({ count: state.count - 1 }),
    up: state => ({ count: state.count + 1 })
  }
})
```

## License

@hyperapp/html is MIT licensed. See [LICENSE](LICENSE.md).
