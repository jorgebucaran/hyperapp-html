# hyperapp-html
[![npm](https://img.shields.io/npm/v/hyperapp-html.svg)](https://www.npmjs.org/package/hyperapp-html)
[![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com "Join us")

Html helpers for hyperapp and every `h`.

### Note
This library is builded using meta programing through template engine to allow the use of tree shaking and a better optimisation.

## Installation

Using [npm](https://npmjs.com):

<pre>
npm i <a href="https://www.npmjs.com/package/hyperapp-html">hyperapp-html</a>
</pre>

Then setup a [build pipeline](https://github.com/hyperapp/hyperapp/blob/master/docs/getting-started.md#build-pipeline) and import it.

```jsx
import { div, h1 } from "hyperapp-html"
```

Using a CDN:

```html
<script src="https://unpkg.com/hyperapp-html"></script>
```

Then access the all hmtl tags or the factory in the global scope as <samp>div</samp>, <samp>h1</samp>, etc...

## Usage

```jsx
const vnode = h1({ id: "title" }, "Hi.")
```

## Example

<!-- [Try it online](PLEASE ADD A LIVE PLAYGROUND) -->

```jsx
app({
  state: {
    title: "Hi."
  },
  view: state => div({}, [
    h1(null, state.title)
  ])
})
```

## API

### Tags
#### tagname

Type: (props: object, children: vnode[]) => vnode

Call the proper `h` to return a vnode according to the tag name.

```jsx
const vnode = tagname({ id: "title" }, "Hi.")
```

### Factory
#### html

Type: (h: function) => tagsObject

Return a calalog of html helpers that call the given `h` then return a vnode.

```jsx
const { tagname } = html(h)

const vnode = tagname({ id: "title" }, "Hi.")
```

## License

hyperapp-html is MIT licensed. See [LICENSE](LICENSE.md).
