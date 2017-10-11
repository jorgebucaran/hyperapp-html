export as namespace hyperappHtml

import { VNode } from "hyperapp"

{% for tag in htmlTags %}
/** Utility function that calls `h` and returns a {{ tag }} VNode
 * @param props     Any valid HTML atributes, events, styles, and meta data
 * @param children  The VNode children
 */
export function {{ tag }}<Props = {}>(
  props?: Props,
  children?: string | number | Array<string | number | VNode<{}>>
): VNode<Props>
export function {{ tag }}(
  children?: string | number | Array<string | number | VNode<{}>>
): VNode<{}>
{% endfor %}
