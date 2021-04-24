<template>
  <p>
    <span>{{ title }}{{' '}}</span>
    <code>{{ price }}</code>
  </p>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: { type: String, default: "To be added soon" },
    price: Number,
    pictureURL: String,
  },
};
</script>

<style scoped lang="scss"></style>
