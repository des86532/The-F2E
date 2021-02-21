<template>
  <div class="multiplication">
    <MultiplicationTitleBlock></MultiplicationTitleBlock>
    <MultiplicationBlock v-for="n in array" :key="n" :number="n"></MultiplicationBlock>
  </div>
</template>


<script>
// @ is an alias to /src
import MultiplicationTitleBlock from '../components/MultiplicationTitleBlock.vue';
import MultiplicationBlock from '../components/MultiplicationBlock.vue';

export default {
  name: 'home',
  components: {
    MultiplicationTitleBlock,
    MultiplicationBlock,
  },
  data() {
    return {
      array: [2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>
