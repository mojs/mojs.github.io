---
title: Usage with React
sidebarDepth: 0
---

# Usage with React

> ### In this tutorial your will learn how to use MoJS in React using React's Hooks API.

#### Author: [Jonas Sandstedt](https://twitter.com/jonassandstedt)

[Fork example on CodeSandbox](https://codesandbox.io/s/mojs-react-example-kbikb?file=/src/MojsExample.js)

::: tip TLDR;
Assign your animation to an `useRef` immutable object inside a `useEffect` hook. Then you can use this ref to control the animation, like this: `myRef.current.play()`
:::

---

## Install packages

Start by installing React, ReactDOM and @mojs/core from your favorite package manager. Here we use npm:

```bash
npm i react react-dom @mojs/core
```

## Create the animation component

Here is the final component that we're gonna build:

```js
import React, { useRef, useEffect, useState, useCallback } from "react";
import mojs from "@mojs/core";

/**
 * Usage:
 * import MojsExample from './MojsExample';
 *
 * <MojsExample duration={1000}/>
 */

const MojsExample = ({ duration }) => {
  const animDom = useRef();
  const bouncyCircle = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Prevent multiple instansiations on hot reloads
    if (bouncyCircle.current) return;

    // Assign a Shape animation to a ref
    bouncyCircle.current = new mojs.Shape({
      parent: animDom.current,
      shape: "circle",
      fill: { "#FC46AD": "#F64040" },
      radius: { 50: 200 },
      duration: duration,
      isShowStart: true,
      easing: "elastic.inout",
      onStart() {
        setIsAnimating(true);
      },
      onComplete() {
        setIsAnimating(false);
      },
    });
  });

  // Update the animation values when the prop changes
  useEffect(() => {
    if (!bouncyCircle.current) return;
    bouncyCircle.current.tune({ duration: duration });
    isOpen
      ? bouncyCircle.current.replayBackward()
      : bouncyCircle.current.replay();
    setIsOpen(!isOpen);
  }, [duration]);

  const clickHandler = useCallback(() => {
    // If the "modal" is open, play the animation backwards, else play it forwards
    isOpen ? bouncyCircle.current.playBackward() : bouncyCircle.current.play();
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div ref={animDom} className="MojsExample">
      <div className="content">
        <h1>MoJS React Example</h1>
        <p>Using hooks</p>
        <button className="button" onClick={clickHandler}>
          {isAnimating && isOpen ? "Animating" : isOpen ? "Close" : "Open"}
        </button>
      </div>
    </div>
  );
};

export default MojsExample;
```

---

### Let's break it down!

First we create a `useRef` hooks, and takes advantage of its immutable object and assign our MoJS `Shape` animation to it. This way we can later use it to control our animation:

```js{2,5}
const MojsExample = () => {
  const bouncyCircle = useRef();

  useEffect(() => {
    bouncyCircle.current = new mojs.Shape({
      shape: "circle",
      fill: { "#FC46AD": "#F64040" },
      radius: { 50: 200 },
      duration: 1000,
      isShowStart: true,
      easing: "elastic.inout",
    });
  });

  return;
};
```

By checking if the ref already has been assigned, we can prevent the animation from being instantiated again on re-renders (very useful when using hot reloads):

```js{5}
const MojsExample = () => {
  const bouncyCircle = useRef();

  useEffect(() => {
    if (bouncyCircle.current) return;

    bouncyCircle.current = new mojs.Shape({
      shape: "circle",
      fill: { "#FC46AD": "#F64040" },
      radius: { 50: 200 },
      duration: 1000,
      isShowStart: true,
      easing: "elastic.inout",
    });
  });

  return;
};
```

To get the reference to DOM element we want to append our animation to, we can use a `useRef` hook, and attach it to a container:

```js{3,9,21}
const MojsExample = () => {
  const bouncyCircle = useRef();
  const animDom = useRef();

  useEffect(() => {
    if (bouncyCircle.current) return;

    bouncyCircle.current = new mojs.Shape({
      parent: animDom.current,
      shape: "circle",
      fill: { "#FC46AD": "#F64040" },
      radius: { 50: 200 },
      duration: 1000,
      isShowStart: true,
      easing: "elastic.inout",
    });

    bouncyCircle.current.play();
  });

  return <div ref={animDom} className="MojsExample" />;
};

export default MojsExample;
```

Now lets add a button to play the animation when we click it. To control the animation, we can now reference the MoJS animation using `bouncyCircle.current.play();`

```js{19-21,25-27}
const MojsExample = () => {
  const bouncyCircle = useRef();
  const animDom = useRef();

  useEffect(() => {
    if (bouncyCircle.current) return;

    bouncyCircle.current = new mojs.Shape({
      parent: animDom.current,
      shape: "circle",
      fill: { "#FC46AD": "#F64040" },
      radius: { 50: 200 },
      duration: 1000,
      isShowStart: true,
      easing: "elastic.inout",
    });
  });

  const clickHandler = useCallback(() => {
    bouncyCircle.current.play();
  });

  return (
    <div ref={animDom} className="MojsExample">
      <button className="button" onClick={clickHandler}>
        Play animation
      </button>
    </div>
  );
};

export default MojsExample;
```

::: tip
If we instead would want to play our animation directly, we could add `bouncyCircle.current.play();` directly after the bouncyCircle declaration.
:::

By passing props to our `MojsExample` function, we can control the initial values of the animation, and also `.tune()` the animation when they change.

```js{7,19,25-29}
/**
 * Usage:
 * import MojsExample from './MojsExample';
 *
 * <MojsExample duration={1000}/>
 */
const MojsExample = ({ duration }) => {
  const animDom = useRef();
  const bouncyCircle = useRef();

  useEffect(() => {
    if (bouncyCircle.current) return;

    bouncyCircle.current = new mojs.Shape({
      parent: animDom.current,
      shape: "circle",
      fill: { "#FC46AD": "#F64040" },
      radius: { 50: 200 },
      duration: duration,
      isShowStart: true,
      easing: "elastic.inout",
    });
  });

  useEffect(() => {
    if (!bouncyCircle.current) return;
    bouncyCircle.current.tune({ duration: duration });
    bouncyCircle.current.replay();
  }, [duration]);

  const clickHandler = useCallback(() => {
    bouncyCircle.current.play();
  });

  return (
    <div ref={animDom} className="MojsExample">
      <button className="button" onClick={clickHandler}>
        Play animation
      </button>
    </div>
  );
};
```

As a final touch, lets add some methods to listen animation events, and use Reacts useState to save it as a local state:

```js{4-5,18-23,30-33,38-40,45}
const MojsExample = ({ duration }) => {
  const animDom = useRef();
  const bouncyCircle = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (bouncyCircle.current) return;

    bouncyCircle.current = new mojs.Shape({
      parent: animDom.current,
      shape: "circle",
      fill: { "#FC46AD": "#F64040" },
      radius: { 50: 200 },
      duration: duration,
      isShowStart: true,
      easing: "elastic.inout",
      onStart() {
        setIsAnimating(true);
      },
      onComplete() {
        setIsAnimating(false);
      },
    });
  });

  useEffect(() => {
    if (!bouncyCircle.current) return;
    bouncyCircle.current.tune({ duration: duration });
    isOpen
      ? bouncyCircle.current.replayBackward()
      : bouncyCircle.current.replay();
    setIsOpen(!isOpen);
  }, [duration]);

  const clickHandler = useCallback(() => {
    // If the "modal" is open, play the animation backwards, else play it forwards
    isOpen ? bouncyCircle.current.playBackward() : bouncyCircle.current.play();
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div ref={animDom} className="MojsExample">
      <button className="button" onClick={clickHandler}>
        {isAnimating && isOpen ? "Animating" : isOpen ? "Close" : "Open"}
      </button>
    </div>
  );
};
```

---

## Create the root App and render the page

Finally we import our component and add it to the root of our site.

```js
import React from "react";
import ReactDOM from "react-dom";

import MojsExample from "./MojsExample";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MojsExample duration={2000} />
  </React.StrictMode>,
  rootElement
);
```

You can see the full example and try it out here: [CodeSandbox](https://codesandbox.io/s/mojs-react-example-kbikb?file=/src/MojsExample.js).
There is also a [button example](https://codesandbox.io/s/mojs-react-example-kbikb?file=/src/Button.js) with a `Burst` animation using an object pooling array.

Happy animating!_
