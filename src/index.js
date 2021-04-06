/* eslint-env browser */

import {lancasterStemmer} from 'lancaster-stemmer'

var $input = document.querySelector('input')
var $output = document.querySelector('output')

$input.addEventListener('input', oninputchange)

oninputchange()

function oninputchange() {
  $output.textContent = lancasterStemmer($input.value)
}
