'use strict'

var exec = require('child_process').exec
var PassThrough = require('stream').PassThrough
var test = require('tape')
var pack = require('./package')
var stemmer = require('.')

test('api', function (t) {
  t.equal(
    stemmer('analytic'),
    stemmer('AnAlYtIc'),
    'should be case insensitive'
  )

  t.equal(stemmer(''), '', 'should not fail on empy inputs')

  t.notOk(/ia$/.test(stemmer('abasia'), 'should drop ia$'))

  t.notOk(stemmer('abaya').endsWith('a'), 'should drop a$')

  t.ok(/[^b]b$/.test(stemmer('ebb')), 'should transform bb$ into b')

  t.ok(stemmer('analytic').endsWith('ys'), 'should transform ytic$ into ys')

  t.notOk(stemmer('zymotic').endsWith('ic'), 'should drop ic$')

  t.ok(stemmer('franc').endsWith('nt'), 'should transform nc$ into nt')

  t.ok(/[^d]d$/.test(stemmer('add')), 'should transform dd$ into d')

  t.ok(stemmer('aeried').endsWith('y'), 'should transform ied$ into y')

  t.ok(stemmer('exceed').endsWith('cess'), 'should transform ceed$ into cess')

  t.ok(stemmer('zeed').endsWith('ee'), 'should transform eed$ into ee')

  t.notOk(stemmer('bowed').endsWith('ed'), 'should drop ed$')

  t.notOk(stemmer('boyhood').endsWith('hood'), 'should drop hood$')

  t.notOk(stemmer('brae').endsWith('e'), 'should drop e$')

  t.ok(
    stemmer('disbelief').endsWith('liev'),
    'should transform lief$ into liev'
  )

  t.notOk(stemmer('khalif').endsWith('if'), 'should drop if$')

  t.notOk(stemmer('giggling').endsWith('ing'), 'should drop ing$')

  // `es$` is also removed.
  t.ok(stemmer('intermarriages').endsWith('y'), 'should transform iag$ into y')

  t.notOk(stemmer('jetlag').endsWith('ag'), 'should drop ag$')

  t.ok(/[^g]g$/.test(stemmer('magg')), 'should transform gg$ into g')

  t.notOk(stemmer('mammoth').endsWith('th'), 'should drop th$')

  t.ok(stemmer('aguish').endsWith('ct'), 'should transform guish$ into ct')

  t.notOk(stemmer('angelfish').endsWith('ish'), 'should drop ish$')

  t.notOk(stemmer('anti').endsWith('i'), 'should drop i$')

  // The ous$ will first remove, then the transformation.
  t.ok(stemmer('anxious').endsWith('y'), 'should transform i$ into y')

  t.ok(stemmer('basij').endsWith('id'), 'should transform ij$ into id')

  // sion > j, fuj > fus.
  t.ok(stemmer('affusion').endsWith('fus'), 'should transform fuj$ into fus')

  // sion > j, uj > ud.
  t.ok(stemmer('collusion').endsWith('ud'), 'should transform uj$ into ud')

  // sion > j, oj > od.
  t.ok(stemmer('corrosion').endsWith('od'), 'should transform oj$ into od')

  // sion > j, hej > her.
  t.ok(stemmer('adhesion').endsWith('her'), 'should transform hej$ into her')

  // sion > j, verj > vert.
  t.ok(stemmer('version').endsWith('vert'), 'should transform verj$ into vert')

  // sion > j, misj > mit.
  // For some unknown reason the original code returns `misj`.
  t.ok(stemmer('mission').endsWith('mit'), 'should transform misj$ into mit')

  // sion > j, nj > nd.
  t.ok(stemmer('comprehension').endsWith('nd'), 'should transform nj$ into nd')

  t.ok(stemmer('svaraj').endsWith('s'), 'should transform j$ into s')

  t.notOk(stemmer('classifiable').endsWith('ifiabl'), 'should drop ifiabl$')

  t.ok(stemmer('compliable').endsWith('y'), 'should transform iabl$ into y')

  t.notOk(stemmer('compostable').endsWith('abl'), 'should drop abl$')

  t.notOk(stemmer('conductible').endsWith('ibl'), 'should drop ibl$')

  t.ok(stemmer('airmobile').endsWith('bl'), 'should transform bil$ into bl')

  t.ok(stemmer('curricle').endsWith('c'), 'should transform cl$ into c')

  t.ok(stemmer('beautiful').endsWith('y'), 'should transform iful$ into y')

  t.notOk(stemmer('behoveful').endsWith('ful'), 'should drop ful$')

  t.notOk(stemmer('blameful').endsWith('ul'), 'should drop ul$')

  t.notOk(stemmer('akenial').endsWith('ial'), 'should drop ial$')

  t.notOk(stemmer('annual').endsWith('ual'), 'should drop ual$')

  t.notOk(stemmer('anodal').endsWith('al'), 'should drop al$')

  t.ok(/[^l]l$/.test(stemmer('anthill')), 'should transform ll$ into l')

  t.notOk(stemmer('anthodium').endsWith('ium'), 'should drop ium$')

  t.notOk(stemmer('antirrhinum').endsWith('um'), 'should drop um$')

  t.notOk(stemmer('apism').endsWith('ism'), 'should drop ism$')

  t.ok(/[^m]m$/.test(stemmer('shtumm')), 'should transform mm$ into m')

  // Untestable, although the `j` test tests this also.
  // 'should transform sion$ into j'

  t.ok(stemmer('affluxion').endsWith('ct'), 'should transform xion$ into ct')

  t.notOk(stemmer('alation').endsWith('ion'), 'should drop ion$')

  t.notOk(stemmer('abecedarian').endsWith('ian'), 'should drop ian$')

  t.notOk(stemmer('acaridan').endsWith('an'), 'should drop an$')

  t.ok(stemmer('armozeen').endsWith('een'), 'should protect een$')

  t.notOk(stemmer('bandsmen').endsWith('en'), 'should drop en$')

  t.ok(/[^n]n$/.test(stemmer('jotunn')), 'should transform nn$ into n')

  t.notOk(stemmer('judgeship').endsWith('ship'), 'should drop ship$')

  t.ok(/[^p]p$/.test(stemmer('schlepp')), 'should transform pp$ into p')

  t.notOk(stemmer('teacher').endsWith('er'), 'should drop er$')

  t.ok(stemmer('shapewear').endsWith('ear'), 'should protect ear$')

  t.notOk(stemmer('alcazar').endsWith('ar'), 'should drop ar$')

  t.notOk(stemmer('superior').endsWith('ior'), 'should drop ior$')

  t.notOk(stemmer('advisor').endsWith('or'), 'should drop or$')

  t.notOk(stemmer('tailleur').endsWith('ur'), 'should drop ur$')

  t.ok(/[^r]r$/.test(stemmer('whirr')), 'should transform rr$ into r')

  t.ok(stemmer('accipitral').endsWith('t'), 'should transform tr$ into t')

  t.ok(stemmer('aerier').endsWith('y'), 'should transform ier$ into y')

  t.ok(stemmer('abbotcies').endsWith('y'), 'should transform ies$ into y')

  t.ok(stemmer('abiosis').endsWith('s'), 'should transform sis$ into s')

  t.notOk(stemmer('abris').endsWith('is'), 'should drop is$')

  t.notOk(stemmer('abruptness').endsWith('ness'), 'should drop ness$')

  t.ok(stemmer('abyss').endsWith('ss'), 'should protect ss$')

  t.notOk(stemmer('acetous').endsWith('ous'), 'should drop ous$')

  t.notOk(stemmer('acinus').endsWith('us'), 'should drop us$')

  t.notOk(stemmer('abacs').endsWith('s'), 'should drop s$')

  t.ok(
    stemmer('supplicat').endsWith('ply'),
    'should transform plicat$ into ply'
  )

  t.notOk(stemmer('surat').endsWith('at'), 'should drop at$')

  t.notOk(stemmer('tanglement').endsWith('ment'), 'should drop ment$')

  t.notOk(stemmer('temperament').endsWith('ent'), 'should drop ent$')

  t.notOk(stemmer('tenant').endsWith('ant'), 'should drop ant$')

  t.ok(stemmer('transcript').endsWith('rib'), 'should transform ript$ into rib')

  t.ok(
    stemmer('absorptance').endsWith('orb'),
    'should transform orpt$ into orb'
  )

  t.ok(stemmer('aeroduct').endsWith('duc'), 'should transform duct$ into duc')

  t.ok(stemmer('consumpt').endsWith('sum'), 'should transform sumpt$ into sum')

  t.ok(stemmer('discept').endsWith('ceiv'), 'should transform cept$ into ceiv')

  t.ok(stemmer('absolute').endsWith('olv'), 'should transform olut$ into olv')

  t.ok(stemmer('fantasist').endsWith('sist'), 'should protect sist$')

  t.notOk(stemmer('fashionist').endsWith('ist'), 'should drop ist$')

  t.ok(/[^t]t$/.test(stemmer('forebitt')), 'should transform tt$ into t')

  t.notOk(stemmer('antiquity').endsWith('iqu'), 'should drop iqu$')

  t.ok(stemmer('trialogue').endsWith('og'), 'should transform ogu$ into og')

  // Untestable, although the `j` test tests this also.
  // 'should transform siv$ into j'

  t.ok(stemmer('apperceive').endsWith('eiv'), 'should protect eiv$')

  t.notOk(stemmer('leitmotiv').endsWith('iv'), 'should drop iv$')

  t.ok(stemmer('amble').endsWith('bl'), 'should transform bly$ into bl')

  t.ok(stemmer('aerily').endsWith('y'), 'should transform ily$ into y')

  t.ok(stemmer('misapply').endsWith('ply'), 'should protect ply$')

  t.notOk(stemmer('miscellaneously').endsWith('ly'), 'should drop ly$')

  t.ok(stemmer('misology').endsWith('og'), 'should transform ogy$ into og')

  t.ok(stemmer('morphography').endsWith('ph'), 'should transform phy$ into ph')

  t.ok(stemmer('neurotomy').endsWith('om'), 'should transform omy$ into om')

  t.ok(stemmer('otoscopy').endsWith('op'), 'should transform opy$ into op')

  t.notOk(stemmer('outcity').endsWith('ity'), 'should drop ity$')

  t.notOk(stemmer('peripety').endsWith('ety'), 'should drop ety$')

  t.ok(stemmer('realty').endsWith('l'), 'should transform lty$ into l')

  t.notOk(stemmer('registry').endsWith('istry'), 'should drop istry$')

  t.notOk(stemmer('repetitionary').endsWith('ary'), 'should drop ary$')

  t.notOk(stemmer('repository').endsWith('ory'), 'should drop ory$')

  t.notOk(stemmer('requalify').endsWith('ify'), 'should drop ify$')

  t.ok(stemmer('bouncy').endsWith('nt'), 'should transform ncy$ into nt')

  t.notOk(stemmer('retiracy').endsWith('acy'), 'should drop acy$')

  t.notOk(stemmer('showbiz').endsWith('iz'), 'should drop iz$')

  t.ok(stemmer('agryze').endsWith('ys'), 'should transform yz$ into ys')

  t.end()
})

test('cli', function (t) {
  var input = new PassThrough()

  t.plan(7)

  exec('./cli.js considerations', function (error, stdout, stderr) {
    t.deepEqual([error, stdout, stderr], [null, 'consid\n', ''], 'one')
  })

  exec('./cli.js detestable vileness', function (error, stdout, stderr) {
    t.deepEqual([error, stdout, stderr], [null, 'detest vil\n', ''], 'two')
  })

  var subprocess = exec('./cli.js', function (error, stdout, stderr) {
    t.deepEqual([error, stdout, stderr], [null, 'detest vil\n', ''], 'stdin')
  })

  input.pipe(subprocess.stdin)
  input.write('detestable')
  setImmediate(function () {
    input.end(' vileness')
  })

  exec('./cli.js -h', function (error, stdout, stderr) {
    t.deepEqual(
      [error, /\sUsage: lancaster-stemmer/.test(stdout), stderr],
      [null, true, ''],
      '-h'
    )
  })
  exec('./cli.js --help', function (error, stdout, stderr) {
    t.deepEqual(
      [error, /\sUsage: lancaster-stemmer/.test(stdout), stderr],
      [null, true, ''],
      '--help'
    )
  })

  exec('./cli.js -v', function (error, stdout, stderr) {
    t.deepEqual([error, stdout, stderr], [null, pack.version + '\n', ''], '-v')
  })
  exec('./cli.js --version', function (error, stdout, stderr) {
    t.deepEqual(
      [error, stdout, stderr],
      [null, pack.version + '\n', ''],
      '--version'
    )
  })
})
