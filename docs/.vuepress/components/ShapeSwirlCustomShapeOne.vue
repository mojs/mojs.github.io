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
    name: 'ShapeSwirlCustomShape1',

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
      import('@mojs/core').then(module => {
        import('@mojs/player').then(module => {
          class Heart extends mojs.CustomShape {
            getShape() {
              return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>';
            }
            getLength() {
              return 200;
            }
          }

          mojs.addShape("heart", Heart);

          const heart = new mojs.Shape({
            parent: `#${this.id}`,
            shape: "heart",
            fill: "none",
            stroke: "#F64040",
            scale: { 0: 1 },
            strokeWidth: { 50: 0 },
            y: -20,
            duration: 1000
          });

          const controllerDOM = document.getElementById(
            `${this.id}_controller`
          );

          new MojsPlayer({
            add: heart,
            parent: controllerDOM,
            className: "controller",
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
