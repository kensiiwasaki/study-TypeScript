import type { NextPage } from 'next'

// Map<K, V> KはKey、VはValue
const map: Map<string, string> = new Map()

map.set('a', 'test')
map.set('b', 'test2')
map.set('c', 'test3')
console.log(map)
