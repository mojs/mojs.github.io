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
If you wanna update the random value after it's been declared, you can use the `generate()` function:
```js
const example = new mojs.Burst({
  radius:   { 'rand(4, 40)' : 'rand(50, 100)' }
});

document.addEventListener( 'click', function (e) {
  example.generate().replay();
});
```
:::

<MojsInteractive
  id="example"
  autoplay
  height="200px"
  global="example"
  code=
"const example = new mojs.Burst({
  radius:   { 'rand(4, 40)' : 'rand(50, 100)' }
});

document.addEventListener( 'click', function (e) {
  example.generate().replay();
});

example.play();"
>
</MojsInteractive>

- [CodePen Example](https://codepen.io/sandstedt/pen/dyXevEE?editors=0010)
