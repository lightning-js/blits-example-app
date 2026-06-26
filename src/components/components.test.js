/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'tape'
import { renderComponent } from '@lightningjs/blits/testing'
import Box from './Box.js'
import Button from './Button.js'
import Card from './Card.js'
import Square from './Square.js'
import Toggle from './Toggle.js'

/** @typedef {import('@lightningjs/blits/testing').ComponentSnapshotNode} ComponentSnapshot */

/**
 * renderComponent always returns a component snapshot — cast until Blits types are updated.
 * @param {import('@lightningjs/blits/testing').RenderComponentFixture} fixture
 * @returns {ComponentSnapshot}
 */
function snapshot(fixture) {
  return /** @type {ComponentSnapshot} */ (fixture.snapshot())
}

/**
 * @param {import('@lightningjs/blits/testing').SnapshotNode | ComponentSnapshot} node
 * @returns {ComponentSnapshot}
 */
function asComponent(node) {
  return /** @type {ComponentSnapshot} */ (node)
}

test('snapshot exposes component name, props, state and rendered tree', (assert) => {
  const fixture = renderComponent(Box, {
    props: { header: 'Title', text: 'Body' },
  })

  const snap = snapshot(fixture)

  assert.equal(snap.name, 'Box')
  assert.equal(snap.props.header, 'Title')
  assert.equal(Object.keys(snap.state).length, 0)
  assert.equal(snap.hasFocus, false)
  assert.equal(snap.tree.children[0].attributes.content, 'Title')
  assert.equal(snap.tree.children[1].attributes.content, 'Body')

  fixture.destroy()
  assert.end()
})

test('setProps updates reactive template output', (assert) => {
  const fixture = renderComponent(Box, {
    props: { header: 'Hello', text: 'World' },
  })

  fixture.setProps({ header: 'Updated', text: 'Content' })

  const snap = snapshot(fixture)
  assert.equal(snap.props.header, 'Updated')
  assert.equal(snap.tree.children[0].attributes.content, 'Updated')
  assert.equal(snap.tree.children[1].attributes.content, 'Content')

  fixture.destroy()
  assert.end()
})

test('setState updates component state and template bindings', (assert) => {
  const fixture = renderComponent(Button, { props: { bColor: 'blue' } })

  fixture.setState({ alpha: 1, scale: 1.2, rotate: -4 })

  const snap = snapshot(fixture)
  assert.equal(snap.state.alpha, 1)
  assert.equal(snap.state.scale, 1.2)
  assert.equal(snap.state.rotate, -4)

  fixture.destroy()
  assert.end()
})

test('focus and unfocus update hasFocus and component hooks', async (assert) => {
  const fixture = renderComponent(Button, { props: { bColor: 'red' } })

  await fixture.focus()
  assert.equal(snapshot(fixture).hasFocus, true)
  assert.equal(snapshot(fixture).state.alpha, 1)
  assert.equal(snapshot(fixture).state.scale, 1.2)

  fixture.unfocus()
  assert.equal(snapshot(fixture).hasFocus, false)
  assert.equal(snapshot(fixture).state.alpha, 0.4)
  assert.equal(snapshot(fixture).state.scale, 1)

  fixture.destroy()
  assert.end()
})

test('input only runs when the component has focus', async (assert) => {
  const fixture = renderComponent(Button, { props: { bColor: 'green' } })

  assert.equal(fixture.input('enter'), false)
  assert.equal(snapshot(fixture).state.rotate, 0)

  await fixture.focus()
  assert.equal(fixture.input('enter'), true)
  assert.equal(snapshot(fixture).state.rotate, -4)

  fixture.destroy()
  assert.end()
})

test('input accepts a custom keyboard event from createKeyboardEvent', async (assert) => {
  const fixture = renderComponent(Button, { props: { bColor: 'blue' } })
  const event = fixture.createKeyboardEvent('enter', { keyCode: 13 })

  await fixture.focus()
  assert.equal(fixture.input('enter', event), true)
  assert.equal(snapshot(fixture).state.rotate, -4)

  fixture.destroy()
  assert.end()
})

test('snapshot includes nested child components with props and attributes', (assert) => {
  const fixture = renderComponent(Card, { props: { size: 'small' } })

  const snap = snapshot(fixture)
  const firstSquare = asComponent(snap.tree.children[0])
  const secondSquare = asComponent(snap.tree.children[1])

  assert.equal(snap.tree.attributes.w, 200)
  assert.equal(snap.tree.attributes.h, 300)
  assert.equal(firstSquare.name, 'Square')
  assert.equal(firstSquare.attributes.x, 80)
  assert.equal(secondSquare.props.size, 40)

  fixture.destroy()
  assert.end()
})

test('snapshot reflects computed prop bindings on initial render', (assert) => {
  const fixture = renderComponent(Card, { props: { size: 'large' } })

  const snap = snapshot(fixture)
  assert.equal(snap.props.size, 'large')
  assert.equal(snap.tree.attributes.w, 400)
  assert.equal(snap.tree.attributes.h, 500)

  fixture.destroy()
  assert.end()
})

test('snapshot evaluates prop fallbacks in template', (assert) => {
  const fixture = renderComponent(Button)

  assert.equal(snapshot(fixture).tree.attributes.color, '0xff0000ff')

  fixture.destroy()
  assert.end()
})

test('setProps updates built-in child component output', (assert) => {
  const fixture = renderComponent(Toggle, {
    props: { bgColor: '#ccc', primaryColor: '#fff', on: false },
  })

  const circle = asComponent(snapshot(fixture).tree.children[0])
  assert.deepEqual(circle.attributes.x, { transition: 50 })

  fixture.setProps({ on: true })
  assert.deepEqual(asComponent(snapshot(fixture).tree.children[0]).attributes.x, { transition: 0 })

  fixture.destroy()
  assert.end()
})

test('destroy cleans up so another component can be mounted', (assert) => {
  const first = renderComponent(Box, { props: { header: 'First', text: 'A' } })
  first.destroy()

  const second = renderComponent(Box, { props: { header: 'Second', text: 'B' } })
  assert.equal(snapshot(second).props.header, 'Second')

  second.destroy()
  assert.end()
})

test('setProps triggers prop watchers on child components', (assert) => {
  const fixture = renderComponent(Square, { props: { size: 80 } })

  fixture.setProps({ size: 40 })

  assert.equal(snapshot(fixture).props.size, 40)
  assert.equal(snapshot(fixture).state.color, '#9d174d')

  fixture.destroy()
  assert.end()
})
