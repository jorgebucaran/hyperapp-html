export as namespace hyperappHtml

{% for tag in htmlTags %}
/** Helper function that call the proper `h` to return a {{ tag }} virtual node
 * @param data      Any valid HTML atributes, events, styles, and meta data
 * @param children  The children of the virtual node
 */
export function {{ tag }}<VirtualNode = {}, Data = {}>(
  data?: Data,
  children?: VirtualNode | VirtualNode[]
): VirtualNode
export function {{ tag }}<VirtualNode = {}, Data = {}>(
  children?: VirtualNode | VirtualNode[]
): VirtualNode
{% endfor %}

export interface html<VirtualNode = {}, Data = {}> {
  {% for tag in htmlTags %}
  /** Helper function to create a {{ tag }} virtual node
   * @param data      Any valid HTML atributes, events, styles, and meta data
   * @param children  The children of the virtual node
   */
  {{ tag }}(
    data?: Data,
    children?: VirtualNode | VirtualNode[]
  ): VirtualNode
  {{ tag }}(
    children?: VirtualNode | VirtualNode[]
  ): VirtualNode
  {% endfor %}
}

export interface h<VirtualNode = {}, Data = {}> {
  /** Any valid hyperscript h function
   * @param tag       An html tag name e.g. 'div', 'svg', etc.
   * @param data      Any valid HTML atributes, events, styles, and meta data
   * @param children  The children of the virtual node
   */
  (
    tag: string,
    data?: Data,
    children?: VirtualNode | VirtualNode[]
  ): VirtualNode
}

/** Return a calalog of html helpers that call the given `h` then return a vnode.
 * @param h  Any valid hyperscript h function
 */
export default function factory<VirtualNode = {}, Data = {}>(
  h: h<VirtualNode, Data>
): html