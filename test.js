/* *
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module lancaster-stemmer
 * @fileoverview Test suite for `lancaster-stemmer`.
 */

'use strict';

/* Dependencies. */
var PassThrough = require('stream').PassThrough;
var test = require('tape');
var execa = require('execa');
var version = require('./package').version;
var stemmer = require('./');

/* API. */
test('api', function (t) {
  t.equal(stemmer('analytic'), stemmer('AnAlYtIc'), 'should be case insensitive');

  t.equal(stemmer(''), '', 'should not fail on empy inputs');

  t.notOk(/ia$/.test(stemmer('abasia'), 'should drop ia$'));

  t.notOk(/a$/.test(stemmer('abaya')), 'should drop a$');

  t.ok(/[^b]b$/.test(stemmer('ebb')), 'should transform bb$ into b');

  t.ok(/ys$/.test(stemmer('analytic')), 'should transform ytic$ into ys');

  t.notOk(/ic$/.test(stemmer('zymotic')), 'should drop ic$');

  t.ok(/nt$/.test(stemmer('franc')), 'should transform nc$ into nt');

  t.ok(/[^d]d$/.test(stemmer('add')), 'should transform dd$ into d');

  t.ok(/y$/.test(stemmer('aeried')), 'should transform ied$ into y');

  t.ok(/cess$/.test(stemmer('exceed')), 'should transform ceed$ into cess');

  t.ok(/ee$/.test(stemmer('zeed')), 'should transform eed$ into ee');

  t.notOk(/ed$/.test(stemmer('bowed')), 'should drop ed$');

  t.notOk(/hood$/.test(stemmer('boyhood')), 'should drop hood$');

  t.notOk(/e$/.test(stemmer('brae')), 'should drop e$');

  t.ok(/liev$/.test(stemmer('disbelief')), 'should transform lief$ into liev');

  t.notOk(/if$/.test(stemmer('khalif')), 'should drop if$');

  t.notOk(/ing$/.test(stemmer('giggling')), 'should drop ing$');

  /* `es$` is also removed */
  t.ok(/y$/.test(stemmer('intermarriages')), 'should transform iag$ into y');

  t.notOk(/ag$/.test(stemmer('jetlag')), 'should drop ag$');

  t.ok(/[^g]g$/.test(stemmer('magg')), 'should transform gg$ into g');

  t.notOk(/th$/.test(stemmer('mammoth')), 'should drop th$');

  t.ok(/ct$/.test(stemmer('aguish')), 'should transform guish$ into ct');

  t.notOk(/ish$/.test(stemmer('angelfish')), 'should drop ish$');

  t.notOk(/i$/.test(stemmer('anti')), 'should drop i$');

  /* The ous$ will first remove, then the transformation */
  t.ok(/y$/.test(stemmer('anxious')), 'should transform i$ into y');

  t.ok(/id$/.test(stemmer('basij')), 'should transform ij$ into id');

  /* sion > j, fuj > fus */
  t.ok(/fus$/.test(stemmer('affusion')), 'should transform fuj$ into fus');

  /* sion > j, uj > ud */
  t.ok(/ud$/.test(stemmer('collusion')), 'should transform uj$ into ud');

  /* sion > j, oj > od */
  t.ok(/od$/.test(stemmer('corrosion')), 'should transform oj$ into od');

  /* sion > j, hej > her */
  t.ok(/her$/.test(stemmer('adhesion')), 'should transform hej$ into her');

  /* sion > j, verj > vert */
  t.ok(/vert$/.test(stemmer('version')), 'should transform verj$ into vert');

  /* sion > j, misj > mit */
  /* For some unknown reason the original code returns `misj` */
  t.ok(/mit$/.test(stemmer('mission')), 'should transform misj$ into mit');

  /* sion > j, nj > nd */
  t.ok(/nd$/.test(stemmer('comprehension')), 'should transform nj$ into nd');

  t.ok(/s$/.test(stemmer('svaraj')), 'should transform j$ into s');

  t.notOk(/ifiabl$/.test(stemmer('classifiable')), 'should drop ifiabl$');

  t.ok(/y$/.test(stemmer('compliable')), 'should transform iabl$ into y');

  t.notOk(/abl$/.test(stemmer('compostable')), 'should drop abl$');

  t.notOk(/ibl$/.test(stemmer('conductible')), 'should drop ibl$');

  t.ok(/bl$/.test(stemmer('airmobile')), 'should transform bil$ into bl');

  t.ok(/c$/.test(stemmer('curricle')), 'should transform cl$ into c');

  t.ok(/y$/.test(stemmer('beautiful')), 'should transform iful$ into y');

  t.notOk(/ful$/.test(stemmer('behoveful')), 'should drop ful$');

  t.notOk(/ul$/.test(stemmer('blameful')), 'should drop ul$');

  t.notOk(/ial$/.test(stemmer('akenial')), 'should drop ial$');

  t.notOk(/ual$/.test(stemmer('annual')), 'should drop ual$');

  t.notOk(/al$/.test(stemmer('anodal')), 'should drop al$');

  t.ok(/[^l]l$/.test(stemmer('anthill')), 'should transform ll$ into l');

  t.notOk(/ium$/.test(stemmer('anthodium')), 'should drop ium$');

  t.notOk(/um$/.test(stemmer('antirrhinum')), 'should drop um$');

  t.notOk(/ism$/.test(stemmer('apism')), 'should drop ism$');

  t.ok(/[^m]m$/.test(stemmer('shtumm')), 'should transform mm$ into m');

  /* untestable, although the `j` tests also test this */
  // 'should transform sion$ into j'

  t.ok(/ct$/.test(stemmer('affluxion')), 'should transform xion$ into ct');

  t.notOk(/ion$/.test(stemmer('alation')), 'should drop ion$');

  t.notOk(/ian$/.test(stemmer('abecedarian')), 'should drop ian$');

  t.notOk(/an$/.test(stemmer('acaridan')), 'should drop an$');

  t.ok(/een$/.test(stemmer('armozeen')), 'should protect een$');

  t.notOk(/en$/.test(stemmer('bandsmen')), 'should drop en$');

  t.ok(/[^n]n$/.test(stemmer('jotunn')), 'should transform nn$ into n');

  t.notOk(/ship$/.test(stemmer('judgeship')), 'should drop ship$');

  t.ok(/[^p]p$/.test(stemmer('schlepp')), 'should transform pp$ into p');

  t.notOk(/er$/.test(stemmer('teacher')), 'should drop er$');

  t.ok(/ear$/.test(stemmer('shapewear')), 'should protect ear$');

  t.notOk(/ar$/.test(stemmer('alcazar')), 'should drop ar$');

  t.notOk(/ior$/.test(stemmer('superior')), 'should drop ior$');

  t.notOk(/or$/.test(stemmer('advisor')), 'should drop or$');

  t.notOk(/ur$/.test(stemmer('tailleur')), 'should drop ur$');

  t.ok(/[^r]r$/.test(stemmer('whirr')), 'should transform rr$ into r');

  t.ok(/t$/.test(stemmer('accipitral')), 'should transform tr$ into t');

  t.ok(/y$/.test(stemmer('aerier')), 'should transform ier$ into y');

  t.ok(/y$/.test(stemmer('abbotcies')), 'should transform ies$ into y');

  t.ok(/s$/.test(stemmer('abiosis')), 'should transform sis$ into s');

  t.notOk(/is$/.test(stemmer('abris')), 'should drop is$');

  t.notOk(/ness$/.test(stemmer('abruptness')), 'should drop ness$');

  t.ok(/ss$/.test(stemmer('abyss')), 'should protect ss$');

  t.notOk(/ous$/.test(stemmer('acetous')), 'should drop ous$');

  t.notOk(/us$/.test(stemmer('acinus')), 'should drop us$');

  t.notOk(/s$/.test(stemmer('abacs')), 'should drop s$');

  t.ok(/ply$/.test(stemmer('supplicat')), 'should transform plicat$ into ply');

  t.notOk(/at$/.test(stemmer('surat')), 'should drop at$');

  t.notOk(/ment$/.test(stemmer('tanglement')), 'should drop ment$');

  t.notOk(/ent$/.test(stemmer('temperament')), 'should drop ent$');

  t.notOk(/ant$/.test(stemmer('tenant')), 'should drop ant$');

  t.ok(/rib$/.test(stemmer('transcript')), 'should transform ript$ into rib');

  t.ok(/orb$/.test(stemmer('absorptance')), 'should transform orpt$ into orb');

  t.ok(/duc$/.test(stemmer('aeroduct')), 'should transform duct$ into duc');

  t.ok(/sum$/.test(stemmer('consumpt')), 'should transform sumpt$ into sum');

  t.ok(/ceiv$/.test(stemmer('discept')), 'should transform cept$ into ceiv');

  t.ok(/olv$/.test(stemmer('absolute')), 'should transform olut$ into olv');

  t.ok(/sist$/.test(stemmer('fantasist')), 'should protect sist$');

  t.notOk(/ist$/.test(stemmer('fashionist')), 'should drop ist$');

  t.ok(/[^t]t$/.test(stemmer('forebitt')), 'should transform tt$ into t');

  t.notOk(/iqu$/.test(stemmer('antiquity')), 'should drop iqu$');

  t.ok(/og$/.test(stemmer('trialogue')), 'should transform ogu$ into og');

  /* untestable, although the `j` tests also test this */
  // 'should transform siv$ into j'

  t.ok(/eiv$/.test(stemmer('apperceive')), 'should protect eiv$');

  t.notOk(/iv$/.test(stemmer('leitmotiv')), 'should drop iv$');

  t.ok(/bl$/.test(stemmer('amble')), 'should transform bly$ into bl');

  t.ok(/y$/.test(stemmer('aerily')), 'should transform ily$ into y');

  t.ok(/ply$/.test(stemmer('misapply')), 'should protect ply$');

  t.notOk(/ly$/.test(stemmer('miscellaneously')), 'should drop ly$');

  t.ok(/og$/.test(stemmer('misology')), 'should transform ogy$ into og');

  t.ok(/ph$/.test(stemmer('morphography')), 'should transform phy$ into ph');

  t.ok(/om$/.test(stemmer('neurotomy')), 'should transform omy$ into om');

  t.ok(/op$/.test(stemmer('otoscopy')), 'should transform opy$ into op');

  t.notOk(/ity$/.test(stemmer('outcity')), 'should drop ity$');

  t.notOk(/ety$/.test(stemmer('peripety')), 'should drop ety$');

  t.ok(/l$/.test(stemmer('realty')), 'should transform lty$ into l');

  t.notOk(/istry$/.test(stemmer('registry')), 'should drop istry$');

  t.notOk(/ary$/.test(stemmer('repetitionary')), 'should drop ary$');

  t.notOk(/ory$/.test(stemmer('repository')), 'should drop ory$');

  t.notOk(/ify$/.test(stemmer('requalify')), 'should drop ify$');

  t.ok(/nt$/.test(stemmer('bouncy')), 'should transform ncy$ into nt');

  t.notOk(/acy$/.test(stemmer('retiracy')), 'should drop acy$');

  t.notOk(/iz$/.test(stemmer('showbiz')), 'should drop iz$');

  t.ok(/ys$/.test(stemmer('agryze')), 'should transform yz$ into ys');

  t.end();
});

/* CLI. */
test('cli', function (t) {
  var input = new PassThrough();

  t.plan(7);

  execa.stdout('./cli.js', ['considerations']).then(function (result) {
    t.equal(result, 'consid', 'argument');
  });

  execa.stdout('./cli.js', ['detestable', 'vileness']).then(function (result) {
    t.equal(result, 'detest vil', 'arguments');
  });

  execa.stdout('./cli.js', {input: input}).then(function (result) {
    t.equal(result, 'detest vil', 'stdin');
  });

  input.write('detestable');

  setImmediate(function () {
    input.end(' vileness');
  });

  ['-h', '--help'].forEach(function (flag) {
    execa.stdout('./cli.js', [flag]).then(function (result) {
      t.ok(/\s+Usage: lancaster-stemmer/.test(result), flag);
    });
  });

  ['-v', '--version'].forEach(function (flag) {
    execa.stdout('./cli.js', [flag]).then(function (result) {
      t.equal(result, version, flag);
    });
  });
});
