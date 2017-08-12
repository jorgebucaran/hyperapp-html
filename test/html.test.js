import { h } from "hyperapp"
import html, { div, h1 } from "../dist/html"

test("hyperapp h similarity", () => {
  expect(
    div(null, [])
  ).toEqual(
    h("div", null, [])
  )

  expect(
    h1({ id: "title" }, "Hi.")
  ).toEqual(
    h("h1", { id: "title" }, "Hi.")
  )

  expect(
    div({}, [
      h1({ id: "title" }, "Hi.")
    ])
  ).toEqual(
    h("div", {}, [
      h("h1", { id: "title" }, "Hi.")
    ])
  )
})

test("factory to use the right h", () => {
  const h = jest.fn(
    (tag, props, children) => ({ tag, props, children })
  )

  const { h1 } = html(h)

  expect(
    h1({ id: "title" }, "Hi.")
  ).toEqual(
    h("h1", { id: "title" }, "Hi.")
  )

  expect(h.mock.calls.length).toBe(2)
})
