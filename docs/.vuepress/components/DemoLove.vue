<template>
  <div>
    <p>There is another demo that can set some light on the shape usage in motion graphics, it was made with bunch of shapes and few characters that compose a <code>{{letter1}}{{letter2}}{{letter3}}{{letter4}}</code> word together:</p>
    <div class="mojs-interactive">
      <slot></slot>
      <div class="mojs-interactive__result" id="demo-love" style="background: #FD5061">
        <div id="demo-love_controller" class="mojs-interactive__controller"></div>
      </div>
    </div>
    <form class="demo-love__inputs">
      <input class="demo-love__input" v-model="letter1" placeholder="l">
      <input class="demo-love__input" v-model="letter2" placeholder="o">
      <input class="demo-love__input" v-model="letter3" placeholder="v">
      <input class="demo-love__input" v-model="letter4" placeholder="e">
    </form>
  </div>
</template>

<script>
  export default {

    data: function () {
      return {
        letter1: 'l',
        letter2: 'o',
        letter3: 'v',
        letter4: 'e',
      }
    },

    watch: {
      letter1: function (val) {
        this.character1.innerHTML = this.letter1;
      },
      letter2: function (val) {
        this.character2.innerHTML = this.letter2;
      },
      letter3: function (val) {
        this.character3.innerHTML = this.letter3;
      },
      letter4: function (val) {
        this.character4.innerHTML = this.letter4;
      },
    },

    mounted: function () {
      import('@mojs/core').then(module => {
        import('@mojs/player').then(module => {
          const parent = document.getElementById('demo-love');

          const COLORS = {
            RED:      '#FD5061',
            YELLOW:   '#FFCEA5',
            BLACK:    '#29363B',
            WHITE:    'white',
            VINOUS:   '#A50710'
          }

          const BG_OPTS = {
            parent:         parent,
            radius:         200,
            scale:          { .25 : 3 },
            duration:       500,
            easing:         'cubic.out',
            isForce3d:      true,
            isTimelineLess: true,
          }

          // BLAST
          const whiteBg = new mojs.Shape({
            ...BG_OPTS,
            radius:         BG_OPTS.radius-2,
            fill:           COLORS.WHITE
          });

          const redBg = new mojs.Shape({
            ...BG_OPTS,
            fill:         COLORS.RED,
            delay:        50,
            easing:       'quad.out'
          });

          const burst1 = new mojs.Burst({
            parent:   parent,
            count:    5,
            radius:   { 50: 250 },
            children: {
              fill:   'white',
              shape:  'line',
              stroke: [ COLORS.WHITE, COLORS.VINOUS ],
              strokeWidth: 12,
              radius: 'rand(30, 60)',
              radiusY: 0,
              scale: { 1: 0 },
              // duration: 800,
              pathScale: 'rand(.5, 1)',
              isForce3d: true,
              degreeShift: 'rand(-360, 360)',
              // angle: 90
            }
          });

          const burst2 = new mojs.Burst({
            parent: parent,
            count:  3,
            radius: { 0: 250 },
            children: {
              shape:      [ 'circle', 'rect' ],
              points:     5,
              fill:       [ COLORS.WHITE, COLORS.VINOUS ],
              radius:     'rand(30, 60)',
              scale:      { 1: 0 },
              pathScale:  'rand(.5, 1)',
              isForce3d:  true
            }
          });

          const CIRCLE_OPTS = {
            parent:   parent,
            fill:     COLORS.WHITE,
            scale:    { .2: 1 },
            opacity: { 1: 0 },
            isForce3d: true,
            isShowEnd: false
          }

          const circle1 = new mojs.Shape({
              ...CIRCLE_OPTS,
              radius:   200,
            });

          const circle2 = new mojs.Shape({
            ...CIRCLE_OPTS,
            radius:   240,
            easing: 'cubic.out',
            delay: 150,
          });

          // BLAST


          // GEOMETRIC SHAPES
          const charOpts = {
            parent:       parent,
            fill:         COLORS.WHITE,
            radius:       10,
            isForce3d:    true,
            isShowEnd:    false
          }

          let CHAR_STEP  = 40;
          let SCALE_DOWN = .25;
          let SCALE_UP   = 2;
          let Y_SHIFT    = 0;
          let X_SHIFT    = CHAR_STEP/2;

          const SLAP_OPTS = {
            scaleX: SCALE_UP,
            scaleY: SCALE_DOWN,
            y: Y_SHIFT,
            angle: 0,
            duration: 75
          }

          let SHIFTX = 4*CHAR_STEP;
          const bounceCurve = mojs.easing.path('M0,-100 C0,-100 15.6877613,115.487686 32.0269814,74.203186 C62.0118605,-1.559962 100.057489,-0.0941416292 100.057489,-0.0941416292');
          const nBounceCurve = (p) => { return 2 - bounceCurve(p) };
          const char1 = new mojs.Shape({
            ...charOpts,
            y: { [-100 + Y_SHIFT] : -200 },
            x: { [X_SHIFT]: -2*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            angle: -11,
            scaleX: { [SCALE_DOWN] : 1 },
            scaleY: { [SCALE_UP] : 1 },
            easing: 'quad.out',
            origin: '50% 100%'
          })
          .then({
            scaleX: SCALE_DOWN,
            scaleY: SCALE_UP,
            x: { to: -4*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: Y_SHIFT,
            angle: { 0: 11 },
            easing: 'sin.in',
          })
          .then(SLAP_OPTS)
          .then({
            scaleX: { 1: 1, curve: bounceCurve },
            scaleY: { 1: 1, curve: nBounceCurve },
            x: { to: -2.5*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: -175 + Y_SHIFT,
            angle: { to: 20, easing: 'quad.out' },
            duration: 350,
          })
          .then({
            x: { to: -CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: Y_SHIFT,
            scaleX: SCALE_DOWN,
            scaleY: SCALE_UP,
            angle:  { 0: -10 },
            easing: 'quad.in',
          })
          .then(SLAP_OPTS);

          const char2 = new mojs.Shape({
            ...charOpts,
            shape: 'rect',
            y: { [-100 + Y_SHIFT] : -220 },
            x: { [X_SHIFT]: -1.75*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            angle: -11,
            scaleX: { [SCALE_DOWN] : 1 },
            scaleY: { [SCALE_UP]: 1 },
            easing: 'quad.out',
            delay:  100,
            duration: 425,
            origin: '50% 100%'
          })
          .then({
            scaleX: SCALE_DOWN,
            scaleY: SCALE_UP,
            x: { to: -3.5*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: -55 + Y_SHIFT,
            angle: { to: 5, easing: 'cubic.out' },
            easing: 'quad.in',
            duration: 350,
          })
          .then({
            ...SLAP_OPTS,
            duration: 40,
            y:   -95 + Y_SHIFT,
          })
          .then({
            scaleX: { 1: 1, curve: bounceCurve },
            scaleY: { 1: 1, curve: nBounceCurve },
            x: { to: -2.75*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: -275 + Y_SHIFT,
            angle: 0,
            easing: 'cubic.out',
            duration: 450,
          }).then({
            x: { to: -2*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: Y_SHIFT,
            scaleX: SCALE_DOWN,
            scaleY: SCALE_UP,
            angle:   { 180: 180, curve: 'quad.out' },
            origin:  { '50% 50%' : '50% 50%' },
            easing: 'quad.in',
            duration: 450,
          }).then({
            ...SLAP_OPTS,
            angle:  { 360: 360 },
            easing: 'quad.out',
            origin: '50% 100%'
          });

          const DELAY2 = 200;
          const char3 = new mojs.Shape({
            ...charOpts,
            shape: 'rect',
            y: { [-100 + Y_SHIFT] : -200 },
            x: { [X_SHIFT]: 1.5*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            angle: -11,
            scaleX: { [SCALE_DOWN] : 1 },
            scaleY: { [SCALE_UP] : 1 },
            easing: 'quad.out',
            origin: '50% 100%',
            delay: DELAY2
          })
          .then({
            scaleX: SCALE_DOWN,
            scaleY: SCALE_UP,
            x: { to: 3*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: Y_SHIFT,
            angle: { 0: -11 },
            easing: 'quad.in',
            duration: 400,
          })
          .then(SLAP_OPTS)
          .then({
            x: { to: 1.5*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: -155 + Y_SHIFT,
            duration: 300,
            angle: -200,
            easing: 'quad.out',
          })
          .then({
            x: { to: X_SHIFT, easing: 'linear.none' },
            y: Y_SHIFT,
            angle: -360,
            easing: 'quad.in',
            duration: 350,
          });

          const char4 = new mojs.Shape({
            ...charOpts,
            shape:      'polygon',
            points:     5,
            y:          { [-100 + Y_SHIFT] : -220 },
            x:          { [X_SHIFT]: 1.25*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            angle:     -11,
            scaleX:     { [SCALE_DOWN] : 1 },
            scaleY:     { [SCALE_UP]: 1 },
            easing:     'quad.out',
            delay:      100 + DELAY2,
            duration:   425,
            origin:     '50% 100%',
            isForce3d:  true,
          })
          .then({
            scaleX: SCALE_DOWN,
            scaleY: SCALE_UP,
            x: { to: 2.5*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: -55 + Y_SHIFT,
            angle: { to: 5, easing: 'cubic.out' },
            easing: 'quad.in',
            duration: 350,
          })
          .then({
            ...SLAP_OPTS,
            duration: 40,
            y:   -95 + Y_SHIFT,
          })
          .then({
            scaleX: { 1: 1, curve: bounceCurve },
            scaleY: { 1: 1, curve: nBounceCurve },
            x: { to: 1.75*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: -250 + Y_SHIFT,
            angle: 0,
            easing: 'cubic.out',
            duration: 450,
          }).then({
            x: { to: 1*CHAR_STEP + X_SHIFT, easing: 'linear.none' },
            y: Y_SHIFT,
            scaleX: SCALE_DOWN,
            scaleY: SCALE_UP,
            angle:   { 180: 180, curve: 'quad.out' },
            origin:  { '50% 50%' : '50% 50%' },
            easing: 'quad.in',
            duration: 450,
          }).then({
            ...SLAP_OPTS,
            angle:  { 360: 360 },
            easing: 'quad.out',
            origin: '50% 100%'
          });

          const geometricBurst = new mojs.Burst({
            parent:   parent,
            degree:   20,
            count:    2,
            angle:   -90,
            x:       -150 + X_SHIFT,
            y:       -100 + Y_SHIFT,
            radius:   { 10: 100 },
            timeline: { delay: 900 },
            children: {
              shape:        'line',
              scale:        { 1 : 0 },
              radius:       'rand(8, 18)',
              radiusY:      0,
              stroke:       COLORS.VINOUS,
              strokeWidth:  7,
              duration:     450,
              isForce3d:    true
            }
          });

          const shapesTimeline = new mojs.Timeline;

          shapesTimeline
            .add(
              char1, char2, char3, char4,
              geometricBurst
            );
          // GEOMETRIC SHAPES



          // WORD CHARACTERS

          class BubbleSpeech extends mojs.CustomShape {
            getShape () { return '<path d="M42.1607744,3.35412196 C43.8754171,3.12221909 45.6088675,3.18176172 47.332914,3.16922643 C49.2544423,3.18489554 51.188509,3.07521174 53.0943641,3.37919255 C56.2070518,3.85239977 59.3542203,4.19712027 62.3979461,5.0432524 C64.4856098,5.74522868 66.4478882,6.83893281 68.6452639,7.22125918 C71.7830286,7.79161491 74.6512151,9.30525127 77.3219199,10.9943817 C81.0803413,13.410559 84.5973963,16.1871259 87.9796621,19.0984472 C90.192711,21.4926877 92.0452773,24.2003106 93.9730748,26.826454 C95.9353532,29.7847826 97.6029764,33.0220215 98.2831912,36.5350367 C98.750251,39.038961 99.6467552,41.4708075 99.7564673,44.0405421 C100.004103,47.8575381 98.7533857,51.5303783 98.1640752,55.2596273 C97.7158231,57.8481649 96.5622793,60.2267363 95.5591976,62.6335121 C94.8476366,64.3633823 93.471534,65.6827216 92.3712789,67.1618859 C91.4935824,68.36214 90.2648074,69.2302089 88.9921476,69.9697911 C87.4812559,70.8441276 86.0706724,71.9033597 84.4626072,72.6084698 C79.193294,74.7363354 73.5133444,75.4289102 67.9462414,76.334585 C66.3130991,76.5382835 64.6329374,76.6416996 63.1032379,77.2872671 C62.2819648,77.5881141 61.984175,78.4875212 61.7584816,79.2490401 C61.3885953,80.6185206 61.0908054,82.0224732 60.4858218,83.316742 C59.3636242,85.7799266 57.5330003,87.8106437 55.8810502,89.925974 C54.0128107,92.3202146 51.5552607,94.1472332 49.2293652,96.0714003 C48.477054,96.7201016 47.3548564,97.2058442 46.4238713,96.6166855 C45.4991554,96.058865 44.5619011,94.733258 45.307943,93.6928289 C46.2702744,92.2575381 47.6683194,91.1356296 48.4049575,89.5405138 C49.8688298,86.8767645 50.0036188,83.7210051 49.5929823,80.7752117 C49.1729419,79.3681254 48.4645155,77.7322699 46.994374,77.1869848 C44.5054777,76.7952569 42.0040429,77.4157538 39.5057428,77.3781479 C36.5529212,77.3562112 33.5844266,77.6288538 30.6441435,77.2245906 C27.5941485,76.8328628 24.4877301,76.4693394 21.6101397,75.3192264 C17.8203719,73.8557312 14.1936049,71.9033597 11.0119554,69.3680971 C8.27228875,67.2151609 6.07491307,64.4542631 4.20667355,61.5335404 C1.74598895,57.6350649 -0.0156731503,53.109825 0.150462243,48.4404291 C0.159866133,47.0772163 0.125385203,45.7140034 0.188077804,44.3539243 C0.639464534,39.3523433 2.73026279,34.726821 4.72075288,30.1827781 C6.01222047,27.1805759 7.81463276,24.4384811 9.7894497,21.8468097 C11.4978231,19.4337662 13.4977171,17.2338227 15.7703239,15.3409938 C18.0586038,13.4607002 20.1650752,11.3202993 22.7417411,9.81606437 C25.4469269,8.25228684 28.2179399,6.74805195 31.2240501,5.84237719 C33.3681371,5.20621118 35.3680311,4.04042914 37.6280993,3.84926595 C39.1421257,3.72077922 40.6498827,3.5390175 42.1607744,3.35412196 L42.1607744,3.35412196 Z M45.4145204,7.13037832 C41.3896554,7.31214003 37.3052324,7.80728402 33.546811,9.3365895 C29.1990791,11.0727273 25.0676367,13.3792208 21.3342922,16.202795 C15.4067068,20.9348673 10.7705889,27.1774421 7.60774718,34.0467815 C6.31001033,37.0865895 5.32887112,40.2580181 4.57969453,43.476454 C3.24120749,50.3551948 5.40723687,57.6820723 9.8928925,63.0095709 C10.9273204,64.1628176 12.0338448,65.2533879 13.1372346,66.3408244 C15.0023395,68.2148504 17.3533121,69.4871824 19.6729383,70.6968379 C23.1962625,72.5175889 27.1020116,73.4734049 31.0202992,73.9403444 C34.1611985,74.0249577 37.3083671,73.9622812 40.452401,73.9434783 C43.2328179,73.9278091 45.9850231,72.6335404 48.7560361,73.2446358 C50.6744297,74.2599944 51.8342428,76.2750423 52.8279205,78.1333992 C54.01908,80.2738001 53.6648668,82.7902597 54.1820807,85.1061547 C54.984546,84.4668549 55.815223,83.8024845 56.2666097,82.8592038 C57.1850563,80.982044 57.9687139,78.8949181 57.6897318,76.7733202 C57.6270392,75.927188 57.3605956,74.8773574 58.1317146,74.2599944 C59.322874,73.0754094 61.1064786,73.4138622 62.6205049,73.3887916 C65.1877669,73.4483343 67.6986056,72.8466403 70.2251174,72.4862507 C72.4224931,72.2668831 74.5822532,71.7905421 76.7545519,71.3988142 C81.8044409,70.342716 86.5095206,67.6413608 89.929402,63.7710898 C92.1706625,61.151214 92.9073006,57.6820723 93.9856133,54.4949746 C94.9698872,51.6275268 95.2708117,48.6002541 95.700256,45.6168549 C95.9917766,43.0972614 95.3836583,40.61214 95.0263105,38.1332863 C94.0608445,33.1348391 91.6095637,28.5187182 88.4185103,24.5889046 C86.8386568,22.548786 85.1867067,20.5086674 83.0050042,19.0733766 C79.1274668,16.3939582 75.3565068,13.3541502 70.8144279,11.8781197 C68.2691083,11.006917 65.7237886,10.1043761 63.0718916,9.62176736 C61.4575571,9.34912479 60.0563775,8.48418972 58.5925052,7.81981931 C56.840247,7.02069452 54.874834,7.30900621 53.0128637,7.12724449 C50.4894865,6.87027103 47.9378976,6.86086957 45.4145204,7.13037832 L45.4145204,7.13037832 Z"></path><path d="M49.5052127,21.7872671 C52.6617851,20.0448617 56.1913786,17.7571711 59.9592039,18.800734 C62.128368,19.4055618 64.7301109,19.9101073 65.9181357,22.0630435 C67.5481433,25.2219368 68.0371456,29.0389328 66.8867364,32.4359966 C66.1971178,34.833371 64.5953218,36.8546866 62.7239477,38.4529362 C61.2506715,39.747205 59.5046826,40.8565782 58.5705628,42.6397233 C57.2446143,45.2000565 57.0596711,48.1301807 56.8966704,50.9506211 C56.8872665,51.8907679 56.3481101,52.6867589 55.8904541,53.4670807 C54.6554099,53.1192264 53.1758645,52.7995765 52.5207268,51.5617165 C52.6022272,50.5150198 53.0097291,49.5309994 53.2197493,48.5062394 C53.7651749,46.1590062 53.7651749,43.6049407 55.069181,41.4990119 C56.9280167,38.4059289 60.1692242,36.5225014 62.3164458,33.6738566 C64.3288783,30.608978 64.7645918,26.4597967 63.1753344,23.1191417 C62.8712753,22.4829757 62.4167539,21.824873 61.6895197,21.6493789 C60.1911666,21.2263128 58.5831013,21.2889893 57.0816135,21.6556465 C55.1444122,22.1288538 53.6554629,23.6550254 51.705723,24.0812253 C50.4393324,24.1533032 49.5522321,22.9687182 49.5052127,21.7872671 L49.5052127,21.7872671 Z"></path><path d="M36.8695189,19.367956 C37.9854472,19.1767928 39.4336463,19.0733766 40.1107264,20.1890175 C41.0981348,22.0223038 40.8066142,24.1909091 40.8379605,26.190288 C40.8724415,31.2764822 40.7376524,36.3626765 40.9570765,41.442603 C41.0887309,44.6861095 42.257948,47.8794749 41.8316383,51.1355167 C41.1576928,52.1132693 39.5464929,52.1759458 38.5684884,51.536646 C37.546599,51.0164314 37.8537927,49.6939582 37.7911001,48.7663467 C37.9791779,46.0054489 36.8726535,43.3793055 36.8977305,40.6340768 C36.8569803,33.5453698 36.9290768,26.4566629 36.8695189,19.367956 L36.8695189,19.367956 Z"></path><path d="M37.6688495,60.5902597 C38.2769678,60.3113495 38.860009,59.9384246 39.5276852,59.8193394 C40.4085162,59.7127894 41.1702313,60.2643422 41.9413503,60.5996612 C41.8661192,61.2201581 41.8817923,61.8563241 41.7125223,62.4611519 C41.1169426,63.9215133 38.7471623,64.0782044 37.9603701,62.724393 C37.6782534,62.0537549 37.7503499,61.2985037 37.6688495,60.5902597 L37.6688495,60.5902597 Z"></path><path d="M53.3608077,60.2298701 C54.7181025,59.878882 56.7399389,60.4868436 56.5393225,62.2073123 C56.3669179,64.0813382 53.7275594,63.9027103 52.7495548,62.7619989 C51.7966272,62.0568888 52.1257634,60.3614907 53.3608077,60.2298701 L53.3608077,60.2298701 Z"></path>'; }
          }

          mojs.addShape( 'bubble-speech', BubbleSpeech );

          class Underline extends mojs.CustomShape {
            getShape () { return '<path d="M2.5,50.3296666 C3.31230785,50.3563224 4.33314197,51.7391553 5.26159075,51.244112 C6.0077473,50.8462659 7.06209448,50.3203773 7.71562592,50.3296666 C8.76504493,50.344583 10.5026522,50.7289147 10.5026522,50.7289147 C10.5026522,50.7289147 12.2264054,51.3540485 14.3045941,51.244112 C15.3644039,51.1880478 16.0579859,49.0942327 17.5373074,49.0205791 C18.3943409,48.9779084 19.7113596,50.7755195 20.6875422,50.7289147 C21.6556682,50.6826945 22.3001602,49.0692534 23.3699153,49.0205791 C24.1641633,48.9844405 26.4617126,51.2809265 27.3045404,51.244112 C28.6211722,51.1866018 29.868997,49.0779353 31.2843519,49.0205791 C32.5621635,48.9687968 34.5177647,50.7788661 35.8572938,50.7289147 C36.7433562,50.6958732 38.2335712,49.0522313 39.1401705,49.0205791 C39.9800278,48.9912571 40.561996,49.9055655 41.4152209,49.877823 C42.1696178,49.8532938 42.2680621,50.7519349 43.0298941,50.7289147 C43.9790327,50.7002347 44.036439,49.4065744 44.9921859,49.3806853 C45.4945214,49.3670781 46.5973018,48.5718404 47.1003097,48.559109 C48.1308079,48.5330267 48.971762,50.3516106 49.9999991,50.3296666 C50.8452183,50.3116285 50.5604619,49.1586632 51.3999478,49.1438038 C51.9113862,49.134751 53.4831103,48.5668789 53.9912876,48.559109 C54.882369,48.5454847 55.8282738,48.5684585 56.7056958,48.559109 C57.5279585,48.5503473 57.7153436,49.0252286 58.5216754,49.0205791 C59.2920272,49.016137 59.891015,48.0863678 60.6434283,48.0859881 C61.5658387,48.0855227 62.142412,49.0587083 63.0323087,49.0648534 C63.7314385,49.0696813 66.0372641,48.0767735 66.712955,48.0859881 C68.0228785,48.1038519 67.6682957,49.130074 68.8737479,49.1659145 C69.5874211,49.1871333 71.5986501,48.5310407 72.2696752,48.559109 C73.0379259,48.5912442 75.275178,49.892825 76.2284459,49.877823 C77.75882,49.8537388 76.8128295,49.1641707 78.6451998,49.0836451 C79.7893236,49.0333653 80.4770207,49.924725 81.6706526,49.877823 C83.0151778,49.8249918 82.7003946,49.0428007 84.0369748,49.0205791 C84.9618645,49.0052021 86.6077598,49.8672453 87.4984761,49.877823 C88.1326772,49.8853544 90.8057301,49.8531233 91.4118266,49.877823 C92.2804437,49.9132209 93.4120929,49.7988292 94.2005825,49.877823 C95.0771269,49.9656384 95.2679881,49.7233196 96.0110715,49.877823 C96.6642711,50.0136376 96.9762504,49.6806854 97.5,49.877823"></path>'; }
            getLength () { return 100; }
          }
          mojs.addShape( 'underline', Underline );


          const speech = new mojs.Shape({
            parent:     parent,
            shape:      'bubble-speech',
            radius:     45,
            y:         -100,
            scale:      { 0 : 1, easing: 'elastic.out' },
            angle:      { [-90]: 0, easing: 'elastic.out' },
            duration:   1550,
            easing:     'cubic.out',
            delay:      600,
            fill:       COLORS.VINOUS,
            origin:     '50% 100%',
            isForce3d:  true,
          });

          const undeline = new mojs.Shape({
            parent: parent,
            shape: 'underline',
            fill: 'none',
            radius:   75,
            y: 20,
            duration: 600,
            scaleX: { 2: 1 },
            origin: '0 50%',
            easing: 'cubic.out',
            delay:  675,
            stroke: COLORS.VINOUS,
            strokeWidth: 4,
            strokeLinecap: 'round',
            strokeDasharray:  '100',
            strokeDashoffset: { '100': 0 }
          });

          const WORD_CHAR_OPTS = {
            parent:       parent,
            left:         '50%', top: '50%',
            fill:         'none',
            radius:       23,
            isShowEnd:    true,
            isForce3d:    true
          }

          SCALE_DOWN = .125;
          SCALE_UP   = 1;

          Y_SHIFT    = -20;
          X_SHIFT    = CHAR_STEP/2;

          const not = ( fn, base = 1 ) => { return (p) => { return base - fn(p); } }

          const FALLDOWN_OPTS = {
            scaleX: 1,
            scaleY: 1,
            y: Y_SHIFT,
            angle: 0,
            easing: 'bounce.out',
            duration: 1000,
          }

          SHIFTX = 4*CHAR_STEP;
          const elasticCurve  = mojs.easing.path('M0,0 L42.4468,99.9990418 C46.3646102,-8.62551409 51.8137449,77.8031065 53.2538649,98.8047514 C54.3071019,114.164379 57.4212363,145.777285 62.4147182,98.8047479 C62.4147182,98.8047504 64.981755,73.166208 70.2635684,98.8047479 C73.8553743,114.6133 81.1660962,98.8047504 100,99.9990418');

          const elasticScale  = mojs.easing.path('M1.77635684e-15,-0.000957489014 L42.4468,-0.000958179367 C46.3646102,-108.625514 51.8137449,-22.1968935 53.2538649,-1.19524857 C54.3071019,14.1643792 57.4212363,45.7772847 62.4147182,-1.19525215 C62.4147182,-1.19524958 64.981755,-26.833792 70.2635684,-1.19525215 C73.8553743,14.6132996 81.1660962,-1.19524958 100,-0.000958179367');
          const nElasticScale = not( elasticScale, 2 );
          const word_char1 = new mojs.Shape({
            ...WORD_CHAR_OPTS,
            y: { [Y_SHIFT]: -100 + Y_SHIFT },
            angle: { 0: -50 },
            x: -CHAR_STEP + X_SHIFT,
            scaleX: { 1: 1, curve: bounceCurve },
            scaleY: { 1: 1, curve: nBounceCurve },
            easing: 'quad.out',
            origin: '50% 100%',
            duration: 350,
          })
          .then({
            y: Y_SHIFT,
            angle: { to: -100, curve: elasticCurve },
            easing: 'bounce.out',
            duration: 850
          })
          this.character2 = document.createElement('div');
          this.character2.classList.add( 'character' );
          word_char1.el.appendChild( this.character2 );

          const word_char2 = new mojs.Shape({
            ...WORD_CHAR_OPTS,
            y: { [Y_SHIFT]: -125 + Y_SHIFT },
            angle: { [-90]: -50 },
            x: X_SHIFT,
            scaleX: { .5: 1, curve: bounceCurve },
            scaleY: { 1: 1, curve: nBounceCurve },
            easing: 'quad.out',
            origin: '50% 100%',
            delay: 75,
            duration: 350,
          })
          .then({
            y: Y_SHIFT,
            angle: { to: 100, curve: elasticCurve },
            easing: 'bounce.out',
            duration: 950
          })
          this.character3 = document.createElement('div');
          this.character3.classList.add( 'character' );
          word_char2.el.appendChild(this.character3 );

          const word_char3 = new mojs.Shape({
            ...WORD_CHAR_OPTS,
            y: { [Y_SHIFT]: -150 + Y_SHIFT },
            angle: { 0 : -180, easing: 'cubic.in' },
            x: -2*CHAR_STEP + X_SHIFT,
            scaleY: { 1: 1, curve: bounceCurve },
            scaleX: { 1: 1, curve: nBounceCurve },
            easing: 'quad.out',
            delay: 250,
            duration: 350,
          })
          .then({
            y: Y_SHIFT,
            angle: { to: -360, easing: 'expo.out' },
            easing: 'bounce.out',
            duration: 1000,
            origin: '50% 100%',
          })
          this.character1 = document.createElement('div');
          this.character1.classList.add( 'character' );
          word_char3.el.appendChild( this.character1 );

          const word_char4 = new mojs.Shape({
            ...WORD_CHAR_OPTS,
            y: { [Y_SHIFT]: -125 + Y_SHIFT },
            angle: { 0 : 180, easing: 'cubic.in' },
            x:      CHAR_STEP + X_SHIFT,
            scaleY: { 1: 1, curve: nBounceCurve },
            scaleX: { 1: 1, curve: bounceCurve },
            easing: 'quad.out',
            delay: 500,
            duration: 300,
          })
          .then({
            y: Y_SHIFT,
            scaleX: { 1: 1, curve: elasticScale },
            scaleY: { 1: 1, curve: nElasticScale },
            angle: { to: 360, easing: 'expo.out' },
            easing: 'bounce.out',
            duration: 1000,
          })
          this.character4 = document.createElement('div');
          this.character4.classList.add( 'character' );
          word_char4.el.appendChild( this.character4 );

          this.character1.innerHTML = this.letter1;
          this.character2.innerHTML = this.letter2;
          this.character3.innerHTML = this.letter3;
          this.character4.innerHTML = this.letter4;

          const WORD_BURST_OPTS = {
            parent:   parent,
            degree:   20,
            count:    2,
            x:        CHAR_STEP + X_SHIFT,
            y:        Y_SHIFT,
            radius:   { 10: 100 },
            children: {
              shape:        'line',
              scale:        { 1 : 0 },
              radius:       'rand(8, 18)',
              radiusY:      0,
              stroke:       COLORS.VINOUS,
              strokeWidth:  7,
              duration:     450,
              isForce3d:    true
            }
          }

          const word_burst1 = new mojs.Burst({
            ...WORD_BURST_OPTS,
            timeline: { delay: 600 }
          });

          const word_burst2 = new mojs.Burst({
            ...WORD_BURST_OPTS,
            angle :  -20,
            timeline: { delay: 100 },
            x:  CHAR_STEP - 3*X_SHIFT
          });

          const line1 = new mojs.Shape({
            parent: parent,
            shape: 'line',
            stroke: COLORS.VINOUS,
            radius:  40,
            radiusY: 0,
            x:      -CHAR_STEP + X_SHIFT,
            y:       50 + Y_SHIFT,
            scaleX: { 0 : 1 },
            strokeWidth: 4,
            duration: 100,
            isTimelineLess: true,
            isShowEnd: false,
          });
          line1.el.style[ 'z-index' ] = 1;

          const line2 = new mojs.Shape({
            parent: parent,
            shape: 'line',
            stroke: COLORS.VINOUS,
            radius:  15,
            radiusY: 0,
            x:      { [X_SHIFT] : CHAR_STEP + X_SHIFT },
            y:       50 + Y_SHIFT,
            scaleX: { 1 : 0 },
            strokeWidth: 4,
            duration: 400,
            isTimelineLess: true,
            isShowEnd: false
          });

          line2.el.style[ 'z-index' ] = 1;

          const speechBurst = new mojs.Burst({
            parent:   parent,
            degree:   120,
            count:    5,
            // parent:   speech.el,
            angle:   -60,
            y:       -100,
            radius:    { 55: 95 },
            timeline: { delay: 1000 },
            children: {
              shape:        'line',
              scale:        { 1 : 0 },
              radius:       12,
              radiusY:      0,
              stroke:       COLORS.VINOUS,
              strokeWidth:  7,
              duration:     400,
              isForce3d:    true
            }
          });

          const wordTimeline = new mojs.Timeline({ delay: 1600 });
          wordTimeline
            .add(
              word_char1, word_char2,
              word_char3, word_char4,
              word_burst1,
              // word_burst2,
              speechBurst,
              line1, line2,
              speech,
              undeline
            );

          // WORD CHARACTERS

          const timeline = new mojs.Timeline;

          timeline.add(
            whiteBg, redBg,
            burst1, burst2,
            circle1, circle2,
            shapesTimeline,
            wordTimeline
          );

          const parentDOM = document.getElementById('demo-love_controller');
          new MojsPlayer({
            add: timeline,
            isPlaying: false,
            isRepeat: true,
            parent: parentDOM,
            name: "demo-love_controller",
            className: 'controller',
            isSaveState: false,
          });

        });

      });

    }

  }
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
.character {
  color: white
  font-size: 68px
  position: absolute
  left:0
  top: 0
  bottom: 0
  right:0
  text-align: center
  line-height: .475
  font-family: Oswald, monospace
}
.demo-love__inputs {
  text-align: center
  margin-top: $s-medium;
}

.demo-love__input {
  border: none
  padding: $s-small $s-medium
  width: 2em
  background: $c-creamy
  text-align: center
  font-size: 1rem;
  margin: 4px;
  box-shadow: 0 0 0 0 rgba($c-creamy, 0.3)
  transition: box-shadow 0.2s;
}
.demo-love__input:focus {
  box-shadow: 0 0 0 6px rgba($c-creamy, 0.3)
}
</style>
