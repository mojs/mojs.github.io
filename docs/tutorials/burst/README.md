# Burst
<!-- Author comment: When there is a code example with and id like this: 6bc8f77ec8528e0c8c394660db150a9e, there is an original pen by legomushroom with the same id, like https://codepen.io/sol0mka/pen/6bc8f77ec8528e0c8c394660db150a9e -->

Burst is the module that helps you to craft numerous sophisticated motion effects.
- [API reference](/api/burst)

> Please make sure you are comfortable with [Shapes & ShapeSwirl](/tutorials/shape-swirl/) before proceeding with this tutorial. Understanding those modules is crucial for understanding the `Burst`.

## Burst


`Burst` is a higher order module that creates sophisticated visual effects in any part of the screen you want. You can think of `Burst` as a particle emitter that composes a bunch of `ShapeSwirl`'s together, creating a circle of particles.



That's how it looks like by default:

<MojsCode
  id="pen_19099317e0137756f414ed3a043f85ae"
  notice="Click somewhere to see"
  code=
"
const parent = document.getElementById('pen_19099317e0137756f414ed3a043f85ae');

const burst = new mojs.Burst({
  parent: parent
});

parent.addEventListener( 'click', function (e) {
  burst.replay();
});
"
>
```js
const burst = new mojs.Burst();

document.addEventListener( 'click', function (e) {
  burst.replay();
});
```
</MojsCode>



Just like with `Shape`, mojs takes care about all bootstrapping work, creates as narrow container for the burst as possible and positioning the effect for you.



From the technical point of view, `Burst` is just a main `ShapeSwirl` that holds a bunch of child `ShapeSwirl`'s. Pictorially it looks like this:


![Illustration of how the burst swirls works](/assets/burst/burst-pic.png)

The main swirl has no `shape` nor any presentation properties and in fact, is `0` size by default completely unreachable for user's interaction pointer.

Another important note is that `radius` property (and `radiusX`/`radiusY` ones) has different meaning - it controls the radius of radial shape of particles:

<MojsCode
  id="pen_643c0d3499e331934e95e80ffe2e323c"
  notice="Click somewhere to see"
  code=
"
const parent = document.getElementById('pen_643c0d3499e331934e95e80ffe2e323c');

const burst = new mojs.Burst({
  radius: { 0: 100 },
  parent: parent
});

parent.addEventListener( 'click', function (e) {
  burst.replay();
});
"
>
```js
const burst = new mojs.Burst({
  radius: { 0: 100 }
});
```
</MojsCode>


There are few more properties that `Burst` implements over `ShapeSwirl`  to control the radial shape behavior that particles compose. The first one is the `count` property that sets the amount of particles:

<MojsCode
  id="fe6f9d1476aae148f1cfb36f599c92ff"
  notice="Click somewhere to see"
  code=
"
const parent = document.getElementById('fe6f9d1476aae148f1cfb36f599c92ff');

const burst = new mojs.Burst({
  parent: parent,
  radius:   { 0: 100 },
  count:    3
});

parent.addEventListener( 'click', function (e) {
  burst.replay();
});
"
>
```js
const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    3
});
```
</MojsCode>


The particles of the burst are evenly placed in a 360 degree circle, which you can narrow down with the `degree` property:

<MojsCode
  id="pen_11fadc18861a656f0a72f5e132f48f12"
  notice="Click somewhere to see"
  code=
"
const parent = document.getElementById('pen_11fadc18861a656f0a72f5e132f48f12');

const burst = new mojs.Burst({
  parent: parent,
  radius:   { 0: 100 },
  count:    5,
  degree:   30
});

parent.addEventListener( 'click', function (e) {
  burst.replay();
});
"
>
```js
const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    5,
  degree:   30
});
```
</MojsCode>


Here above, we have a burst that has `30 degrees` of sufficient place for particles.



It is very important to note here that since the main swirl of `Burst` module has no actual shape - it has no style attributes that define shape's presentation - all of them among which are the `stroke` or `strokeWidth` or `fill` are completely useless.



Also, the main swirl of the burst have no `tween` related properties like `delay` or `duration`, the later one gets computed automatically regarding the `duration` of the particles.



Nonetheless, all **properties** that control shape position, parent and opacity are present:

<MojsCode
  id="dd9e8ce40b04df492bbf500616ddb815"
  notice="Click somewhere to see"
  code=
"
const parent = document.getElementById('dd9e8ce40b04df492bbf500616ddb815');

const burst = new mojs.Burst({
  parent: parent,
  radius:   { 0: 100 },
  count:    7,
  rotate:    { 0: 90 },
  opacity:  { 1: 0 },
});

parent.addEventListener( 'click', function (e) {
  burst.replay();
});
"
>
```js
const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    7,
  rotate:    { 0: 90 },
  opacity:  { 1: 0 },
});
```
</MojsCode>

To recap, the main swirl of the `Burst` has no `style` attributes because it has no shape, furthermore it has no `tween` related properties like `duration` which is computed from the particles `duration`. But `Burst` has all the other properties, most of them regarding position, opacity, parent etc. You can always use the [Burst API](/api/burst) as the reference.

But `Burst` won't be much interesting unless we can control child particles, right?


## Children Options

You can control children options with the `children` object property:

<MojsCode
  id="pen_4df574c7099a40929aebaaf4af386a04"
  notice="Click somewhere to see"
  :dark="true"
  code=
"
const parent = document.getElementById('pen_4df574c7099a40929aebaaf4af386a04');

const burst = new mojs.Burst({
  parent: parent,
  radius:   { 0: 100 },
  count:    5,
  degree:   30,
  children: {
    fill:       { 'magenta' : 'cyan' },
    duration:   2000
  }
});

parent.addEventListener( 'click', function (e) {
  burst.replay();
});
"
>
```js
const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    5,
  degree:   30,
  children: {
    fill:       { 'magenta' : 'cyan' },
    duration:   2000
  }
});
```
</MojsCode>


I have some good news for you - you already know `Burst`'s syntax! Confusing claim? Nah! If you are familiar with `Shape` and `ShapeSwirl` modules - you know the `Burst`. That's because the `Burst` is nothing than just a `ShapeSwirl` that holds child `ShapeSwirls`, remember? This means you can put any property of `ShapeSwirl` to the `children` object, go try:

<MojsCode
  id="pen_64f13b396761ceabeb6e2967472acfa2"
  notice="Click somewhere to see"
  :dark="true"
  code=
"
const parent = document.getElementById('pen_64f13b396761ceabeb6e2967472acfa2');

const burst = new mojs.Burst({
  parent: parent,
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:      'polygon',
    fill:       { 'cyan' : 'yellow' },
    radius:     20,
    rotate:      { 360: 0 },
    duration:   2000
  }
});

parent.addEventListener( 'click', function (e) {
  burst.replay();
});
"
>
```js
const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:      'polygon',
    fill:       { 'cyan' : 'yellow' },
    radius:     20,
    rotate:      { 360: 0 },
    duration:   2000
  }
});
```
</MojsCode>


Actually `Burst` gives you even more control over each child, allowing you to specify property for each of them explicitly. These two techniques are called `Stagger Strings` and `Property Maps`.


### Stagger Strings

`Stagger Strings` were designed to express continuous numeric values with some defined step (see delay property on children):

<MojsCode
  id="pen_3610a7d0e0ab283acf8d42f3a4b6b9a9"
  notice="Click somewhere to see"
  :dark="true"
  code=
"
const parent = document.getElementById('pen_3610a7d0e0ab283acf8d42f3a4b6b9a9');

const burst = new mojs.Burst({
  parent: parent,
  radius:   { 0: 100 },
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'yellow' },
    rotate:      { 360: 0 },
    duration:   2000,
    delay:      'stagger(0, 100)'
  }
});

parent.addEventListener( 'click', function (e) {
  burst.replay();
});
"
>
```js{10}
const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'yellow' },
    rotate:      { 360: 0 },
    duration:   2000,
    delay:      'stagger(0, 100)'
  }
});
```
</MojsCode>

The first parameter in `stagger` function is the `start` value, all subsequent steps will be added to that start value, that is optional; If you just write `stagger(25)`, it will mean to stagger with step of `25`, starting from `0`.

In the demo above, that's exact the same circle as in the demo before, but we have **staggered** the `delay` property so it looks rather spiral now.



Every numeric value can be expressed with stagger stings. Also, they can contain `rand`oms (see the delay property in children):

<MojsCode
  id="pen_05ff77cfc49e2d5f82363d90339a24e1"
  notice="Click somewhere to see"
  :dark="true"
  code=
"
const parent = document.getElementById('pen_05ff77cfc49e2d5f82363d90339a24e1');

const burst = new mojs.Burst({
  parent: parent,
  radius:   { 0: 100 },
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'yellow' },
    rotate:      { 360: 0 },
    duration:   2000,
    delay:      'stagger( rand(0, 200) )'
  }
});

parent.addEventListener( 'click', function (e) {
  burst.generate();
  burst.replay();
});
"
>
```js{10}
const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'yellow' },
    rotate:      { 360: 0 },
    duration:   2000,
    delay:      'stagger( rand(0, 200) )'
  }
});
```
</MojsCode>


We have staggered the delay with random function in interval of 0 to 200.

:::tip
If you run the `.generate()` function before playing your burst, all random values will be recalculated for each time you play the burst. Like this:
```js
burst.generate();
burst.replay();
```
:::


### Property Maps

Property Map was designed to express sequential values. You can use it to generate values that repeat over and over but are mapped to children length. Basically, it is just an array that maps its values to children regarding child index with `mod` function. So if you have a `property map` with `3 values` and burst has `5 children`, then the `4`th and `5`th items will receive the `0`th and `1`st values from the map respectively:

<MojsCode
  id="c3c518a84fea019d715cad07e87c29bf"
  :dark="true"
  :controller="true"
  code=
"
const parent = document.getElementById('c3c518a84fea019d715cad07e87c29bf');

const burst = new mojs.Burst({
  parent: parent,
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:        'circle',
    radius:       20,
    fill:         [ 'deeppink', 'cyan', 'yellow' ],
    strokeWidth:  5,
    duration:     2000
  }
});

const controller = document.getElementById('c3c518a84fea019d715cad07e87c29bf_controller');
new MojsPlayer({ parent: controller , add: burst, isPlaying: false, isRepeat: true, className: 'controller', });

"
>
```js{7}
const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:        'circle',
    radius:       20,
    fill:         [ 'deeppink', 'cyan', 'yellow' ],
    strokeWidth:  5,
    duration:     2000
  }
});
```
</MojsCode>


So starting from 12 o'clock clockwise, the 5 childrens `fill` properties get values of `deeppink`, `cyan`, `yellow` and then again starting from the beginning of the property map - `deeppink`, `cyan` ( <code className="code-inline">[0],[1],[2],[0],[1]</code> ).



Property maps work with any property and property forms, in fact, that's just a prism (or multiplexer) that feeds children with properties by virtue of modulus function. Good aid if you want to set some property on child explicitly.


## then, tune, generate and play

You can make `then` state chains, `tune` and `generate` any `Burst` the same as you do with `Shape` or `ShapeSwirl`. Also, since the `Burst` is merely a `ShapeSwirl` under the hood, you can use any `tween` interface public method like `play`, `setProgress`, `replay` etc (click somewhere to see):

<MojsCode
  id="dbf4904aa71f428a38401610e1c8f863"
  notice="Click anywhere to see"
  :dark="true"
  code=
"
const parent = document.getElementById('dbf4904aa71f428a38401610e1c8f863');

const burst = new mojs.Burst({
  parent: parent,
  left: 0, top: 0,
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:        'circle',
    radius:       20,
    fill:         [ 'deeppink', 'cyan', 'yellow' ],
    strokeWidth:  5,
    duration:     2000
  }
});

parent.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.offsetX, y: e.offsetY })
    .setSpeed(3)
    .replay();
});
"
>
```js
document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .setSpeed(3)
    .replay();
});
```
</MojsCode>


## Recap


That's basically the burst, as I said you already know it so we won't go thru the children options again, instead, let's jog thru some use cases in the next section which will help as to gain some intuition over where and how to use the bursts. As you remember, - `Burst` is just a composition of a bunch of `ShapeSwirls`. There is the main swirl in the center of the burst but it has no visual shape. Also, it has no tween properties and its durations is calculated regarding the duration of the children. All child swirls use the main one as a `parent`. You can set properties of `children` with the appropriate property. Please, use the [Burst API](/api/burst) as the reference.


## Use Cases

> Please note that the use cases section contains a lot of live code examples but the actual code samples are omitted for time savings and simplicity sake. The actual code is still available on the `Babel` tab of the pens and I highly encourage you to read through and play with them while we will walk through this section. You can omit reading large demos code since it is probably unreadable (some Codepens can contain bundled code) or it could be too large to understand sparingly, but you can return to them later. I will leave a little **(×)** mark for you to indicate that you can skip reading the source code of the Codepen for now.


`Burst`, in similarity with `Shape` or `ShapeSwirl`, has numerous application fields, among which are motion graphics and UI-animations. In contrary to the [ Shape & ShapeSwirl ](/tutorials/shape-swirl/) tutorial, I won't split use cases to different entities but rather will try to do lot's of small demos, each with explanation comments. Hang tight!


<h3>Micro Animations</h3>


The first thing that comes to mind when I see the default burst - is the famous [Twitter's fav animation](https://codepen.io/donovanh/pen/dYqxNb). Animations like that are usually called **micro animations** but I've used to call them **micro celebrations** because of their festivity.



Anyways, sequences like that are a cinch when you have the burst module in your hands. Here's how to do the main part of the sequence (click anywhere to see):


<Codepen
  title="cb910fce2e9ed27f902ae7f895bbb9ac"
  pen="cb910fce2e9ed27f902ae7f895bbb9ac"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/cb910fce2e9ed27f902ae7f895bbb9ac)


Here above, we have declared a burst with 5 particles (which is by default) with a burst's radius transition from 4 to 19. There are 2 strategies for bursts like that - one is to scale children down (by default), the second one is to animate `strokeDashoffset` on children which we have used here.



The next step is to add two more shapes to the scene - one circle with `strokeWidth` animation and a custom one - the star with `elastic.out` transition for the `scale`(click anywhere to see):


<Codepen
  title="080045a3420abd5344443aff91c85fa2"
  pen="080045a3420abd5344443aff91c85fa2"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/080045a3420abd5344443aff91c85fa2)


I love using the burst module over sprites because it turns out to be a way flexible over pre-rendered sequence of images, - you can play with easings, time, delay, colors etc. Also, you can even change shapes with no effort at all - for instance, if you want to add stars instead of lines (click anywhere to see):


<Codepen
  title="0fd14523d76f93865539f1f011682da9"
  pen="0fd14523d76f93865539f1f011682da9"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/0fd14523d76f93865539f1f011682da9)


Ok, let's redo the later Twitter love animation too. There is the burst part of the sequence(click anywhere to see):


<Codepen
  title="28b429cd2d5ae8c0dd0f10cecd6d0bd0"
  pen="28b429cd2d5ae8c0dd0f10cecd6d0bd0"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/28b429cd2d5ae8c0dd0f10cecd6d0bd0)


The catch here is to use the `in` easing for `scale` property and the opposite `out` easing for particles position. Also, we have set the `pathScale` slightly smaller for "inner" particles. After that, we have defined a small `degreeShift` for each odd / inner particle. Then `null` value in the [properyMaps](/api/syntax/property-maps) mean that it takes the default value. For scale it's `1` and in `degreeShift` it's `0`.



The next step is to add the circle shape and heart animations, almost identical to ones we have used in the Twitter fav scene (click anywhere to see):


<Codepen
  title="e3751855536c67dc6f57f9e74e5e347d"
  pen="e3751855536c67dc6f57f9e74e5e347d"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/e3751855536c67dc6f57f9e74e5e347d)


And the last touch is to add all the color deltas, there are quite some of them (click anywhere to see):


<Codepen
  title="f25a2fbaf15c43c0923f507d54951cdb"
  pen="f25a2fbaf15c43c0923f507d54951cdb"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/f25a2fbaf15c43c0923f507d54951cdb)


That's basically the same micro confirmations that I've given you in the [Shape & ShapeSwirl](/tutorials/shape/) tutorial **(×)**:


<Codepen
  title="3c49de2d7d0ca3e92bf5db5bf7a2687d"
  pen="3c49de2d7d0ca3e92bf5db5bf7a2687d"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/3c49de2d7d0ca3e92bf5db5bf7a2687d)


In the example above we didn't use the `Burst` module that much. But you can imagine that those effects are much easier with the `Burst` module. For instance the bubbles in the first part could be made like this:


<Codepen
  title="a336008aff2d73121763887097a99001"
  pen="a336008aff2d73121763887097a99001"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/a336008aff2d73121763887097a99001)


Here we have the static `radius` of `25` on burst and `3` `white` particles. We've set a slightly `rand`om `degreeShift` and a `delay` on the `children` that eventually gives us the bubble like motion.



The second burst is super simple too:


<Codepen
  title="afbfb59f00d5dfb8b28fc97510fcc167"
  pen="afbfb59f00d5dfb8b28fc97510fcc167"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/afbfb59f00d5dfb8b28fc97510fcc167)


As you can see, the second burst is almost the default one, we have only changed the main `radius` to `0 : 30`. As for children, we tweaked the `shape` to a `line` value, and made the `scaleX` to fade out from `1` to `0`.



The final touch is to add center `circle` and `cross` shapes:


<Codepen
  title="d260dc9246f2100b9f2dbe79a01d01f6"
  pen="d260dc9246f2100b9f2dbe79a01d01f6"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/d260dc9246f2100b9f2dbe79a01d01f6)


The second part - the bubble fadeout effect is even simpler. For the `Burst` module, we just need to set `degree` to `0` so the particles will flow in one direction, then set `isSwirl` to `true` (Burst composes ShapeSwirls, remember?) on `children` thus particles will follow sine path. After that we need to slightly randomize `swirlSize`, `swirlFrequency` and `pathScale` parameters (click somewhere to see):


<Codepen
  title="60d5d3c97981022f20f86c37580bceb1"
  pen="60d5d3c97981022f20f86c37580bceb1"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/60d5d3c97981022f20f86c37580bceb1)


Just like with the previous example, the last touch is to add `circle` and `cross` transitions (click somewhere to see):


<Codepen
  title="f307bc95b1ac02c09042c89ea7afe945"
  pen="f307bc95b1ac02c09042c89ea7afe945"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/f307bc95b1ac02c09042c89ea7afe945)

### Motion for the web


Let's recall the old "motion for the web" demo **(×)**:


<Codepen
  title="ogOYJj"
  pen="ogOYJj"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/ogOYJj)

<em>
  Note that the demo was made a while ago so it contains deprecated syntax.
</em>


How many burst modules have you noticed in this demo? There are quite some actually. I think the most noticeable are collisions with the ground (click to see):


<Codepen
  title="4fe37a79f6d665d749ebcb4f22c2ee4e"
  pen="4fe37a79f6d665d749ebcb4f22c2ee4e"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/4fe37a79f6d665d749ebcb4f22c2ee4e)


This one was made by virtue of `degree: 180`, childrens' `radius` of `7` and `strokeDashoffset` animation on particles.



There is another burst in that demo:


<Codepen
  title="953926af8c30d3dd297070b1a079e059"
  pen="953926af8c30d3dd297070b1a079e059"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/953926af8c30d3dd297070b1a079e059)


This one is simple too, the good one to practice basics.



Did you notice those meteors on the left of the letters? Those are `Burst` too. How? Well first you have a burst with 3 children:



<Codepen
  title="1018219ace50f564f7bb8b77b53efeb8"
  pen="1018219ace50f564f7bb8b77b53efeb8"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/1018219ace50f564f7bb8b77b53efeb8)


Then you set `degree` of `0` so they all will fly to the same direction:


<Codepen
  title="d84370a3c19fdcea8c714e7049c9ab5d"
  pen="d84370a3c19fdcea8c714e7049c9ab5d"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/d84370a3c19fdcea8c714e7049c9ab5d)


Hm, they kind of overlap, so let's shift them by staggering `left` and `top` properties on children, after that let's add some `delay` with help of property map:


<Codepen
  title="2be25259bdd8e01f9ac3770f6f2bd36a"
  pen="2be25259bdd8e01f9ac3770f6f2bd36a"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/2be25259bdd8e01f9ac3770f6f2bd36a)


Do you see that? Almost there. The last touch is to rotate the main swirl:



<Codepen
  title="bf8377efd5b0dada9537481e29ecd6af"
  pen="bf8377efd5b0dada9537481e29ecd6af"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/bf8377efd5b0dada9537481e29ecd6af)


Pretty yummy detail.



What else have we got in the demo? Letters! That's how O letter was made:


<Codepen
  title="432464f276fe6f06b457915ca6062723"
  pen="432464f276fe6f06b457915ca6062723"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/432464f276fe6f06b457915ca6062723)


As you can see, we've set the main swirl's `radius` and `degree` to `0` to put the child shapes in the one spot. Then we just have to slightly stagger `delay` on children.



The same technique for the other parts - vertical and horizontal lines:


<Codepen
  title="33f7924ecd146d951698bf190ac7838e"
  pen="33f7924ecd146d951698bf190ac7838e"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/33f7924ecd146d951698bf190ac7838e)


Good. Let's refactor it a bit and make the vertical line start from the bottom, like firework launch:



<Codepen
  title="a3c64825683dddd18316f8f288475131"
  pen="a3c64825683dddd18316f8f288475131"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/a3c64825683dddd18316f8f288475131)


That's better.


<h3>Blast all the things up</h3>


Let's move on. What else we can do with `Burst`? We can blast things up. I love blasting things up, do you? Recall this demo from the [Shape & ShapeSwirl](/tutorials/shape/) tutorial(×):


<Codepen
  title="c94452fb65dbf676b0ae8a12d4267473"
  pen="RzqpRz"
  user="sandstedt"
/>
[Link to pen](https://codepen.io/sandstedt/pen/RzqpRz)


Do you see that blast at the start? Let's make it together. First, you can notice these small particles (click somewhere to see):


<Codepen
  title="79db23782ec1eb9d16246b136ec82b9c"
  pen="79db23782ec1eb9d16246b136ec82b9c"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/79db23782ec1eb9d16246b136ec82b9c)


Notice how we use `pathScale` and `degreeShift` properties to add randomness to the blast. The `pathScale` property defines how the length of the particle's path scales. The `degreeShift` property defines how much the particle will shift in its radial position in burst circle shape. So if a particle has `degreeShift` of `90`, it will be shifted in radial shape by 90 degrees. Since `pathScale` and `degreeShift` both have random values and we `generate` the module on each user click - we always have the random blast pattern.



Let's add more details to the blast, for instance, another burst with large geometric shapes:


<Codepen
  title="3b9c757a7625dc015753740bcad8fb66"
  pen="3b9c757a7625dc015753740bcad8fb66"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/3b9c757a7625dc015753740bcad8fb66)


Feels rather messy. But it's fine for now, it should get straight when we will add more shapes:


<Codepen
  title="4c8366d3a7eea2a5f83a3d457f8e9cd9"
  pen="4c8366d3a7eea2a5f83a3d457f8e9cd9"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/4c8366d3a7eea2a5f83a3d457f8e9cd9)


And the last touch is to add "one spot" large burst of 3 items - one red, one white and one black:


<Codepen
  title="699cfc8716a13e0e1c15105af2b6fb95"
  pen="699cfc8716a13e0e1c15105af2b6fb95"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/699cfc8716a13e0e1c15105af2b6fb95)


Yum. I hope you love to blast things up too now. Notice we did it without a single repaint!


<h3>Modal blast</h3>


If you recall the next old demo, you probably can say now how it was made. How many modules does this blast compose (click close to see the effect) **(×)**?


<Codepen
  title="XJjLxe"
  pen="XJjLxe"
  user="sol0mka"
  height="700"
/>
[Link to pen](https://codepen.io/sol0mka/pen/XJjLxe)


The answer is 3 - `2 Bursts` and `1 subtle circle` in the middle.


<Codepen
  title="6caf96461207a5caa9226fbd2631569d"
  pen="6caf96461207a5caa9226fbd2631569d"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/6caf96461207a5caa9226fbd2631569d)


The effect is a bit more modest than the previous one. As you can see, I haven't recreated exactly the same sequence here, but rather made a slightly different one.


<h3>The sleepy mole</h3>


OK. Enough distraction. Let's create something less straightforward. Recall this demo with the mole **(×)**:


<Codepen
  title="477056cb1ffe88c4bfbf8a3005d99496"
  pen="477056cb1ffe88c4bfbf8a3005d99496"
  user="sol0mka"
  height="600"
/>
[Link to pen](https://codepen.io/sol0mka/pen/477056cb1ffe88c4bfbf8a3005d99496)


Can you count how much effects are bursts here? There are quite a few. The most noticeable is the effect that appears after the door shuts down - the 4 spots of dust. This one was composed with 4 bursts (one for each corner), let's start with just one for now:


<Codepen
  title="97a95a5cb7663cf336e8d80f9f511553"
  pen="97a95a5cb7663cf336e8d80f9f511553"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/97a95a5cb7663cf336e8d80f9f511553)


How is it possible? Remember that the `Burst` composes `ShapeSwirls`, not simple `Shape`s so, if we set `isSwirl` to `true`, we will have sine paths. This is how you do 4 at once (click to see):


<Codepen
  title="bbc4c52b7145d9d872ac437f21afd75f"
  pen="bbc4c52b7145d9d872ac437f21afd75f"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/bbc4c52b7145d9d872ac437f21afd75f)

<em>
  You can do the same `4 dust points effect` with just one declarative call if will use `Stagger` module, but that's a topic for the next tutorial.
</em>


OK. Recalling the mole demo, what else did you notice? Probably confetti that appears when cube hits the floor. Right!



That's how you do the first large one:


<Codepen
  title="421a16733643447bb4770424cf72563d"
  pen="421a16733643447bb4770424cf72563d"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/421a16733643447bb4770424cf72563d)


The main catch here is to mimic the air flow by rotating the main swirl backward slightly. Then you have to create more bursts, each one is smaller than previous one and each of them should have a smaller delay.


<Codepen
  title="d0d0c2b1e98f1a0f8d6ea250c31ed081"
  pen="d0d0c2b1e98f1a0f8d6ea250c31ed081"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/d0d0c2b1e98f1a0f8d6ea250c31ed081)


What else have you noticed in the mole demo? Yep saliva that comes from the mole mouth when it teases. First, you want to make `0-degree` burst, and rotate the main swirl downward, imitating that the air current which comes out of his mouth gets weaker:


<Codepen
  title="828d4f1e1f6fdfd608b588af0b9bdd45"
  pen="828d4f1e1f6fdfd608b588af0b9bdd45"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/828d4f1e1f6fdfd608b588af0b9bdd45)


Then add larger burst's `radius`, turn on swirl sine paths and randomize them with `pathScale` property:


<Codepen
  title="8b3f0eb920226a7c2d703e601af38fcf"
  pen="8b3f0eb920226a7c2d703e601af38fcf"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/8b3f0eb920226a7c2d703e601af38fcf)


At last, add random `radius` to children and mix `direction` of the swirls:


<Codepen
  title="b1e36259bfa2d6023402eef7de77cc8d"
  pen="b1e36259bfa2d6023402eef7de77cc8d"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/b1e36259bfa2d6023402eef7de77cc8d)


You can see that the `Burst` module is pretty flexible thus helps you to craft numerous sophisticated effects.


<h3>The dust trail</h3>


OK, let's recall another demo, remember this one from previous the tutorial? Did I notice that the dust trail effect is much easier with burst **(×)**?


<Codepen
  title="633e6aa52d40691cca2f2cda91650bae"
  pen="633e6aa52d40691cca2f2cda91650bae"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/633e6aa52d40691cca2f2cda91650bae)


As you remember, to create the dust trail effect, we first need to shoot the child swirls downwards to the ground with random children radiuses:


<Codepen
  title="c59d4e046a6c78f3ac9d3a5699018fa8"
  pen="c59d4e046a6c78f3ac9d3a5699018fa8"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/c59d4e046a6c78f3ac9d3a5699018fa8)


Now instead of multiple swirl modules which we have been using in the previous tutorial, we use just one burst - `stagger` expressions turn out to be useful! After that you want to create an `overflow: hidden` container and assign it as `parent` to the burst:



<Codepen
  title="e48eb4e56ce1fa94c515b4fda6513d24"
  pen="e48eb4e56ce1fa94c515b4fda6513d24"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/e48eb4e56ce1fa94c515b4fda6513d24)


This time, we have used the `Shape` module as `parent` overflow constrain.



  The last touch is to add the fading burst at the end and make the `parent` move to the left:


<Codepen
  title="10cc620075141688d0cf8eca7a561062"
  pen="10cc620075141688d0cf8eca7a561062"
  user="sol0mka"
/>
[Link to pen](https://codepen.io/sol0mka/pen/10cc620075141688d0cf8eca7a561062)


That's exact the same effect as we have made in the [Shape & ShapeSwirl](/tutorials/shape/) tutorial, but this time with just 2 `Bursts`! `Bursts` are fun, there is a little demo I've made with this dust trail effect (click to see):


<Codepen
  title="03e9d8f2fbf886aa1505c61c81d782a0"
  pen="03e9d8f2fbf886aa1505c61c81d782a0"
  user="sol0mka"
  height="700"
/>
[Link to pen](https://codepen.io/sol0mka/pen/03e9d8f2fbf886aa1505c61c81d782a0)


That's it for `Burst`. We've touched only the surface of the possible effects that you can compose with this module, but that's a good start to convey the idea and APIs. Also, my friends from [Codrops](http://tympanus.net/codrops/) wrote an awesome [post](http://tympanus.net/Development/Animocons/) a while ago on the `Burst` matter, definitely check it out.


## Recap


Burst is the module that helps you to craft sophisticated motion effects with simple declarative calls. Technically, it is the main `ShapeSwirl` that composes a bunch of child `ShapeSwirls` forming the radial shape by default. `mojs` takes care about all markup bootstrapping and positioning of the module for you. The main swirl has no shape thus no presentation properties. The duration of the main swirl is calculated regarding duration of the child swirls. To control child swirls, pass the `ShapeSwirl` properties to the `children` property of the main swirl. You can find exhaustive API reference at [Burst API](/api/burst) section.



Burst is indeed an interesting module but, please don't overuse it. Your intention should be to guide and cheer users but not overwhelm them. Be cautious and think twice, if you feel that anyhow the effect you've done makes a visual noize rather than helps to solve a real problem, skip it entirely.

<hr />

## Thank you!


I'm happy you've made it here! It was a long and intense journey, I hope you don't feel overwhelmed. I also humbly hope that these effect modules will come handy to you on your web development route. There are some more "effects" modules that will land to the mojs shortly so stay tuned. For any questions, catch me on Twitter [@legomushroom](https://twitter.com/legomushroom), ask a question on StackOverflow with `#mojs` tag, rise an issue on the [GitHub repo](https://github.com/mojs/). You can help the project on [GitHub](https://github.com/mojs/). {'Love <3.'}



Kudos to [Jonas Sandstedt](https://twitter.com/jonassandstedt) for his help in read proofing this tutorial!
