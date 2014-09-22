'use strict';

var stemmer,
    assert;

/**
 * Module dependencies.
 */

stemmer = require('..');
assert = require('assert');

/**
 * Unit tests.
 */

describe('lancasterStemmer(value)', function () {
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
