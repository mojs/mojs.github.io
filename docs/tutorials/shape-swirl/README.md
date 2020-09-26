# Shape & ShapeSwirl
<!-- Author comment: When there is a code example with and id like this: 6bc8f77ec8528e0c8c394660db150a9e, there is an original pen by legomushroom with the same id, like https://codepen.io/sol0mka/pen/6bc8f77ec8528e0c8c394660db150a9e -->

This post is about Shape and ShapeSwirl - modules that help you to bootstrap motion effects.
- [API reference](/api/shape-swirl)
#### Author: [legomushroom](https://github.com/legomushroom/)

* * *

## Shape

`Shape` is a special `mojs` module that bootstraps visual effects. The idea behind `Shapes` is simple and neat - you can have an animatable shape in any part of the screen or an `HTML` element with one declarative call. So it's like saying:

> Hey Computer! I want a pink outlined polygon right in the middle of the screen!

or like something this:

> Hey Machine! I want a dust trail after this element when it moves!

And appropriate effects should appear. Most importantly, `Shape` is a tiny bit that can be composed into more mature modules like [`Burst`](/tutorials/burst/) or `Stagger` which we will discuss shortly in the upcoming tutorials, right now I should make sure you are comfortable with [Shape APIs](/api/shape.md) and use cases.

So in the simplest way - `Shape` is just a declarative shape transition in any desired place of the screen in any moment of the time. The concept can be confusing at first, so I will try to give you as much code samples as possible, there is the first one:

<MojsCode
  id="f2227be6d2ac4ea73dc43fbe78046ec9"
  code=
"new mojs.Shape({
  parent:       '#f2227be6d2ac4ea73dc43fbe78046ec9',
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

               
Nothing interesting yet. Well maybe there is one thing - the shape magically appears just in the middle of the screen. `mojs` takes care to create as narrow container for the shape as possible, bootstraps all the markup and places the result just where you want it. Pretty handy. `isShowStart` property says to the shape to be visible even before any animations starts.

Obviously, you can style the shape as you want (play around with the different props and use the buttons to update the code):


<MojsInteractive
  id="circle"
  :controller=false
  code=
"new mojs.Shape({
  parent:       '#circle',
  shape:        'circle',     // shape 'circle' is default
  radius:       25,           // shape radius
  fill:         'transparent',// same as 'transparent'
  stroke:       '#F64040',    // or 'cyan'
  strokeWidth:  5,            // width of the stroke
  isShowStart:  true,         // show before any animation starts
});
"
>
</MojsInteractive>


The entire list of shape properties with comments could be found at [Shape API](/api/shape/) section.

## Value types

When you set colors, they can be expressed in different forms like [color keywords](https://www.w3.org/TR/css3-color/), `rgb`, `rgba` or `hex` (see `stroke` and `fill` properties).

Numeric properties may be unit based (like `top`/`left` below) or can be expressed with `rand` strings (like `x` below):

<MojsInteractive
  id="values"
  :controller=false
  code=
"new mojs.Shape({
  parent:       '#values',
  shape:        'circle',
  top:          '50%',
  x:            'rand(-250, 250)',
  isShowStart:  true,
});
" />


::: tip
Use the _Update code_ button to see the random function in use.
:::

Here above, we've set random value for the `x` property in the interval from `-250` to `250` so it should show up in random position inside that period every time you will rerun the code. `rand` string syntax is simple - it takes start and end value to generate a random value between those two.

With the `x` and `y` properties, the shape is always translated from the current position of the shape, so if the `x` property gets the value of 250px, the circle's gets translated 250px to the right.

### Radius
The `radius` property sets shape's (no prizes for guessing) radius. Also, you can set `radiusX`/`radiusY` values explicitly:

<MojsInteractive
  id="radius_example"
  :controller=false
  code=
"new mojs.Shape({
  parent:       '#radius_example',
  shape:        'circle',
  radius:       25,
  radiusX:      35, // explicit radiusX
  fill:         'transparent',
  stroke:       '#F64040',
  strokeWidth:  7,
  isShowStart:  true,
});
" />


Worth noting that the `radius` property is a property that determines size of any shape, not just `circle` as in example above, so if you have a shape of `rect` or `polygon` or any other, they would have `radius` properties too, just like a circle shape:

<MojsCode
  id="pen_53893077e0318813dd16cefc7b3e9932"
  height="150px"
  code=
"var circle = new mojs.Shape({
  parent:       '#pen_53893077e0318813dd16cefc7b3e9932',
  shape:        'circle',
  radius:       10,
  radiusX:      20, // explicit radiusX
  left:         '25%',
  fill:         'deeppink',
  isShowStart:  true,
});

var rect = new mojs.Shape({
  parent:       '#pen_53893077e0318813dd16cefc7b3e9932',
  shape:        'rect',
  radius:       15,
  left:         '50%',
  fill:         'cyan',
  isShowStart:  true,
});

var polygon = new mojs.Shape({
  parent:       '#pen_53893077e0318813dd16cefc7b3e9932',
  shape:        'polygon',
  radiusX:      10,
  radiusY:      20,
  left:         '75%',
  fill:         'yellow',
  isShowStart:  true,
});
"
>
```js
var circle = new mojs.Shape({
  shape:        'circle',
  radius:       10,
  radiusX:      20, // explicit radiusX
  left:         '25%',
  fill:         'deeppink',
  isShowStart:  true,
});

var rect = new mojs.Shape({
  shape:        'rect',
  radius:       15,
  left:         '50%',
  fill:         'cyan',
  isShowStart:  true,
});

var polygon = new mojs.Shape({
  shape:        'polygon',
  radiusX:      10,
  radiusY:      20,
  left:         '75%',
  fill:         'yellow',
  isShowStart:  true,
});
```
</MojsCode>

Also, worth noting that the `radius` properties control form of shape not just size - it gets pretty clear with `zigzag` or `curve` shapes:

<MojsCode
  id="fc3ffe076aaafdb173f12d8688cde450"
  code=
"var zigzag = new mojs.Shape({
  parent:       '#fc3ffe076aaafdb173f12d8688cde450',
  shape:        'zigzag',
  points:       11,
  radius:       25,
  radiusY:      50,
  left:         '25%',
  fill:         'none',
  stroke:       'deeppink',
  isShowStart:   true,
});

var curve = new mojs.Shape({
  parent:       '#fc3ffe076aaafdb173f12d8688cde450',
  shape:        'curve',
  points:       11,
  radius:       25,
  radiusY:      50,
  left:         '50%',
  fill:         'none',
  stroke:       'deeppink',
  isShowStart:   true,
});

var cross = new mojs.Shape({
  parent:       '#fc3ffe076aaafdb173f12d8688cde450',
  shape:        'cross',
  points:       11,
  radius:       25,
  radiusX:      50,
  left:         '75%',
  fill:         'none',
  stroke:       'deeppink',
  isShowStart:   true,
  y:            -25,
});
"
>
```js
var zigzag = new mojs.Shape({
  shape:        'zigzag',
  points:       11,
  radius:       25,
  radiusY:      50,
  left:         '25%',
  fill:         'none',
  stroke:       'deeppink',
  isShowStart:   true,
});

var curve = new mojs.Shape({
  shape:        'curve',
  points:       11,
  radius:       25,
  radiusY:      50,
  left:         '50%',
  fill:         'none',
  stroke:       'deeppink',
  isShowStart:   true,
});

var cross = new mojs.Shape({
  shape:        'cross',
  points:       11,
  radius:       25,
  radiusX:      50,
  left:         '75%',
  fill:         'none',
  stroke:       'deeppink',
  isShowStart:   true,
  y:            -25,
});
```
</MojsCode>

You can see in example above, the `radiusY` controls size of the spikes for the `zigzag` shape and for the `curve` it controls how much it bends up.

## Boolean properties
As for boolean properties of the shape, they start with the `is` prefix to separate them from other values (e.g. `isShowStart`, `isShowEnd`, `isYoyo` etc.).

## Delta (∆)

To keep the `APIs` declarative, `mojs` uses `delta` objects to describe transitions of shape properties:

<MojsInteractive
  id="delta"
  code=
"new mojs.Shape({
  parent:       '#delta',
  shape:        'circle',
  scale:         { 0 : 1 },

  duration:      1000,
  delay:         1000,
  easing:        'cubic.out',
  repeat:        2
}).play();"
/>

We have set transition for the `scale` property of the shape from `0` to `1`. As you can see the `delta` in `mojs` is plain javascript object that holds `start` and `end` state of the property, where the `key` of the object is the `start` state and `value` of the object is the `end` state respectively. If you still feel confused, just change `:` to `->` in your mind and you will have `{ '0 -> 1' }` outcome which might be more intuitive.

::: tip
To play the animation, add the `.play()` method after your shape declaration. For simplicity, we have left that one out for most of the other examples. For other public methods, check out the [API](/api/shape/).
:::

Start and end values in the `delta` object can be `unit` based or random (`rand`) ones or whatever you have — just the same as we did it before with static values (all objects in the code sample below are deltas):

<MojsCode
  id="bbd4fe6c1ac8519c76bc18828844e2c3"
  code=
"const circle = new mojs.Shape({
  parent:       '#bbd4fe6c1ac8519c76bc18828844e2c3',
  shape:        'circle',
  scale:        { 0 : 1 },
  left:         '25%',
  fill:         { 'cyan': 'yellow' },
  radius:       25,

  duration:     2000,
  repeat:       999,
}).play();

const rect = new mojs.Shape({
  parent:       '#bbd4fe6c1ac8519c76bc18828844e2c3',
  shape:        'rect',
  left:         '50%',
  fill:         'none',
  radius:       20,
  stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
  strokeWidth:  { 10: 0 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  angle:        { 0: 180 },

  duration:     2000,
  repeat:       999,
}).play();

const polygon = new mojs.Shape({
  parent:       '#bbd4fe6c1ac8519c76bc18828844e2c3',
  shape:        'polygon',
  points:       5,
  left:         '75%',
  fill:         { 'deeppink' : '#00F87F' },
  x:            { 'rand(-100%, -200%)' : 0  },
  angle:        { 0: 'rand(0, 360)' },
  radius:       25,

  duration:     2000,
  repeat:       999,
}).play();
"
>
```js
const circle = new mojs.Shape({
  shape:        'circle',
  scale:        { 0 : 1 },
  left:         '25%',
  fill:         { 'cyan': 'yellow' },
  radius:       25,

  duration:     2000,
  repeat:       999,
}).play();

const rect = new mojs.Shape({
  shape:        'rect',
  left:         '50%',
  fill:         'none',
  radius:       20,
  stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
  strokeWidth:  { 10: 0 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  angle:        { 0: 180 },

  duration:     2000,
  repeat:       999,
}).play();

const polygon = new mojs.Shape({
  shape:        'polygon',
  points:       5,
  left:         '75%',
  fill:         { 'deeppink' : '#00F87F' },
  x:            { 'rand(-100%, -200%)' : 0  },
  angle:        { 0: 'rand(0, 360)' },
  radius:       25,

  duration:     2000,
  repeat:       999,
}).play();
```
</MojsCode>

Here, delta of the `strokeDashoffset` property on the rectangle uses **_unit based_** values. The delta of the `x` property of the polygon shape uses random unit based values. The delta of the `fill` property for all the shapes uses **_color keywords_** to describe color transitions.

The nice thing about declarative APIs is that you define _what_ you want to do by contrast with _how_ to do it, so it makes the intention of the transition crystal clear with just one short glimpse. Consider this code sample of a triangle:

<MojsInteractive
  id="triangle"
  code=
"new mojs.Shape({
  parent:     '#triangle',
  shape:      'polygon',
  fill:       'orange',
  radius:     65,
  angle:      { [-120]: -40 },
  x:          { [-200]: 20 },
  y:          { [50]: -20 },
  scaleX:     { 0 : 1.3 },

  repeat:     10,
  duration:   800,
  isYoyo:     true,
  backwardEasing: 'sin.in',

  isShowEnd:  false
})"
/>



If you will translate this code sample to proper English, you will have something like this — we have a `orange` `polygon` of `65px radius` right in the middle of the screen(by default), when animation starts — it rotates from `-120` to `-40` degrees, shifts `180px` to the right starting from `-200px` and `scale`s from `0` to `1.3` concurrently. That happens during `800ms` and repeats `10` times with default `easing` and `sin.in` easing when moving backward in `yoyo` period. When animation ends, the shape `disappears`.

Note that almost every property transition besides `tween` properties (like duration/delay etc) and `boolean` values, can be expressed with `delta` object, please refer to the [API](/api/shape/) on that matter. The `∆` symbol in the comment right above properties defines that the property is _"deltable"_ thus supports delta transitions.

### Delta easing
Delta can also have its own explicit `easing` field that can hold any `mojs` <a href="">easing type</a>, this makes shape transitions more flexible to the real world needs.

<MojsInteractive
  id="deltaeasing"
  code=
"new mojs.Shape({
  parent:       '#deltaeasing',
  shape:        'circle',
  scale:        { 0 : 1, easing: 'cubic.out' },
  fill:         { 'cyan': 'yellow', easing: 'cubic.in' },

  duration:     2000,
  repeat:       2,
})"
/>


Here above, we've defined the explicit easing values for `scale` and `fill` properties.


### Delta curve
The 3rd property that is available on delta objects is `curve` property that overrides `easing` property if both present. The `curve` property is the way to go if you want to declare a `property curve` for a property transition, where start and end values of the `delta` are based on a curve, that will be multiplied by current curve's value when animation runs:

<MojsCode
  id="pen_8a4d6ffc83e6c8633b26f0691055cdad"
  height="200px"
  code=
"
const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
const scaleCurve = function(p) { return 1 + scaleCurveBase(p); };
const nScaleCurve = function(p) { return 1 - scaleCurveBase(p)/10; };

const circle = new mojs.Shape({
  parent:       '#pen_8a4d6ffc83e6c8633b26f0691055cdad',
  shape:        'rect',
  fill:         { '#F64040' : '#F64040', curve: scaleCurve },
  radius:       10,
  rx:           3,
  x:            { [-125] : 125, easing: shiftCurve },
  scaleX:       { 1 : 1, curve: scaleCurve },
  scaleY:       { 1 : 1, curve: nScaleCurve },
  origin:       { '0 50%' : '100% 50%', easing: shiftCurve },

  isYoyo:       true,
  delay:        500,
  duration:     800,
  repeat:       999
}).play();
">
```js
const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };

const circle = new mojs.Shape({
  shape:        'rect',
  fill:         { '#F64040' : '#F64040', curve: scaleCurve },
  radius:       10,
  rx:           3,
  x:            { [-125] : 125, easing: shiftCurve },
  scaleX:       { 1 : 1, curve: scaleCurve },
  scaleY:       { 1 : 1, curve: nScaleCurve },
  origin:       { '0 50%' : '100% 50%', easing: shiftCurve },

  isYoyo:         true,
  delay:        500,
  duration:     800,
  repeat:       999
}).play();
```
</MojsCode>

We won't spend a lot of time with `property curves` in this tutorial, but I highly encourage you to dig into the [topic](/tutorials/easing/path-easing/) because it is a very sophisticated and powerful concept to note.

So to recap, `delta`'s syntax:

```js
{
  startState: endState,
  easing:     'cubic.out',     // optional `easing`,
  curve:      'M0,100 L100,0'  // optional `curve` that suppress `easing` if both present
}
```

At this point we can declare and animate shapes.

Then what?

## Then Zen

You can chain shape states with `then` calls (hit play button to see):

<MojsInteractive
  id="then"
  code=
"new mojs.Shape({
  parent:       '#then',
  shape:          'rect',
  fill:           'none',
  stroke:         '#FC46AD',
  radius:         10,
  strokeWidth:    20,
  angle:          { [-180] : 0 },

  duration:       600
}).then({
  strokeWidth:    0,
  scale:          { to: 2, easing: 'sin.in' },
});"
/>

::: tip Note
In the demo above, I've added `MojsPlayer` to control the demo sequence instead of explicit `.play` call on the shape. `MojsPlayer` is part of **_mojs tools_** that gives you GUI controls thus helps you to craft your motion sequences. Also, it keeps the animation state and settings on page reloads, saving you lots of time and effort. Since our animations can get quite complex, the player could be a good aide. [Read more here](/tools/#player) how to use it.
:::

So in the demo above, we have continued the sequence with the next state declaration for the `strokeWidth` and `scale` properties. What's important - `then` doesn't need delta to describe new transition - it creates delta automatically from whatever property value was before to the new one.

If you want explicitly specify `easing` for next property state - you can use object instead of primitive value, where `to` key describes the next state ( see `scale` property in `then` call above).

Yet you can set entire new `delta` for `then` call (see `strokeWidth` and `stroke` property in `then` call below):

<MojsInteractive
  id="newdeltainthen"
  code=
"new mojs.Shape({
  parent:       '#newdeltainthen',
  shape:        'rect',
  fill:         'none',
  stroke:       'cyan',
  radius:       10,
  strokeWidth:  20,
  angle:        { [-180] : 0 },

  duration:     600
}).then({
  strokeWidth:  { 50 : 0 },
  stroke:       { 'magenta' : 'yellow'  }
});"
/>


As you can witness, setting new `delta` in `then` call tells `mojs` to ignore everything whatever was before and proceed with completely new delta transition.

The last thing to note is that if the `duration` property is not set in the new `then` call, it inherits the value from the previous block:

<MojsInteractive
  id="duration"
  code=
"new mojs.Shape({
  parent:         '#duration',
  shape:          'rect',
  fill:           'none',
  stroke:         'cyan',
  radius:         10,
  strokeWidth:    20,
  angle:          { [-180] : 0 },
  top: '50%', y: -20,

  duration:       600,
  delay:          200
}).then({

  // duration here will be 600 too because inherited from the previous block
  // delay here will have default 0 value

  angle:          -360,
  scale:          2,
  strokeWidth:    0,
  stroke:         { 'magenta' : 'yellow'  }
});"
/>



So in the code sample above, the duration inside `then` call has the same value of `600ms` inherited from the previous state block, but the `delay` has the default value of `0`.

## Tweenable Interface

`Shape` obeys `tweenable` interface thus it has the same `tween properties`, `callbacks` and `public methods` as any [tween](/api/tweens/tween.md) has:

```js
const shape = new mojs.Shape({
  // shape properties which we have already used
  shape:          'rect',
  stroke:         'cyan',
  angle:          { [-360] : 0 },

  // tween properties
  duration:       600,
  delay:          200,
  repeat:         0,
  speed:          1,
  yoyo:           false,
  easing:         'sin.out',
  backwardEasing: 'sin.in',
  yoyo:           true,

  // callbacks
  onStart (isForward, isYoyo) {
    //...
  },
  onRepeatStart (isForward, isYoyo) {
    //...
  },
  onUpdate (ep, p, isForward, isYoyo) {
    //...
  },
  onRepeatComplete (isForward, isYoyo) {
    //...
  },
  onComplete (isForward, isYoyo) {
    //...
  },
  onProgress (p, isForward, isYoyo) {
    //...
  },
  onRefresh (isBefore) {
    //...
  },
  onPlaybackStart () {},
  onPlaybackPause () {},
  onPlaybackStop () {},
  onPlaybackComplete () {},
})
// tween public methods
.play()
.playBackward()
.pause()
.stop()
.replay()
.replayBackward()
.setProgress()
.setSpeed()
.reset()
```



Also implementing `tweenable` interface means that any `Shape` can be `add`ed or `append`ed to any `timeline` exact the same way as any simple `tween`:

<MojsCode
  id="pen_72e333584c53191806ec7ecb5bce1630"
  code=
"
const OPTS = {
  parent: '#pen_72e333584c53191806ec7ecb5bce1630',
  fill:           'none',
  radius:         50,
  strokeWidth:    { 50 : 0 },
  scale:          { 0: 1 },
  angle:          { 'rand(-35, -70)': 0 },
};

let delay = 0,
    delayStep = 150,
    easing    = 'cubic.out';

const rect = new mojs.Shape({
  ...OPTS,
  shape:          'rect',
  stroke:         'cyan'
});

const circle = new mojs.Shape({
  ...OPTS,
  shape:          'circle',
  stroke:         'yellow',
  delay:          delay += delayStep,
  radius:         25,
  strokeWidth:    { 25: 0, easing },
  x: -35, y: -35
});

const triangle = new mojs.Shape({
  ...OPTS,
  shape:          'polygon',
  stroke:         'magenta',
  delay:          delay += delayStep,
  radius:         30,
  strokeWidth:    { 30: 0, easing },
  x: -20, y: 25
});

const polygon = new mojs.Shape({
  ...OPTS,
  shape:          'polygon',
  points:         5,
  stroke:         '#00F87F',
  delay:          delay += delayStep,
  x: 20,        y: -35
});

const triangle2 = new mojs.Shape({
  ...OPTS,
  shape:          'polygon',
  points:         { 3: 10 },
  stroke:         'yellow',
  delay:          delay += delayStep,
});

const polygon2 = new mojs.Shape({
  ...OPTS,
  shape:          'polygon',
  points:         5,
  stroke:         'magenta',
  delay:          delay += delayStep,
  radius:         25,
  strokeWidth:    { 25 : 0, easing },
  x: -35,        y: -20
});

const circle2 = new mojs.Shape({
  ...OPTS,
  stroke:         '#F64040',
  delay:          delay += delayStep,
  radius:         20,
  strokeWidth:    { 20: 0, easing },
  x: 35, y: 35
});

const timeline = new mojs.Timeline;

timeline
   .add( rect, circle, triangle, polygon, triangle2, polygon2, circle2 )
   .play();

const parentDOM = document.getElementById('pen_72e333584c53191806ec7ecb5bce1630_controller');             
// Create a global mojs player instance
new MojsPlayer({
  add: timeline,
  parent: parentDOM,
  className: 'controller',
  isSaveState: true,
  isPlaying: true,
  isRepeat: true,
  name: 'demo_pen_72e333584c53191806ec7ecb5bce1630_controller',
});
"
>
```js
const timeline = new mojs.Timeline;
timeline
  .add( rect, circle, triangle, polygon, triangle2, polygon2, circle2 );
```
</MojsCode>


Here above we have added shapes to timeline just like any tween - with the `add` public method.

## Tune

After you have created a shape, you can `tune` any of its properties before starting the animation. The `tune` method is handy when you want to add some interactivity to your animation or to play the shape regarding user input - the method was designed exactly for this purpose(click somewhere to see):

<MojsCode
  id="fcf6121653db713d8567271d3e8eea10"
  code=
"
const parentDOM = document.getElementById('fcf6121653db713d8567271d3e8eea10');
const OPTS = {
  parent: parentDOM,
  fill:           'none',
  radius:         25,
  strokeWidth:    { 50 : 0 },
  scale:          { 0: 1 },
  angle:          { 'rand(-35, -70)': 0 },
  duration:       500,
  left: 0,        top: 0,
  easing:         'cubic.out',
  className:      'no-pointer',
};

const circle1 = new mojs.Shape({
  ...OPTS,
  stroke:         'cyan',
});

const circle2 = new mojs.Shape({
  ...OPTS,
  radius:         { 0 : 15 },
  strokeWidth:    { 30: 0 },
  stroke:         'magenta',
  delay:          'rand(75, 150)'
});

parentDOM.addEventListener( 'click', function (e) {
  circle1
    .tune({ x: e.offsetX, y: e.offsetY  })
    .replay();

  circle2
    .tune({ x: e.offsetX, y: e.offsetY  })
    .replay();
  
});

"
>
```js
document.addEventListener( 'click', function (e) {

  circle1
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();

  circle2
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();

});
```
</MojsCode>

::: tip
See the full source code on [codepen](https://codepen.io/sol0mka/pen/XKdWJg). You can also see how to use it in a container like we do it on this demo page [in this pen](https://codepen.io/sandstedt/pen/PgyYro)
:::


Here above, we have tuned `x` and `y` properties of the circles before `replay`ing it. Any properties besides `shape` ones could be tuned at any moment of time.

Note that `tune` call transforms entire shape's property query that was set up with `then` calls. It works that way to keep the chain up to date starting from the newly tuned value. Thus you tune not only the first shape state but the subsequent ones. For instance, if you had a chain of y `-50 -> 50` then `100`, and tune it to `-100`, you will eventually have `-150 -> -150 -> 100` chain. But if you will tune to delta value like `-100 -> 0`, you will have the `-100 -> 0 -> 100` chain as the result (click somewhere to see):

<MojsCode
  id="e991f4bb942c8aa698fbe4a3dba0ad4b"
  height="300px"
  className="measure-grid"
  code=
"
const parentDOM = document.getElementById('e991f4bb942c8aa698fbe4a3dba0ad4b');

const PROPS = {
  parent:     parentDOM,
  y:          {  [-50] : 0  },
  radius:     25,
  duration:   2000,
}
const circle1 = new mojs.Shape({
  ...PROPS,
  left:       '25%',
}).then({
  y:          100
});

const circle2 = new mojs.Shape({
  ...PROPS,
  left:       '50%',
}).then({
  y:          100
});

const circle3 = new mojs.Shape({
  ...PROPS,
  left:       '75%',
}).then({
  y:          100
});

const circplePurple = new mojs.Shape({
  ...PROPS,
  x:          0,
  top:        0,
  left:       0,
  fill:      '#4e214d',
}).then({
  y:          100 // this doenst work for some reason
});

parentDOM.addEventListener( 'click', function (e) {
  circle1.replay();
  
  circle2
    .tune({ y: -100 })
    .replay();
  
  circle3
    .tune({ y: { [-100] : 0 } })
    .replay();

  // circplePurple
  //  .tune({ x: { [e.offsetX] : e.target.offsetWidth / 2 }, y: { [e.offsetY] : e.target.offsetHeight / 2 } })
  //  .replay();
});
"
>
```js
const circle = new mojs.Shape({
  y: { [-50] : 0 },
}).then({
  y: 100
});

document.addEventListener( 'click', function (e) {

  // no tune
  circle1
    .replay();

  // static value tune, results in -100 for the first block,
  // transforms the second block to the '-100 -> 100' delta
  circle2
    .tune({ y: -100 })
    .replay();

  // delta tune, results in -100 : 25 for the first block,
  // transforms the second block to the '25 -> 100' delta
  circle3
    .tune({ y: { [-100] : 0 } })
    .replay();
});
```
</MojsCode>

<!-- TODO: 
Add an tuned example based on the mouse. Like (the code below doesn't work, maybe a bug?)
Also see the hidden code above:
// used the click events values to tune from where the
// user clicks : the middle of the screen / container -> 100
circplePurple
  .tune({ x: { [e.offsetX] : e.target.offsetWidth / 2 }, y: { [e.offsetY] : e.target.offsetHeight / 2 } })
  .replay();
-->


_1st circle wasn't tuned at all, 2nd circle was tuned to static value, 3rd circle was tuned to new delta value_


## Generate

The `generate` method is very similar to `tune` one, but it doesn't receive any options. The method was designed to regenerate randoms that the shape had on initialization:

<MojsCode
  id="pen_7d905a98fd120441f52df0b59421fc80"
  code=
"
const OPTS = {
  fill:           'none',
  radius:         25,
  strokeWidth:    { 50 : 0 },
  scale:          { 0: 1 },
  duration:       500,
  left: 0,        top: 0,
  easing:         'cubic.out',
  className:      'no-pointer'
};

const mainCircle = new mojs.Shape({
  ...OPTS,
  parent:         '#pen_7d905a98fd120441f52df0b59421fc80',
  stroke:         'cyan',
});

const smallCircles = [];
const colors = [ 'deeppink', 'magenta', 'yellow', '#00F87F' ];

for ( let i = 0; i < 4; i++ ) {
  smallCircles.push(new mojs.Shape({
    ...OPTS,
    parent:         mainCircle.el,
    radius:         { 0 : 15 },
    strokeWidth:    { 30: 0 },
    left: '50%',    top: '50%',
    stroke:         colors[ i % colors.length],
    delay:          'rand(0, 350)',
    x:              'rand(-50, 50)',
    y:              'rand(-50, 50)',
    radius:         'rand(5, 20)'
  })
 );
}

document.addEventListener( 'click', function (e) {
  
   mainCircle
    .tune({ x: e.offsetX, y: e.offsetY })
    .replay();
  
    for ( let i = 0; i < smallCircles.length; i++ ) {
      smallCircles[i]
        .generate()
        .replay(); 
    }
  
});
">
```js
/* Props from smallCircles:
{
  delay:          'rand(0, 350)',
  x:              'rand(-50, 50)',
  y:              'rand(-50, 50)',
  radius:         'rand(5, 20)'
}
*/

document.addEventListener( 'click', function (e) {
  for ( let i = 0; i < smallCircles.length; i++ ) {
    smallCircles[i]
      .generate()
      .replay(); 
  }
});
```
</MojsCode>


Here above, shapes had randoms in `delay`, `x`, `y` and `radius` properties. Then we've added the mouse click handler, and `generate` the shapes inside, as the result, we have unique effect pattern every time the click event fires. [See full code here.](https://codepen.io/sol0mka/pen/7d905a98fd120441f52df0b59421fc80)

## Custom Shapes

You probably have noticed that mojs supports a bunch of built in shapes. Namely, they are `circle`, `rect`, `polygon`, `line`, `cross`, `equal`, `curve` and `zigzag`. You can extend this set of shapes by providing mojs with a custom one that suits your needs. For that:

* Draw your shape on a `100x100` artboard (viewBox) in any vector editor and save the shape as a `svg`.
* Create a class that extends the `mojs.CustomShape` class.
* Copy the shape tags from within the svg file...
  ```svg{2}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M83.0657721,87.5048737 C74.252469,95.2810178 62.6770192,99.9991713 49.9995857,99.9991713 C22.385577,99.9991713 0,77.6135943 0,49.9995857 C0,22.385577 22.385577,0 49.9995857,0 C77.6135943,0 99.9991713,22.385577 99.9991713,49.9995857 C99.9991713,50.0248803 99.9991526,50.0501705 99.999115,50.0754564 L100,94.5453117 C100,99.9979302 96.8685022,101.290527 93.0045119,97.4313174 L83.0657721,87.5048737 Z"></path>
  </svg>
  ```
* ... and paste and return them inside a `getShape` method.
  ```js
  class Bubble extends mojs.CustomShape {
    getShape () { return '<path d="M83.0657721,87.5048737 C74.252469,95.2810178 62.6770192,99.9991713 49.9995857,99.9991713 C22.385577,99.9991713 0,77.6135943 0,49.9995857 C0,22.385577 22.385577,0 49.9995857,0 C77.6135943,0 99.9991713,22.385577 99.9991713,49.9995857 C99.9991713,50.0248803 99.9991526,50.0501705 99.999115,50.0754564 L100,94.5453117 C100,99.9979302 96.8685022,101.290527 93.0045119,97.4313174 L83.0657721,87.5048737 Z"></path>'; }
    getLength () { return 200; } // optional
  }
  ```

* Now you can register this shape in mojs with a `custom name` that will be used further in `shape` property of `mojs.Shape` constructor as you did it before:

```js
mojs.addShape( 'bubble', Bubble ); // passing name and Bubble class
// now it is avaliable on mojs.Shape constructor as usual
new mojs.Shape({ shape: 'bubble' });`
```

All together in one block:

<ShapeSwirlCustomShapeOne id="bc80126bb5cef3054ee1d4e02882de97">
```js
/* ADD CUSTOM SHAPE SOMEWHERE IN YOUR CODE */
class Heart extends mojs.CustomShape {
  getShape () { return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>'; }
  getLength () { return 200; } // optional
}
mojs.addShape( 'heart', Heart ); // passing name and Bubble class

/* USE CUSTOM SHAPE */
// now it is available on mojs.Shape constructor as usual
const heart = new mojs.Shape({
  shape:    'heart', // <--- shape of heart is now available!
  fill:     'none',
  stroke:   'red',
  scale:    { 0 : 1 },
  strokeWidth: { 50 : 0 },
  y:         -20,
  duration:  1000,
});
```
</ShapeSwirlCustomShapeOne>


Worth noting that you should remove all presentation attributes from svg tags to give `mojs` the ability to style them, otherwise the values will be static:

<ShapeSwirlCustomShapeTwo id="d2be0ef912c7e21e0e990536ed6d39fa">
```js
/* ADD CUSTOM SHAPE */
class Heart extends mojs.CustomShape {
  getShape () {
    return '' + '' + ''; // see full code here: https://codepen.io/sol0mka/pen/d2be0ef912c7e21e0e990536ed6d39fa
  }
  getLength () { return 200; } // optional
}
mojs.addShape( 'heart', Heart ); // passing name and Bubble class

/* USE CUSTOM SHAPE */
// now it is available on mojs.Shape constructor as usual
const heart = new mojs.Shape({
  shape:    'heart',
  fill:     'none',
  stroke:   { 'white' : 'deeppink' },
  scale:    { 0 : 1 },
  strokeWidth: { 50 : 0 },
  y:         -20,
  duration:  1000,
});
```
</ShapeSwirlCustomShapeTwo>
        

Here above, the middle heart has static `stroke` property on its tag, so it was left unattended by contrast with other two.

Regarding the second `getLength` lifecycle method, - it is handy only if you want to use relative percent values for `strokeDasharray`/`strokeDashoffset` properties. Since `mojs` knows very little about the custom shape you have had provided, it is on you to specify what is the perimeter length of the custom shape. In the example below, we return the precise `292.110107421875` length of the heart from the `getLength` method, this allows us to use percent values in `strokeDash*` properties.

<ShapeSwirlCustomShapeThree id="pen_75894cd43b0f12ecdb425cad5149ab37"
>
```js
/* ADD CUSTOM SHAPE */
class Heart extends mojs.CustomShape {
  getShape () { return ''; } // see full code here: https://codepen.io/sol0mka/pen/75894cd43b0f12ecdb425cad5149ab37
  getLength () { return 292.110107421875; } // optional
}
mojs.addShape( 'heart', Heart ); // passing name and Bubble class

/* USE CUSTOM SHAPE */
// now it is available on mojs.Shape constructor as usual
const heart = new mojs.Shape({
  shape:            'heart',
  fill:             'none',
  stroke:           'white',
  strokeDasharray:  '100%',
  strokeDashoffset: { '-100%' : '100%' },
  y:               -20,
  duration:         1000,
});
```
</ShapeSwirlCustomShapeThree>

Here above, we are using percent values for `strokeDashoffset` property so we had to provide the custom shape with `getLength` method for precise stroke dash length calculations. Read how to find out what the exact length is [in the Wiki](https://github.com/mojs/mojs/wiki/Get-the-exact-length-for-a-custom-shape).

## ShapeSwirl

`ShapeSwirl` module basically is a `Shape` with a little bit more functionality bolted on. ShapeSwirl automatically calculates sinusoidal x/y path for shape making it easy to send the shapes over sine trajectories.

<MojsCode
  notice="Click anywhere to trigger the animation"
  id="c6888ce5c9f81ad825444d969779eadc"
  code=
"const shapeswirl = new mojs.ShapeSwirl({
  parent:       '#c6888ce5c9f81ad825444d969779eadc',
  fill:           '#F64040',
  y:              { 0: -150 },
  duration:       1000
});
const shapeSwirlContainer = document.getElementById('c6888ce5c9f81ad825444d969779eadc');
shapeSwirlContainer.addEventListener('click', function () {
  shapeswirl.replay();
});
"
>
```js
const shapeswirl = new mojs.ShapeSwirl({
  fill:           '#F64040',
  y:              { 0: -150 },
  duration:       1000
});
```
</MojsCode>

::: tip
Note that the ShapeSwirl has the default of `{ 1 : 0 }` for the `scale` property so it fades out.

To trigger the animation we have added a click event listener to the container and then run `shapeswirl.replay()`.
:::

To give you control over this behavior, ShapeSwirl accepts more `6` properties, thus you can define frequency or size of the path and other supporting parameters:

```js
const shapeSwirl = new mojs.ShapeSwirl({
  y:              { 0: -150 },
  // other props:
  isSwirl:        true, // sets if the shape should follow sinusoidal path, true by default
  swirlSize:      10, // defines amplitude of the sine
  swirlFrequency: 3, // defines frequency of the sine
  pathScale:      'rand( .1, 1 )', // defines how much the total path length should be scaled
  direction:      1, // direction of the sine could be 1 or -1
  degreeShift:    45, // angle shift for the sinusoidal path
});
```

### 1. isSwirl
The `isSwirl` property (`true` by default) defines if shape should follow sine path, if set to `false` it will act exactly the same as simple `Shape`.

### 2. swirlSize
The `swirlSize` property (`10` by default) defines the deviation or amplitude of the sine. Here is an example with `swirlSize: 35`:

<MojsCode
  notice="Click anywhere to trigger the animation"
  id="pen_0b3e2fe009d06a67a08e8ae04a7f7904"
  code=
"const shapeswirl2 = new mojs.ShapeSwirl({
  parent:       '#pen_0b3e2fe009d06a67a08e8ae04a7f7904',
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  swirlSize:      35,
  swirlFrequency: 4, 
  duration:       1000,
  direction:       -1,
});

const shapeSwirlContainer2 = document.getElementById('pen_0b3e2fe009d06a67a08e8ae04a7f7904');
shapeSwirlContainer2.addEventListener('click', function () {
  shapeswirl2.replay();
});
"
>
```js
const swirl = new mojs.ShapeSwirl({
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  swirlSize:      35,
  swirlFrequency: 4, 
  duration:       1000,
  direction:       -1,
});
```
</MojsCode>

### 3. swirlFrequency
The `swirlFrequency` property (`3` by default) defines the frequency of the sine, here is an example with `swirlFrequency: 10`:

<MojsCode
  notice="Click anywhere to trigger the animation"
  id="pen_d63af6450cb170fafc8636f185634830"
  code=
"const shapeswirl3 = new mojs.ShapeSwirl({
  parent:         '#pen_d63af6450cb170fafc8636f185634830',
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  swirlFrequency: 10, 
  duration:       1000,
});

const shapeSwirlContainer3 = document.getElementById('pen_d63af6450cb170fafc8636f185634830');
shapeSwirlContainer3.addEventListener('click', function () {
  shapeswirl3.replay();
});
"
>
```js
const swirl = new mojs.ShapeSwirl({
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  swirlFrequency: 10, 
  duration:       1000,
});
```
</MojsCode>

### 4. direction
The `direction` property (`1` by default) defines direction of the amplitude of the sine - it have value of either `1` or `-1`. Here is the example for `-1`. Note how it starts to the left instead of right:

<MojsCode
  notice="Click anywhere to trigger the animation"
  id="f1fb2e4dc7bb9b11e3b6b96299fa99f9"
  code=
"const shapeswirl4 = new mojs.ShapeSwirl({
  parent:         '#f1fb2e4dc7bb9b11e3b6b96299fa99f9',
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  direction:      -1,
  swirlSize:      35,
  swirlFrequency: 4,
  duration:       1000
});

const shapeSwirlContainer4 = document.getElementById('f1fb2e4dc7bb9b11e3b6b96299fa99f9');
shapeSwirlContainer4.addEventListener('click', function () {
  shapeswirl4.replay();
});
"
>
```js
const swirl = new mojs.ShapeSwirl({
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  direction:      -1,
  swirlSize:      35,
  swirlFrequency: 4,
  duration:       1000
});
```
</MojsCode>

### 5. pathScale
The `pathScale` property (`1` by default) defines the scale size of the sine path. Here is an example of `pathScale: .5` - which scales the sine by half (of the original radius):

<MojsCode
  notice="Click anywhere to trigger the animation"
  id="b4c26893f3814227480d7cc5ab5ceded"
  code=
"const shapeswirl4 = new mojs.ShapeSwirl({
  parent:         '#b4c26893f3814227480d7cc5ab5ceded',
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  pathScale:      .5,
  duration:       1000,
});

const shapeSwirlContainer4 = document.getElementById('b4c26893f3814227480d7cc5ab5ceded');
shapeSwirlContainer4.addEventListener('click', function () {
  shapeswirl4.replay();
});
"
>
```js
const swirl = new mojs.ShapeSwirl({
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  pathScale:      .5,
  duration:       1000,
});
```
</MojsCode>


You are probably thinking - why not just to shorten the `y` value instead of `pathScale` one? Well, because the `pathScale` scales the actual path of the swirl, for instance if you will add the transition for the `x` property, the path scale will affect the product of `y` and `x` - the actual path that the shape makes while move:

<MojsCode
  notice="Click anywhere to trigger the animation"
  id="pen_49bc780ab7d4d812e1832437fa9c6762"
  code=
"const shapeswirl5 = new mojs.ShapeSwirl({
  parent:         '#pen_49bc780ab7d4d812e1832437fa9c6762',
  fill:           '#F64040',
  x:              { 0: -100 },
  y:              { 0: -150 },
  radius:         8,
  pathScale:      .5,
  duration:       1000,
});

const shapeSwirlContainer5 = document.getElementById('pen_49bc780ab7d4d812e1832437fa9c6762');
shapeSwirlContainer5.addEventListener('click', function () {
  shapeswirl5.replay();
});
"
>
```js
const swirl = new mojs.ShapeSwirl({
  fill:           '#F64040',
  x:              { 0: -100 },
  y:              { 0: -150 },
  radius:         8,
  pathScale:      .5,
  duration:       1000,
});
```
</MojsCode>

The `pathScale` property will become very useful when we will discuss the `Burst` module shortly and will have a bunch of `ShapeSwirls` at once, especially when we will need to randomize their sine lengths.

### 6. degreeShift
The `degreeShift` property (`0` by default) defines angle of the swirl. This property becomes interesting when `shapeSwirl` is used inside other modules (like `Burst`). For now it will act just like angle of the sine path. Here is an example for `degreeShift: 90`:

<MojsCode
  notice="Click anywhere to trigger the animation"
  id="pen_6bc8f77ec8528e0c8c394660db150a9e"
  code=
"const shapeswirl5 = new mojs.ShapeSwirl({
  parent:         '#pen_6bc8f77ec8528e0c8c394660db150a9e',
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  degreeShift:    90,
  duration:       1000,
});

const shapeSwirlContainer5 = document.getElementById('pen_6bc8f77ec8528e0c8c394660db150a9e');
shapeSwirlContainer5.addEventListener('click', function () {
  shapeswirl5.replay();
});
"
>
```js
const swirl = new mojs.ShapeSwirl({
  fill:           '#F64040',
  y:              { 0: -150 },
  radius:         8,
  degreeShift:    90,
  duration:       1000,
});
```
</MojsCode>

How ShapeSwirl can be handy will be cristal clear soon, in short, the main idea behind swirls is to give you the ability to compose dust/smoke/bubbles effects or basically any effect that needs shapes to move over sine path:

<MojsCode
  notice="Click anywhere to see"
  id="pen_90e2506d73313d14d49486f7d71fb9d0"
  code=
"
const SWIRL_OPTS = {
  left: 0, top: 0,
  fill:           '#F64040',
  duration:       'rand(600, 1000)',
  radius:         'rand(10, 20)',
  pathScale:      'rand(.5, 1)',
  swirlFrequency: 'rand(2,4)',
  swirlSize: 'rand(6,14)',
}

const swirl1 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});
  
const swirl2 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS,
  direction: -1
});

const swirl3 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});
  
const swirl4 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});

const shapeSwirlContainer6 = document.getElementById('pen_90e2506d73313d14d49486f7d71fb9d0');
shapeSwirlContainer6.addEventListener('click', function (e) {
  const x = e.pageX,
        y = { [e.pageY]: e.pageY-150 };
  swirl1
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl2
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl3
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl4
    .tune({ x, y })
    .generate()
    .replay();
});
"
>

  [See code here](https://codepen.io/sol0mka/pen/90e2506d73313d14d49486f7d71fb9d0)

</MojsCode>

Except those 6 properties, the `ShapeSwirl` is the same as a simple `Shape`.


## Recap

That was a pretty fast intro to the `Shape` module. You can use [Shape APIs](/api/shape) and [ShapeSwirl API](/api/shape-swirl) sections as reference further on. What is important ro remember: 
* You can create a `Shape` in any part of the screen, or an HTML element using the parent prop.
* If you want to animate some property — you add a `delta` object (`{'from': to}`) that describes the transition of that property.
* You can chain the shape transitions with `then` calls and `tune` new properties when you want.
* Tweenable interface allows you to work with `Shape` in the same way you work with any other `Tween`.

Now you probably asking yourself - Why do we need something as simple as an animatable shape? In the next section I will cover few use cases for shapes but most importantly it will become crystal clear why do we need shapes in the next [Burst Tutorial](/tutorials/burst/). Probably, you can treat this tutorial as finished at this point, the further sections are rather optional and were written just for fun. So you can skip reading them in favor of [Burst Tutorial](/tutorials/burst/) but I highly encourage you to continue reading to gain solid understanding of the shapes.

* * *

## Use Cases

> Please note that the use cases section contains a lot of live code examples but the actual code samples are omitted for time savings and simplicity sake. The actual code is still available in the Codepen link and I highly encourage you to read through and play with them while we will walk through this section. You can omit reading large demos code since it is probably unreadable (Codepen can contain bundled code) or it could be too large to understand sparingly, but you can return to them later, - after you will complete this tutorial. I will leave a little (×) mark for you to indicate that you can skip reading the source code of the Codepen for now.

Despite the fact that `Shape` and `ShapeSwirl` modules are nothing than tiny bits that compose higher order modules creating some matured effects, they have strong use cases and can be used on their own. There is no thing in the whole world such expressive and appealing as simple geometric shapes so they are ubiquitous in the motion graphics nowadays. You can use shapes in your animations to add special effects and details making your animation more expressive. Also, `Shapes` are often used to implode them into `UI` thus enhancing it. From the development point of view — `Shape` can be created with just one declarative call allowing you to focus entirely on you motion sequences and don't spend the time bootstrapping things, this fact powers you with a `"shape framework"` to think in, so your motion sequences get more organized and consistent.

I hope you don't believe that `Shapes` are useful just because I claimed it out loud, so let me convince you with the next real world use cases. Note that the code samples are omitted in this section but feel free to check Codepen link to tweak the part that interests you.

### Motion Graphics Use Cases

Motion graphics is indeed one of the strongest use cases for `Shapes`. Nothing breathes life into static content better than the use of motion graphics. With shapes, the limits are simply the imagination of the designer or the artist, - you can create complex mograph sequences based entirely on geometric or custom shapes or use them aside as reinforcement support.

#### Bubbles

Let's start with the simple intro sequence, it was composed of custom "speech bubble" shapes and few built in ones.

<DemoSpeechBubble />
[Link to pen](https://codepen.io/sol0mka/pen/EyKxqO)

Custom shapes allow you to use shapes that suite your current needs. To be clear that's not just images that you can animate inside some wrapper, they are highly styleable shapes thus a way flexible than just an image or HTMLElement with some background.

#### Geometric Scenes

Let's walk through some short random geometric scenes just to get some intuition about shape usage with mograph. After that, we will combine them to get slightly longer intro sequence.

We will start with a simple and appealing triangles scene. Just 6 triangles and few `then` statements:

<DemoTriangles />
[Link to pen](https://codepen.io/sol0mka/pen/4db9ec6079a3537d8c60ec888dd8e532)

We will compose the next scene by using another 6 triangles, slightly more elegant, with a little contrast to the first one, but still quite simple:

<DemoElegantTriangles />
[Link to pen](https://codepen.io/sol0mka/pen/c0b7b94e90142f19acba6ed9a4b05a2f)

Let's do the next one with contrast to these two, - simple rectangle with some sparks, this one rather funky:

<DemoFunkySquare />
[Link to pen](https://codepen.io/sol0mka/pen/c33a3582fc02842b99fa6eb01be6b3ba)

Note that the best module to use for the white `sparks` effect on the sides of the square would be the `Burst` module which we will discuss shortly in the next tutorial. Meanwhile in this particular demo, it was made with custom shapes to give you yet another clue how you would use the custom shapes.

After that we need a nice transition between screens, just a few circles will do the trick:

<DemoExpandingCircles />
[Link to pen](https://codepen.io/sol0mka/pen/95a862f1ad8445134466ad7d64213d46)

::: warning Accessibility warning
When making fullscreen transitions, make sure to include a chech for if the user preferes reduced motion. We don't wanna trigger a migrane attack for our user. For example, you can play the animation from the end instead of frame 0, to ensure the last frame will be visible:

```js
let prefersReducedMotion = false;
const motionQuery = matchMedia('(prefers-reduced-motion)');
const handleReduceMotionChanged = () => {
  prefersReducedMotion = motionQuery.matches; // set to true if user preferes reduced motion
}
motionQuery.addListener(handleReduceMotionChanged);
handleReduceMotionChanged(); // trigger once on load to check initial value

this.timeline.play(
  prefersReducedMotion ? 1000 : 0; // 1000 = the length/end of the timeline
);
```
[Read more at CSS-tricks](https://css-tricks.com/introduction-reduced-motion-media-query/).
:::

The last scene for this sequence would be `mojs` logo reveal - use case for shapes in tandem with `property curves`:

<DemoMojsLogoReveal dark />
[Link to pen](https://codepen.io/sol0mka/pen/b37bb9c6dede99d0ac75d60b5fb0d43d)


Now, let's finally compose these short scenes into one:

<Codepen
  title="mograph"
  pen="RRRgLq"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/RRRgLq)

_You can find the entire source code in [this repo](https://github.com/legomushroom/shape-demo1) since the bundled Codepen code ~~could be~~ **is** unreadable._

#### Word reveal

<DemoLove />
[Link to pen](https://codepen.io/sol0mka/pen/c94452fb65dbf676b0ae8a12d4267473)


That's was the last demo for the mograph use cases, I hope you getting more convinced that shapes could be useful sometimes. Let's move on.

## Inspiration
There are also few gifs for your inspiration. All of them pretty much easy with `mojs` shapes:
<More label="Click here to see the gifs">
  ![Example gif](/assets/gifs/shape-mograph/blend_square.gif)
  ![Example gif](/assets/gifs/shape-mograph/random.gif)
  ![Example gif](/assets/gifs/shape-mograph/omam-logo-imprint.gif)
  ![Example gif](/assets/gifs/shape-mograph/number_1_jrcanest.gif)
  ![Example gif](/assets/gifs/shape-mograph/lookinside.gif)
  ![Example gif](/assets/gifs/shape-mograph/lukas_pink_loading.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-1.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-2.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-3.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-4.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-5.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-6.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-7.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-8.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-11.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-12.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-10.gif)
  ![Example gif](/assets/gifs/shape-mograph/shapes-9.gif)
</More>

## Animation Use Cases
Animation is another field for Shapes application. You can compose some visual effects to support your main sequence, crafting more details and depth.

I've made a little animation demo as a starting point to which we will apply some effects. 4 physical balls in a harsh living situation(x):

<Codepen
  title="shape-tutorial-animation-1"
  pen="3fe5eabaf7cfb83142bbd1be3f2f2850"
  user="sol0mka"
/>

_You can find the entire source code in [this repo](https://github.com/legomushroom/shape-demo2) since the bundled Codepen code could be unreadable._

The demo itself is a good illustration of how you can use shapes as "main actors" in your scenes because it was made entirely with shapes. But there are few cases that should be discussed besides that.

For instance, you can add the effect of collision between balls with ease(x):

<Codepen
  title="shape-tutorial-animation-2"
  pen="7315f4364360ec87a6655d33782702fe"
  user="sol0mka"
/>

_You can find the entire source code in [this repo](https://github.com/legomushroom/shape-demo2) since the bundled Codepen code could be unreadable._

As you would expect, the effect itself was composed of bunch of shapes and swirls:

<Codepen
  title="shape-tutorial-animation-3"
  pen="c29f0b2ce24147e4886691b61b31b3fb"
  user="sol0mka"
/>


The next effect, you can add to the scene is the "motion trails" effect (x):

<Codepen
  title="shape-tutorial-animation-4"
  pen="92f9a7b05498b8a0be3734737a9cfc70"
  user="sol0mka"
/>

_You can find the entire source code in [this repo](https://github.com/legomushroom/shape-demo2) since the bundled Codepen code could be unreadable._

Motion trail effect is usually used to exaggerate velocity of the object that moves and the environment it moves in. Just a nice subtle detail. The effect was composed of 2 shapes, namely curves.

There is another simple example with lines instead of curves:

<Codepen
  title="shape-tutorial-animation-5"
  pen="fff0bcc079e0448bd0a72ee311ebadfa"
  user="sol0mka"
/>

The next effect that can fit this scene is the "dust trail" effect (x):

<Codepen
  title="shape-tutorial-animation-6"
  pen="6f7b05a45679964ccdf9212fa68075c8"
  user="sol0mka"
/>

_You can find the entire source code in [this repo](https://github.com/legomushroom/shape-demo2) since the bundled Codepen code could be unreadable._

It was composed of bunch of swirls, let's spend some time and see how exactly you can build something like that. First, you want to make the swirls move downward, - somewhere into the ground:

<Codepen
  title="shape-tutorial-animation-7"
  pen="80d765ff22ae515cb28a78c0ec5686c9"
  user="sol0mka"
/>

Then put these swirls inside `overflow: hidden` container to constrain the visible area:

<Codepen
  title="shape-tutorial-animation-7"
  pen="eb05789c56571993be7fb966b8b9207f"
  user="sol0mka"
/>

As the last touch, you need to add 2 swirls that will fade upward at the end:

<Codepen
  title="shape-tutorial-animation-9"
  pen="73dcc20f9e36c64e8d3b55d0188f016a"
  user="sol0mka"
/>

To recap, there is the same exact effect with simple object:

<Codepen
  title="shape-tutorial-animation-8"
  pen="633e6aa52d40691cca2f2cda91650bae"
  user="sol0mka"
/>

_Note: Again, this dust effect could be done with just one declarative call with `Burst` or `Stagger` modules that we will discuss shortly, but for now let's keep it `Swirl`._

That's basically all for animation use cases. My effort in this section was focused to convey the idea of how you can use the shapes to enhance and support your main animation scenes, applying little effects and details.


Just a few gifs for your inspiration:
<More label="Click here to see the gifs">  
  ![Example gif](/assets/gifs/shape-animation/bens.gif)  
  ![Example gif](/assets/gifs/shape-animation/galshir-candles.gif)  
  ![Example gif](/assets/gifs/shape-animation/space-dog.gif)  
  ![Example gif](/assets/gifs/shape-animation/galshir-coffee-machine.gif)  
  ![Example gif](/assets/gifs/shape-animation/galshir.gif)  
  ![Example gif](/assets/gifs/shape-animation/galshir-sharpener.gif)  
  ![Example gif](/assets/gifs/shape-animation/galshir-toaster.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-9.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-11.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-20.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-2.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-6.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-8.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-10.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-111.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-12.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-16.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-21.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-24.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-25.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-28.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-31.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-32.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-36.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-38.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-39.gif)  
  ![Example gif](/assets/gifs/shape-animation/rain_dribbble.gif)  
  ![Example gif](/assets/gifs/shape-animation/sloth.gif)  
  ![Example gif](/assets/gifs/shape-animation/LingoAsset-23.gif)  
</More>


## UI Use Cases

UI is another common use case for shapes. You can enhance UI transitions with shapes, add effects or even implode shapes to use them as part of UIs.

Usually motion in UI helps the user to catch a clue about position, purpose and intention of the UI element.

### Bubble Close Button

The next demo illustrates how the shapes can be used to appeal users' attention, providing them with feedback about availability of the control element in a playful way. There is a demo with two shapes that act in place of UI element:

<Codepen
  title="shape-tutorial-ui1"
  pen="3e7e766d0d5eaa3fa953c56c394bc1b5"
  user="sol0mka"
/>

Then you can add even more effects to the button to fit the mood of your current UIs, for instance "bubble UI":

<Codepen
  title="shape-tutorial-ui2"
  pen="97d57587438de4d1e8592304a961be84"
  user="sol0mka"
/>

If user will click the close button, we need to remove it, for that we can add a "bubbles fade out" effect to keep the "bubbles" pace:

<Codepen
  title="shape-tutorial-ui3"
  pen="181b4ba2ebb5a05d755647e9144a50d8"
  user="sol0mka"
/>

This is how it will look like if we will connect these two transitions (click the close button):

<Codepen
  title="shape-tutorial-ui4"
  pen="3c49de2d7d0ca3e92bf5db5bf7a2687d"
  user="sol0mka"
/>

That's the exact same effect I've used in Bubble Layout demo a while ago, when I was trying to convey the bubble interface (click on any circle to see the close button)(x):

<Codepen
  title="Bubble Layout"
  pen="yNOage"
  user="sol0mka"
/>

In this demo above you can notice two more effects that were made with shapes, - one is the subtle white ripple that spreads out when you click on any bubble (click somewhere to see):

<Codepen
  title="shape-tutorial-ui5"
  pen="aa500ebd18bde6a4f67c31496eb4d095"
  user="sol0mka"
/>

The second one is the white collision effect right under the project image box when it jumps over the screen:

<Codepen
  title="shape-tutorial-ui5"
  pen="e5fe8c0a9a0a2b387cfa2858ea7e2046"
  user="sol0mka"
/>

### Micro Interactions

Since the shapes are tuneable, you can add effects to you UI regarding user interactions (hover over the links to see):

<Codepen
  title="shape-tutorial-ui6"
  pen="a46534d118a64d2450e6a0e8e93541fd"
  user="sol0mka"
/>

Another demo for micro interactions is the pointer ripple, the effect that spreads out after a user clicks any touchable surface. The `mojs-player` itself has a lot of those so I will put an empty player as demo (click on player controls to see):

<Codepen
  title="MojsPlayer"
  pen="249b42683dfa4b7a11f641e842270427"
  user="sol0mka"
/>

That's basically exact the same principle we have used in this tune demo (click somewhere to see):

<Codepen
  title="Simple Ripple"
  pen="fcf6121653db713d8567271d3e8eea10"
  user="sol0mka"
/>

### Love/Hate Modal

OK. Let's do another demo with shapes regarding UI. This time, we will have a plus button, it will show up from bottom left, after it will stop - we will mimic button push transition by adding the concurrent rotation of the button. By that we will imitate "let's go/follow me" gesture, inviting user to follow up with a click:

<Codepen
  title="shape-tutorial-ui7"
  pen="1f6cce8046f76ca43aca3a5ac681b97c"
  user="sol0mka"
/>

Then we can expand the button sequence even more to add some playful splash effect:

<Codepen
  title="shape-tutorial-ui8"
  pen="51350c86ef0e0fb722e034006fcafb8f"
  user="sol0mka"
/>

Then, if user doesn't click the button for a while, let's invite him to proceed by adding the callout vibration, to mime an incoming call:

<Codepen
  title="shape-tutorial-ui9"
  pen="9935b7cec036eae2ddb762213ceae6d4"
  user="sol0mka"
/>

When the user eventually will click the button, we will show the quiz modal with the most valuable question we have ever had. That's how the modal will look like:

<Codepen
  title="shape-tutorial-ui10"
  pen="2c95e0397b0d20eb4fbc952e3c5f0fe0"
  user="sol0mka"
/>

Every piece of this sequence above is composed of shapes - ripple inside a modal, few details in the top and bottom right corners, background spread effect, modal shape itself and its corner are shapes too.

Now when the user hovers over any button, we need to show some tension, conveying that something is going to happen if he will proceed with a click (hover over buttons to see):

<Codepen
  title="shape-tutorial-ui11"
  pen="ad612440c8b08d0b506e0a8cb4152b9c"
  user="sol0mka"
/>

The extend parts of inflating modal are nothing than plain shapes, in fact - `curve`s that just get scaled when the user hovers over the buttons. I've set the modal shape to disappear to reveal the extending parts so it will be clear for you what I mean (hover over buttons):

<Codepen
  title="shape-tutorial-ui11"
  pen="4b54df04faa5b6c885a7b0222c842b5d"
  user="sol0mka"
/>

As you can see now - the extending parts are just `curves` on each side of the modal. They get larger when user hovers over the buttons.

Next, if user leaves the button with his pointer, we need to show the tension relief by mimicking the air currents that float out of the modal, just a few swirls would do here (hover over buttons and then release to see):

<Codepen
  title="shape-tutorial-ui13"
  pen="fcc29bcf5d0eebf37d558864b7a2e334"
  user="sol0mka"
/>

In the other case, when the user finally proceeds with the button click, we will blow up the modal as a consequence of the modal's tension and show the chosen word. That's the entire sequence (x):

<Codepen
  title="Love or Hate?"
  pen="812699ce32c9a7aeb70c9384b32a533a"
  user="sol0mka"
/>

_You can find the entire source code in [this repo](https://github.com/legomushroom/shape-demo3) since the bundled Codepen code could be unreadable._

There are few gifs for your inspiration over the UI's and shapes:

<More label="Click here to see the gifs">
  ![Example gif](/assets/gifs/shape-ui/upload.gif)
  ![Example gif](/assets/gifs/shape-ui/awsm.gif)
  ![Example gif](/assets/gifs/shape-ui/checkbox.gif)
  ![Example gif](/assets/gifs/shape-ui/download.gif)
  ![Example gif](/assets/gifs/shape-ui/circle-menu-github-open-source-ramotion.gif)
  ![Example gif](/assets/gifs/shape-ui/close.gif)
  ![Example gif](/assets/gifs/shape-ui/dailyui-049.gif)
  ![Example gif](/assets/gifs/shape-ui/download2.gif)
  ![Example gif](/assets/gifs/shape-ui/dribbble_hex-nav.gif)
  ![Example gif](/assets/gifs/shape-ui/dribbble-morph.gif)
  ![Example gif](/assets/gifs/shape-ui/ezgif.com-gif-maker2.gif)
  ![Example gif](/assets/gifs/shape-ui/ezgif.com-gif-maker5.gif)
  ![Example gif](/assets/gifs/shape-ui/fab-animation.gif)
  ![Example gif](/assets/gifs/shape-ui/finalshot.gif)
  ![Example gif](/assets/gifs/shape-ui/hp_dribbble_2.gif)
  ![Example gif](/assets/gifs/shape-ui/IMG_1171.gif)
  ![Example gif](/assets/gifs/shape-ui/inboxui.gif)
  ![Example gif](/assets/gifs/shape-ui/LingoAsset-1.gif)
  ![Example gif](/assets/gifs/shape-ui/LingoAsset-2.gif)
  ![Example gif](/assets/gifs/shape-ui/LingoAsset-3.gif)
  ![Example gif](/assets/gifs/shape-ui/LingoAsset-4.gif)
  ![Example gif](/assets/gifs/shape-ui/LingoAsset-5.gif)
  ![Example gif](/assets/gifs/shape-ui/LingoAsset-6.gif)
  ![Example gif](/assets/gifs/shape-ui/LingoAsset-7.gif)
  ![Example gif](/assets/gifs/shape-ui/LingoAsset-8.gif)
  ![Example gif](/assets/gifs/shape-ui/pause-push2.gif)
  ![Example gif](/assets/gifs/shape-ui/right-and-wrong.gif)
  ![Example gif](/assets/gifs/shape-ui/search_3.gif)
  ![Example gif](/assets/gifs/shape-ui/share.gif)
  ![Example gif](/assets/gifs/shape-ui/time-marine-hud.gif)
  ![Example gif](/assets/gifs/shape-ui/anim.gif)

</More>



## It's a wrap!

Phew, that was intense. I hope you didn't get bored. We have touched only the surface of possible use cases in this post but I hope it puts some light on why and when you can use shapes. At this point it's probably clear that to create a shape you use a declarative call and the shape appears in any place of the screen (or HTMLElement) you want without any bootstrapping. You can use `then` method to chain states of shape and `tune` them afterward or even re`generate` all random properties on it before starting the animation. Remember that shapes obey the `tweenable` interface thus it has tween properties, callbacks and public methods that any `tween` has.

Need to admit that this post was written as an introduction to more complex and mature module that is called `Burst`, it was important to familiarize you with the base concepts and API's syntax before we will proceed further. I think now you are ready to meet the [Burst](/tutorials/burst/)!

## Thank you!

I deeply appreciate you did it down here, I tried to make it not so boring for you. For any questions, catch me on twitter ([@legomushroom](https://twitter.com/legomushroom)), ask a question on StackOverflow with `#mojs` tag, rise an issue on [GitHub repo](https://github.com/mojs/mojs) or join our [Slack Community](https://mojs.slack.com/). You can help the project on [GitHub](https://github.com/legomushroom/mojs/). {'Love <3.'}

Kudos to [Jonas Sandstedt](https://twitter.com/jonassandstedt) for his help in rewriting and proof reading this tutorial!
