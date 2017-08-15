import { h } from "hyperapp"

{% for tag in htmlTags %}
export function {{ tag }}(props, children) {
  return h("{{ tag }}", props, children)
}
{% endfor %}

export default function factory(h) {
  return {
    {% for tag in htmlTags %}
    {{ tag }}: function {{ tag }}(props, children) {
      return h("{{ tag }}", props, children)
    }{% if !loop.last %},{% endif %}
    {% endfor %}
  }
}