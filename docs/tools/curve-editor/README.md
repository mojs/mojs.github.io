# [Mojs Curve Editor](https://github.com/mojs/mojs-curve-editor)
[![npm](https://img.shields.io/npm/v/@mojs/curve-editor.svg)](https://www.npmjs.com/package/@mojs/curve-editor)

> `MojsCurveEditor` is a GUI plugin for interactive **custom easings / property curves** editing while crafting your animations. Part of mojs tools.

## TLDR;
* Install it: `npm i @mojs/curve-editor`
* Import it: `import MojsCurveEditor from '@mojs/curve-editor';`'
* Use it:
```js
const mojsCurve = new MojsCurveEditor();

const tween = new mojs.Tween({
  easing: mojsCurve.getEasing()
});
```

![mojs-curve-editor](https://raw.githubusercontent.com/mojs/mojs-curve-editor/master/logo.png)

<MojsCurveEditorExample dark />

## Installation

The `MojsCurveEditor` depends on `mojs >= 0.225.2`, tween autoupdates available for `mojs >= 0.276.2`. Please make sure you've imported [mojs](https://github.com/mojs/mojs) library first.

### cdn
```html
<script src="https://cdn.jsdelivr.net/npm/@mojs/curve-editor"></script>
```
### npm
```bash
npm i @mojs/curve-editor
```

Import `MojsCurveEditor` into your code:

```js
import MojsCurveEditor from '@mojs/curve-editor';
```

::: tip
If you installed it with the CDN option - you should have `MojsCurveEditor` globally.
:::

## Usage

Construct `MojsCurveEditor` and provide a name of the curve you're working on:

```js{2}
  const mojsCurve = new MojsCurveEditor({
    name: 'bounce curve'
  });
```
::: tip
The name is used to
identify record in `localStorage` to restore the state from
when page gets reloaded, so please specify unique names if
you use more than one editor on the same page.
:::

After that you can "connect" the curve with your `mojs` modules by passing a "sample" of the curve to the `easing` property of the module, like this:

```js
  const myCurve = new MojsCurveEditor({name: 'myCurve'});

  const tween = new mojs.Tween({
    easing: myCurve.getEasing()
  });

  // or

  const shape = new mojs.Shape({
    easing: myCurve.getEasing()
  });

  // or as `property curve`

  const html = new mojs.Html({
    el: '#js-el',
    x: { 0: 100, curve: myCurve.getEasing() }
  });

```

Each `tween`/`module` should have it's out sample of the curve, this means you need to call `myCurve.getEasing()` send the `sample` of the curve to the `easing` property of modules.  

If you use `mojs>0.276.5` the state of the modules with the curve `sample` will be updated automatically.

The `getEasing` function receives options hash:

```js
  easing: myCurve.getEasing({
    // `transform` function that pipes through the current value
    // of the curve so you can transform it
    transform: (k) => { return k; }
  });

```

After you are happy with the curve you made, you need to change the **sample** (the `myCurve.getEasing()` call) with the actual path data which you can get by clicking on the `code` button ( <svg width="32" style="position: relative; top: 0.4em; width: 24px; height: 24px; display: inline-block; background: #fff; border-radius: 3px; box-shadow: 1px 1px 0 rgba(0,0,0,.15);" viewBox="0 0 32 32"><use xlink:href="#maximize-shape"></use></svg> ):

```js
  const html = new mojs.Html({
    el: '#js-el',
    x: { 0: 100, easing: 'M0, 100 C0, 100 19.8984745544779, 40.10152544552211 30, 30 C40.1015254455221, 19.89847455447789 80, 45 80, 45 C80, 45 100, 0 100, 0 ' }
  });
```

## Options

```js
const curveEditor = new MojsCurveEditor({
  // name of the curve editor
  name: 'bounce curve',

  // if should preserve state on page reloads
  isSaveState: true,

  // start path - will be loaded on initialization of the curve,
  // e.g. before any user modifications were made. Path of 'M0, 100 L100, 0' is set by default.
  startPath: 'M0, 100 L100, 0',

  // callback on path change, accepts path string
  onChange: function (path) {},

  // if should hide when minimized - useful when you try to embed
  isHiddenOnMin: false
});
```

## Public Methods

```js
curveEditor

  // get `easing function` of the curve
  .getEasing()

  // maximize the curve editor
  .maximize()

  // minimize the curve editor
  .minimize()

  // toggle `maximize/minimize` methods regarding editor's state
  .toggleSize();
```

## Shortcuts

- `alt + z`  - **undo** curve action
- `alt + x`  - **redo** curve action
- `alt + d`  - **delete** selected point(s)
- [3 times] `alt + \`  - **reset** curve

::: tip
The shortcuts works only in the active editor - it should have **orange mojs logo indicator** at the bottom left.
:::
