
# Getting started

## Setup mo.js in your project
- Run `npm i @mojs/core` OR `yarn add @mojs/core`
- Import it `import mojs from '@mojs/core'`

  Or use the minified CDN version:
  ```js
  <script src="https://cdn.jsdelivr.net/npm/@mojs/core"></script>
  ```

- Create your animations. What about a bouncy circle?


<MojsInteractive
  id="bouncyCircle"
  autoplay
  global="bouncyCircle"
  code=
"const bouncyCircle = new mojs.Shape({
  parent:       '#bouncyCircle',
  shape:        'circle',
  fill:         {'#F64040': '#FC46AD'},
  radius:       {20: 80},
  duration:     2000,
  isYoyo:       true,
  isShowStart:  true,
  easing:       'elastic.inout',
  repeat:       1,
});

bouncyCircle.play()"
>
</MojsInteractive>


---

Or maybe a loading animation?


<MojsInteractive
  id="spinner"
  autoplay
  height="200px"
  global="spinner"
  code=
"const spinner = new mojs.Shape({
  parent:           '#spinner',
  shape:            'circle',
  stroke:           '#FC46AD',
  strokeDasharray:  '125, 125',
  strokeDashoffset: {'0': '-125'},
  strokeWidth:      4,
  fill:             'none',
  left:             '50%',
  top:              '50%',
  angle:            {'-90': '270'},
  radius:           20,
  isShowStart:      true,
  duration:         2000,
  easing:           'back.in',
})
.then({
  angle:            {'-90': '270'},
  strokeDashoffset: {'-125': '-250'},
  duration:         3000,
  easing:           'cubic.out',
});

spinner.play();"
>
</MojsInteractive>


Go creative!

See the [API](/api/README.md) for more info.

## Usage with Server Side Rendering (SSR)
Note that this is a client-side library, and is not meant to be run on a server. So if you are using a library like Next.js, Gatsby, Nuxt.js  or Angular Universal, make sure not to run your MoJS code on the server, just on the client side. How to do that differs from the library you are using. In React based libraries you can use the `useEffect` hook or a dynamic import ([read more here](https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97)). For Angular Universal you can use Guards ([read more about it here](https://github.com/angular/universal/blob/master/docs/gotchas.md#window-is-not-defined)). Lastly if you use Vue with Nuxt.js, you will find [more info here](https://nuxtjs.org/faq/window-document-undefined), or info about using the `mounted` hook [here](https://nuxtjs.org/guides/concepts/server-side-rendering).

Also see tutorial on how to use MoJS inside a [React app here](./usage-with-react.md).
