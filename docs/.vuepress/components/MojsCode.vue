/*
Usage:
<MojsCode
  id="unique_id"
  height="200px"
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
    <div :id="this.id" class="mojs-interactive__result" :class="this.className" :style="style">
      <div v-if="controller" :id="this.id + '_controller'" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MojsCode',
    
    props: {
      id: { type: String, default: 'code_example' },
      controller: { type: [String, Boolean], default: false },
      height: { type: String, default: '300px' },
      code: { type: [String, Boolean], default: '' },
      className: { type: String, default: '' },
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
      import('mo-js').then(module => {
        import('mojs-player').then(module => {
          this.handleCode(this.code);
        });
      });
    }
  }
</script>

<style>
.mojs-interactive__result {
  position: relative;
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
</style>
