// TODO: create an expandable componenent but a button to expand that takes the prop label
<template>
  <badger-accordion>
    <badger-accordion-item>
      <template slot="header">{{label}}</template>    
      <template slot="content"><slot></slot></template>  
    </badger-accordion-item>
  </badger-accordion>
</template>

<script>
  import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion';

  export default {
    components: {
        BadgerAccordion,
        BadgerAccordionItem
    },
    
    props: {
      label: { type: String, default: 'Expand to see more' },
    }

  }
</script>

<style lang="stylus">
  .badger-accordion__header {
    background: $c-purple-light
    color: $c-white
    padding: $s-small $s-medium
    font-weight: bold;
  }
  .badger-accordion__panel {
    margin: 0
  }
</style>
