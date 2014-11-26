#!/usr/bin/env node
'use strict';

/**
 * Dependencies.
 */

var lancasterStemmer,
    pack;

pack = require('./package.json');
lancasterStemmer = require('./');

/**
 * Arguments.
 */

var argv;

argv = process.argv.slice(2);

/**
 * Help.
 */

function help() {
    console.log([
        '',
        'Usage: lancaster-stemmer [options] string',
        '',
        'Options:',
        '',
        '  -h, --help           output usage information',
        '  -v, --version        output version number',
        '',
        'Usage:',
        '',
        '# output stem of given value',
        '$ lancaster-stemmer considerations',
        '# consid',
        '',
        '# output stem of stdin',
        '$ echo "giggling" | lancaster-stemmer',
        '# giggl'
    ].join('\n  ') + '\n');
}

/**
 * Program.
 */

if (
    argv.indexOf('--help') === 0 ||
    argv.indexOf('-h') === 0
) {
    help();
} else if (
    argv.indexOf('--version') === 0 ||
    argv.indexOf('-v') === 0
) {
    console.log(pack.version);
} else if (argv.length === 1) {
    console.log(lancasterStemmer(argv[0]));
} else if (argv.length) {
    help();
} else {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (data) {
        console.log(lancasterStemmer(data.trim()));
    });
}
