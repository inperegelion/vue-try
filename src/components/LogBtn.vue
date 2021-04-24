<template>
  <!-- <div > -->
  <Button
    v-if="authtorised"
    name="Press it if you are bad enough to leave me like this"
    :func="logout"
  />
  <Button v-else name="Become Logged In" :func="login" />
  <!-- </div> -->
</template>

<script>
import Button from "@/components/Button.vue";
import store from "@/store";

export default {
  data: () => ({
    login: () => store.dispatch("login"),
    logout: () => store.dispatch("logout"),
  }),
  computed: {
    authtorised: () => store.state.isLogged,
  },
  components: { Button },
};
</script>
