<template>
  <div class="container home-box">
    <div class="news-item">
      <div class="item-top">
          <h3>第 06-09 期</h3>
      </div>
      <article v-html="marked(news.con)"></article>
      <div class="item-bottom">
      </div>
    </div>
  </div>
</template>


<script>
  import axios from '~/plugins/axios'
  export default {
    name: 'home',
    async asyncData ({ req, params, query }) {
      let res = await axios(req).get('news/200')
      return {
        news: res.data
      }
    },
    data () {
      return {
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
    },
    created () {
    }
  }
</script>


<style lang="scss" scoped>
.news-item {
  font-size: 1.2rem;
  width: 600px;
  margin: 50px auto;
  background-color: #FFF;
  border-radius: 5px;
  line-height: 35px;
  box-shadow: 0 0 3px hsla(0,0%,87%,.2);
  color: #828688;
  article {
    padding: 50px;
  }
  .item-top {
    padding: 30px;
    border-bottom: #f7f7f7 1px solid;
    h3 {
      margin: 0;
      padding: 0;
      line-height: 0;
    }
  }
  .item-bottom {
    padding: 30px;
    border-top: #f7f7f7 1px solid;
  }
}
</style>
