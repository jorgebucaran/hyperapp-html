import { h } from "hyperapp"

function vnode(name) {
  return function (attributes, children) {
    return typeof attributes === "object" && !Array.isArray(attributes)
      ? h(name, attributes, children)
      : h(name, {}, attributes)
  }
}

{% for name in svgTags %}
export function {{ name }}(attributes, children) {
  return vnode("{{ name }}")(attributes, children)
}
{% endfor %}
