<template>
    <div class="comment-container">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请输入需要评论的内容(最多120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="comment-title">
                    第{{ i + 1 }}楼 用户名:{{ item.user_name }} 发表时间: {{ item.add_time | dateFormat }}
                </div>
                <div class="comment-body">
                    {{ item.content || "此用户很懒,什么都没说"}}
                    {{ item.content === "undefind" ? "此用户很懒,什么都没说" : item.content }}
                </div>
            </div>        
        </div>
        <mt-button type="primary" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1, // 默认显示第一页
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message
            // 每当获取评论数据的时候,不要把老数据清空覆盖,应该以老数据拼接上新数据
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("评论加载失败,请重试!");
          }
        });
    },
    getMore() {
      this.pageIndex++, this.getComments();
    },
    postComment() {
      // 检测用户输入的内容是否为空
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空");
      }
      // 发表评论
      // 参数1: 请求的 URl 地址
      // 参数2: 提交个服务器的数据对象 { content: this.msg }
      // 参数3: 定义提交时表单中数据的格式  { emulateJSON:true}
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            // 拼接 出一个平论对象
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = "";
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="less">
body {
  .comment-container {
    textarea {
      margin: 0;
    }
    .comment-list {
      margin-top: 5px;
      .comment-item {
        font-size: 14px;
        .comment-title {
          background-color: #ccc;
          line-height: 28px;
        }
        .comment-body {
          text-indent: 2em;
          line-height: 32px;
        }
      }
    }
  }
}
</style>

