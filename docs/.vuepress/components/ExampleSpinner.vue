<template>
  <div class="interactive-code">
    <slot></slot>
    <div :id="this.id" class="example-anim" :style="style"></div>
  </div>
</template>

<script>
  import mojs from '@mojs/core';

  export default {
    props: {
      id: { type: String, default: '#code-example' },
      height: { type: String, default: '300px' },
    },

    computed: {
      style () {
        return 'height: ' + this.height;
      }
    },

    mounted: function () {
      var loader = new mojs.Shape({
        parent:       '#' + this.id,
        shape:            'circle',
        stroke:           '#FC46AD',
        strokeDasharray:  '125, 125',
        strokeDashoffset: {'0': '-125'},
        strokeWidth:      4,
        fill:             'none',
        left:             '50%',
        top:              '50%',
        rotate:            {'-90': '270'},
        radius:           20,
        isShowStart:      true,
        duration:         2000,
        easing:           'back.in',
      })
      .then({
        rotate:            {'-90': '270'},
        strokeDashoffset: {'-125': '-250'},
        duration:         3000,
        easing:           'cubic.out',
        onComplete () {
          loader.replay(0); // create an infinite loop
        }
      })
      .play();
    }

  }


</script>
