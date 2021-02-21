<template>
  <div class="clock">
    <img class="hourhand" :style="hour" src="../assets/hour-hand.svg" alt>
    <img class="minhand" :style="min" src="../assets/minute-hand.svg" alt>
    <img class="sechand" :style="sec" src="../assets/second-hand.svg" alt>
  </div>
</template>


<style lang="scss">
.clock {
  width: 500px;
  height: 500px;
  background-image: url("../assets/clock-bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .hourhand {
    position: absolute;
    left: 250px;
    transform-origin: 0%;
  }

  .minhand {
    position: absolute;
    bottom: 250px;
    transform-origin: bottom;
  }

  .sechand {
    position: absolute;
    top: 250px;
    transform-origin: top;
  }
}
</style>

<script>
export default {
  data() {
    return {
      hourdegree: 30,
      mindegree: 30,
      secdegree: 30,
    };
  },
  computed: {
    hour() {
      return { transform: `rotate(${this.hourdegree}deg)` };
    },
    min() {
      return { transform: `rotate(${this.mindegree}deg)` };
    },
    sec() {
      return { transform: `rotate(${this.secdegree}deg)` };
    },
  },
  methods: {
    clock() {
      const time = new Date();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();
      const hourDegree = (hour / 12) * 360 - 90 + (min / 60) * 30;
      const minDegree = (min / 60) * 360;
      const secDegree = (sec / 60) * 360 - 180;
      this.hourdegree = hourDegree;
      this.mindegree = minDegree;
      this.secdegree = secDegree;
    },
  },
  mounted() {
    this.clock();
    setInterval(this.clock, 1000);
  },
};
</script>
