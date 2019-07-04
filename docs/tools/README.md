# Tools

**mo.js developer tools helps you when you are building and debugging your animations.**


## [Player](https://github.com/mojs/mojs-player)
GUI player to control your animations-

### Usage
- Install it: `npm i @mojs/player`
- Import it: `import MojsPlayer from '@mojs/player';` or <br>
  `var MojsPlayer = require('mojs-player');`
- Use it:
  1. Create a [tween](/api/tweens/tween.md) or a [timeline](/api/tweens/timeline.md)
  2. Create a player and mass the tween/timeline as the `add` option:
    ```js
      const mojsPlayer = new MojsPlayer({ add: mainTimeline });
    ```

::: tip
For shotcuts and more options, [read more here](https://github.com/mojs/mojs-player)
:::


## [Curve Editor](https://github.com/mojs/mojs-curve-editor)
GUI for live easing/property curves editing

### Usage
- Install it: `npm i @mojs/curve-editor`
- Import it: `import MojsCurveEditor from '@mojs/curve-editor';`
- Use it:
```js
const mojsCurve = new MojsCurveEditor();

const tween = new mojs.Tween({
  easing: mojsCurve.getEasing()
});
```

::: tip
You can also use multiple curve editors in the same page, [read more here](https://github.com/mojs/mojs-curve-editor)
:::


## [Timeline Editor](https://github.com/mojs/mojs-timeline-editor)
MojsTimelineEditor is a GUI plugin for interactive `html`/`custom points`/`timeline` editing while crafting your animations.

### Usage
::: warning
This tool is a work in progress. The description below may not be correct.
:::
- Install it: `npm i @mojs/timeline-editor` (Note: this is currently not on NPM)
- Import it: `import MojsTimelineEditor from '@mojs/timeline-editor';`
- Use it:
  ```js
    const mojsTimelineEditor = new MojsTimelineEditor();
  ```

::: tip
[Read more here](https://github.com/mojs/mojs-timeline-editor)
:::
