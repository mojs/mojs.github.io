
<template>
  <div class="mojs-interactive">
    <slot></slot>
    <div class="mojs-interactive__result" id="demo-expanding-circle" style="background: rgb(241, 226, 215); height: 600px">
      <button class="button button--icon button--control" v-on:click="playPause" :aria-label="isPlaying ? 'Pause animation' : 'Play animation'">{{isPlaying ? '⇤' : '︎︎︎▶︎'}}</button>
      <div id="demo-expanding-circle_controller" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        isPlaying: false,
        prefersReducedMotion: false,
      }
    },

    methods: {
      playPause: function() {
        if (this.isPlaying) {
          this.timeline.replayBackward(
            this.prefersReducedMotion ? 1800 : 0
          );
        } else {
          this.timeline.play(
            this.prefersReducedMotion ? 1700 : 0
          );
        }
        this.isPlaying = !this.isPlaying;
      }
    },

    mounted: function () {
      var motionQuery = matchMedia('(prefers-reduced-motion)');
      const handleReduceMotionChanged = () => {
        this.prefersReducedMotion = motionQuery.matches;
      }
      motionQuery.addListener(handleReduceMotionChanged);
      handleReduceMotionChanged(); // trigger once on load to check initial value

      import("@mojs/core").then(module => {
        import('mojs-player').then(module => {


          const COLORS = {
            bg: 'rgb(241, 226, 215)',
            accent:    '#3A0839',
          };

          const _getWindowSize = () => {
            const w = window;
            return Math.max( (w.innerHeight || e.clientHeight || g.clientHeight), (w.innerWidth || e.clientWidth || g.clientWidth) )
          }

          const _calcScale = (radius) => {
            return 1.4 * (_getWindowSize() / radius / 2);
          }

          let circleSize = 500,
              scale      = _calcScale( circleSize ),
              opts       = {
                parent:     '#demo-expanding-circle',
                radius:     circleSize,
                fill:       COLORS.accent,
                scale:      { 0.05 : 0.2 },
                duration:   465,
                easing:     'cubic.out',
                isShowEnd:  false,
                isForce3d:  true,
              };

          const circle1 = new mojs.Shape(opts)
            .then({
              easing:     'cubic.inout',
              scale:      .125,
              duration:   350
            }).then({
              easing:     'cubic.inout',
              scale:      scale,
              duration:   465
            });

          const circle2 = new mojs.Shape({
            ...opts,
            fill:       COLORS.bg,
            scale:      { 0 : .1125 },
            duration:   407,
            delay:      580
          }).then({
            easing:     'cubic.inout',
            scale:      scale,
            duration:   350
          });

          const circle3 = new mojs.Shape({
            ...opts,
            scale:        { 0: scale },
            duration:     580,
            delay:        1160,
            isShowStart:  false,
            isShowEnd:    true
          });

          const smallCircle = new mojs.Shape({
            parent:       '#demo-expanding-circle',
            radius:       { 5: 25 },
            fill:         'none',
            stroke:       COLORS.accent,
            strokeWidth:  { 20: 0 },
            isShowEnd:    false,
            delay:        700,
            duration:     290,
          });

          const triangleOpts = {
            parent:     '#demo-expanding-circle',
            shape:      'polygon',
            radius:     15,
            duration:   407,
            fill:       COLORS.bg,
            y:          { 80 : -15 },
            scale:      {  1 : 0 },
            delay:      495,
            isForce3d:  true,
            easing:     'cubic.out'
          }
          const triangle1 = new mojs.Shape( triangleOpts );

          const triangle2 = new mojs.Shape({
            ...triangleOpts,
            y:        { [-80] : 15 },
            angle:    180
          });

          const lineOpts = {
            parent:           '#demo-expanding-circle',
            shape:            'line',
            x:               -180,
            radius:           50,
            radiusY:          0,
            stroke:           COLORS.accent,
            strokeWidth:      {15 : 0},
            duration:         580,
            isShowEnd:        false,
            strokeDasharray:  '100% 100%',
            strokeDashoffset: { '-100%': '100%' },
            easing:           'cubic.out',
          }
          const line1 = new mojs.Shape(lineOpts);

          const line2 = new mojs.Shape({
            ...lineOpts,
            angle:  180,
            x:      -lineOpts.x
          });

          this.timeline = new mojs.Timeline();
          this.timeline
            .add(
              circle1, circle2, circle3, smallCircle,
            triangle1, triangle2,
            line1, line2
            );

          const parentDOM = document.getElementById('demo-expanding-circle_controller');         
          new MojsPlayer({
            add: this.timeline,
            isPlaying: false,
            isRepeat: false,
            parent: parentDOM,
            name: "demo-expanding-circle_controller",
            className: 'controller',
            isSaveState: false,
            isHidden: true,
          });

        });

      });

    },
  }
</script>
