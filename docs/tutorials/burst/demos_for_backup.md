In case the codepens in the tutorial disapears, here is a backup of all of them

# https://codepen.io/sol0mka/pen/cb910fce2e9ed27f902ae7f895bbb9ac

```css
body, html {
  padding: 0;
}
body {
  //background: #202223;
}
```

```js
const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: 19 },
  angle:    45,
  children: {
    shape:        'line',
    radius:       3,
    scale:        1,
    stroke:       '#FD7932',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    duration:     700,
    easing:       'quad.out',
  }
});

document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
```

# https://codepen.io/sol0mka/pen/080045a3420abd5344443aff91c85fa2
```
const RADIUS = 28;
const circle = new mojs.Shape({
  left: 0, top: 0,
  stroke:   '#FF9C00',
  strokeWidth: { [2*RADIUS] : 0 },
  fill:     'none',
  scale:    { 0: 1, easing: 'quad.out' },
  radius:   RADIUS,
  duration:  450
});

const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 6: RADIUS - 7 },
  angle:    45,
  children: {
    shape:        'line',
    radius:       RADIUS/7.3,
    scale:        1,
    stroke:       '#FD7932',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    degreeShift:     'stagger(0,-5)',
    duration:     700,
    delay:        200,
    easing:       'quad.out',
  }
});

class Star extends mojs.CustomShape {
  getShape () {
    return '<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />';
  }
}
mojs.addShape( 'star', Star );

const star = new mojs.Shape({
  left: 0, top: 0,
  shape:    'star',
  fill:     '#FF9C00',
  scale:    { 0 : 1 },
  easing:   'elastic.out',
  duration: 1600,
  delay:    300,
  radius:   RADIUS/2.25
});

const timeline = new mojs.Timeline({ speed: 1.5 });

timeline
  .add( burst, circle, star );

document.addEventListener( 'click', function (e) {
  const coords = { x: e.pageX, y: e.pageY };
  burst.tune(coords);
  circle.tune(coords);
  star.tune(coords);
  timeline.replay();
});
```


# https://codepen.io/sol0mka/pen/0fd14523d76f93865539f1f011682da9

```js
class Star extends mojs.CustomShape {
  getShape () {
    return '<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />';
  }
}
mojs.addShape( 'star', Star );

const RADIUS = 28;
const circle = new mojs.Shape({
  left: 0, top: 0,
  stroke:   '#FF9C00',
  strokeWidth: { [2*RADIUS] : 0 },
  fill:     'none',
  scale:    { 0: 1, easing: 'quad.out' },
  radius:   RADIUS,
  duration:  450,
});

const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 6: RADIUS - 3 },
  angle:    45,
  children: {
    shape:        'star',
    radius:       RADIUS/2.2,
    fill:         '#FD7932',
    degreeShift:  'stagger(0,-5)',
    duration:     700,
    delay:        200,
    easing:       'quad.out',
    // delay:        100,
  }
});

const star = new mojs.Shape({
  left: 0, top: 0,
  shape:    'star',
  fill:     '#FF9C00',
  scale:    { 0 : 1 },
  easing:   'elastic.out',
  duration: 1600,
  delay:    300,
  radius:   RADIUS/2.35
});

const timeline = new mojs.Timeline({ speed: 1.5 });

timeline
  .add( burst, circle, star );

document.addEventListener( 'click', function (e) {
  const coords = { x: e.pageX, y: e.pageY };
  burst.tune(coords);
  circle.tune(coords);
  star.tune(coords);
  timeline.replay();
});
```


# https://codepen.io/sol0mka/pen/28b429cd2d5ae8c0dd0f10cecd6d0bd0

```js
const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: 32 },
  angle:    45,
  count:    14,
  children: {
    radius:       2.5,
    fill:         '#FD7932',
    scale:        { 1: 0, easing: 'quad.in' },
    pathScale:    [ .8, null ],
    degreeShift:  [ 13, null ],
    duration:     [ 500, 700 ],
    easing:       'quint.out'
  }
});

document.addEventListener( 'click', function (e) {
  const coords = { x: e.pageX, y: e.pageY };
  burst
    .tune(coords)
    .replay();
});

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/28b429cd2d5ae8c0dd0f10cecd6d0bd0

```js
class Heart extends mojs.CustomShape {
  getShape () {
    return '<path d="M73.6170213,0 C64.4680851,0 56.5957447,5.53191489 51.7021277,13.8297872 C50.8510638,15.3191489 48.9361702,15.3191489 48.0851064,13.8297872 C43.4042553,5.53191489 35.3191489,0 26.1702128,0 C11.9148936,0 0,14.0425532 0,31.2765957 C0,48.0851064 14.893617,77.8723404 47.6595745,99.3617021 C49.1489362,100.212766 50.8510638,100.212766 52.1276596,99.3617021 C83.8297872,78.5106383 99.787234,48.2978723 99.787234,31.2765957 C100,14.0425532 88.0851064,0 73.6170213,0 L73.6170213,0 Z"></path>';
  }
}
mojs.addShape( 'heart', Heart );

const CIRCLE_RADIUS = 20;
const RADIUS = 32;
const circle = new mojs.Shape({
  left: 0, top: 0,
  stroke:   '#FF9C00',
  strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: RADIUS },
  angle:    45,
  count:    14,
  timeline: { delay: 300 },
  children: {
    radius:       2.5,
    fill:         '#FD7932',
    scale:        { 1: 0, easing: 'quad.in' },
    pathScale:    [ .8, null ],
    degreeShift:  [ 13, null ],
    duration:     [ 500, 700 ],
    easing:       'quint.out'
  }
});

const heart = new mojs.Shape({
  left: 0, top: 2,
  shape:    'heart',
  fill:     '#E5214A',
  scale:    { 0 : 1 },
  easing:   'elastic.out',
  duration: 1600,
  delay:    300,
  radius:   11
});

document.addEventListener( 'click', function (e) {
  const coords = { x: e.pageX, y: e.pageY };
  burst
    .tune(coords)
    .replay();
  
  circle
    .tune( coords )
    .replay();
  
  heart
    .tune( coords )
    .replay();
  
});
```


# https://codepen.io/sol0mka/pen/f25a2fbaf15c43c0923f507d54951cdb

```js
class Heart extends mojs.CustomShape {
  getShape () {
    return '<path d="M73.6170213,0 C64.4680851,0 56.5957447,5.53191489 51.7021277,13.8297872 C50.8510638,15.3191489 48.9361702,15.3191489 48.0851064,13.8297872 C43.4042553,5.53191489 35.3191489,0 26.1702128,0 C11.9148936,0 0,14.0425532 0,31.2765957 C0,48.0851064 14.893617,77.8723404 47.6595745,99.3617021 C49.1489362,100.212766 50.8510638,100.212766 52.1276596,99.3617021 C83.8297872,78.5106383 99.787234,48.2978723 99.787234,31.2765957 C100,14.0425532 88.0851064,0 73.6170213,0 L73.6170213,0 Z"></path>';
  }
}
mojs.addShape( 'heart', Heart );

const CIRCLE_RADIUS = 20;
const RADIUS = 32;
const circle = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { '#E5214A' : '#CC8EF5' },
  strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: RADIUS },
  angle:    45,
  count:    14,
  timeline: { delay: 300 },
  children: {
    radius:       2.5,
    fill:         [
      // { '#91D2FA' : '#BDEFD8' },
      // { '#91D2FA' : '#ADD6CA' },
      { '#9EC9F5' : '#9ED8C6' },
      { '#91D3F7' : '#9AE4CF' },
      
      { '#DC93CF' : '#E3D36B' },
      { '#CF8EEF' : '#CBEB98' },
      
      { '#87E9C6' : '#1FCC93' },
      { '#A7ECD0' : '#9AE4CF' },
      
      { '#87E9C6' : '#A635D9' },
      { '#D58EB3' : '#E0B6F5' },
      
      { '#F48BA2' : '#CF8EEF' },
      { '#91D3F7' : '#A635D9' },

      { '#CF8EEF' : '#CBEB98' },
      { '#87E9C6' : '#A635D9' },
    ],
    scale:        { 1: 0, easing: 'quad.in' },
    pathScale:    [ .8, null ],
    degreeShift:  [ 13, null ],
    duration:     [ 500, 700 ],
    easing:       'quint.out',
    // speed: .1
  }
});

const heart = new mojs.Shape({
  left: 0, top: 2,
  shape:    'heart',
  fill:     '#E5214A',
  scale:    { 0 : 1 },
  easing:   'elastic.out',
  duration: 1000,
  delay:    300,
  radius:   11
});

document.addEventListener( 'click', function (e) {
  const coords = { x: e.pageX, y: e.pageY };
  burst
    .tune(coords)
    .replay();
  
  circle
    .tune( coords )
    .replay();
  
  heart
    .tune( coords )
    .replay();
  
});

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/a336008aff2d73121763887097a99001

```js
const bubbles = new mojs.Burst({
  left: 0, top: 0,
  radius:   25,
  count:    3,
  children: {
    stroke:       'white',
    fill:         'none',
    scale:        1,
    strokeWidth:  { 8: 0 },
    radius:       { 0 : 'rand(8, 12)' },
    degreeShift:  'rand(-50, 50)',
    duration:     400,
    delay:        'rand(0, 250)',
  }
});

document.addEventListener( 'click', function (e) {
  bubbles
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
});
```


# https://codepen.io/sol0mka/pen/d260dc9246f2100b9f2dbe79a01d01f6

```js
const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 0: 30 },
  angle:    'rand(0, 360)',
  timeline: { delay: 50 },
  children: {
    shape:        'line',
    stroke:       'white',
    fill:         'none',
    scale:        1,
    scaleX:       { 1: 0 },
    // easing:       'cubic.out',
    duration:     650
  }
});

const bubbles = new mojs.Burst({
  left: 0, top: 0,
  radius:   28,
  count:    3,
  timeline: { delay: 200 },
  children: {
    stroke:       'white',
    fill:         'none',
    scale:        1,
    strokeWidth:  { 8: 0 },
    radius:       { 0 : 'rand(6, 10)' },
    degreeShift:  'rand(-50, 50)',
    duration:     450,
    delay:        'rand(0, 250)',
  }
});

const cross = new mojs.Shape({
  left: 0, top: 0,
  shape:    'cross',
  angle:    45,
  radius:   9,
  scale:    { 0: 1 },
  stroke:   'white',
  duration:     400,
  delay:        150
});

const circle = new mojs.Shape({
  left: 0, top: 0,
  radius:       { 0: 16, easing: 'sin.out' },
  fill:         'none',
  stroke:       'white',
  strokeWidth:  { 10: 0 },
  duration:     450,
  easing:       'cubic.out'
});

document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  bubbles
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  cross
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  circle
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
});
```


# https://codepen.io/sol0mka/pen/60d5d3c97981022f20f86c37580bceb1

```js
const DURATION = 400

const smoke = new mojs.Burst({
  left: 0, top: 0,
  degree:   0,
  count:    3,
  radius:   { 0: 100 },
  children: {
    fill:       'white',
    pathScale:  'rand(0.5, 1)',
    radius:     'rand(12, 15)',
    swirlSize:  'rand(10, 15)',
    swirlFrequency: 'rand(2, 4)',
    direction:  [ 1, -1 ],
    duration:   `rand(${1*DURATION}, ${2*DURATION})`,
    delay:      'rand(0, 75)',
    easing:     'quad.out',
    isSwirl:    true,
    isForce3d:  true,
  }
});


document.addEventListener( 'click',  (e) => {
  smoke
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
});
```


# https://codepen.io/sol0mka/pen/f307bc95b1ac02c09042c89ea7afe945

```js
const DURATION = 400

const bubbles = new mojs.Burst({
  left: 0, top: 0,
  degree:   0,
  count:    3,
  radius:   { 0: 100 },
  children: {
    fill:       'white',
    pathScale:  'rand(0.5, 1)',
    radius:     'rand(12, 15)',
    swirlSize:  'rand(10, 15)',
    swirlFrequency: 'rand(2, 4)',
    direction:  [ 1, -1 ],
    duration:   `rand(${1*DURATION}, ${2*DURATION})`,
    delay:      'rand(0, 75)',
    easing:     'quad.out',
    isSwirl:    true,
    isForce3d:  true,
  }
});

const circle = new mojs.Shape({
  top: 0, left: 0,
  radius:       { 20: 0 },
  stroke:       'white',
  strokeWidth:  { 5: 0 },
  fill:         'none',
  duration:     500
  // delay:        200
});

const cross = new mojs.Shape({
  top: 0, left: 0,
  angle:        45,
  shape:        'cross',
  radius:       { 10: 0 },
  stroke:       'white',
  fill:         'none',
  easing:       'cubic.out',
  duration:     500
});

document.addEventListener( 'click',  (e) => {
  bubbles
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  circle
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  cross
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
});
```


# https://codepen.io/sol0mka/pen/4fe37a79f6d665d749ebcb4f22c2ee4e

```js
const burst = new mojs.Burst({
  left: 0, top: 0,
  degree:   180,
  angle:    90,
  radius:   { 10: 25 },
  count:    5,
  children: {
    shape:        'line',
    radius:       7,
    radiusY:      0,
    scale:        1,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    stroke:       '#F9DD5E' ,
    easing:       'linear.none',
    duration:     600
  }
});

document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/953926af8c30d3dd297070b1a079e059

```js
const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 10: 25 },
  count:    4,
  children: {
    shape:        'line',
    radius:       7,
    radiusY:      0,
    scale:        1,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    stroke:       '#FC2D79' ,
    easing:       'linear.none',
    duration:     600
  }
});

document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/1018219ace50f564f7bb8b77b53efeb8

```js


const meteors = new mojs.Burst({
  left: 0, top: 0,
  count:    3,
  radius:   { 0: 250 },

  children: {
    shape:        'line',
    stroke:       ['#F9DD5E', '#FC2D79', '#11CDC5'],
    duration:     400,
    radius:       60,
    strokeWidth:  8,
    isForce3d:    true
  }
});

document.addEventListener( 'click', function (e) {
  meteors
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });

```


# https://codepen.io/sol0mka/pen/d84370a3c19fdcea8c714e7049c9ab5d

```js
const meteors = new mojs.Burst({
  left: 0, top: 0,
  count:    3,
  radius:   { 0: 250 },
  degree:   0,

  children: {
    shape:        'line',
    stroke:       ['#F9DD5E', '#FC2D79', '#11CDC5'],
    duration:     400,
    radius:       60,
    strokeWidth:  8,
    isForce3d:    true
  }
});

document.addEventListener( 'click', function (e) {
  meteors
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/2be25259bdd8e01f9ac3770f6f2bd36a

```js
const meteors = new mojs.Burst({
  left: 0, top: 0,
  count:    3,
  radius:   { 0: 250 },
  degree:   0,

  children: {
    shape:        'line',
    stroke:       ['#F9DD5E', '#FC2D79', '#11CDC5'],
    duration:     400,
    radius:       60,
    strokeWidth:  8,
    left:         'stagger(20)',
    top:          'stagger(20)',
    delay:        [ 0, 200, 100 ],
    isForce3d:    true
  }
});

document.addEventListener( 'click', function (e) {
  meteors
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/bf8377efd5b0dada9537481e29ecd6af

```js
const meteors = new mojs.Burst({
  left: 0, top: 0,
  count:    3,
  radius:   { 0: 250 },
  degree:   0,
  angle:    225,

  children: {
    shape:        'line',
    stroke:       ['#F9DD5E', '#FC2D79', '#11CDC5'],
    duration:     400,
    radius:       60,
    strokeWidth:  8,
    left:         'stagger(20)',
    top:          'stagger(20)',
    delay:        [ 0, 200, 100 ],
    isForce3d:    true
  }
});

document.addEventListener( 'click', function (e) {
  meteors
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/432464f276fe6f06b457915ca6062723

```js
const o = new mojs.Burst({
  count:    3,
  radius:   0,
  degree:   0,

  children: {
    stroke:       [ '#FC2D79', '#11CDC5', 'white'],
    fill:         'none',
    duration:     400,
    scale:        1,
    radius:       35,
    radiusY:      { 0: 35 },
    strokeWidth:  3,
    duration:     800,
    delay:        'stagger(125)',
  }
});

const timeline = new mojs.Timeline;

timeline
  .add( o );

new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/33f7924ecd146d951698bf190ac7838e

```js
const vertLine = new mojs.Burst({
  count:    3,
  radius:   0,
  degree:   0,
  
  children: {
    shape:        'line',
    stroke:       [ '#FC2D79', '#11CDC5', 'white'],
    duration:     400,
    scale:        1,
    radius:       35,
    radiusX:      { 0: 35 },
    strokeWidth:  3,
    duration:     800,
    delay:        'stagger(125)',
  }
});

const horLine = new mojs.Burst({
  count:    3,
  radius:   0,
  degree:   0,
  angle:    90,
  y:       -50,
  x:        1,
  
  children: {
    shape:        'line',
    stroke:       [ '#FC2D79', '#11CDC5', 'white'],
    duration:     400,
    scale:        1,
    radius:       20,
    radiusX:      { 0: 20 },
    strokeWidth:  3,
    duration:     800,
    delay:        'stagger(800, 125)',
  }
});


const o = new mojs.Burst({
  count:    3,
  radius:   0,
  degree:   0,

  children: {
    stroke:       [ '#FC2D79', '#11CDC5', 'white'],
    fill:         'none',
    duration:     400,
    scale:        1,
    radius:       35,
    radiusY:      { 0: 35 },
    strokeWidth:  3,
    duration:     800,
    delay:        'stagger(600, 125)',
  }
});

const timeline = new mojs.Timeline;

timeline
  .add( o, vertLine, horLine );

new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/a3c64825683dddd18316f8f288475131

```js
const MAIN_OPTS = {
  count:    3,
  radius:   0,
  degree:   0
}

const CHILD_OPTS = {
  stroke:       [ '#FC2D79', '#11CDC5', 'white'],
  fill:         'none',
  duration:     400,
  scale:        1,
  radius:       35,
  radiusY:      { 0: 35 },
  strokeWidth:  3,
  duration:     800,
  delay:        'stagger(125)',
}

const vertLine = new mojs.Burst({
  ...MAIN_OPTS,
  x: -1,
  
  children: {
    ...CHILD_OPTS,
    shape:         'line',
    radius:        35,
    scaleX:        { 0: 1 },
    left:         -35,
    top:           35,
    origin:        '100% 50%'
  }
});

const horLine = new mojs.Burst({
  ...MAIN_OPTS,
  angle:    90,
  y:       -50,
  
  children: {
    ...CHILD_OPTS,
    shape:        'line',
    radius:       20,
    radiusX:      { 0: 20 },
    delay:        'stagger(800, 125)',
  }
});

const o = new mojs.Burst({
  ...MAIN_OPTS,
  width: 10, height: 10,

  children: {
    ...CHILD_OPTS,
    delay:        'stagger(650, 125)',
  }
});


const timeline = new mojs.Timeline;
timeline
  .add( o, vertLine, horLine );

new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });
```


# https://codepen.io/sol0mka/pen/79db23782ec1eb9d16246b136ec82b9c

```js
const COLORS = {
  RED:      '#FD5061',
  YELLOW:   '#FFCEA5',
  BLACK:    '#29363B',
  WHITE:    'white',
  VINOUS:   '#A50710'
}

const burst1 = new mojs.Burst({
  left: 0, top: 0,
  count:    5,
  radius:   { 50: 250 },
  children: {
    fill:   'white',
    shape:  'line',
    stroke: [ COLORS.WHITE, COLORS.VINOUS ],
    strokeWidth: 12, 
    radius: 'rand(30, 60)',
    radiusY: 0,
    scale: { 1: 0 },
    pathScale: 'rand(.5, 1)',
    degreeShift: 'rand(-360, 360)',
    isForce3d: true,
  }
});
  
document.addEventListener( 'click', function (e) {
  burst1
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
});
```


# https://codepen.io/sol0mka/pen/3b9c757a7625dc015753740bcad8fb66

```js
const COLORS = {
  RED:      '#FD5061',
  YELLOW:   '#FFCEA5',
  BLACK:    '#29363B',
  WHITE:    'white',
  VINOUS:   '#A50710'
}

const burst1 = new mojs.Burst({
  left: 0, top: 0,
  count:    5,
  radius:   { 50: 250 },
  children: {
    fill:   'white',
    shape:  'line',
    stroke: [ COLORS.WHITE, COLORS.VINOUS ],
    strokeWidth: 12, 
    radius: 'rand(30, 60)',
    radiusY: 0,
    scale: { 1: 0 },
    pathScale: 'rand(.5, 1)',
    degreeShift: 'rand(-360, 360)',
    isForce3d: true,
  }
});

const burst2 = new mojs.Burst({
  left: 0, top: 0,
  count:  3,
  radius: { 0: 250 },
  angle: 'rand(0, 360)',
  children: {
    shape:      [ 'circle', 'rect' ],
    points:     5,
    fill:       [ COLORS.WHITE, COLORS.VINOUS ],
    radius:     'rand(30, 60)',
    scale:      { 1: 0 },
    pathScale:  'rand(.5, 1)',
    isForce3d:  true
  }
});
  
document.addEventListener( 'click', function (e) {
  burst1
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  burst2
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
});
```


# https://codepen.io/sol0mka/pen/4c8366d3a7eea2a5f83a3d457f8e9cd9

```js
const COLORS = {
  RED:      '#FD5061',
  YELLOW:   '#FFCEA5',
  BLACK:    '#29363B',
  WHITE:    'white',
  VINOUS:   '#A50710'
}

const burst1 = new mojs.Burst({
  left: 0, top: 0,
  count:    5,
  radius:   { 50: 250 },
  children: {
    fill:   'white',
    shape:  'line',
    stroke: [ COLORS.WHITE, COLORS.VINOUS ],
    strokeWidth: 12, 
    radius: 'rand(30, 60)',
    radiusY: 0,
    scale: { 1: 0 },
    pathScale: 'rand(.5, 1)',
    degreeShift: 'rand(-360, 360)',
    isForce3d: true,
  }
});

const burst2 = new mojs.Burst({
  top: 0, left: 0,
  count:  3,
  radius: { 0: 250 },
  children: {
    shape:      [ 'circle', 'rect' ],
    points:     5,
    fill:       [ COLORS.WHITE, COLORS.VINOUS ],
    radius:     'rand(30, 60)',
    scale:      { 1: 0 },
    pathScale:  'rand(.5, 1)',
    isForce3d:  true
  }
});

const CIRCLE_OPTS = {
  left: 0, top: 0,
  fill:     COLORS.WHITE,
  scale:    { .2: 1 },
  opacity: { 1: 0 },
  isForce3d: true,
  isShowEnd: false
}

const circle1 = new mojs.Shape({
    ...CIRCLE_OPTS,
    radius:   200,
  });

const circle2 = new mojs.Shape({
  ...CIRCLE_OPTS,
  radius:   240,
  easing: 'cubic.out',
  delay: 150,
});
  
document.addEventListener( 'click', function (e) {
  burst1
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  burst2
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  circle1
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  circle2
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
});
```


# https://codepen.io/sol0mka/pen/699cfc8716a13e0e1c15105af2b6fb95

```js
const COLORS = {
  RED:      '#FD5061',
  YELLOW:   '#FFCEA5',
  BLACK:    '#29363B',
  WHITE:    'white',
  VINOUS:   '#A50710'
}

const bgBurst = new mojs.Burst({
  left: 0, top: 0,
  count:  3,
  radius: 0,
  degree: 0,
  isShowEnd: false,
  children: {
    fill:           [ COLORS.RED, COLORS.WHITE, COLORS.BLACK ],
    radius:         'stagger(200, 2)',
    scale:          { .25 : 3 },
    duration:       500,
    delay:          'stagger(50)',
    easing:         [ 'cubic.out', 'cubic.out', 'cubic.out' ],
    isForce3d:      true,
  }
});

const burst1 = new mojs.Burst({
  left: 0, top: 0,
  count:    5,
  radius:   { 50: 250 },
  children: {
    fill:   'white',
    shape:  'line',
    stroke: [ COLORS.WHITE, COLORS.VINOUS ],
    strokeWidth: 12, 
    radius: 'rand(30, 60)',
    radiusY: 0,
    scale: { 1: 0 },
    pathScale: 'rand(.5, 1)',
    degreeShift: 'rand(-360, 360)',
    isForce3d: true,
  }
});

const burst2 = new mojs.Burst({
  top: 0, left: 0,
  count:  3,
  radius: { 0: 250 },
  children: {
    shape:      [ 'circle', 'rect' ],
    points:     5,
    fill:       [ COLORS.WHITE, COLORS.VINOUS ],
    radius:     'rand(30, 60)',
    scale:      { 1: 0 },
    pathScale:  'rand(.5, 1)',
    isForce3d:  true
  }
});

const CIRCLE_OPTS = {
  left: 0, top: 0,
  fill:     COLORS.WHITE,
  scale:    { .2: 1 },
  opacity: { 1: 0 },
  isForce3d: true,
  isShowEnd: false
}

const circle1 = new mojs.Shape({
    ...CIRCLE_OPTS,
    radius:   200,
  });

const circle2 = new mojs.Shape({
  ...CIRCLE_OPTS,
  radius:   240,
  easing: 'cubic.out',
  delay: 150,
});
  
document.addEventListener( 'click', function (e) {
  burst1
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  burst2
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  circle1
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  circle2
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  bgBurst
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
});
```


# https://codepen.io/sol0mka/pen/6caf96461207a5caa9226fbd2631569d

```js
const COLORS = {
  RED:      '#FD5061',
  YELLOW:   '#FFCEA5',
  BLACK:    '#29363B',
  WHITE:    'white',
  VINOUS:   '#A50710'
}

const burst1 = new mojs.Burst({
  left: 0, top: 0,
  count:          8,
  radius:         { 50: 150 },
  children: {
    shape:        'line',
    stroke:       [ 'white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202' ],
    scale:        1,
    scaleX:       { 1 : 0 },
    // pathScale:    'rand(.5, 1.25)',
    degreeShift:  'rand(-90, 90)',
    radius:       'rand(20, 40)',
    // duration:     200,
    delay:        'rand(0, 150)',
    isForce3d:    true
  }
});

const largeBurst = new mojs.Burst({
  left: 0, top: 0,
  count:          4,
  radius:         0,
  angle:         45,
  radius:        { 0: 450  },
  children: {
    shape:        'line',
    stroke:       '#4ACAD9',
    scale:        1,
    scaleX:       { 1 : 0 },
    radius:       100,
    duration:     450,
    isForce3d:    true,
    easing:       'cubic.inout'
  }
});

const CIRCLE_OPTS = {
  left: 0, top: 0,
  scale:      { 0: 1 },
}

const largeCircle = new mojs.Shape({
  ...CIRCLE_OPTS,
  fill:       'none',
  stroke:     'white',
  strokeWidth: 4,
  opacity:    { .25 : 0 },
  radius:     250,
  duration:   600,
});

const smallCircle = new mojs.Shape({
  ...CIRCLE_OPTS,
  fill:       'white',
  opacity:    { .5 : 0 },
  radius:     30,
});
  
document.addEventListener( 'click', function (e) {
  
  burst1
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  largeBurst
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  largeCircle
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  smallCircle
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
});
```


# https://codepen.io/sol0mka/pen/97a95a5cb7663cf336e8d80f9f511553

```js
var burst1 = new mojs.Burst({
  y:              { 0: -100, easing: 'cubic.in' },
  count:          'rand(4,6)',
  degree:         40,
  angle:         -25,
  radius:         { 0 : 100 },
  children: {
    fill:           'white',
    radius:         'rand(10, 20)',
    pathScale:      ['rand(0, .5)', 'rand(.5, 1)'],
    degreeShift:    'rand(.2, 1)',
    swirlFrequency: 'rand(3, 10)',
    direction:      [ 1, -1 ],
    isSwirl:        true,
    duration:       600,
    easing:         'cubic.out',
    isForce3d:      true
  }
});


const timeline = new mojs.Timeline({ speed: .5 });
timeline.add( burst1 );

new MojsPlayer({
  add: timeline, isPlaying: true, isRepeat: true
});
```


# https://codepen.io/sol0mka/pen/bbc4c52b7145d9d872ac437f21afd75f

```js
const BUST_OPTS = {
  parent:         '#js-container',
  count:          'rand(3,5)',
  degree:         40,
  angle:         -25,
  radius:         { 25 : 75 },
  children: {
    fill:           'white',
    radius:         'rand(8, 15)',
    pathScale:      ['rand(0, .5)', 'rand(.35, 1)'],
    degreeShift:    'rand(.2, 1)',
    swirlFrequency: 'rand(3, 5)',
    direction:      [ 1, -1 ],
    isSwirl:        true,
    duration:       400,
    easing:         'cubic.out',
    isForce3d:      true
  }
}

const burst1 = new mojs.Burst({
  ...BUST_OPTS,
  left:     145,
  top:      75,
  y:        { 0: -65 }
});
  
const burst2 = new mojs.Burst({
  ...BUST_OPTS,
  left:     295,
  top:      25,
  y:        { 0: -50 }
});

const burst3 = new mojs.Burst({
  ...BUST_OPTS,
  left:     50,
  top:      25,
  y:        { 0: -50 }
});

const burst4 = new mojs.Burst({
  ...BUST_OPTS,
  left:     175,
  top:      0,
  y:        { 0: -35 }
});


const timeline = new mojs.Timeline({ speed: .5 });
timeline.add( burst1, burst2, burst3, burst4 );

document.addEventListener('click', function () {
  timeline.replay();
});

// new MojsPlayer({
//   add: timeline, isPlaying: true, isRepeat: true
// });
```


# 

```js

```


# 

```js

```


# 

```js

```


# 

```js

```


# 

```js

```


# 

```js

```


# 

```js

```


# 

```js

```


# 

```js

```


# 

```js

```
