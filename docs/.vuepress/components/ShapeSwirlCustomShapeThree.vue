<template>
  <div class="mojs-interactive">
    <div class="mojs-interactive__code">
      <slot></slot>
    </div>
    <div :id="this.id" class="mojs-interactive__result" :style="style">
      <div :id="this.id + '_controller'" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShapeSwirlCustomShape3',

    props: {
      id: { type: String, default: 'code_example' },
      height: { type: String, default: '300px' },
    },

    computed: {
      style () {
        return 'height: ' + this.height;
      }
    },

    mounted: function () {
      import("mo-js").then(module => {
        import("mojs-player").then(module => {

         /* ADD CUSTOM SHAPE */
          class Heart extends mojs.CustomShape {
            getShape () { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
            getLength () { return 292.110107421875; } // optional
          }
          mojs.addShape( 'heart', Heart ); // passing name and Bubble class

          /* USE CUSTOM SHAPE */
          // now it is available on mojs.Shape constructor as usual
          const heart = new mojs.Shape({
            parent:   `#${this.id}`,
            shape:            'heart',
            fill:             'none',
            stroke:           'deeppink',
            strokeDasharray:  '100%',
            strokeDashoffset: { '-100%' : '100%' },
            y:               -20,
            duration:         2000,
          });

          const controllerDOM = document.getElementById(`${this.id}_controller`);

          new MojsPlayer({
            add: heart,
            parent: controllerDOM,
            className: 'controller',
            isSaveState: true,
            isPlaying: true,
            isRepeat: true,
            name: `${this.id}_controller`
          });
        });
      });
    }
  }
  
</script>
