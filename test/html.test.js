import { h } from "hyperapp"
import * as html from "../html"
import { tags } from "../vars-html.json"

const { div, h1 } = html

test("same as h", () => {
  expect(div({}, [])).toEqual(h("div", {}, []))

  expect(h1({ id: "title" }, "Hi.")).toEqual(h("h1", { id: "title" }, "Hi."))

  expect(div({}, [h1({ id: "title" }, "Hi.")])).toEqual(
    h("div", {}, [h("h1", { id: "title" }, "Hi.")])
  )
})

test("optional props", () => {
  expect(div()).toEqual(h("div", {}, []))

  expect(div({}, "Hi.")).toEqual(h("div", {}, "Hi."))

  expect(div({}, 1)).toEqual(h("div", {}, 1))

  expect(div("Hi.")).toEqual(h("div", {}, ["Hi."]))

  expect(div(1)).toEqual(h("div", {}, [1]))

  expect(div([h1({ id: "title" }, "Hi.")])).toEqual(
    h("div", {}, [h("h1", { id: "title" }, "Hi.")])
  )
})

test("tags", () => {
  tags.map(tag => {
    expect(eval(`html.${tag}({ id: "foo" }, "bar")`)).toEqual(
      h(tag, { id: "foo" }, "bar")
    )
  })
})
