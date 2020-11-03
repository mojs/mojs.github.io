# Rand Strings Syntax

- [CodePen Example](https://codepen.io/sandstedt/pen/dyXevEE?editors=0010)

`Rand` string was designed to express random numeric values. Can be unit based (percents, pixels, rems etc.).


Full API reference:

```javascript
  // ...
  property : 'rand(min, max)',
  // ...

```

::: tip
If you wanna update the random value after it's been declared, you can use the `generate()` function.
:::

## Example usage

<MojsInteractive
  id="example"
  autoplay
  height="400px"
  global="example"
  :controller=false
  notice="Click anywere to see the updated random value"
  code=
"const example = new mojs.ShapeSwirl({
  parent: '#example',
  left: 0, top: 0,
  duration:       'rand(600, 1000)',
  radius:         'rand(10, 20)',
  pathScale:      'rand(.5, 1)',
  swirlFrequency: 'rand(2, 4)',
  swirlSize:      'rand(6, 14)',
});

document.getElementById('example').addEventListener( 'click', function (e) {
  const x = e.layerX,
    y = { [e.layerY]: e.layerY - 150 };
  example
    .tune({ x, y })
    .generate()
    .replay();
});

example.play();"
>
</MojsInteractive>

- [CodePen Example](https://codepen.io/sandstedt/pen/dyXevEE?editors=0010)
