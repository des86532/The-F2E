<template>
  <div class="multiplicationBlock">
    <div class="multiplicationBlock__title">{{number}}</div>
    <div
      class="multiplicationBlock__detail"
      v-for="n in 9"
      :key="n"
    >{{number}} x {{n}} = {{number*n}}</div>
  </div>
</template>

<script>
export default {
  props: ['number'],
};
</script>
