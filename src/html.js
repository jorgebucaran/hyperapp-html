import { h } from "hyperapp"

const hh = function (h) {
  return function (tag, props, children) {
    return typeof props === 'object' && !Array.isArray(props) && props !== null
      ? h(tag, props, children)
      : h(tag, null, props)
  }
}

{% for tag in htmlTags %}
export function {{ tag }}(props, children) {
  return hh(h)("{{ tag }}", props, children)
}
{% endfor %}

export default function factory(h) {
  return {
    {% for tag in htmlTags %}
    {{ tag }}: function {{ tag }}(props, children) {
      return hh(h)("{{ tag }}", props, children)
    }{% if !loop.last %},{% endif %}
    {% endfor %}
  }
}
