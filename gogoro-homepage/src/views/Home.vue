<template lang="pug">
.home
  Header
  Banner
  .container
    CardGroup
    .image-section
      .image
        img(src="@/assets/image/nostra-damot-ATOpW1AXEKM-unsplash.jpg")
        .image__info.image__info__left
          .brand  Gogoro Network
          h2.title The largest battery swapping network in the world
          .content Gogoro Network® manages over 200,000 battery swaps a day at 2,088 GoStations® across Taiwan, that's enough power to ride 15,000,000 km.
          .link SEE OUR NETWORK
    .image-section
      .image
        img(src="@/assets/image/white-ipelAnZ017c-unsplash.jpg")
        .image__info.image__info__center
          p.subTitle 5 Partner and Growing
          h3.title Powered by Gogoro Network
      .image
        img(src="@/assets/image/scott-evans-wVgruyzRE8c-unsplash.jpg")
        .image__info.image__info__center
          p.subTitle Blog
          h3.title Hero & Gogoro heads to India
    .intro
      h2.intro__title Introducing Gogoro Eeyo
      .intro__content From the cloud to the road, this is eBike reimagined. Ultralight, totally digital, and an absolute blast to ride.
      .intro__link Learn More
      .image-section
        .image
          img(src="@/assets/image/michael-herfort-IHnq0CjPyc4-unsplash.jpg")
    Impact
  Footer
</template>

<script>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
import Banner from '@/components/banner/index.vue'
import CardGroup from '@/components/cardGroup/index.vue'
import Impact from '@/components/impact/index.vue'

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Banner,
    CardGroup,
    Impact,
  },
};
</script>

