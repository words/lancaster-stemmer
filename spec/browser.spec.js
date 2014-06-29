(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var STOP, INTACT, CONTINUE, PROTECT, rules, vowels;

STOP = -1;
INTACT = 0;
CONTINUE = 1;
PROTECT = 2;
vowels = /[aeiouy]/;

rules = {
    'a' : [
        {
            'match' : 'ia',
            'replacement' : '',
            'type' : INTACT
        },
        {
            'match' : 'a',
            'replacement' : '',
            'type' : INTACT
        }
    ],
    'b' : [
        {
            'match' : 'bb',
            'replacement' : 'b',
            'type' : STOP
        }
    ],
    'c' : [
        {
            'match' : 'ytic',
            'replacement' : 'ys',
            'type' : STOP
        },
        {
            'match' : 'ic',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'nc',
            'replacement' : 'nt',
            'type' : CONTINUE
        }
    ],
    'd' : [
        {
            'match' : 'dd',
            'replacement' : 'd',
            'type' : STOP
        },
        {
            'match' : 'ied',
            'replacement' : 'y',
            'type' : CONTINUE
        },
        {
            'match' : 'ceed',
            'replacement' : 'cess',
            'type' : STOP
        },
        {
            'match' : 'eed',
            'replacement' : 'ee',
            'type' : STOP
        },
        {
            'match' : 'ed',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'hood',
            'replacement' : '',
            'type' : CONTINUE
        }
    ],
    'e' : [
        {
            'match' : 'e',
            'replacement' : '',
            'type' : CONTINUE
        }
    ],
    'f' : [
        {
            'match' : 'lief',
            'replacement' : 'liev',
            'type' : STOP
        },
        {
            'match' : 'if',
            'replacement' : '',
            'type' : CONTINUE
        }
    ],
    'g' : [
        {
            'match' : 'ing',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'iag',
            'replacement' : 'y',
            'type' : STOP
        },
        {
            'match' : 'ag',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'gg',
            'replacement' : 'g',
            'type' : STOP
        }
    ],
    'h' : [
        {
            'match' : 'th',
            'replacement' : '',
            'type' : INTACT
        },
        {
            'match' : 'guish',
            'replacement' : 'ct',
            'type' : STOP
        },
        {
            'match' : 'ish',
            'replacement' : '',
            'type' : CONTINUE
        }
    ],
    'i' : [
        {
            'match' : 'i',
            'replacement' : '',
            'type' : INTACT
        },
        {
            'match' : 'i',
            'replacement' : 'y',
            'type' : CONTINUE
        }
    ],
    'j' : [
        {
            'match' : 'ij',
            'replacement' : 'id',
            'type' : STOP
        },
        {
            'match' : 'fuj',
            'replacement' : 'fus',
            'type' : STOP
        },
        {
            'match' : 'uj',
            'replacement' : 'ud',
            'type' : STOP
        },
        {
            'match' : 'oj',
            'replacement' : 'od',
            'type' : STOP
        },
        {
            'match' : 'hej',
            'replacement' : 'her',
            'type' : STOP
        },
        {
            'match' : 'verj',
            'replacement' : 'vert',
            'type' : STOP
        },
        {
            'match' : 'misj',
            'replacement' : 'mit',
            'type' : STOP
        },
        {
            'match' : 'nj',
            'replacement' : 'nd',
            'type' : STOP
        },
        {
            'match' : 'j',
            'replacement' : 's',
            'type' : STOP
        }
    ],
    'l' : [
        {
            'match' : 'ifiabl',
            'replacement' : '',
            'type' : STOP
        },
        {
            'match' : 'iabl',
            'replacement' : 'y',
            'type' : STOP
        },
        {
            'match' : 'abl',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ibl',
            'replacement' : '',
            'type' : STOP
        },
        {
            'match' : 'bil',
            'replacement' : 'bl',
            'type' : CONTINUE
        },
        {
            'match' : 'cl',
            'replacement' : 'c',
            'type' : STOP
        },
        {
            'match' : 'iful',
            'replacement' : 'y',
            'type' : STOP
        },
        {
            'match' : 'ful',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ul',
            'replacement' : '',
            'type' : STOP
        },
        {
            'match' : 'ial',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ual',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'al',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'll',
            'replacement' : 'l',
            'type' : STOP
        }
    ],
    'm' : [
        {
            'match' : 'ium',
            'replacement' : '',
            'type' : STOP
        },
        {
            'match' : 'um',
            'replacement' : '',
            'type' : INTACT
        },
        {
            'match' : 'ism',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'mm',
            'replacement' : 'm',
            'type' : STOP
        }
    ],
    'n' : [
        {
            'match' : 'sion',
            'replacement' : 'j',
            'type' : CONTINUE
        },
        {
            'match' : 'xion',
            'replacement' : 'ct',
            'type' : STOP
        },
        {
            'match' : 'ion',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ian',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'an',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'een',
            'replacement' : '',
            'type' : PROTECT
        },
        {
            'match' : 'en',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'nn',
            'replacement' : 'n',
            'type' : STOP
        }
    ],
    'p' : [
        {
            'match' : 'ship',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'pp',
            'replacement' : 'p',
            'type' : STOP
        }
    ],
    'r' : [
        {
            'match' : 'er',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ear',
            'replacement' : '',
            'type' : PROTECT
        },
        {
            'match' : 'ar',
            'replacement' : '',
            'type' : STOP
        },
        {
            'match' : 'ior',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'or',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ur',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'rr',
            'replacement' : 'r',
            'type' : STOP
        },
        {
            'match' : 'tr',
            'replacement' : 't',
            'type' : CONTINUE
        },
        {
            'match' : 'ier',
            'replacement' : 'y',
            'type' : CONTINUE
        }
    ],
    's' : [
        {
            'match' : 'ies',
            'replacement' : 'y',
            'type' : CONTINUE
        },
        {
            'match' : 'sis',
            'replacement' : 's',
            'type' : STOP
        },
        {
            'match' : 'is',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ness',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ss',
            'replacement' : '',
            'type' : PROTECT
        },
        {
            'match' : 'ous',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'us',
            'replacement' : '',
            'type' : INTACT
        },
        {
            'match' : 's',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 's',
            'replacement' : '',
            'type' : STOP
        }
    ],
    't' : [
        {
            'match' : 'plicat',
            'replacement' : 'ply',
            'type' : STOP
        },
        {
            'match' : 'at',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ment',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ent',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ant',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ript',
            'replacement' : 'rib',
            'type' : STOP
        },
        {
            'match' : 'orpt',
            'replacement' : 'orb',
            'type' : STOP
        },
        {
            'match' : 'duct',
            'replacement' : 'duc',
            'type' : STOP
        },
        {
            'match' : 'sumpt',
            'replacement' : 'sum',
            'type' : STOP
        },
        {
            'match' : 'cept',
            'replacement' : 'ceiv',
            'type' : STOP
        },
        {
            'match' : 'olut',
            'replacement' : 'olv',
            'type' : STOP
        },
        {
            'match' : 'sist',
            'replacement' : '',
            'type' : PROTECT
        },
        {
            'match' : 'ist',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'tt',
            'replacement' : 't',
            'type' : STOP
        }
    ],
    'u' : [
        {
            'match' : 'iqu',
            'replacement' : '',
            'type' : STOP
        },
        {
            'match' : 'ogu',
            'replacement' : 'og',
            'type' : STOP
        }
    ],
    'v' : [
        {
            'match' : 'siv',
            'replacement' : 'j',
            'type' : CONTINUE
        },
        {
            'match' : 'eiv',
            'replacement' : '',
            'type' : PROTECT
        },
        {
            'match' : 'iv',
            'replacement' : '',
            'type' : CONTINUE
        }
    ],
    'y' : [
        {
            'match' : 'bly',
            'replacement' : 'bl',
            'type' : CONTINUE
        },
        {
            'match' : 'ily',
            'replacement' : 'y',
            'type' : CONTINUE
        },
        {
            'match' : 'ply',
            'replacement' : '',
            'type' : PROTECT
        },
        {
            'match' : 'ly',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ogy',
            'replacement' : 'og',
            'type' : STOP
        },
        {
            'match' : 'phy',
            'replacement' : 'ph',
            'type' : STOP
        },
        {
            'match' : 'omy',
            'replacement' : 'om',
            'type' : STOP
        },
        {
            'match' : 'opy',
            'replacement' : 'op',
            'type' : STOP
        },
        {
            'match' : 'ity',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ety',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'lty',
            'replacement' : 'l',
            'type' : STOP
        },
        {
            'match' : 'istry',
            'replacement' : '',
            'type' : STOP
        },
        {
            'match' : 'ary',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ory',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'ify',
            'replacement' : '',
            'type' : STOP
        },
        {
            'match' : 'ncy',
            'replacement' : 'nt',
            'type' : CONTINUE
        },
        {
            'match' : 'acy',
            'replacement' : '',
            'type' : CONTINUE
        }
    ],
    'z' : [
        {
            'match' : 'iz',
            'replacement' : '',
            'type' : CONTINUE
        },
        {
            'match' : 'yz',
            'replacement' : 'ys',
            'type' : STOP
        }
    ]
};

function isAcceptable(value) {
    return vowels.test(value.charAt(0)) ?
        value.length > 1 :
        value.length > 2 && vowels.test(value);
}

function applyRules(value, isIntact) {
    var ruleset, iterator, rule, next, breakpoint;

    ruleset = rules[value.charAt(value.length - 1)];

    if (!ruleset) {
        return value;
    }

    iterator = -1;

    while (rule = ruleset[++iterator]) {
        if (!isIntact && rule.type === INTACT) {
            continue;
        }

        breakpoint = value.length - rule.match.length;

        if (breakpoint < 0 || value.substr(breakpoint) !== rule.match) {
            continue;
        }

        if (rule.type === PROTECT) {
            return value;
        }

        next = value.substr(0, breakpoint) + rule.replacement;

        if (!isAcceptable(next)) {
            continue;
        }

        if (rule.type === CONTINUE) {
            return applyRules(next, false);
        }

        return next;
    }

    return value;
}

function lancasterStemmer(value) {
    return applyRules(String(value).toLowerCase(), true);
}

module.exports = lancasterStemmer;

},{}],2:[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":4}],3:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],4:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require("FWaASH"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":3,"FWaASH":6,"inherits":5}],5:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],7:[function(require,module,exports){
'use strict';

var stemmer, assert;

stemmer = require('..');
assert = require('assert');

describe('lancaster-stemmer()', function () {
    it('should be case insensitive', function () {
        assert(stemmer('analytic') === stemmer('AnAlYtIc'));
    });

    it('should not fail on empy inputs', function () {
        assert(stemmer('') === '');
    });

    it('should drop ia$', function () {
        assert(!/ia$/.test(stemmer('abasia')));
    });

    it('should drop a$', function () {
        assert(!/a$/.test(stemmer('abaya')));
    });

    it('should transform bb$ into b', function () {
        assert(/[^b]b$/.test(stemmer('ebb')));
    });

    it('should transform ytic$ into ys', function () {
        assert(/ys$/.test(stemmer('analytic')));
    });

    it('should drop ic$', function () {
        assert(!/ic$/.test(stemmer('zymotic')));
    });

    it('should transform nc$ into nt', function () {
        assert(/nt$/.test(stemmer('franc')));
    });

    it('should transform dd$ into d', function () {
        assert(/[^d]d$/.test(stemmer('add')));
    });

    it('should transform ied$ into y', function () {
        assert(/y$/.test(stemmer('aeried')));
    });

    it('should transform ceed$ into cess', function () {
        assert(/cess$/.test(stemmer('exceed')));
    });

    it('should transform eed$ into ee', function () {
        assert(/ee$/.test(stemmer('zeed')));
    });

    it('should drop ed$', function () {
        assert(!/ed$/.test(stemmer('bowed')));
    });

    it('should drop hood$', function () {
        assert(!/hood$/.test(stemmer('boyhood')));
    });

    it('should drop e$', function () {
        assert(!/e$/.test(stemmer('brae')));
    });

    it('should transform lief$ into liev', function () {
        assert(/liev$/.test(stemmer('disbelief')));
    });

    it('should drop if$', function () {
        assert(!/if$/.test(stemmer('khalif')));
    });

    it('should drop ing$', function () {
        assert(!/ing$/.test(stemmer('giggling')));
    });

    it('should transform iag$ into y', function () {
        /* `es$` is also removed */
        assert(/y$/.test(stemmer('intermarriages')));
    });

    it('should drop ag$', function () {
        assert(!/ag$/.test(stemmer('jetlag')));
    });

    it('should transform gg$ into g', function () {
        assert(/[^g]g$/.test(stemmer('magg')));
    });

    it('should drop th$', function () {
        assert(!/th$/.test(stemmer('mammoth')));
    });

    it('should transform guish$ into ct', function () {
        assert(/ct$/.test(stemmer('aguish')));
    });

    it('should drop ish$', function () {
        assert(!/ish$/.test(stemmer('angelfish')));
    });

    it('should drop i$', function () {
        assert(!/i$/.test(stemmer('anti')));
    });

    it('should transform i$ into y', function () {
        /* The ous$ will first remove, then the transformation */
        assert(/y$/.test(stemmer('anxious')));
    });

    it('should transform ij$ into id', function () {
        assert(/id$/.test(stemmer('basij')));
    });

    it('should transform fuj$ into fus', function () {
        /*sion > j, fuj > fus*/
        assert(/fus$/.test(stemmer('affusion')));
    });

    it('should transform uj$ into ud', function () {
        /*sion > j, uj > ud*/
        assert(/ud$/.test(stemmer('collusion')));
    });

    it('should transform oj$ into od', function () {
        /*sion > j, oj > od*/
        assert(/od$/.test(stemmer('corrosion')));
    });

    it('should transform hej$ into her', function () {
        /*sion > j, hej > her*/
        assert(/her$/.test(stemmer('adhesion')));
    });

    it('should transform verj$ into vert', function () {
        /* sion > j, verj > vert*/
        assert(/vert$/.test(stemmer('version')));
    });

    it('should transform misj$ into mit', function () {
        /* sion > j, misj > mit*/
        /* For some unknown reason the original code returns `misj` */
        assert(/mit$/.test(stemmer('mission')));
    });

    it('should transform nj$ into nd', function () {
        /* sion > j, nj > nd*/
        assert(/nd$/.test(stemmer('comprehension')));
    });

    it('should transform j$ into s', function () {
        assert(/s$/.test(stemmer('svaraj')));
    });

    it('should drop ifiabl$', function () {
        assert(!/ifiabl$/.test(stemmer('classifiable')));
    });

    it('should transform iabl$ into y', function () {
        assert(/y$/.test(stemmer('compliable')));
    });

    it('should drop abl$', function () {
        assert(!/abl$/.test(stemmer('compostable')));
    });

    it('should drop ibl$', function () {
        assert(!/ibl$/.test(stemmer('conductible')));
    });

    it('should transform bil$ into bl', function () {
        assert(/bl$/.test(stemmer('airmobile')));
    });

    it('should transform cl$ into c', function () {
        assert(/c$/.test(stemmer('curricle')));
    });

    it('should transform iful$ into y', function () {
        assert(/y$/.test(stemmer('beautiful')));
    });

    it('should drop ful$', function () {
        assert(!/ful$/.test(stemmer('behoveful')));
    });

    it('should drop ul$', function () {
        assert(!/ul$/.test(stemmer('blameful')));
    });

    it('should drop ial$', function () {
        assert(!/ial$/.test(stemmer('akenial')));
    });

    it('should drop ual$', function () {
        assert(!/ual$/.test(stemmer('annual')));
    });

    it('should drop al$', function () {
        assert(!/al$/.test(stemmer('anodal')));
    });

    it('should transform ll$ into l', function () {
        assert(/[^l]l$/.test(stemmer('anthill')));
    });

    it('should drop ium$', function () {
        assert(!/ium$/.test(stemmer('anthodium')));
    });

    it('should drop um$', function () {
        assert(!/um$/.test(stemmer('antirrhinum')));
    });

    it('should drop ism$', function () {
        assert(!/ism$/.test(stemmer('apism')));
    });

    it('should transform mm$ into m', function () {
        assert(/[^m]m$/.test(stemmer('shtumm')));
    });

    it('should transform sion$ into j', function () {
        /* untestable, although the `j` tests also test this */
    });

    it('should transform xion$ into ct', function () {
        assert(/ct$/.test(stemmer('affluxion')));
    });

    it('should drop ion$', function () {
        assert(!/ion$/.test(stemmer('alation')));
    });

    it('should drop ian$', function () {
        assert(!/ian$/.test(stemmer('abecedarian')));
    });

    it('should drop an$', function () {
        assert(!/an$/.test(stemmer('acaridan')));
    });

    it('should protect een$', function () {
        assert(/een$/.test(stemmer('armozeen')));
    });

    it('should drop en$', function () {
        assert(!/en$/.test(stemmer('bandsmen')));
    });

    it('should transform nn$ into n', function () {
        assert(/[^n]n$/.test(stemmer('jotunn')));
    });

    it('should drop ship$', function () {
        assert(!/ship$/.test(stemmer('judgeship')));
    });

    it('should transform pp$ into p', function () {
        assert(/[^p]p$/.test(stemmer('schlepp')));
    });

    it('should drop er$', function () {
        assert(!/er$/.test(stemmer('teacher')));
    });

    it('should protect ear$', function () {
        assert(/ear$/.test(stemmer('shapewear')));
    });

    it('should drop ar$', function () {
        assert(!/ar$/.test(stemmer('alcazar')));
    });

    it('should drop ior$', function () {
        assert(!/ior$/.test(stemmer('superior')));
    });

    it('should drop or$', function () {
        assert(!/or$/.test(stemmer('advisor')));
    });

    it('should drop ur$', function () {
        assert(!/ur$/.test(stemmer('tailleur')));
    });

    it('should transform rr$ into r', function () {
        assert(/[^r]r$/.test(stemmer('whirr')));
    });

    it('should transform tr$ into t', function () {
        assert(/t$/.test(stemmer('accipitral')));
    });

    it('should transform ier$ into y', function () {
        assert(/y$/.test(stemmer('aerier')));
    });

    it('should transform ies$ into y', function () {
        assert(/y$/.test(stemmer('abbotcies')));
    });

    it('should transform sis$ into s', function () {
        assert(/s$/.test(stemmer('abiosis')));
    });

    it('should drop is$', function () {
        assert(!/is$/.test(stemmer('abris')));
    });

    it('should drop ness$', function () {
        assert(!/ness$/.test(stemmer('abruptness')));
    });

    it('should protect ss$', function () {
        assert(/ss$/.test(stemmer('abyss')));
    });

    it('should drop ous$', function () {
        assert(!/ous$/.test(stemmer('acetous')));
    });

    it('should drop us$', function () {
        assert(!/us$/.test(stemmer('acinus')));
    });

    it('should drop s$', function () {
        assert(!/s$/.test(stemmer('abacs')));
    });

    it('should transform plicat$ into ply', function () {
        assert(/ply$/.test(stemmer('supplicat')));
    });

    it('should drop at$', function () {
        assert(!/at$/.test(stemmer('surat')));
    });

    it('should drop ment$', function () {
        assert(!/ment$/.test(stemmer('tanglement')));
    });

    it('should drop ent$', function () {
        assert(!/ent$/.test(stemmer('temperament')));
    });

    it('should drop ant$', function () {
        assert(!/ant$/.test(stemmer('tenant')));
    });

    it('should transform ript$ into rib', function () {
        assert(/rib$/.test(stemmer('transcript')));
    });

    it('should transform orpt$ into orb', function () {
        assert(/orb$/.test(stemmer('absorptance')));
    });

    it('should transform duct$ into duc', function () {
        assert(/duc$/.test(stemmer('aeroduct')));
    });

    it('should transform sumpt$ into sum', function () {
        assert(/sum$/.test(stemmer('consumpt')));
    });

    it('should transform cept$ into ceiv', function () {
        assert(/ceiv$/.test(stemmer('discept')));
    });

    it('should transform olut$ into olv', function () {
        assert(/olv$/.test(stemmer('absolute')));
    });

    it('should protect sist$', function () {
        assert(/sist$/.test(stemmer('fantasist')));
    });

    it('should drop ist$', function () {
        assert(!/ist$/.test(stemmer('fashionist')));
    });

    it('should transform tt$ into t', function () {
        assert(/[^t]t$/.test(stemmer('forebitt')));
    });

    it('should drop iqu$', function () {
        assert(!/iqu$/.test(stemmer('antiquity')));
    });

    it('should transform ogu$ into og', function () {
        assert(/og$/.test(stemmer('trialogue')));
    });

    it('should transform siv$ into j', function () {
        /* untestable, although the `j` tests also test this */
    });

    it('should protect eiv$', function () {
        assert(/eiv$/.test(stemmer('apperceive')));
    });

    it('should drop iv$', function () {
        assert(!/iv$/.test(stemmer('leitmotiv')));
    });

    it('should transform bly$ into bl', function () {
        assert(/bl$/.test(stemmer('amble')));
    });

    it('should transform ily$ into y', function () {
        assert(/y$/.test(stemmer('aerily')));
    });

    it('should protect ply$', function () {
        assert(/ply$/.test(stemmer('misapply')));
    });

    it('should drop ly$', function () {
        assert(!/ly$/.test(stemmer('miscellaneously')));
    });

    it('should transform ogy$ into og', function () {
        assert(/og$/.test(stemmer('misology')));
    });

    it('should transform phy$ into ph', function () {
        assert(/ph$/.test(stemmer('morphography')));
    });

    it('should transform omy$ into om', function () {
        assert(/om$/.test(stemmer('neurotomy')));
    });

    it('should transform opy$ into op', function () {
        assert(/op$/.test(stemmer('otoscopy')));
    });

    it('should drop ity$', function () {
        assert(!/ity$/.test(stemmer('outcity')));
    });

    it('should drop ety$', function () {
        assert(!/ety$/.test(stemmer('peripety')));
    });

    it('should transform lty$ into l', function () {
        assert(/l$/.test(stemmer('realty')));
    });

    it('should drop istry$', function () {
        assert(!/istry$/.test(stemmer('registry')));
    });

    it('should drop ary$', function () {
        assert(!/ary$/.test(stemmer('repetitionary')));
    });

    it('should drop ory$', function () {
        assert(!/ory$/.test(stemmer('repository')));
    });

    it('should drop ify$', function () {
        assert(!/ify$/.test(stemmer('requalify')));
    });

    it('should transform ncy$ into nt', function () {
        assert(/nt$/.test(stemmer('bouncy')));
    });

    it('should drop acy$', function () {
        assert(!/acy$/.test(stemmer('retiracy')));
    });

    it('should drop iz$', function () {
        assert(!/iz$/.test(stemmer('showbiz')));
    });

    it('should transform yz$ into ys', function () {
        assert(/ys$/.test(stemmer('agryze')));
    });
});

},{"..":1,"assert":2}]},{},[7])