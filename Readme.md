# lancaster-stemmer [![Build Status](https://travis-ci.org/wooorm/lancaster-stemmer.svg?branch=master)](https://travis-ci.org/wooorm/lancaster-stemmer) [![Coverage Status](https://img.shields.io/coveralls/wooorm/lancaster-stemmer.svg)](https://coveralls.io/r/wooorm/lancaster-stemmer?branch=master)

[![browser support](https://ci.testling.com/wooorm/lancaster-stemmer.png) ](https://ci.testling.com/wooorm/lancaster-stemmer)

---

[Lancaster stemming algorithm](http://www.comp.lancs.ac.uk/computing/research/stemming/index.htm), originally designed by Chris Paice with the assistance of Gareth Husk, in JavaScript.

## Installation

NPM:
```sh
$ npm install lancaster-stemmer
```

Component.js:
```sh
$ component install wooorm/lancaster-stemmer
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

## Other Lancaster implementations

- [NaturalNode/natural](https://github.com/NaturalNode/natural) — Currently (29/6/14) contains one bugs (which I've [reported](https://github.com/NaturalNode/natural/issues/174)).
- [gruppler/paice.js](https://github.com/gruppler/paice.js) — Extends the native `String#`, and isn’t a node package.

## Benchmark

Run the benchmark yourself:

```sh
$ npm run install-benchmark # Just once of course.
$ npm run benchmark
```

On a MacBook Air, it runs about 636,000 op/s, which is about as fast as natural.

```
         lancaster-stemmer — this module
636 op/s » op/s * 1,000

         natural
611 op/s » op/s * 1,000

         paice — If you're into extending prototypes...
187 op/s » op/s * 1,000
```

## License

  MIT
