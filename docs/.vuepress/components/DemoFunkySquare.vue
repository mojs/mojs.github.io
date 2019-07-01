<template>
  <div class="mojs-interactive">
    <slot></slot>
    <div class="mojs-interactive__result" id="demo-funky-square" style="background: #49F2CC; height: 500px">
      <div id="demo-funky-square_controller" class="mojs-interactive__controller"></div>
    </div>
  </div>
</template>

<script>
  export default {

    mounted: function () {
      import("@mojs/core").then(module => {
        import('mojs-player').then(module => {
          const COLORS = {
            white:   '#ffffff',
            black:   '#000000',
            green:   '#49F2CC',
            pink:    '#777',
            grey:    '#29363B',
            cyan:    'cyan',
            yellow:  '#FFE202',
            hotpink: 'deeppink',
          };

          const y = -35;

          class Sparks extends mojs.CustomShape {
            getShape () { return '<path d="M11.8274713,76.9078071 C11.8274713,76.9078071 2.16693973,42.95046 30.0687526,21.2517012"></path><path d="M25.7538383,77.4836394 C25.7538383,77.4836394 20.7413252,19.6928312 92.8457655,18.1298659"></path><path d="M29.8949928,85.1781099 C29.8949928,85.1781099 41.4904038,48.3985179 81.1308462,59.416066"></path>'; }
          }
          mojs.addShape( 'sparks', Sparks );

          const pinkSquare = new mojs.Shape({
            parent:       '#demo-funky-square',
            shape:        'rect',
            stroke:       COLORS.hotpink,
            strokeWidth:  40,
            angle:        { '240': 0 },
            radius:       20,
            scale:        { 0 : 2 },
            duration:     872,
            fill:         'none',
            easing:       'expo.out',
            y
          });

          const SPARKS_OPTS = {
            parent:   '#demo-funky-square',
            shape:    'sparks',
            parent:   pinkSquare.el,
            radius:   15,
            left:     '130%',
            top:      '25%',
            fill:     'none',
            strokeWidth: { 10 : 0 },
            stroke: 'white',
            strokeDasharray: '75',
            strokeDashoffset: { '75' : '-75' },
            duration: 900,
            easing: 'cubic.out',
            strokeLinecap: 'round',
            isForce3d: true
          }

          const sparks1 = new mojs.Shape({
            ...SPARKS_OPTS,
            left:     '125%',
            top:      '25%',
            angle:    80,
          });

          const sparks2 = new mojs.Shape({
            ...SPARKS_OPTS,
            top:     '125%',
            left:    '80%',
            angle:    165,
          });

          const sparks3 = new mojs.Shape({
            ...SPARKS_OPTS,
            top:     '75%',
            left:    '-25%',
            angle:    250,
          });

          const sparks4 = new mojs.Shape({
            ...SPARKS_OPTS,
            top:     '-25%',
            left:    '20%',
            angle:    330,
          });


          const timeline = new mojs.Timeline({ speed: .5 });
          timeline
            .add(
              pinkSquare,
              sparks1,
              sparks2,
              sparks3,
              sparks4
            );
          
          const parentDOM = document.getElementById('demo-funky-square_controller');         
          new MojsPlayer({
            add: timeline,
            isPlaying: false,
            isRepeat: true,
            parent: parentDOM,
            name: "demo-funky-square_controller",
            className: 'controller',
            isSaveState: false,
          });

        });

      });

    }

  }
</script>
