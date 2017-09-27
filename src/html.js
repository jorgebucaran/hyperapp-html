import { h } from "hyperapp"

function vnode(tag) {
  return function (props, children) {
    return typeof props === "object" && !Array.isArray(props)
      ? h(tag, props, children)
      : h(tag, {}, props)
  }
}

{% for tag in htmlTags %}
export function {{ tag }}(props, children) {
  return vnode("{{ tag }}")(props, children)
}
{% endfor %}
