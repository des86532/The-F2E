<template>
    <div class="calculator">
        <div class="calculator__screen">
          <div class="calculator__screen__detail">
            <p>{{ screen }}</p>
          </div>
          <div class="calculator__screen__result">
            <p>{{ number }}</p>
          </div>
        </div>
        <div class="calculator__keyboard">
          <button class="calculator__keyboard__button" @click="input('7')">7</button>
          <button class="calculator__keyboard__button" @click="input('8')">8</button>
          <button class="calculator__keyboard__button" @click="input('9')">9</button>
          <button class="calculator__keyboard__button calculator__keyboard__button__operator" @click="operation('÷')">÷</button>
          <button class="calculator__keyboard__button" @click="input('4')">4</button>
          <button class="calculator__keyboard__button" @click="input('5')">5</button>
          <button class="calculator__keyboard__button" @click="input('6')">6</button>
          <button class="calculator__keyboard__button calculator__keyboard__button__operator" @click="operation('×')">×</button>
          <button class="calculator__keyboard__button" @click="input('1')">1</button>
          <button class="calculator__keyboard__button" @click="input('2')">2</button>
          <button class="calculator__keyboard__button" @click="input('3')">3</button>
          <button class="calculator__keyboard__button calculator__keyboard__button__operator" @click="operation('+')">+</button>
          <button class="calculator__keyboard__button" @click="input('0')">0</button>
          <button class="calculator__keyboard__button" @click="input('00')">00</button>
          <button class="calculator__keyboard__button" @click="dot">.</button>
          <button class="calculator__keyboard__button calculator__keyboard__button__operator" @click="operation('-')">−</button>
          <button class="calculator__keyboard__button calculator__keyboard__button__features" @click="clear">AC</button>
          <button class="calculator__keyboard__button calculator__keyboard__button__features" @click="back">⌫</button>
          <button class="calculator__keyboard__button calculator__keyboard__button__result" @click="equal">=</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      mode: true,
      screen: '請輸入...',
      number: '0',
      hasResult: false,
    }
  },
  methods: {
    input(digital) {
      this.mode = true;
      // if (digital === '00') {
      //   if (this.number === '0') {
      //     this.number = '0';
      //   } else {
      //     this.number = digital;
      //   }
      // }
      if (this.hasResult) {
        this.screen = '0';
        if (digital === '00') {
          this.number = '0';
        } else {
          this.number = digital;
        }
      } else {
        if (this.number === '0') {
          if (digital === '00') {
            this.number = '0';
          } else {
            this.number = digital;
          }
        } else {
          this.number = this.number + digital;
        }
      }
      this.hasResult = false;
    },
    dot() {
      if (!this.mode) {
        return;
      } else {
        if (this.number.indexOf('.') < 0) {
          this.number = this.number + '.';
        } else {
          return;
        }
      }
      this.mode = false;
    },
    operation(operate) {
      if (!this.mode) {
        return;
      } else {
        if (this.screen === '請輸入...' || this.screen === '0') {
          this.screen = `${this.number + operate}`;
        } else {
          this.screen = `${this.screen + this.number + operate}`;
        }
      }
      this.number = '0';
      this.mode = false;
    },
    clear() {
      this.mode = true;
      this.screen = '請輸入...';
      this.number = '0';
      this.hasResult = false;
    },
    back() {
      if (this.number === '0') {
        return;
      } else {
        this.number = this.number.substring(0, this.number.length - 1);
      }
    },
    equal() {
      if (this.mode) {
        this.screen = `${this.screen + this.number}`;
        this.number = eval(this.formula);
        this.mode = false;
        this.hasResult = true;
      } else {
        return;
      }
    },
  },
  computed: {
    formula() {
      const temp = this.screen.replace(/×/g, '*');
      return temp.replace(/÷/g, '/');
    },
  },
};
</script>
