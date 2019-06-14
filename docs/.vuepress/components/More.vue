// TODO: create an expandable componenent but a button to expand that takes the prop label
<template>
  <Slot></Slot>
</template>

<script>
  export default {
    
    props: {
      label: { type: String, default: 'Expand to see more' },
      classname: { type: String, default: '' },
    }

  }
</script>
