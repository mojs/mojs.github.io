/**
Usage:
<MojsCurveEditorExample dark />
<MojsCurveEditorExample isPlaying />
*/
<template>
  <div class="mojs-interactive demo-mojs-logo-reveal__wrap">
    <slot></slot>
    <button class="button" v-on:click="openExample()">{{open ? 'Close demo' : 'Open demo'}}</button>
    <p v-if="open">Try to make the ball bounce. Click on the curve to add new points. See shortcuts <a href="#shortcuts">below</a>.</p>
    <div id="curve-editor-example" :class="(open ? 'curve-example curve-example--open ' : 'curve-example curve-example--closed ') + 'mojs-interactive__result ' + (dark ? 'mojs-interactive__result--dark' : 'mojs-interactive__result--transparent')">
      <div id="curve-controller" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  export default {

    data: function () {
      return {
        open: false,
        // myCurve: undefined,
      }
    },

    props: {
      isPlaying: { type: Boolean, default: false },
      dark: {type: Boolean, default: false },
    },

    methods: {
      openExample: function(c) {
        this.open = !this.open;
        this.open ? this.myCurve.maximize() : this.myCurve.minimize();
      }
    },

    mounted: function () {
      import('@mojs/core').then(module => {
        import('@mojs/player').then(module => {
          import('@mojs/curve-editor').then(module => {

            // const startPath = 'M0, 100 C21, 100 25, 38 25, 38 C25, 38 37, 60 50, 60 C63, 60 65, 15 75, 15 C85, 15 87.71428571428571, 100 100, 100';

            this.myCurve = new MojsCurveEditor({
              name: 'myCurve',
              // startPath: startPath, // doesn't work properly in v1.5.0
              isHiddenOnMin: true,
            });

            this.myCurve.minimize();

            const shape = new mojs.Shape({
              parent: '#curve-editor-example',
              y: {'-100': 100},

              duration: 2000,
              easing: this.myCurve.getEasing()
            });

            const timeline = new mojs.Timeline();
            timeline.add(
              shape
            );


            const controllerDOM = document.getElementById('curve-controller');
            new MojsPlayer({
              add: timeline,
              isPlaying: this.isPlaying,
              isRepeat: true,
              parent: controllerDOM,
              name: "curve-controller",
              className: 'controller',
              isSaveState: false,
            });

          })

        });

      });

    }

  }
</script>

<style>
  .curve-example {
    margin-top: 20px;
  }
  .curve-example--open {
    height: 300px
  }
  .curve-example--closed {
    height: 1px
  }
</style>
