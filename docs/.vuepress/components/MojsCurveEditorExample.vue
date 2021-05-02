/**
Usage:
<MojsCurveEditorExample dark />
<MojsCurveEditorExample isPlaying />
*/
<template>
  <div class="mojs-interactive demo-mojs-logo-reveal__wrap">
    <slot></slot>
    <button class="button" v-on:click="openExample()">{{open ? 'Close demo' : 'Open demo'}}</button>
    <p v-if="open">This easing curve makes the circle bounce when animating the <code>y</code> value. Click on the points to edit them, or click on the curve in between to add new points. See shortcuts <a href="#shortcuts">below</a>.</p>
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
      isPlaying: { type: Boolean, default: true },
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
            //const startPath = 'M0, 100 C26, 100 30, 0 30, 0 C30, 0 37, 50 50, 50 C63, 50 75, 0 75, 0 C75, 0 83, 100 100, 100';
            const startPath = 'M0, 100 C0, 100 0, 100 0, 100 C26, 100 30, 0 30, 0 C30, 0 37, 50 50, 50 C63, 50 75, 0 75, 0 C75, 0 83, 100 100, 100';

            this.myCurve = new MojsCurveEditor({
              name: 'myCurve',
              startPath: startPath, // doesn't work properly in v1.5.0
              isHiddenOnMin: true,
              isSaveState: false,
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
