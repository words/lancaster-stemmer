# lancaster-stemmer [![Build Status](https://img.shields.io/travis/wooorm/lancaster-stemmer.svg?style=flat)](https://travis-ci.org/wooorm/lancaster-stemmer) [![Coverage Status](https://img.shields.io/coveralls/wooorm/lancaster-stemmer.svg?style=flat)](https://coveralls.io/r/wooorm/lancaster-stemmer?branch=master)

[Lancaster stemming algorithm](http://www.comp.lancs.ac.uk/computing/research/stemming/index.htm). No cruft. Real fast.

## Installation

npm:
```sh
$ npm install lancaster-stemmer
```

Component:
```sh
$ component install wooorm/lancaster-stemmer
```

Bower:
```sh
$ bower install lancaster-stemmer
```

## Usage

```js
var stemmer = require('lancaster-stemmer');

stemmer('considerations'); // consid
stemmer('detestable'); // detest
stemmer('vileness'); // vil
stemmer('giggling'); // giggl
stemmer('anxious'); // anxy

/* Case insensitive */
stemmer('analytic') === stemmer('AnAlYtIc'); // true
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
