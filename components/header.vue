<template lang="pug">
  div
    header
      div.container
        div.left
          // nuxt-link(to="/")
          //   img.logo(src="../assets/img/logo-50.png")
          //   span.logo-txt.hide-small Daily Card
        div.middle
        div.right
    // 登录框
    login   

</template>

<script>
  import Cookie from 'js-cookie'
  import Login from './login'
  export default {
    data () {
      return {
        isHideMenu: true,
        showmemeus: false,
        searchKey: this.$route.query.q
      }
    },
    components: {
      Login
    },
    watch: {
      '$route': function () {
        this.searchKey = this.$route.query.q
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      // 注销
      logout: function () {
        Cookie.set('awlogin', null, {domain: window.location.hostname.replace(/^[A-Za-z]+/, '')})
        this.$store.commit('setUser', null)
        this.$alert('success', '注销成功！')
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    border-radius: 0;
    z-index: 2000;
    // box-shadow: 1px 1px 1px rgba(238, 238, 238, 0.54);
    margin-bottom: 0;
    position: fixed;
    width: 100%;
    font-size: 1.1rem;
    font-weight: bold;
    // background-color: rgba(254, 254, 254, 0.97);

    a {
      text-decoration: none;
      position: relative;
      height: 60px;
      color: #7b7676;
      padding: 0 20px;
      display: flex;
      align-items: center;
      &:hover {
        color: #da552f
      }
    }


    a.nuxt-link-active {
      color: #da552f;
    }

    .container {
      display: flex;
      align-items: flex-start;
    }
  }

  .notifiys {
    &.active {
      color: #da552f
    }
  }
  .left, .middle .inner, .right {
    display: flex;
  }

  .middle {
  }

  .middle .inner{
    flex-wrap: wrap;
    overflow: hidden;

    @media (max-width: 576px) {
      display: block;
    }

  }

  .swiper-container {
      width: 100%;
      height: 50px;
  }

  .right {
    flex-grow: 1;
    flex-direction: row-reverse;
    position: relative;
    align-items: center
  }

  .logo {
    width: 25px;
    height: 25px;
  }

  .logo-txt {
    color: #da552f;
    padding-left: 8px;
    font-size: 1.3rem
  }

  .memeus {
    width: 150px;
    background-color: #FFF;
    position: absolute;
    top: 60px;
    right: 0;
    border: #DDD 1px solid;
    border-top: 0;
    text-align: center;
    // display: none;

    a {
      display: block;
      border-top: #EEE 1px solid;
      height: auto;
      padding: 15px 0;
    }
  }
  

  

  .right > a {
    padding: 0 12px;
  }

  .left a, .right a {
    @media (max-width: 576px) {
      padding: 0 10px;
    }
  }

  .tx {
    width: 25px;
    height: 25px;
    border-radius: 100%;
  }

  .pub-btn {
    color: #449d44;
  }

  .show-small {
    display: none;
  }

  @media (max-width: 1000px) {
    .hide-small {
      display: none;
    }
    .show-small {
      display: block;
    }
  }

  .webk-label {
    background-color: #ec971f;
    color: #FFF;
    padding: 2px 7px;
    font-size: 12px;
    border-radius: 100%;
    position: absolute;
    top: 10px;
    right: 0;
    transform-origin-x: 0;
    transform: scale(0.8);
  }

  .search-form {
    color: #aeaeae;
    position: relative;
    margin-right: 12px;
    .go {
      display: inline-block;
      position: absolute;
      right: 5px;
      top: 8px;
      cursor: pointer;
    }
    input {
      outline: none;
      border: #EEE 1px solid;
      display: block;
      background-color: #FAFAFA;
      padding: 6px 5px;
      padding-right: 30px;
      border-radius: 3px;
      width: 160px;
      &:focus {
        background-color: #FFF;
        border: #007fff 1px solid;

        & + .go {
          color: #007fff
        }
      }
    }
    
  }

</style>
