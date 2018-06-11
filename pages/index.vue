<template>
  <div class="container home-box">
    <div class="news-item">
      <div class="item-top">
          <h3>第「<span>06-09</span>」期：集合处理方法</h3>
          <div style="font-size: 1rem; color: #DDD">共 <strong>3243</strong> 次学习  <strong>54</strong> 人觉得有用  <strong>432</strong> 次收藏  将于3小时2分20秒后消失</div>
      </div>
      <div>
        <div></div>
      </div>
      <article v-html="marked(news.con)"></article>
      <div class="item-bottom">
        <a href="javascript:void(0)">
          <icon name="message-square">1</icon>
        </a>
        <a href="javascript:void(0)" title="有用">
          <icon name="thumbs-up">1</icon>
        </a>
        <a href="javascript:void(0)">
          <icon name="star"></icon>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from '~/plugins/axios'
  export default {
    name: 'home',
    async asyncData ({ req, params, query }) {
      let res = await axios(req).get('news/230')
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
  color: #444;
  article {
    padding: 50px;
    background-color: rgba(233, 236, 237, 0.05)
  }
  .item-top {
    padding: 30px 50px;
    padding-bottom: 20px;
    border-bottom: #f7f7f7 1px solid;
    h3 {
      flex-grow: 1
    }
  }
  .item-bottom {
    padding: 30px;
    border-top: #f7f7f7 1px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      color: #c3c8ca;
      &:hover {
        color: #607D8B
      }
    }
  }
}
</style>
