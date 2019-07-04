# [Mojs Player](https://github.com/mojs/mojs-player)
[![npm](https://img.shields.io/npm/v/@mojs/player.svg)](https://www.npmjs.com/package/@mojs/player)

GUI player to control your animations

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