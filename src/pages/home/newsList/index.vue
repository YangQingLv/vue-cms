<template>
    <div class="news-list-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item) in newsList" :key="item.id">
                <router-link to="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="item.img_url">
                    <div class="mui-media-body">
                        <h4>{{ item.title }}</h4>
                        <p>
                            <span>发表时间: {{ item.add_time | dateFormat }}</span>
                            <span>点击: {{ item.click }} 次</span>
                        </p>
                    </div>
                </router-link>
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
      newsList: [] //新闻列表
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newsList = result.body.message;
        } else {
          Toast("获取新闻列表失败,请重试!!!");
        }
      });
    }
  }
};
</script>

<style lang="less">
body {
  .news-list-container {
    .mui-table-view {
      .mui-media {
        a {
          .mui-media-body {
            h4 {
              font-size: 14px;
            }
            p {
                font-size: 12px;
                color: #26a2ff;
                display:flex;
                justify-content: space-between;
            }
          }
        }
      }
    }
  }
}
</style>