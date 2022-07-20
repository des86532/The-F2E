<template lang="pug">
.impact
  .impact__title
    span Our community's impact
  transition-group.impact__list(name="fade" tag="div")
    .impact__info(v-for="(item, index) in infoList" :key="item.id" v-show="index === activeIndex")
      .impact__info__count {{ item.count }}
      .impact__info__title {{ item.title }}
      .impact__info__content {{ item.content }}
  .indicator
    .indicator__item(v-for="(item, index) in infoList" :key="item" :class="index === activeIndex ? 'indicator__item--active' : ''" @click="changeSwiper(index)")
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      infoList: [
        {
          id: 1,
          count: '123',
          title: 'Batterires swapped',
          content: 'There are more then 279,146 betteries swapped per day in the last 30 days'
        },
        {
          id: 2,
          count: '321',
          title: 'Batterires swapped',
          content: 'There are more then 279,146 betteries swapped per day in the last 30 days'
        },
        {
          id: 3,
          count: '222',
          title: 'Batterires swapped',
          content: 'There are more then 279,146 betteries swapped per day in the last 30 days'
        }
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