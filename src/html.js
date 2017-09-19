import { h } from "hyperapp"

function vnode(h) {
  return function (tag) {
    return function (props, children) {
      return typeof props === 'object' && !Array.isArray(props)
        ? h(tag, props, children)
        : h(tag, null, props)
    }
  }
}

{% for tag in htmlTags %}
export function {{ tag }}(props, children) {
  return vnode(h)("{{ tag }}")(props, children)
}
{% endfor %}

export default function factory(h) {
  return {
    {% for tag in htmlTags %}
    {{ tag }}: function {{ tag }}(props, children) {
      return vnode(h)("{{ tag }}")(props, children)
    }{% if !loop.last %},{% endif %}
    {% endfor %}
  }
}
