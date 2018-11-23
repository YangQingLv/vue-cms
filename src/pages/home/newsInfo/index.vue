<template>
    <div class="newsInfo-container">
        <!-- 大标题 -->
        <h4 class="title">{{ newsInfo.title }}</h4>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{ newsInfo.add_time | dateFormat }}</span>
            <span>点击{{ newsInfo.click }}次</span>
        </p>
        <hr>

        <!-- 内容区 -->
        <div class="content" v-html="newsInfo.content">

        </div>

        <!-- 评论区 -->
        <comment-box :id="this.id"></comment-box>
        
    </div>
</template>


<script>
    // 导入 评论子组件
    import comment from "../../../components/comment/index.vue"

    export default {
        data () {
            return {
                id:this.$route.params.id,  //  将 url 地址中传递过来的 id 值, 挂载到 data 上, 方便以后调用
                newsInfo: {}
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.get("api/getnew/" + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.newsInfo = result.body.message[0]
                    }
                })
            }
        },
        components: {// 用来注册子组件的节点
            'comment-box':comment
        }
    }
</script>


<style lang="less">
    body {
        .newsInfo-container{
        padding: 0 4px;
        .title{
            margin: 13px 0;
            font-size: 16px;
            color:red;
            text-align: center;
        }
        .subtitle {
            display: flex;
            justify-content:space-between;
            color: #226aff;
        }
        .content {
            img {
                width: 100%;   
            }
        }
    }
    }
</style>
