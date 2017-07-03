import { h, app } from 'hyperapp'
import { div } from '../src'

test('empty div vnode', () => {
  expect(div()).toEqual({
    tag: 'div',
    data: {},
    children: []
  })
})
