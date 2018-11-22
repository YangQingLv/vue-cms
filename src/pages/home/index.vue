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

  <!-- 网格导航 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
		    <img src="../../images/menu1.png" alt="">
		    <div class="mui-media-body">新闻资讯</div>
      </a>
    </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
		    <img src="../../images/menu2.png" alt="">
		    <div class="mui-media-body">图片分享</div>
      </a>
    </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
		    <img src="../../images/menu3.png" alt="">
		    <div class="mui-media-body">商城购买</div>
      </a>
    </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
		    <img src="../../images/menu4.png" alt="">
		    <div class="mui-media-body">留言反馈</div>
      </a>
    </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
		    <img src="../../images/menu5.png" alt="">
		    <div class="mui-media-body">视屏专区</div>
      </a>
    </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
		    <img src="../../images/menu6.png" alt="">
		    <div class="mui-media-body">联系我们</div>
      </a>
    </li>
	</ul>

</div>
</template>


<script>
// 引入消息提示框
import { Toast } from "mint-ui";

// 导出对象
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getBannerDate();
  },
  methods: {
    getBannerDate() {
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
        } else {
          Toast("获取轮播图数据失败,请重试!!!");
        }
      });
    }
  }
};
</script>


<style lang="less">
body {
  background-color: #fff;
  .home-container {
    .banner-container {
      width: 100%;
      height: 200px;
      .mint-swipe-item {
        &:nth-of-type(1) {
          background-color: red;
        }
        &:nth-of-type(2) {
          background-color: yellow;
        }
        &:nth-of-type(3) {
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

    .mui-grid-view {
      background-color: #fff;
      border: none;
      .mui-table-view-cell {
        border: none;
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}
</style>