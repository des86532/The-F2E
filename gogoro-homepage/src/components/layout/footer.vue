<template lang="pug">
footer.footer
  .directory.wrap
    .social
      .logo
      .social__links
        .social__link(v-for="item in socialList" :key="item")
          i.fab(:class="item.icon")
          span {{ item.name }}
    .sections
      .section(v-for="section in sectionList" :key="section.name")
        .section__name(@click="switchSectionStatus(section.name)")
          span {{ section.name }}
          i.fas.fa-plus
        .section__links(:class="{ 'section__links--active' : section.open }")
          .section__link(v-for="link in section.data" :key="link")
            span {{ link }}
  .copyright.wrap
    select.location
      option(value='global') global
      option(value='taiwan') taiwan
    p.copyright__text Copyright © 2014-2021 Gogoro Inc. All rights reserved.
    .link-group
      a.link(href="#") Privacy Policy
      a.link(href="#") Terms of Use
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      socialList: [
        {
          icon: 'fa-facebook-square',
          name: 'Facebook',
        },
        {
          icon: 'fa-youtube',
          name: 'Youtube',
        },
        {
          icon: 'fa-twitter',
          name: 'Twitter',
        },
        {
          icon: 'fa-instagram',
          name: 'Instagram',
        },
        {
          icon: 'fa-linkedin',
          name: 'Linkedin',
        },
      ],
      sectionList: [
        {
          name: 'Smartscooter',
          data: [
            'S Performance',
            'Gogoro 1 Series',
            'Gogoro 2 Series',
            'Gogoro 3 Series',
            'Gogoro VIVA',
            'Gogoro VIVA MIX',
            'IQ System',
            'Compare Specs'
          ],
          open: false,
        },
        {
          name: 'Smart Power',
          data: [
            'Gogoro Network',
          ],
          open: false,
        },
        {
          name: 'News',
          data: [
            'Latest',
            'About Us',
            'Media Center',
            'Media Assets',
            'Inquires',
          ],
          open: false,
        },
        {
          name: 'Get Support',
          data: [
            'Tech Support',
            'Mail Us',
            'FAQ',
          ],
          open: false,
        },
      ]
    })

    const switchSectionStatus = (name) => {
      const result = state.sectionList.filter(item => item.name === name)[0];
      result.open = !result.open;
    }

    return {
      ...toRefs(state),
      switchSectionStatus,
    }
  }
}
</script>