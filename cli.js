#!/usr/bin/env node
import {URL} from 'node:url'
import fs from 'node:fs'
import process from 'node:process'
import {lancasterStemmer} from './index.js'

/** @type {Object.<string, unknown>} */
const pack = JSON.parse(
  String(fs.readFileSync(new URL('package.json', import.meta.url)))
)
const argv = process.argv.slice(2)

if (argv.includes('--help') || argv.includes('-h')) {
  console.log(help())
} else if (argv.includes('--version') || argv.includes('-v')) {
  console.log(pack.version)
} else if (argv.length === 0) {
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function (data) {
    console.log(stem(String(data)))
  })
} else {
  console.log(stem(argv.join(' ')))
}

/**
 * @param {string} values
 */
function stem(values) {
  return values
    .split(/\s+/g)
    .map((d) => lancasterStemmer(d))
    .join(' ')
}

function help() {
  return (
    [
      '',
      'Usage: ' + pack.name + ' [options] <words...>',
      '',
      pack.description,
      '',
      'Options:',
      '',
      '  -h, --help           output usage information',
      '  -v, --version        output version number',
      '',
      'Usage:',
      '',
      '# output stems',
      '$ ' + pack.name + ' considerations',
      stem('considerations'),
      '',
      '# output stems from stdin',
      '$ echo "detestable vileness" | ' + pack.name,
      stem('detestable vileness')
    ].join('\n  ') + '\n'
  )
}
