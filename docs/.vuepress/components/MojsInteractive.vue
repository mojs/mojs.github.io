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
    <div
      :id="this.id"
      class="mojs-interactive__result"
      :style="style"
    >
      <button class="button button--icon button--control" v-if="!controller" v-on:click="playPause" :aria-label="isPlaying ? 'Pause animation' : 'Play animation'">{{isPlaying ? '⑊' : '︎︎︎▶︎'}}</button>
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
      id: { type: String, default: 'code_example' },
      controller: { type: [String, Boolean], default: false },
      height: { type: String, default: '300px' },
      code: { type: String, default: '' },
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

      handleCode: function(code) {
        if (!window) return; // For SSR
        
        // Do some cleaning
        if (window['demo_' + this.id]) { // the mojs animation element
          window['demo_' + this.id].stop();
          window['demo_' + this.id].el.remove(); // remove the DOM node
          delete window['demo_' + this.id]; 
        }
        if (window['mojsPlayer_' + this.id]) { // the mojs player element
          window['mojsPlayer_' + this.id].el.remove(); // remove the DOM node
          delete window['mojsPlayer_' + this.id];
        }
        // Creating a global window object from a provided mojs object (code), and play it.
        const func = new Function('window["demo_' + this.id + '"] = ' + code);
        try {
          func();
          if (!this.controller) {            
            this.timeline = new mojs.Timeline({
              onPlaybackComplete: () => {
                this.isPlaying = false;
              }
            })
            .add(
              window['demo_' + this.id]
            )
            .play();
            
            this.isPlaying = true;
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
            isSaveState: true,
            isPlaying: true,
            isRepeat: true,
            name: 'demo_' + this.id,
          });
        }
      },

      updateCode: function() {
        this.handleCode(this.rawCode);
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
      import('mo-js').then(module => {
        import('mojs-player').then(module => {
          this.handleCode(this.code);
        });
      });
    }
  }
</script>

<style>
.mojs-interactive__code {
  position: relative;
  padding-bottom: 1.2em;
}
.mojs-interactive__code .buttons {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
/* TODO: Add the pinned to the container, co both the code and the code exmple can be side by side. 
  And add a placeholder block where the old elements had been so the text doesnt jump.
 */
.mojs-interactive__code.mojs-interactive__code--pinned {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 200;
  background: #2b062a;
}
.mojs-interactive__code.mojs-interactive__code--pinned .prism-editor-wrapper {
  max-height: 50vh;
  overflow: auto;
}
.mojs-interactive__code .button--pin {
  position: absolute;
  top: 0;
  right: 0;
}

.mojs-interactive__result {
  position: relative;
}
.mojs-interactive__result .button--control {
  position: absolute;
  bottom: 0;
  right: 0;
}
.mojs-interactive__result {
  background: #f1e2d7;
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}
.mojs-interactive__result svg {
  overflow: visible
}

.mojs-interactive__controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.mojs-interactive__controller .controller {
  position: absolute;
}
</style>
