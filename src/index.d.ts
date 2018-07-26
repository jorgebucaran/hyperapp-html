export as namespace hyperappHtml

import { VNode } from "hyperapp"

{% for name in tags %}
/** Utility function that calls `h` and returns a {{ name }} VNode
 * @param attributes Any valid HTML atributes, events, styles, and meta data
 * @param children   The VNode children
 */
export function {{ name }}<Attributes = {}>(
  attributes?: Attributes,
  children?: string | number | Array<string | number | VNode<{}>>
): VNode<Attributes>
export function {{ name }}(
  children?: string | number | Array<string | number | VNode<{}>>
): VNode<{}>
{% endfor %}
