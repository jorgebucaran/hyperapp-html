# @hyperapp/html

[![Travis CI](https://img.shields.io/travis/hyperapp/html/master.svg)](https://travis-ci.org/hyperapp/html) [![Codecov](https://img.shields.io/codecov/c/github/hyperapp/html/master.svg)](https://codecov.io/gh/hyperapp/html) [![npm](https://img.shields.io/npm/v/@hyperapp/html.svg)](https://www.npmjs.org/package/@hyperapp/html) [![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com "Join us")

Html helper functions for [Hyperapp](https://github.com/hyperapp/hyperapp). Use @hyperapp/html as an alternative to JSX or the <samp>hyperapp.h</samp> function.

Here's a taste of how to use two of the most common effects for firing actions and making HTTP requests. The app displays inspiring quotes about design, fetching a new quote each time the user clicks on the current one. Go ahead and try it online here.

This is a counter that can be incremented or decremented. Go ahead and [try it online](https://codepen.io/hyperapp/pen/MrBgMy?editors=0010). 

```jsx
import { h, app } from "hyperapp"
import { div, h1, button } from "@hyperapp/html"

const state = {
  count: 0
}

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
}

const view = (state, actions) =>
  div([
    h1(state.count),
    button({ onclick: actions.down }, "-"),
    button({ onclick: actions.up }, "+")
  ])

app(state, actions, view, document.body)
```

See [/vars.json](/vars.json) for the list of available Html tags you can use in your program.

## Installation

Install with npm or Yarn.

<pre>
npm i <a href=https://www.npmjs.com/package/@hyperapp/html>@hyperapp/html</a>
</pre>

Then with a module bundler like [Rollup](https://rollupjs.org) or [Webpack](https://webpack.js.org), use as you would anything else.

```js
import { div, h1, button } from "@hyperapp/html"
```

If you don't want to set up a build environment, you can download @hyperapp/html from a CDN like [unpkg.com](https://unpkg.com/@hyperapp/html) and it will be globally available through the <samp>window.html</samp> object.

```html
<script src="https://unpkg.com/@hyperapp/html"></script>
```

## License

@hyperapp/html is MIT licensed. See [LICENSE](LICENSE.md).
