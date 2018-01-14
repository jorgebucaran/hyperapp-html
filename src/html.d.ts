export as namespace hyperappHtml

import { VNode } from "hyperapp"

{% for name in htmlTags %}
/** Utility function that calls `h` and returns a {{ name }} VNode
 * @param props     Any valid HTML atributes, events, styles, and meta data
 * @param children  The VNode children
 */
export function {{ name }}<Props = {}>(
  props?: Props,
  children?: string | number | Array<string | number | VNode<{}>>
): VNode<Props>
export function {{ name }}(
  children?: string | number | Array<string | number | VNode<{}>>
): VNode<{}>
{% endfor %}
