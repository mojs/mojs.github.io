/**
Usage:
<MojsInteractive
  id="unique_id"
  code=
"new mojs.Shape({
  parent:       '#unique_id',
  shape:        'circle',
  radius:       {20: 80},
})"
/>

With autoplay on the timeline:
<MojsInteractive
  id="unique_id"
  autoplay
  code=
"new mojs.Shape({
  parent:       '#unique_id',
  shape:        'circle',
  radius:       {20: 80},
})"
/>

or if you wanna declare a height:

<MojsInteractive
  id="unique_id"
  height="200px"
  code=
"new mojs.Shape({
  parent:       '#unique_id',
  shape:        'circle',
  radius:       {20: 80},
})"
/>

or with no controlls (will have no animation, unless you provide a .play() function yourself):

<MojsInteractive
  id="unique_id"
  :controller=false
  code=
"new mojs.Shape({
  parent:       '#unique_id',
  shape:        'circle',
  radius:       {20: 80},
}).play()"
/>

If you want to show (and use) the declaration of the animation like this:

const bouncyCircle = new mojs.Shape({
  ...
});

bouncyCircle.play()

Then you may wanna use the global mode.
The string passed in the global prop should equal the variable you declared.
Note that it will be global, so make sure it's unique, and use it carefully:

<MojsInteractive
  id="bouncyCircle"
  autoplay
  global="circles"
  code=
"const circles = new mojs.Shape({
  parent:       '#bouncyCircle',
  shape:        'circle',
  fill:         {'#F64040': '#FC46AD'},
});

circles.play()"
>
</MojsInteractive>

*/

<template>
  <div class="mojs-interactive">
    <div
      class="mojs-interactive__code"
    >
      <prism-editor :code="rawCode" language="js" @change="change"></prism-editor>
      <div class="buttons">
        <button class="button button--secondary" v-on:click="reset">Reset</button>
        <button class="button" v-on:click="updateCode">Update code</button>
      </div>
    </div>
    <p v-if="notice" class="mojs-interactive__clicknotice">{{this.notice}}</p>
    <div
      :id="this.id"
      :class="'mojs-interactive__result ' + (dark ? 'mojs-interactive__result--dark' : '')"
      :style="style"
    >
      <div v-if="controller" :id="this.id + '_controller'" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  import prism from 'prismjs';
  import PrismEditor from 'vue-prism-editor'

  export default {
    components: {
      PrismEditor
    },

    props: {
      id: { type: String, default: 'code_example' }, // A unique ID
      controller: { type: [String, Boolean], default: true }, // this will create a mojs.Player controller
      playbutton: { type: Boolean, default: false }, // use this if you want a simple contoller with a play button
      height: { type: String, default: '300px' }, // add a custom height to the container, takes all CSS values
      code: { type: String, default: '' }, // the code (as a string) to be executed
      dark: { type: Boolean, default: false }, // if you want the demo to be dark 🕶
      notice: { type: [String, Boolean], default: false }, // to show a "click somewhere to activate animation" text
      autoplay: { type: Boolean, default: false }, // if your REALY want it to autoplay. Use with responsibility!
      global: { type: String, default: '' }
    },

    data: function () {
      return {
        rawCode: this.code,
        isPlaying: false,
      }
    },

    computed: {
      style () {
        return 'height: ' + this.height;
      }
    },

    methods: {
      change: function(c) {
        this.rawCode = c;
      },

      handleCode: function(code, play) {

        if (!window) return; // For SSR

        // Do some cleaning
        var domRef = window['demo_' + this.id] || (this.global !== '' && window[this.global]);

        // Stop, remove and delete previous instance of: demo_', this.id
        if (domRef && domRef.stop) { // the mojs animation element
          domRef.stop();
          domRef.el.remove(); // remove the DOM node
        }
        // Remove and delete previous instance of player: mojsPlayer_', this.id
        if (window['mojsPlayer_' + this.id]) { // the mojs player element
          window['mojsPlayer_' + this.id].el.remove(); // remove the DOM node
          delete window['mojsPlayer_' + this.id];
        }

        // Normalize variable declaration and moves them to the windows object instead
        // Then runs the code using new Function()
        if (this.global !== '') {
          let normalizedCode = code.replaceAll("const " + this.global, "window." + this.global);
          normalizedCode = normalizedCode.replaceAll("var " + this.global, "window." + this.global);
          normalizedCode = normalizedCode.replaceAll("let " + this.global, "window." + this.global);

          new Function(normalizedCode)();
        } else {
        // Creating a global window object from a provided mojs object (code), and play it.

          const func = new Function('window["demo_' + this.id + '"] = ' + code);
          try {
            func();
          }
          catch(error) {
            console.error('Woops, please check your code for errors.', error)
          }
        }
        
        // Set the prop :controller=true to include a mojs player
        domRef = window['demo_' + this.id] || (this.global !== '' && window[this.global]); 
        if (this.controller && domRef) {
          const parentDOM = document.getElementById(this.id + '_controller');
          // Create a global mojs player instance
          window['mojsPlayer_' + this.id] = new MojsPlayer({
            add: domRef,
            parent: parentDOM,
            className: 'controller',
            isSaveState: false,
            isPlaying: play ? true : this.autoplay, // Autoplay/continue the MojsPlayer when we press the "Update code" button
            isRepeat: true,
            name: 'demo_' + this.id,
          });
        }
      },

      updateCode: function() {
        this.handleCode(this.rawCode, true);
      },

      reset: function() {
        this.handleCode(this.code);
        this.rawCode = this.code;
      },

      playPause: function() {
        if (this.isPlaying) {
          this.timeline.pause();
        } else {
          this.timeline.play();
        }
        this.isPlaying = !this.isPlaying;
      },
    },

    mounted () {
      import('@mojs/core').then(module => {
        import('@mojs/player').then(module => {
          this.handleCode(this.code);
        });
      });
    }
  }
</script>

<style>
/* Style is in global style, index.styl */
</style>
