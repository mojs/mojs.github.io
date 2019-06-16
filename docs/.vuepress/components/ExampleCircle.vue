<template>
  <div class="interactive-code">
    <slot></slot>
    <div id="circle-anim" class="example-anim"></div>
  </div>
</template>

<script>
  import mojs from 'mo-js';

  export default {

    mounted: function () {
      var circle = new mojs.Shape({
        parent:       '#circle-anim',
        shape:        'circle',
        fill:         {'#F64040': '#FC46AD'},
        radius:       {20: 80},
        duration:     2000,
        isYoyo:       true,
        easing:       'elastic.inout',
        repeat:       999,
      })
      .play();
    }

  }
</script>
