
# Getting started

## Setup mo.js in your project
- Run `npm i mo-js` OR `yarn add mo-js`
- Import it `import mojs from 'mo-js'`

  Or use the minified CDN version:
  ```js
  <script src="http://cdn.jsdelivr.net/mojs/latest/mo.min.js"></script>
  ```

- Create your animations. What about a bouncy circle?

<ClientOnly>
  <ExampleCircle>
  ```js
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
  ```
  </ExampleCircle>
</ClientOnly>

Or maybe a loading animation?

<ClientOnly>
  <ExampleSpinner height="200px" id="spinner">
  ```js
  var loader = new mojs.Shape({
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
    onComplete () {
      loader.replay(0); // create an infinite loop
    }
  })
  .play();
  ```
  </ExampleSpinner>
</ClientOnly>

Go creative!

See the [API](/api/README.md) for more info.
