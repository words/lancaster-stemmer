# lancaster-stemmer

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[Lancaster stemming algorithm][source].

## Install

[npm][]:

```sh
npm install lancaster-stemmer
```

## API

```js
var lancasterStemmer = require('lancaster-stemmer')

lancasterStemmer('considerations') // => 'consid'
lancasterStemmer('detestable') // => 'detest'
lancasterStemmer('vileness') // => 'vil'
lancasterStemmer('giggling') // => 'giggl'
lancasterStemmer('anxious') // => 'anxy'

// Case insensitive
lancasterStemmer('analytic') === lancasterStemmer('AnAlYtIc') // => true
```

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

## Related

*   [`stemmer`](https://github.com/words/stemmer)
    — Porter Stemmer algorithm
*   [`double-metaphone`](https://github.com/words/double-metaphone)
    — Double Metaphone implementation
*   [`soundex-code`](https://github.com/words/soundex-code)
    — Fast Soundex implementation
*   [`dice-coefficient`](https://github.com/words/dice-coefficient)
    — Sørensen–Dice coefficient
*   [`levenshtein-edit-distance`](https://github.com/words/levenshtein-edit-distance)
    — Levenshtein edit distance
*   [`syllable`](https://github.com/words/syllable)
    — Syllable count in an English word

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/lancaster-stemmer.svg

[build]: https://travis-ci.org/words/lancaster-stemmer

[coverage-badge]: https://img.shields.io/codecov/c/github/words/lancaster-stemmer.svg

[coverage]: https://codecov.io/github/words/lancaster-stemmer

[downloads-badge]: https://img.shields.io/npm/dm/lancaster-stemmer.svg

[downloads]: https://www.npmjs.com/package/lancaster-stemmer

[size-badge]: https://img.shields.io/bundlephobia/minzip/lancaster-stemmer.svg

[size]: https://bundlephobia.com/result?p=lancaster-stemmer

[npm]: https://www.npmjs.com

[license]: license

[author]: https://wooorm.com

[source]: https://web.archive.org/web/20140827005744/http://www.comp.lancs.ac.uk/computing/research/stemming/index.htm
