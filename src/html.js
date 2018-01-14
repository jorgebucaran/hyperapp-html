import { h } from "hyperapp"

function vnode(name) {
  return function (props, children) {
    return typeof props === "object" && !Array.isArray(props)
      ? h(name, props, children)
      : h(name, {}, props)
  }
}

{% for name in htmlTags %}
export function {{ name }}(props, children) {
  return vnode("{{ name }}")(props, children)
}
{% endfor %}
