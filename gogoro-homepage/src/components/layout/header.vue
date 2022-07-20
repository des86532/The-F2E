<template lang="pug">
header.header
  .header__container
    .header__icon(@click="switchShow")
      i.fas.fa-bars
    ul.nav.wrap
      li.logo
      li.nav__item
        span Smartscooter
      li.nav__item
        span Gogoro Nerwork
      li.nav__item
        span News
    .header__icon
      i.far.fa-user-circle
  .hamburger(:class="show ? 'hamburger--active' : ''")
    .hamburger__item Smartscooter
    .hamburger__item Gogoro Nerwork
    .hamburger__item News
</template>

<script>
import { onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      show: false,
      pcWidth: 992, 
      scrollHeight: 300,
    })

    const switchShow = () => {
      state.show = !state.show;
    }

    const changeHeaderBgColor = () => {
      const header = document.querySelector('.header');
      const opacity = window.scrollY / state.scrollHeight
      header.style = `background-color: rgba(18, 18, 21, ${opacity <= 1 ? opacity : 1});`
    }

    const checkSize = () => {
      const header = document.querySelector('.header');
      const isPc = window.innerWidth >= state.pcWidth
      if (isPc) {
        changeHeaderBgColor()
        document.addEventListener('scroll', changeHeaderBgColor)
      } else {
        header.style = 'background-color: rgba(18, 18, 21, 1)'
        document.removeEventListener('scroll', changeHeaderBgColor)  
      }
    }

    onMounted(() => {
      checkSize()
      window.addEventListener('resize', checkSize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkSize)
    })

    return {
      ...toRefs(state),
      switchShow
    }
  }
}
</script>