# lancaster-stemmer [![Build Status](https://img.shields.io/travis/wooorm/lancaster-stemmer.svg?style=flat)](https://travis-ci.org/wooorm/lancaster-stemmer) [![Coverage Status](https://img.shields.io/coveralls/wooorm/lancaster-stemmer.svg?style=flat)](https://coveralls.io/r/wooorm/lancaster-stemmer?branch=master)

[Lancaster stemming algorithm](http://web.archive.org/web/20140827005744/http://www.comp.lancs.ac.uk/computing/research/stemming/index.htm). No cruft. Real fast.

## Installation

npm:
```bash
$ npm install lancaster-stemmer
```

Component:
```bash
$ component install wooorm/lancaster-stemmer
```

Bower:
```bash
$ bower install lancaster-stemmer
```

## Usage

```js
var lancasterStemmer = require('lancaster-stemmer');

lancasterStemmer('considerations'); // consid
lancasterStemmer('detestable'); // detest
lancasterStemmer('vileness'); // vil
lancasterStemmer('giggling'); // giggl
lancasterStemmer('anxious'); // anxy

/* Case insensitive */
lancasterStemmer('analytic') === lancasterStemmer('AnAlYtIc'); // true
```

## CLI

Install:
```bash
$ npm install --global lancaster-stemmer
```

Use:
```
Usage: lancaster-stemmer [options] <word>

Lancaster stemming algorithm

Options:

  -h, --help           output usage information
  -v, --version        output version number

Usage:

# output edit distance
$ lancaster-stemmer considerations
# consid

# output edit distance from stdin
$ echo "giggling" | lancaster-stemmer
# giggl
```

## Benchmark

On a MacBook Air, it runs about 651,000 op/s.

```
           lancaster-stemmer — this module
  651 op/s » op/s * 1,000

           natural
  537 op/s » op/s * 1,000

           paice — If you're into extending prototypes...
  241 op/s » op/s * 1,000
```

## License

MIT © [Titus Wormer](http;//wooorm.com)
