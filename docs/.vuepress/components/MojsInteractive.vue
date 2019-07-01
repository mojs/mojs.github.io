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

or if you wanna declare a height or a controller:

<MojsInteractive
  id="unique_id"
  :controller=true
  height="200px"
  code=
"new mojs.Shape({
  parent:       '#unique_id',
  shape:        'circle',
  radius:       {20: 80},
})"
/>

or with no controlls at all (static animation, unless you provide a .play() function):

<MojsInteractive
  id="unique_id"
  :playbutton=false
  code=
"new mojs.Shape({
  parent:       '#unique_id',
  shape:        'circle',
  radius:       {20: 80},
}).play()"
/>
*/

<template>
  <div class="mojs-interactive">
    <div
      class="mojs-interactive__code"
      :class="{ 'mojs-interactive__code--pinned': isPinned }"
    >
      <prism-editor :code="code" language="js" @change="change"></prism-editor>
      <button class="button button--icon button--pin" v-on:click="pin" aria-label="Pin the code on scroll">
        {{ isPinned ? "✖️" : "📍" }}
      </button>
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
      <button class="button button--icon button--control" v-if="!controller && playbutton" v-on:click="playPause" :aria-label="isPlaying ? 'Pause animation' : 'Play animation'">{{isPlaying ? '⑊' : '︎︎︎▶︎'}}</button>
      <!-- <button class="button button--icon button--control" v-if="!isPlaying && !controller" v-on:click="play" aria-label="Play animation">▶︎</button> -->
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
      controller: { type: [String, Boolean], default: false }, // this will create a mojs.Player controller
      playbutton: { type: Boolean, default: true }, // use this if you want a simple contoller with a play button
      height: { type: String, default: '300px' }, // add a custom height to the container, takes all CSS values
      code: { type: String, default: '' }, // the code (as a string) to be executed
      dark: { type: Boolean, default: false }, // if you want the demo to be dark 🕶
      notice: { type: [String, Boolean], default: false }, // to show a "click somewhere to activate animation" text
      autoplay: { type: Boolean, default: false }, // if your REALY want it to autoplay. Use with responsibility!
    },

    data: function () {
      return {
        rawCode: this.code,
        isPlaying: false,
        isPinned: false,
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
        // Stop, remove and delete previous instance of: demo_', this.id
        if (window['demo_' + this.id]) { // the mojs animation element
          window['demo_' + this.id].stop();
          window['demo_' + this.id].el.remove(); // remove the DOM node
          delete window['demo_' + this.id]; 
        }
        // Remove and delete previous instance of player: mojsPlayer_', this.id
        if (window['mojsPlayer_' + this.id]) { // the mojs player element
          window['mojsPlayer_' + this.id].el.remove(); // remove the DOM node
          delete window['mojsPlayer_' + this.id];
        }

        // Creating a global window object from a provided mojs object (code), and play it.
        const func = new Function('window["demo_' + this.id + '"] = ' + code);
        try {
          func();
          if (!this.controller && this.playbutton) {            
            this.timeline = new mojs.Timeline({
              onPlaybackComplete: () => {
                this.isPlaying = false;
              }
            })
            .add(
              window['demo_' + this.id]
            );
            // Autoplay the timeline when we press the "Update code" button
            if (play) {
              this.timeline.play();
              this.isPlaying = true;
            }            
          }
        }
        catch(error) {
          console.error('Woops, please check your code for errors.', error)
        }

        // Set the prop :controller=true to include a mojs player
        if (this.controller && window['demo_' + this.id]) {
          const parentDOM = document.getElementById(this.id + '_controller');              
          // Create a global mojs player instance
          window['mojsPlayer_' + this.id] = new MojsPlayer({
            add: window['demo_' + this.id],
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
      },

      playPause: function() {
        if (this.isPlaying) {
          this.timeline.pause();
        } else {
          this.timeline.play();

        }
        this.isPlaying = !this.isPlaying;
      },

      pin: function() {
        this.isPinned = !this.isPinned;
      }
    },

    mounted () {
      import('@mojs/core').then(module => {
        import('mojs-player').then(module => {
          this.handleCode(this.code);
        });
      });
    }
  }
</script>

<style>
/* Style is in global style, index.styl */
</style>
