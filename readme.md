# lancaster-stemmer [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

[Lancaster stemming algorithm][source].

## API

Install:

```bash
npm install lancaster-stemmer
```

Use:

```js
var lancasterStemmer = require('lancaster-stemmer');

lancasterStemmer('considerations'); //=> 'consid'
lancasterStemmer('detestable'); //=> 'detest'
lancasterStemmer('vileness'); //=> 'vil'
lancasterStemmer('giggling'); //=> 'giggl'
lancasterStemmer('anxious'); //=> 'anxy'

/* Case insensitive */
lancasterStemmer('analytic') === lancasterStemmer('AnAlYtIc'); //=> true
```

## CLI

Install:

```sh
npm install -g lancaster-stemmer
```

Use:

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

[travis-badge]: https://img.shields.io/travis/words/lancaster-stemmer.svg

[travis]: https://travis-ci.org/words/lancaster-stemmer

[codecov-badge]: https://img.shields.io/codecov/c/github/words/lancaster-stemmer.svg

[codecov]: https://codecov.io/github/words/lancaster-stemmer

[license]: LICENSE

[author]: http://wooorm.com

[source]: http://web.archive.org/web/20140827005744/http://www.comp.lancs.ac.uk/computing/research/stemming/index.htm
