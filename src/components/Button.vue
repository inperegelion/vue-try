<template>
  <button @click="func" class="button">{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: { type: String, default: "Press to Win" },
    func: {
      type: Function,
      default: () => alert(`u'r doing great with pressing these buttns`),
    },
  },
};
</script>

<style scoped lang="scss"></style>
