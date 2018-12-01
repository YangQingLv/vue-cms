<template>
<div class="photo-list-container">
    <!-- 顶部滑动区域 -->
    <div class="mui-slider">
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']"  v-for="item in cates" :key="item.id" @tap="getImages(item.id)">
                    {{ item.title }}
                </a>
            </div>
        </div>
    </div>

    <!-- 模拟图片数组 -->
    <!-- <img :src="item.src" v-for="item in list" :key="item.src" > -->

    <!-- 图片列表区域 -->
    <ul class="photo-list">
        <router-link v-for="item in images" :key="item.id" :to="'/home/goodsList/' + item.id" tag="li">
            <img v-lazy="item.img_url">
            <div  class="info">
                <h4  class="info-title">{{ item.title }}</h4>
                <div class="info-body">{{ item.zhaiyao }}</div>
            </div>
        </router-link>
    </ul>
</div>
</template>

<script>
// arguments callee caller 在严格模式下无法使用 而webpack默认是采用严格模式打包的
// 所以mui.js无法被打包编译
// 解决方案: 在 .babelrc  文件中配置忽略, 将mui 的js文件全部忽略掉

// 导入  mui 的js 文件
import mui from "../../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      cates: [],
      images: [],
      list: [
        {
          src:
            "http://img0.imgtn.bdimg.com/it/u=1886777974,634529426&fm=200&gp=0.jpg",
          w: 600,
          title: "Image Caption 1",
          h: 400
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543075395998&di=c0a743f802b5125ebaabf1e598751b90&imgtype=0&src=http%3A%2F%2Fi.gtimg.cn%2Fopen%2Fapp_icon%2F01%2F10%2F23%2F60%2F1101102360_p1.png",
          w: 1200,
          title: "Image Caption 1",
          h: 900
        },
        {
          src:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1689284610,544245529&fm=26&gp=0.jpg",
          w: 1200,
          title: "Image Caption 1",
          h: 900
        }
      ]
    };
  },
  created() {
    this.getAllcategory();
    this.getImages(0);
  },
  mounted() {
    // 当组件中 DOM 结构被渲染好并放到页面中后, 会执行这个 钩子函数
    // 如果要操作元素了, 最好在 mounted 里面,因为这个时候的 DOM 元素是最新的
    // 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllcategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getImages(catesId) {
      this.$http.get("api/getimages/" + catesId).then(result => {
        if (result.body.status === 0) {
          this.images = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="less">
body {
  background-color: #fff;
  .photo-list-container {
    .photo-list {
      padding: 0 8px;
      margin: 0;
      li {
        list-style: none;
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
        margin-bottom: 8px;
        position: relative;
        img {
          width: 100%;
          vertical-align: middle;
        }
        img[lazy="loading"] {
          width: 40px;
          height: 300px;
          margin: auto;
        }
        .info {
          color: #fff;
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
          bottom: 0;
          max-height: 84px;
          text-align: left;
          .info-title {
            font-size: 13px;
          }
          .info-body {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
