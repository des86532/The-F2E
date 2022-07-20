<template lang="pug">
ul.cardGroup
  li.card(v-for="item in cardList" :key="item.image" :style="`background-image: url(${item.image})`")
    .card__info
      h2.card__title {{ item.title }}
      .card__subTitle {{ item.subTitle }}
</template>

<script>
import { reactive } from '@vue/reactivity';

export default {
  setup() {
    const state = reactive({
      cardList: [
        {
          title: 'Smarter Energy',
          subTitle: 'Battery swapping is cleaner, faster & easier',
          image: require('@/assets/image/okai-vehicles-5Jbsoh2LB6U-unsplash.jpg'),
        },
        {
          title: 'Smarter Rides',
          subTitle: 'Experience a ride like no other',
          image: require('@/assets/image/okai-vehicles-vNuRh8jOtXA-unsplash.jpg'),
        },
        {
          title: 'Smarter Sharing',
          subTitle: 'Ride when you like, swap as you go',
          image: require('@/assets/image/ahmet-sali-Jno3k6ahJ_s-unsplash.jpg'),
        }
      ]
    })

    return {
      ...state
    }
  }
}
</script>