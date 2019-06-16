/**
Usage:
<More label="Click here to see the gifs">
  Content
</More>

TODO: Add aria roles, or try make vue-badger-accordion work within vuepress
*/
<template>
  <div class="accordion">
    <button v-on:click="toggleAccordeon" class="accordion__header">
      {{open ? 'Close' : label }}
      <span>{{open ? '–' : '+'}}</span>
    </button>

    <div v-if="open" class="accordion__panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {

    data: function () {
      return {
        open: false
      }
    },

    props: {
      label: { type: String, default: 'Expand to see more' },
    },

    methods: {
      toggleAccordeon: function () {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="stylus">
  .accordion__header {
    display: flex
    justify-content: space-between
    border: none
    background: $c-purple-light
    color: $c-white
    padding: $s-small $s-medium
    font-weight: bold
    font-size: 1em
    width: 100%
    text-align: left
    cursor: pointer
  }
  .accordion__panel {
    margin: 0
  }
</style>
