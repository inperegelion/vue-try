<template>
  <div class="header">
    <nav id="nav">
      <router-link to="/">Catalog</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/helloworld">Hello World</router-link>
    </nav>
    <LogBtn />
  </div>
  <router-view />
</template>

<script>
import LogBtn from "@/components/LogBtn.vue";

export default {
  components: { LogBtn },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
