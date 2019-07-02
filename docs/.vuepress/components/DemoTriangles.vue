<template>
  <div class="mojs-interactive">
    <slot></slot>
    <div class="mojs-interactive__result mojs-interactive__result--dark" id="demo-triangles">
      <div id="demo-triangles_controller" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  export default {

    mounted: function () {
      import('@mojs/core').then(module => {
        import('@mojs/player').then(module => {
          const COLORS = {
            white:   '#ffffff',
            black:   '#000000',
            green:   '#49F2CC',
            pink:    '#777',
            grey:    '#29363B',
            cyan:    'cyan',
            yellow:  '#FFE202',
            hotpink: 'deeppink',
          };
          const blendMode = 'screen';

          const y = -35;

          // TRIANGLES //

          const OPTS = {
            parent:     '#demo-triangles',
            shape:      'polygon',
            fill:       COLORS.cyan,
            isShowEnd:  false,
            duration:   465,
            radius:     65,
            angle:      { [-120]: -40 },
            x:          { [-200]: 20 },
            y:          { [50 + y]: -20 + y },
            scaleX:     { 0 : 1.3 }
          };
          const thenO = { x: 0, y, duration: 175, angle: -60, scaleX: 1 };

          const triangle1 = new mojs.Shape({ ...OPTS }).then(thenO);
          triangle1.el.style[ 'mix-blend-mode' ] = blendMode;

          const triangle2 = new mojs.Shape({
            ...OPTS,
            fill:     COLORS.hotpink,
            angle:    { [-180] : -20 },
            y:        { [30+y] : -30 + y },
            scaleX:   { 0: 1.46 },
            delay:    45
          }).then(thenO);
          triangle2.el.style[ 'mix-blend-mode' ] = blendMode;

          const triangle3 = new mojs.Shape({
            ...OPTS,
            fill:     COLORS.yellow,
            angle:    { [-220] : -10 },
            y:        { [60+y] : -50+y },
            scaleX:   { 0: 1.3 },
            delay:    90
          }).then(thenO);
          triangle3.el.style[ 'mix-blend-mode' ] = blendMode;

          // TRIANGLE LINES //

          const LINE_OPTS = {
            parent:       '#demo-triangles',
            shape:        'polygon',
            duration:     700,
            radius:       { 150 : 100 },
            angle:        { '-70': '-60' },
            fill:         'none',
            stroke:       COLORS.cyan,
            strokeWidth:  3,
            strokeDasharray:  {'50% 100%' : '0% 100%'},
            strokeDashoffset: { '50%' : '-66%' },
            y: y
          };

          let trangleLine1 = new mojs.Transit(LINE_OPTS);
          trangleLine1.el.style[ 'mix-blend-mode' ] = blendMode;

          let trangleLine2 = new mojs.Transit({
            ...LINE_OPTS,
            stroke: COLORS.hotpink,
            strokeDasharray: {'30% 120%' : '0% 120%'},
            strokeDashoffset: { '42%' : '-76%' },
            angle: { [-80] : -60 },
            delay: 45
          });
          trangleLine2.el.style[ 'mix-blend-mode' ] = blendMode;

          let trangleLine3  = new mojs.Transit({
            ...LINE_OPTS,
            stroke: COLORS.yellow,
            strokeDasharray: {'30% 120%' : '0% 120%'},
            strokeDashoffset: { '42%' : '-86%' },
            angle: { [-90] : -60 },
            delay: 90
          });
          trangleLine3.el.style[ 'mix-blend-mode' ] = blendMode;

          const timeline = new mojs.Timeline({ speed: .75 });
          timeline
            .add( triangle1, triangle2, triangle3 )
            .add( trangleLine1, trangleLine2, trangleLine3 );

          const parentDOM = document.getElementById('demo-triangles_controller');
          new MojsPlayer({
            add: timeline,
            isPlaying: false,
            isRepeat: true,
            parent: parentDOM,
            name: "demo-triangles_controller",
            className: 'controller',
            isSaveState: false,
          });

        });

      });

    }

  }
</script>
