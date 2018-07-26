import { h } from "hyperapp"
import * as svg from "../svg"
import { tags } from "../vars-svg.json"

const { defs, linearGradient, stop, circle, g, text } = svg

test("same as h", () => {
  expect(circle({}, [])).toEqual(h("circle", {}, []))

  expect(circle({ cx: 50, cy: 50, r: 10 }, [])).toEqual(
    h("circle", { cx: 50, cy: 50, r: 10 }, [])
  )

  expect(
    defs({}, [
      linearGradient({ id: "MyGradient" }, [
        stop({ offset: "5%", "stop-color": "#f60" }),
        stop({ offset: "95%", "stop-color": "#ff6" })
      ])
    ])
  ).toEqual(
    h("defs", {}, [
      h("linearGradient", { id: "MyGradient" }, [
        stop({ offset: "5%", "stop-color": "#f60" }),
        stop({ offset: "95%", "stop-color": "#ff6" })
      ])
    ])
  )
})

test("optional props", () => {
  expect(g()).toEqual(h("g", {}, []))

  expect(g({ id: "main" }, text("Hi"))).toEqual(
    h("g", { id: "main" }, [h("text", {}, ["Hi"])])
  )

  expect(text("Hi")).toEqual(h("text", {}, ["Hi"]))

  expect(text(1)).toEqual(h("text", {}, [1]))

  expect(text({}, "Hi")).toEqual(h("text", {}, ["Hi"]))

  expect(text({}, 1)).toEqual(h("text", {}, [1]))
})

test("tags", () => {
  tags.map(tag => {
    expect(eval(`svg.${tag}({ id: "bar"})`)).toEqual(h(tag, { id: "bar" }))
  })
})
