import assert from 'node:assert/strict'
import cp from 'node:child_process'
import fs from 'node:fs'
import util from 'node:util'
import {PassThrough} from 'node:stream'
import test from 'node:test'
import {lancasterStemmer as m} from './index.js'

const exec = util.promisify(cp.exec)

/** @type {Record<string, unknown>} */
const pack = JSON.parse(
  String(fs.readFileSync(new URL('package.json', import.meta.url)))
)

test('api', function () {
  assert.equal(m('analytic'), m('AnAlYtIc'), 'should be case insensitive')

  assert.equal(m(''), '', 'should not fail on empy inputs')

  assert.ok(!m('abasia').endsWith('ia'), 'should drop ia$')

  assert.ok(!m('abaya').endsWith('a'), 'should drop a$')

  assert.ok(/[^b]b$/.test(m('ebb')), 'should transform bb$ into b')

  assert.ok(m('analytic').endsWith('ys'), 'should transform ytic$ into ys')

  assert.ok(!m('zymotic').endsWith('ic'), 'should drop ic$')

  assert.ok(m('franc').endsWith('nt'), 'should transform nc$ into nt')

  assert.ok(/[^d]d$/.test(m('add')), 'should transform dd$ into d')

  assert.ok(m('aeried').endsWith('y'), 'should transform ied$ into y')

  assert.ok(m('exceed').endsWith('cess'), 'should transform ceed$ into cess')

  assert.ok(m('zeed').endsWith('ee'), 'should transform eed$ into ee')

  assert.ok(!m('bowed').endsWith('ed'), 'should drop ed$')

  assert.ok(!m('boyhood').endsWith('hood'), 'should drop hood$')

  assert.ok(!m('brae').endsWith('e'), 'should drop e$')

  assert.ok(m('disbelief').endsWith('liev'), 'should transform lief$ into liev')

  assert.ok(!m('khalif').endsWith('if'), 'should drop if$')

  assert.ok(!m('giggling').endsWith('ing'), 'should drop ing$')

  // `es$` is also removed.
  assert.ok(m('intermarriages').endsWith('y'), 'should transform iag$ into y')

  assert.ok(!m('jetlag').endsWith('ag'), 'should drop ag$')

  assert.ok(/[^g]g$/.test(m('magg')), 'should transform gg$ into g')

  assert.ok(!m('mammoth').endsWith('th'), 'should drop th$')

  assert.ok(m('aguish').endsWith('ct'), 'should transform guish$ into ct')

  assert.ok(!m('angelfish').endsWith('ish'), 'should drop ish$')

  assert.ok(!m('anti').endsWith('i'), 'should drop i$')

  // The ous$ will first remove, then the transformation.
  assert.ok(m('anxious').endsWith('y'), 'should transform i$ into y')

  assert.ok(m('basij').endsWith('id'), 'should transform ij$ into id')

  // Sion > j, fuj > fus.
  assert.ok(m('affusion').endsWith('fus'), 'should transform fuj$ into fus')

  // Sion > j, uj > ud.
  assert.ok(m('collusion').endsWith('ud'), 'should transform uj$ into ud')

  // Sion > j, oj > od.
  assert.ok(m('corrosion').endsWith('od'), 'should transform oj$ into od')

  // Sion > j, hej > her.
  assert.ok(m('adhesion').endsWith('her'), 'should transform hej$ into her')

  // Sion > j, verj > vert.
  assert.ok(m('version').endsWith('vert'), 'should transform verj$ into vert')

  // Sion > j, misj > mit.
  // For some unknown reason the original code returns `misj`.
  assert.ok(m('mission').endsWith('mit'), 'should transform misj$ into mit')

  // Sion > j, nj > nd.
  assert.ok(m('comprehension').endsWith('nd'), 'should transform nj$ into nd')

  assert.ok(m('svaraj').endsWith('s'), 'should transform j$ into s')

  assert.ok(!m('classifiable').endsWith('ifiabl'), 'should drop ifiabl$')

  assert.ok(m('compliable').endsWith('y'), 'should transform iabl$ into y')

  assert.ok(!m('compostable').endsWith('abl'), 'should drop abl$')

  assert.ok(!m('conductible').endsWith('ibl'), 'should drop ibl$')

  assert.ok(m('airmobile').endsWith('bl'), 'should transform bil$ into bl')

  assert.ok(m('curricle').endsWith('c'), 'should transform cl$ into c')

  assert.ok(m('beautiful').endsWith('y'), 'should transform iful$ into y')

  assert.ok(!m('behoveful').endsWith('ful'), 'should drop ful$')

  assert.ok(!m('blameful').endsWith('ul'), 'should drop ul$')

  assert.ok(!m('akenial').endsWith('ial'), 'should drop ial$')

  assert.ok(!m('annual').endsWith('ual'), 'should drop ual$')

  assert.ok(!m('anodal').endsWith('al'), 'should drop al$')

  assert.ok(/[^l]l$/.test(m('anthill')), 'should transform ll$ into l')

  assert.ok(!m('anthodium').endsWith('ium'), 'should drop ium$')

  assert.ok(!m('antirrhinum').endsWith('um'), 'should drop um$')

  assert.ok(!m('apism').endsWith('ism'), 'should drop ism$')

  assert.ok(/[^m]m$/.test(m('shtumm')), 'should transform mm$ into m')

  // Untestable, although the `j` test tests this also.
  // 'should transform sion$ into j'

  assert.ok(m('affluxion').endsWith('ct'), 'should transform xion$ into ct')

  assert.ok(!m('alation').endsWith('ion'), 'should drop ion$')

  assert.ok(!m('abecedarian').endsWith('ian'), 'should drop ian$')

  assert.ok(!m('acaridan').endsWith('an'), 'should drop an$')

  assert.ok(m('armozeen').endsWith('een'), 'should protect een$')

  assert.ok(!m('bandsmen').endsWith('en'), 'should drop en$')

  assert.ok(/[^n]n$/.test(m('jotunn')), 'should transform nn$ into n')

  assert.ok(!m('judgeship').endsWith('ship'), 'should drop ship$')

  assert.ok(/[^p]p$/.test(m('schlepp')), 'should transform pp$ into p')

  assert.ok(!m('teacher').endsWith('er'), 'should drop er$')

  assert.ok(m('shapewear').endsWith('ear'), 'should protect ear$')

  assert.ok(!m('alcazar').endsWith('ar'), 'should drop ar$')

  assert.ok(!m('superior').endsWith('ior'), 'should drop ior$')

  assert.ok(!m('advisor').endsWith('or'), 'should drop or$')

  assert.ok(!m('tailleur').endsWith('ur'), 'should drop ur$')

  assert.ok(/[^r]r$/.test(m('whirr')), 'should transform rr$ into r')

  assert.ok(m('accipitral').endsWith('t'), 'should transform tr$ into t')

  assert.ok(m('aerier').endsWith('y'), 'should transform ier$ into y')

  assert.ok(m('abbotcies').endsWith('y'), 'should transform ies$ into y')

  assert.ok(m('abiosis').endsWith('s'), 'should transform sis$ into s')

  assert.ok(!m('abris').endsWith('is'), 'should drop is$')

  assert.ok(!m('abruptness').endsWith('ness'), 'should drop ness$')

  assert.ok(m('abyss').endsWith('ss'), 'should protect ss$')

  assert.ok(!m('acetous').endsWith('ous'), 'should drop ous$')

  assert.ok(!m('acinus').endsWith('us'), 'should drop us$')

  assert.ok(!m('abacs').endsWith('s'), 'should drop s$')

  assert.ok(m('supplicat').endsWith('ply'), 'should transform plicat$ into ply')

  assert.ok(!m('surat').endsWith('at'), 'should drop at$')

  assert.ok(!m('tanglement').endsWith('ment'), 'should drop ment$')

  assert.ok(!m('temperament').endsWith('ent'), 'should drop ent$')

  assert.ok(!m('tenant').endsWith('ant'), 'should drop ant$')

  assert.ok(m('transcript').endsWith('rib'), 'should transform ript$ into rib')

  assert.ok(m('absorptance').endsWith('orb'), 'should transform orpt$ into orb')

  assert.ok(m('aeroduct').endsWith('duc'), 'should transform duct$ into duc')

  assert.ok(m('consumpt').endsWith('sum'), 'should transform sumpt$ into sum')

  assert.ok(m('discept').endsWith('ceiv'), 'should transform cept$ into ceiv')

  assert.ok(m('absolute').endsWith('olv'), 'should transform olut$ into olv')

  assert.ok(m('fantasist').endsWith('sist'), 'should protect sist$')

  assert.ok(!m('fashionist').endsWith('ist'), 'should drop ist$')

  assert.ok(/[^t]t$/.test(m('forebitt')), 'should transform tt$ into t')

  assert.ok(!m('antiquity').endsWith('iqu'), 'should drop iqu$')

  assert.ok(m('trialogue').endsWith('og'), 'should transform ogu$ into og')

  // Untestable, although the `j` test tests this also.
  // 'should transform siv$ into j'

  assert.ok(m('apperceive').endsWith('eiv'), 'should protect eiv$')

  assert.ok(!m('leitmotiv').endsWith('iv'), 'should drop iv$')

  assert.ok(m('amble').endsWith('bl'), 'should transform bly$ into bl')

  assert.ok(m('aerily').endsWith('y'), 'should transform ily$ into y')

  assert.ok(m('misapply').endsWith('ply'), 'should protect ply$')

  assert.ok(!m('miscellaneously').endsWith('ly'), 'should drop ly$')

  assert.ok(m('misology').endsWith('og'), 'should transform ogy$ into og')

  assert.ok(m('morphography').endsWith('ph'), 'should transform phy$ into ph')

  assert.ok(m('neurotomy').endsWith('om'), 'should transform omy$ into om')

  assert.ok(m('otoscopy').endsWith('op'), 'should transform opy$ into op')

  assert.ok(!m('outcity').endsWith('ity'), 'should drop ity$')

  assert.ok(!m('peripety').endsWith('ety'), 'should drop ety$')

  assert.ok(m('realty').endsWith('l'), 'should transform lty$ into l')

  assert.ok(!m('registry').endsWith('istry'), 'should drop istry$')

  assert.ok(!m('repetitionary').endsWith('ary'), 'should drop ary$')

  assert.ok(!m('repository').endsWith('ory'), 'should drop ory$')

  assert.ok(!m('requalify').endsWith('ify'), 'should drop ify$')

  assert.ok(m('bouncy').endsWith('nt'), 'should transform ncy$ into nt')

  assert.ok(!m('retiracy').endsWith('acy'), 'should drop acy$')

  assert.ok(!m('showbiz').endsWith('iz'), 'should drop iz$')

  assert.ok(m('agryze').endsWith('ys'), 'should transform yz$ into ys')

  assert.equal(
    m('compensation', {style: 'paper'}),
    'compens',
    "should support `style: 'paper'`"
  )

  assert.equal(
    m('compensation', {style: 'c'}),
    'compen',
    "should support `style: 'c'`"
  )

  assert.equal(m('compensation'), 'compen', "should default to `style: '1994'`")
})

test('cli', async function () {
  assert.deepEqual(
    await exec('./cli.js considerations'),
    {stdout: 'consid\n', stderr: ''},
    'one'
  )
  assert.deepEqual(
    await exec('./cli.js detestable vileness'),
    {stdout: 'detest vil\n', stderr: ''},
    'two'
  )

  await new Promise(function (resolve) {
    const input = new PassThrough()
    const subprocess = cp.exec('./cli.js', function (error, stdout, stderr) {
      assert.deepEqual(
        [error, stdout, stderr],
        [null, 'detest vil\n', ''],
        'stdin'
      )
      setImmediate(resolve)
    })

    assert(subprocess.stdin, 'expected stdin on `subprocess`')
    input.pipe(subprocess.stdin)
    input.write('detestable')
    setImmediate(function () {
      input.end(' vileness')
    })
  })

  const h = await exec('./cli.js -h')

  assert.ok(/\sUsage: lancaster-stemmer/.test(h.stdout), '-h')

  const help = await exec('./cli.js --help')

  assert.ok(/\sUsage: lancaster-stemmer/.test(help.stdout), '-h')

  assert.deepEqual(
    await exec('./cli.js -v'),
    {stdout: pack.version + '\n', stderr: ''},
    '-v'
  )

  assert.deepEqual(
    await exec('./cli.js --version'),
    {stdout: pack.version + '\n', stderr: ''},
    '--version'
  )
})
