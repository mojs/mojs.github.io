/*
A simplified version of MojsInteractive that can't be edited,
but has more flexibility regarding the code.

Usage:
<MojsCode
  id="unique_id"
  height="200px"
  :dark="true"
  code=
"new mojs.Shape({
  parent:       '#unique_id',
  shape:        'circle',
  isShowStart:  true,
});
"
>
```js
new mojs.Shape({
  shape:        'circle',
  isShowStart:  true,
});
```
</MojsCode>
*/
<template>
  <div class="mojs-interactive">
    <div class="mojs-interactive__code">
      <slot></slot>
    </div>
    <p v-if="notice" class="mojs-interactive__clicknotice">{{this.notice}}</p>
    <div :id="this.id" :class="'mojs-interactive__result ' + (dark ? 'mojs-interactive__result--dark' : '')" :style="style">
      <div v-if="controller" :id="this.id + '_controller'" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MojsCode',

    props: {
      id: { type: String, default: 'code_example' },
      controller: { type: [String, Boolean], default: true },
      height: { type: String, default: '300px' },
      code: { type: [String, Boolean], default: '' },
      dark: { type: Boolean, default: false }, // if you want the demo to be dark 🕶
      notice: { type: [String, Boolean], default: false }, // to show a "click somewhere to activate animation" text
    },

    computed: {
      style () {
        return 'height: ' + this.height;
      }
    },

    methods: {
      // Creating a function based on the string, and execute it to run the code inside it.
      handleCode: function(code) {
        if (!window || !code) return; // For SSR

        const func = new Function(code);
        try {
          func();
        }
        catch(error) {
          console.error('Woops, please check your code for errors.', error)
        }
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
