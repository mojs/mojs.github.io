
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
