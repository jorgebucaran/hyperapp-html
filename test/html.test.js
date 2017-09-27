import { h } from "hyperapp"
import html, { div, h1 } from "../dist/html.js"

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

test("optional props", () => {

  expect(
    div()
  ).toEqual(
    h("div", null, [])
  )

  expect(
    div(null, "Hi.")
  ).toEqual(
    h("div", null, "Hi.")
  )

  expect(
    div(null, 1)
  ).toEqual(
    h("div", null, 1)
  )

  expect(
    div("Hi.")
  ).toEqual(
    h("div", null, ["Hi."])
  )

  expect(
    div(1)
  ).toEqual(
    h("div", null, [1])
  )

  expect(
    div([
      h1({ id: "title" }, "Hi.")
    ])
  ).toEqual(
    h("div", null, [
      h("h1", { id: "title" }, "Hi.")
    ])
  )

})