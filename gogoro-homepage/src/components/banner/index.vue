<template lang="pug">
.banner
  .swiper
    .swiper__item(v-for="(item, index) in swiperList" :key="item" :style="`background-image: url(${item})`" :class="index === activeIndex ? 'swiper__item--active' : ''")
    .indicator
      .indicator__item(v-for="(item, index) in swiperList" :key="item" :class="index === activeIndex ? 'indicator__item--active' : ''" @click="changeSwiper(index)")
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      swiperList: [
        require('@/assets/image/faris-mohammed-mV1IzhFZPfI-unsplash.jpg'),
        require('@/assets/image/oren-lonstein-DwH-u91eETo-unsplash.jpg'),
      ],
      activeIndex: 0,
    })

    const changeSwiper = (index) => {
      state.activeIndex = index;
    }

    return {
      ...toRefs(state),
      changeSwiper
    }
  }
}
</script>