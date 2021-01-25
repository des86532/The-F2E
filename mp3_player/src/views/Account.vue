<template lang="pug">
  #account
    Bar
    img.bg(src="../assets/black-and-white-sunset-clouds-field@3x.png")
    .header Account
      router-link(to="/")
        i.fas.fa-arrow-left.header__back
    .user
      i.fas.fa-user.user__photo
      i.fas.fa-pen.user__edit
        span Edit
    .main
      .main__input
        input(placeholder="enter your name")
        i.fas.fa-pen.edit
          span Edit
      .main__title User Name
      .main__content Neil Yang
      .main__title User Account
      .main__content des75421@gmail.com
      .main__title Subscription
      .main__content Free
      .main__title Notification Settings
      .main__title Privacy Policy
</template>

<script>
import Bar from '@/components/floatingBar.vue';

export default {
  components: {
    Bar,
  }
}
</script>

<style lang="scss" scoped>
#account {
  padding: 22px 24px;
  text-align: center;
  color: white;

  .bg {
    object-position: left;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(4px) brightness(80%);
    z-index: -1;
  }

  .header {
    font-size: 20px;

    &__back {
      position: absolute;
      left: 24px;
      color: white;
    }
  }

  .user {
    width: 130px;
    height: 130px;
    background-color: rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 30px;

    &__photo {
      font-size: 70px;
      color: #FFFFFF;
      opacity: 0.5;
      margin-bottom: 10px;
    }

    &__edit {
      font-size: 13px;

      span {
        margin-left: 10px;
      }
    }
  }

  .main {
    padding: 0 18px;
    position: relative;

    input {
      width: 100%;
      height: 20px;
      background: transparent;
      border: none;
      border-bottom: 1px solid white;
      font-size: 20px;
      padding: 10px 0;
      color: white;
      margin-bottom: 20px;
      font-family:  Maven Pro;
      font-weight: bold;

      &::placeholder {
        color: white;
      }
    }

    .edit {
      position: absolute;
      right: 18px;
      top: 10px;

      span {
        margin-left: 10px;
      }
    }

    &__title {
      text-align: left;
      margin-bottom: 20px;
      font-family: Maven Pro;
      font-weight: bold;
    }

    &__content {
      font-size: 15px;
      text-align: left;
      margin-left: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
