<template lang="pug">
  #home
    Bar
    img.bg(src="../assets/black-and-white-sunset-clouds-field@3x.png")
    .header Home
    .main
      h1 This is home page
</template>

<script>
import Bar from '@/components/floatingBar.vue';

export default {
  components: {
    Bar,
  }
}
</script>

<style lang="scss" scoped>
#home {
  padding: 22px 24px;
  text-align: center;
  color: white;

  .bg {
    object-position: left;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(4px) brightness(80%);
    z-index: -1;
  }

  .header {
    font-size: 20px;
  }
}
</style>
