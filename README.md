# @hyperapp/html
[![Travis CI](https://img.shields.io/travis/hyperapp/html/master.svg)](https://travis-ci.org/hyperapp/html)
[![npm](https://img.shields.io/npm/v/@hyperapp/html.svg)](https://www.npmjs.org/package/@hyperapp/html)
[![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com "Join us")

Html helpers for hyperapp `h`.

### Note
This library is builded using meta programing through template engine to allow the use of tree shaking and a better optimisation.

## Installation

Using [npm](https://npmjs.com):

<pre>
npm i <a href="https://www.npmjs.com/package/@hyperapp/html">@hyperapp/html</a>
</pre>

Then setup a [build pipeline](https://github.com/hyperapp/hyperapp/blob/master/docs/getting-started.md#build-pipeline) and import it.

```jsx
import { div, h1 } from "@hyperapp/html"
```

Using a CDN:

```html
<script src="https://unpkg.com/@hyperapp/html"></script>
```

Then access the all hmtl tags from `html` in the global scope as <samp>html.div</samp>, <samp>html.h1</samp>, etc...

## Usage

```jsx
const vnode = h1({ id: "title" }, "Hi.")
```

## Example

[Try it online](https://codepen.io/anon/pen/yzeQgg?editors=0010)

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
      }, "ー"),
      button({
        onclick: actions.up
      }, "＋")
    ]),
  actions: {
    down: state => ({ count: state.count - 1 }),
    up: state => ({ count: state.count + 1 })
  }
})
```

## API

### Tags
#### tagname

Type: (props: object, children: vnode[]) => vnode

Call `h` to return a vnode according to the tag name.

```jsx
const vnode = tagname({ id: "title" }, "Hi.")
```

## License

@hyperapp/html is MIT licensed. See [LICENSE](LICENSE.md).
