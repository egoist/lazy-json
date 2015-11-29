import test from 'ava'
import { requireJSON, parseJSON } from './'

test('require', t => {
  const testJSON = requireJSON('test.lazy')
  t.is(typeof testJSON, 'object')
  t.end()
})

test('parse', t => {
  const testJSON = parseJSON('{//abc\n"a":1}')
  t.is(testJSON.a, 1)
  t.end()
})
