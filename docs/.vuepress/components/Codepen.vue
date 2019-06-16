/**
Usage:
<Codepen
  title="Love or Hate?"
  pen="812699ce32c9a7aeb70c9384b32a533a"
  user="sol0mka"
/>
*/
<template>
  <div>
    <p class="codepen" data-height="600" data-theme-id="dark" data-default-tab="result" :data-user="user" :data-slug-hash="pen" data-preview="true" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" :data-pen-title="title">
      <span>See the Pen <a :href="`https://codepen.io/{{user}}/full/${pen}/`">
      mograph</a> by LegoMushroom (<a :href="`https://codepen.io/${user}`">@{{user}}</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  </div>
</template>

<script>
  export default {

    props: {
      title: { type: String, default: 'Pen' },
      pen: { type: String, default: 'RRRgLq' },
      user: { type: String, default: 'sol0mka' },
    }
  }
</script>
