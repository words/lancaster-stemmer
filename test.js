import {exec} from 'node:child_process'
import fs from 'node:fs'
import {URL} from 'node:url'
import {PassThrough} from 'node:stream'
import test from 'tape'
import {lancasterStemmer as m} from './index.js'

/** @type {Object.<string, unknown>} */
const pack = JSON.parse(
  String(fs.readFileSync(new URL('package.json', import.meta.url)))
)

test('api', function (t) {
  t.equal(m('analytic'), m('AnAlYtIc'), 'should be case insensitive')

  t.equal(m(''), '', 'should not fail on empy inputs')

  t.notOk(m('abasia').endsWith('ia'), 'should drop ia$')

  t.notOk(m('abaya').endsWith('a'), 'should drop a$')

  t.ok(/[^b]b$/.test(m('ebb')), 'should transform bb$ into b')

  t.ok(m('analytic').endsWith('ys'), 'should transform ytic$ into ys')

  t.notOk(m('zymotic').endsWith('ic'), 'should drop ic$')

  t.ok(m('franc').endsWith('nt'), 'should transform nc$ into nt')

  t.ok(/[^d]d$/.test(m('add')), 'should transform dd$ into d')

  t.ok(m('aeried').endsWith('y'), 'should transform ied$ into y')

  t.ok(m('exceed').endsWith('cess'), 'should transform ceed$ into cess')

  t.ok(m('zeed').endsWith('ee'), 'should transform eed$ into ee')

  t.notOk(m('bowed').endsWith('ed'), 'should drop ed$')

  t.notOk(m('boyhood').endsWith('hood'), 'should drop hood$')

  t.notOk(m('brae').endsWith('e'), 'should drop e$')

  t.ok(m('disbelief').endsWith('liev'), 'should transform lief$ into liev')

  t.notOk(m('khalif').endsWith('if'), 'should drop if$')

  t.notOk(m('giggling').endsWith('ing'), 'should drop ing$')

  // `es$` is also removed.
  t.ok(m('intermarriages').endsWith('y'), 'should transform iag$ into y')

  t.notOk(m('jetlag').endsWith('ag'), 'should drop ag$')

  t.ok(/[^g]g$/.test(m('magg')), 'should transform gg$ into g')

  t.notOk(m('mammoth').endsWith('th'), 'should drop th$')

  t.ok(m('aguish').endsWith('ct'), 'should transform guish$ into ct')

  t.notOk(m('angelfish').endsWith('ish'), 'should drop ish$')

  t.notOk(m('anti').endsWith('i'), 'should drop i$')

  // The ous$ will first remove, then the transformation.
  t.ok(m('anxious').endsWith('y'), 'should transform i$ into y')

  t.ok(m('basij').endsWith('id'), 'should transform ij$ into id')

  // Sion > j, fuj > fus.
  t.ok(m('affusion').endsWith('fus'), 'should transform fuj$ into fus')

  // Sion > j, uj > ud.
  t.ok(m('collusion').endsWith('ud'), 'should transform uj$ into ud')

  // Sion > j, oj > od.
  t.ok(m('corrosion').endsWith('od'), 'should transform oj$ into od')

  // Sion > j, hej > her.
  t.ok(m('adhesion').endsWith('her'), 'should transform hej$ into her')

  // Sion > j, verj > vert.
  t.ok(m('version').endsWith('vert'), 'should transform verj$ into vert')

  // Sion > j, misj > mit.
  // For some unknown reason the original code returns `misj`.
  t.ok(m('mission').endsWith('mit'), 'should transform misj$ into mit')

  // Sion > j, nj > nd.
  t.ok(m('comprehension').endsWith('nd'), 'should transform nj$ into nd')

  t.ok(m('svaraj').endsWith('s'), 'should transform j$ into s')

  t.notOk(m('classifiable').endsWith('ifiabl'), 'should drop ifiabl$')

  t.ok(m('compliable').endsWith('y'), 'should transform iabl$ into y')

  t.notOk(m('compostable').endsWith('abl'), 'should drop abl$')

  t.notOk(m('conductible').endsWith('ibl'), 'should drop ibl$')

  t.ok(m('airmobile').endsWith('bl'), 'should transform bil$ into bl')

  t.ok(m('curricle').endsWith('c'), 'should transform cl$ into c')

  t.ok(m('beautiful').endsWith('y'), 'should transform iful$ into y')

  t.notOk(m('behoveful').endsWith('ful'), 'should drop ful$')

  t.notOk(m('blameful').endsWith('ul'), 'should drop ul$')

  t.notOk(m('akenial').endsWith('ial'), 'should drop ial$')

  t.notOk(m('annual').endsWith('ual'), 'should drop ual$')

  t.notOk(m('anodal').endsWith('al'), 'should drop al$')

  t.ok(/[^l]l$/.test(m('anthill')), 'should transform ll$ into l')

  t.notOk(m('anthodium').endsWith('ium'), 'should drop ium$')

  t.notOk(m('antirrhinum').endsWith('um'), 'should drop um$')

  t.notOk(m('apism').endsWith('ism'), 'should drop ism$')

  t.ok(/[^m]m$/.test(m('shtumm')), 'should transform mm$ into m')

  // Untestable, although the `j` test tests this also.
  // 'should transform sion$ into j'

  t.ok(m('affluxion').endsWith('ct'), 'should transform xion$ into ct')

  t.notOk(m('alation').endsWith('ion'), 'should drop ion$')

  t.notOk(m('abecedarian').endsWith('ian'), 'should drop ian$')

  t.notOk(m('acaridan').endsWith('an'), 'should drop an$')

  t.ok(m('armozeen').endsWith('een'), 'should protect een$')

  t.notOk(m('bandsmen').endsWith('en'), 'should drop en$')

  t.ok(/[^n]n$/.test(m('jotunn')), 'should transform nn$ into n')

  t.notOk(m('judgeship').endsWith('ship'), 'should drop ship$')

  t.ok(/[^p]p$/.test(m('schlepp')), 'should transform pp$ into p')

  t.notOk(m('teacher').endsWith('er'), 'should drop er$')

  t.ok(m('shapewear').endsWith('ear'), 'should protect ear$')

  t.notOk(m('alcazar').endsWith('ar'), 'should drop ar$')

  t.notOk(m('superior').endsWith('ior'), 'should drop ior$')

  t.notOk(m('advisor').endsWith('or'), 'should drop or$')

  t.notOk(m('tailleur').endsWith('ur'), 'should drop ur$')

  t.ok(/[^r]r$/.test(m('whirr')), 'should transform rr$ into r')

  t.ok(m('accipitral').endsWith('t'), 'should transform tr$ into t')

  t.ok(m('aerier').endsWith('y'), 'should transform ier$ into y')

  t.ok(m('abbotcies').endsWith('y'), 'should transform ies$ into y')

  t.ok(m('abiosis').endsWith('s'), 'should transform sis$ into s')

  t.notOk(m('abris').endsWith('is'), 'should drop is$')

  t.notOk(m('abruptness').endsWith('ness'), 'should drop ness$')

  t.ok(m('abyss').endsWith('ss'), 'should protect ss$')

  t.notOk(m('acetous').endsWith('ous'), 'should drop ous$')

  t.notOk(m('acinus').endsWith('us'), 'should drop us$')

  t.notOk(m('abacs').endsWith('s'), 'should drop s$')

  t.ok(m('supplicat').endsWith('ply'), 'should transform plicat$ into ply')

  t.notOk(m('surat').endsWith('at'), 'should drop at$')

  t.notOk(m('tanglement').endsWith('ment'), 'should drop ment$')

  t.notOk(m('temperament').endsWith('ent'), 'should drop ent$')

  t.notOk(m('tenant').endsWith('ant'), 'should drop ant$')

  t.ok(m('transcript').endsWith('rib'), 'should transform ript$ into rib')

  t.ok(m('absorptance').endsWith('orb'), 'should transform orpt$ into orb')

  t.ok(m('aeroduct').endsWith('duc'), 'should transform duct$ into duc')

  t.ok(m('consumpt').endsWith('sum'), 'should transform sumpt$ into sum')

  t.ok(m('discept').endsWith('ceiv'), 'should transform cept$ into ceiv')

  t.ok(m('absolute').endsWith('olv'), 'should transform olut$ into olv')

  t.ok(m('fantasist').endsWith('sist'), 'should protect sist$')

  t.notOk(m('fashionist').endsWith('ist'), 'should drop ist$')

  t.ok(/[^t]t$/.test(m('forebitt')), 'should transform tt$ into t')

  t.notOk(m('antiquity').endsWith('iqu'), 'should drop iqu$')

  t.ok(m('trialogue').endsWith('og'), 'should transform ogu$ into og')

  // Untestable, although the `j` test tests this also.
  // 'should transform siv$ into j'

  t.ok(m('apperceive').endsWith('eiv'), 'should protect eiv$')

  t.notOk(m('leitmotiv').endsWith('iv'), 'should drop iv$')

  t.ok(m('amble').endsWith('bl'), 'should transform bly$ into bl')

  t.ok(m('aerily').endsWith('y'), 'should transform ily$ into y')

  t.ok(m('misapply').endsWith('ply'), 'should protect ply$')

  t.notOk(m('miscellaneously').endsWith('ly'), 'should drop ly$')

  t.ok(m('misology').endsWith('og'), 'should transform ogy$ into og')

  t.ok(m('morphography').endsWith('ph'), 'should transform phy$ into ph')

  t.ok(m('neurotomy').endsWith('om'), 'should transform omy$ into om')

  t.ok(m('otoscopy').endsWith('op'), 'should transform opy$ into op')

  t.notOk(m('outcity').endsWith('ity'), 'should drop ity$')

  t.notOk(m('peripety').endsWith('ety'), 'should drop ety$')

  t.ok(m('realty').endsWith('l'), 'should transform lty$ into l')

  t.notOk(m('registry').endsWith('istry'), 'should drop istry$')

  t.notOk(m('repetitionary').endsWith('ary'), 'should drop ary$')

  t.notOk(m('repository').endsWith('ory'), 'should drop ory$')

  t.notOk(m('requalify').endsWith('ify'), 'should drop ify$')

  t.ok(m('bouncy').endsWith('nt'), 'should transform ncy$ into nt')

  t.notOk(m('retiracy').endsWith('acy'), 'should drop acy$')

  t.notOk(m('showbiz').endsWith('iz'), 'should drop iz$')

  t.ok(m('agryze').endsWith('ys'), 'should transform yz$ into ys')

  t.end()
})

test('cli', function (t) {
  const input = new PassThrough()

  t.plan(7)

  exec('./cli.js considerations', function (error, stdout, stderr) {
    t.deepEqual([error, stdout, stderr], [null, 'consid\n', ''], 'one')
  })

  exec('./cli.js detestable vileness', function (error, stdout, stderr) {
    t.deepEqual([error, stdout, stderr], [null, 'detest vil\n', ''], 'two')
  })

  const subprocess = exec('./cli.js', function (error, stdout, stderr) {
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
