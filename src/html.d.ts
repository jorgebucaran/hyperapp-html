export as namespace hyperappHtml

import { VNode } from "hyperapp"

{% for tag in htmlTags %}
/** Helper function that call the proper `h` to return a {{ tag }} virtual node
 * @param props      Any valid HTML atributes, events, styles, and meta data
 * @param children  The children of the virtual node
 */
export function {{ tag }}<Props = {}>(
  props?: Props,
  children?: string | number | Array<string | number | VNode<{}>>
): VNode<Props>
export function {{ tag }}(
  children?: string | number | Array<string | number | VNode<{}>>
): VNode<{}>
{% endfor %}
