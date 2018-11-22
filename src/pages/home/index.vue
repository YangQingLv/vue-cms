<template>
<div class="home-container">
  <!-- 轮播图 -->
  <mt-swipe class="banner-container" :auto="4000">
    <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
      <a :href="item.url">
        <img :src="item.img">
      </a>
    </mt-swipe-item>
  </mt-swipe>

  

</div>
</template>


<script>
  // 引入消息提示框
  import { Toast } from 'mint-ui';

  // 导出对象
  export default {
    data() {
      return{
        bannerList:[]
      }
    },
    created () {
      this.getBannerDate()
    },
    methods: {
      getBannerDate() {
        this.$http.get("http://www.lovegf.cn:8899/api/getlunbo")
        .then(result=>{
          if (result.body.status === 0) {
            this.bannerList = result.body.message
          }else {
            Toast("获取轮播图数据失败,请重试!!!")
          }
        })
      }
    }
  }
</script>


<style lang="less">
.home-container {
  .banner-container {
    width: 100%;
    height: 200px;
     .mint-swipe-item {
      &:nth-of-type(1){
        background-color: red;
      }
      &:nth-of-type(2){
        background-color: yellow;
      }
      &:nth-of-type(3){
        background-color: blue;
      }
      > a {
        display: block;
        width: 100%;
        height: 100%;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>