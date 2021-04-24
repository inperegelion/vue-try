<template>
  <div class="profile-page">
    <div v-if="authtorised">
      <h1>Hi, a logged user</h1>
      <div v-if="user">
        <div v-if="isAvaHidden">
          <Button name="Show Avatar" :func="toggleAva" />
        </div>
        <div v-else>
          <img
            :src="user.avatarURL"
            alt="Picture of a lady, who's account you hacked!"
          />
          <Button name="Hide Avatar" :func="toggleAva" />
        </div>
        <p>Hello {{ user.age }}-year aged {{ user.name }}, Son of Adam</p>
      </div>
    </div>
    <div v-else>
      <h2>Please, log in</h2>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import Button from "@/components/Button";

export default {
  data: () => ({
    isAvaHidden: true,
  }),
  computed: {
    authtorised: () => store.state.isLogged,
    user: () => store.state.user,
  },
  components: { Button },
  methods: {
    toggleAva() {
      this.isAvaHidden = !this.isAvaHidden;
    },
  },
};
</script>
