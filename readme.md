# lancaster-stemmer

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[Lancaster stemming algorithm][source].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`lancasterStemmer(value, options?)`](#lancasterstemmervalue-options)
    *   [`Options`](#options)
    *   [`Style`](#style)
*   [CLI](#cli)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes a stemming algorithm.
That means it gets a certain string (typically an English word), and turns it
into a shorter version (a stem), which can then be compared to other stems
(of other words), to check if they are both (likely) the same term.

## When should I use this?

You’re probably dealing with natural language and know you need this if
you’re here!

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install lancaster-stemmer
```

In Deno with [`esm.sh`][esmsh]:

```js
import {lancasterStemmer} from 'https://esm.sh/lancaster-stemmer@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {lancasterStemmer} from 'https://esm.sh/lancaster-stemmer@2?bundle'
</script>
```

## Use

```js
import {lancasterStemmer} from 'lancaster-stemmer'

console.log(lancasterStemmer('considerations')) // => 'consid'
console.log(lancasterStemmer('detestable')) // => 'detest'
console.log(lancasterStemmer('vileness')) // => 'vil'
console.log(lancasterStemmer('giggling')) // => 'giggl'
console.log(lancasterStemmer('anxious')) // => 'anxy'

// Case insensitive
console.log(lancasterStemmer('analytic') === lancasterStemmer('AnAlYtIc')) // => true
```

## API

This package exports the identifier [`lancasterStemmer`][api-lancasterstemmer].
There is no default export.

### `lancasterStemmer(value, options?)`

Get the stem from a given value.

###### Parameters

*   `value`(`string`, required)
    — value to stem
*   `options`([`Options`][api-options], default: `{}`)
    — configuration

##### Returns

Stem for `value` (`string`).

### `Options`

Configuration (TypeScript type).

###### Fields

*   `style` ([`Style`][api-style], default: `'c'`)
    — style of algorithm

### `Style`

Style of algorithm (TypeScript type).

There are small algorithmic differences between how the algorithm was
implemented over the years.
Looking at [Algorithm Implementations][algos] on the archived website,
there are four styles available, in addition to the original paper.

The only difference currently implemented in this package is whether a final
`s` is kept before stopping (`paper`) or dropped before stopping (`c`).

###### Values

*   `'c'`
    — rules from the ANSI C (Stark, 1994) and Perl (Taffet, 2001)
    implementations (`compensation` -> `compen`)
*   `'paper'`
    — rules from the original paper (1990), and Pascal (Paice/Husk) and
    Java (O’Neill, 2000) implementations (`compensation` -> `compens`)

## CLI

```txt
Usage: lancaster-stemmer [options] <words...>

Lancaster stemming algorithm

Options:

  -h, --help           output usage information
  -v, --version        output version number

Usage:

# output stems
$ lancaster-stemmer considerations
consid

# output stems from stdin
$ echo "detestable vileness" | lancaster-stemmer
detest vil
```

## Types

This package is fully typed with [TypeScript][].
It exports the additional types [`Options`][api-options] and
[`Style`][api-style].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `lancaster-stemmer@^2`,
compatible with Node.js 12.

## Related

*   [`stemmer`](https://github.com/words/stemmer)
    — porter stemmer algorithm
*   [`double-metaphone`](https://github.com/words/double-metaphone)
    — double metaphone algorithm
*   [`soundex-code`](https://github.com/words/soundex-code)
    — soundex algorithm
*   [`dice-coefficient`](https://github.com/words/dice-coefficient)
    — sørensen–dice coefficient
*   [`levenshtein-edit-distance`](https://github.com/words/levenshtein-edit-distance)
    — levenshtein edit distance
*   [`syllable`](https://github.com/words/syllable)
    — syllable count of English words

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/lancaster-stemmer/workflows/main/badge.svg

[build]: https://github.com/words/lancaster-stemmer/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/lancaster-stemmer.svg

[coverage]: https://codecov.io/github/words/lancaster-stemmer

[downloads-badge]: https://img.shields.io/npm/dm/lancaster-stemmer.svg

[downloads]: https://www.npmjs.com/package/lancaster-stemmer

[size-badge]: https://img.shields.io/bundlephobia/minzip/lancaster-stemmer.svg

[size]: https://bundlephobia.com/result?p=lancaster-stemmer

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[npm]: https://www.npmjs.com

[license]: license

[author]: https://wooorm.com

[source]: https://web.archive.org/web/20150215002618/http://www.comp.lancs.ac.uk/computing/research/stemming/index.htm

[algos]: https://web.archive.org/web/20060819173645/http://www.comp.lancs.ac.uk/computing/research/stemming/Links/implementations.htm

[api-lancasterstemmer]: #lancasterstemmervalue-options

[api-options]: #options

[api-style]: #style
