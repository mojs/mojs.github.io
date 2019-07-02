<template>
  <div class="mojs-interactive">
    <slot></slot>
    <div class="mojs-interactive__result" id="demo-speech-bubble">
      <div id="demo-speech-bubble_controller" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  export default {

    mounted: function () {
      import('@mojs/core').then(module => {
        import('@mojs/player').then(module => {
          /* ADD CUSTOM SHAPES */
          class Bubble extends mojs.CustomShape {
            getShape () { return '<path d="M83.0657721,87.5048737 C74.252469,95.2810178 62.6770192,99.9991713 49.9995857,99.9991713 C22.385577,99.9991713 0,77.6135943 0,49.9995857 C0,22.385577 22.385577,0 49.9995857,0 C77.6135943,0 99.9991713,22.385577 99.9991713,49.9995857 C99.9991713,50.0248803 99.9991526,50.0501705 99.999115,50.0754564 L100,94.5453117 C100,99.9979302 96.8685022,101.290527 93.0045119,97.4313174 L83.0657721,87.5048737 Z"></path>'; }
            getLength () { return 200; } // optional
          }

          class BubbleFlip extends mojs.CustomShape {
            getShape () {
              return '<path d="M16.9342279,87.5048737 C25.747531,95.2810178 37.3229808,99.9991713 50.0004143,99.9991713 C77.614423,99.9991713 100,77.6135943 100,49.9995857 C100,22.385577 77.614423,0 50.0004143,0 C22.3864057,0 0.000828659217,22.385577 0.000828659217,49.9995857 C0.000828659217,50.0248803 0.000847442255,50.0501705 0.000884995143,50.0754564 L0,94.5453117 C-5.64518814e-08,99.9979302 3.13149782,101.290527 6.99548809,97.4313174 L16.9342279,87.5048737 L16.9342279,87.5048737 Z"></path>'
            }
          }

          class Check extends mojs.CustomShape {
            getShape () {
              return '<path d="M0,51.0412084 L30.5724856,79.9380913 C32.5759723,81.8317718 35.7778521,81.7755744 37.7145439,79.8221934 L100,17"></path>';
            }
            getLength () { return 175; }
          }

          mojs.addShape( 'bubble', Bubble ); // passing name and Bubble class

          mojs.addShape( 'bubble-flip', BubbleFlip ); // passing name and BubbleFlip class

          mojs.addShape( 'check', Check ); // passing name and Check class

          const COLORS = {
            purple: '#8A5CE6',
            blue:   '#42AFE3',
            yellow: '#FADD4A',
            red:    '#FF6680'
          }

          const duration  = 350,
                delayStep = duration/3,
                yShift    = 10,
                endAngle  = 30;

          let delay = 0;

          // Common options for a bubble
          const OPTS = {
            shape:   'bubble',
            scale:   { 0 : 1 },
            angle:   { [-90] : endAngle, easing: 'cubic.out'  },
            y:       { 0: -yShift },
            easing:  'sin.out',
            radius:  43,
            duration
          }

          // bubble then options
          const THEN_OPTS = {
            y:        50,
            angle:    { to: -45, easing: 'cubic.in' },
            scale:    { to: 0, easing: 'quad.in' },
            easing:   'sin.in',
          }

          // blue logo then options
          const LOGO_THEN_OPTS = {
            scale: 0,
            delay: 1000
          }

          const purpleBubble = new mojs.Shape({
            ...OPTS,
            parent:   '#demo-speech-bubble',
            fill:     COLORS.purple,
            origin:   '100% 100%',

          }).then({
            ...THEN_OPTS
          });


          const redBubble = new mojs.Shape({
            ...OPTS,
            parent:  '#demo-speech-bubble',
            shape:   'bubble-flip',
            fill:     COLORS.red,
            origin:   '0% 100%',
            delay:    delay += delayStep,
            x: 10, y: { [-55]: -55 - yShift},
            angle:   { 40 : -endAngle  },
          }).then({
            ...THEN_OPTS,
            angle: { to: 90, easing: 'expo.in' }
          });

          const logoRectangle = new mojs.Shape({
            parent:   '#demo-speech-bubble',
            shape:    'rect',
            fill:     COLORS.blue,
            rx:       15,
            radius:   74,
            scale:    { 0: 1 },
            duration: 1.1*duration,
            delay:    2.25*duration,
            easing:   'quint.out',
          }).then({
            scale: 0,
            angle: 90,
            delay: 775,
            easing: 'quad.in'
          });

          const whiteBubble = new mojs.Shape({
            parent:   '#demo-speech-bubble',
            shape: 'bubble',
            fill:  'white',
            radius: 48,
            scale: { 0: 1 },
            duration: 1.25*duration,
            delay: 2.25*duration,
            easing:  'quint.out',
            x:       { [-25] : 0 },
            y:       { [-25] : 0 }
          }).then({
            scale: 0,
            angle: 180,
            delay: 600,
            easing: 'sin.in'
          });

          const yellowBubble = new mojs.Shape({
            ...OPTS,
            parent:   '#demo-speech-bubble',
            fill:     COLORS.yellow,
            origin:   '100% 100%',
            delay:    delay += delayStep,
            y:        { [-85] : -85 - yShift },
            x:        15,
            angle:    { [-30]: endAngle }
          }).then({
            ...THEN_OPTS,
            duration: 300,
            y:    15
          });

          const blueCircle = new mojs.Shape({
            parent:   '#demo-speech-bubble',
            shape:    'circle',
            fill:     COLORS.blue,
            radius:   10,
            scale:    { 0 : 1 },
            x:        { [-25]: -55 },
            y:        { 0: -70 },
            delay:    duration/2 + 50,
            duration: 1*duration,
            easing:   'quad.out'
          }).then({
            x:       -20,
            y:       0,
            delay:   50,
            scale:   { to: .65, easing: 'quad.in' },
            duration: duration/1.75,
            easing:  'cubic.in',
            isShowEnd: false
          });

          const check = new mojs.Shape({
            parent:   '#demo-speech-bubble',
            shape:    'check',
            stroke:   COLORS.blue,
            fill:     'none',
            radius:   18,
            strokeWidth: 15,
            x: 1, y: 2,
            strokeLinecap: 'round',
            strokeDasharray: '100%',
            strokeDashoffset: { '100%': 0 },
            delay: 2.5*duration - 50,
            duration: 1.25*duration,
            easing: 'quad.out'
          }).then({
            scale: 0,
            duration: 1.35*duration,
            delay: 450,
            angle: 360,
            easing: 'cubic.in'
          });

          const smallRect = new mojs.ShapeSwirl({
            parent:   '#demo-speech-bubble',
            fill: COLORS.blue,
            shape:    'rect',
            radius:   10,
            rx:       4,
            scale:    { 0: 1 },
            duration: 1000,
            easing:   'elastic.out',
            opacity: { 1 : 0, easing: 'cubic.out' }
          });

          const timeline = new mojs.Timeline({ delay: 0 });

          timeline
            .add(
              purpleBubble,
              redBubble,
              yellowBubble,
              blueCircle,
              logoRectangle,
              whiteBubble,
              check
          ).append( smallRect );

          const parentDOM = document.getElementById('demo-speech-bubble_controller');
          new MojsPlayer({
            add: timeline,
            isPlaying: false,
            isRepeat: true,
            parent: parentDOM,
            name: "demo-speech-bubble_controller",
            className: 'controller',
            isSaveState: false,
          });

        });

      });

    }

  }
</script>
