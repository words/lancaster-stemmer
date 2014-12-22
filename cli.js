#!/usr/bin/env node
'use strict';

/*
 * Dependencies.
 */

var lancasterStemmer,
    pack;

pack = require('./package.json');
lancasterStemmer = require('./');

/*
 * Detect if a value is expected to be piped in.
 */

var expextPipeIn;

expextPipeIn = !process.stdin.isTTY;

/*
 * Arguments.
 */

var argv;

argv = process.argv.slice(2);

/*
 * Command.
 */

var command;

command = Object.keys(pack.bin)[0];

/**
 * Help.
 *
 * @return {string}
 */
function help() {
    return [
        '',
        'Usage: ' + command + ' [options] <word>',
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
        '# output edit distance',
        '$ ' + command + ' considerations',
        '# ' + lancasterStemmer('considerations'),
        '',
        '# output edit distance from stdin',
        '$ echo "giggling" | ' + command,
        '# ' + lancasterStemmer('giggling'),
        ''
    ].join('\n  ') + '\n';
}

/**
 * Get the edit distance for a list containing one word.
 *
 * @param {Array.<string>} values
 */
function getStem(values) {
    if (values.length === 1) {
        console.log(lancasterStemmer(values[0]));
    } else {
        process.stderr.write(help());
        process.exit(1);
    }
}

/*
 * Program.
 */

if (
    argv.indexOf('--help') !== -1 ||
    argv.indexOf('-h') !== -1
) {
    console.log(help());
} else if (
    argv.indexOf('--version') !== -1 ||
    argv.indexOf('-v') !== -1
) {
    console.log(pack.version);
} else if (argv.length) {
    getStem(argv.join(' ').split(/\s+/g));
} else if (!expextPipeIn) {
    getStem([]);
} else {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (data) {
        getStem(data.trim().split(/\s+/g));
    });
}
