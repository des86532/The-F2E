<template lang="pug">
  .bar
    router-link(to="account")
      i.fas.fa-search
    router-link(to="discovery")
      i.fas.fa-eye
    router-link(to="library")
      i.fas.fa-music
    router-link(to="account" @click.native="setActive(4)")
      i.fas.fa-user
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    test() {
      console.log('123');
    },
    setActive(value) {
      this.$store.commit('setActive', value);
    }
  },
  computed: {
    activePage() {
      return this.$store.state.active;
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 15px;
  top: 22px;

  i {
    font-size: 24px;
    color: #FFFFFF;
    opacity: 0.35;
    margin-bottom: 35px;
  }
}
</style>
