<template>
    <div class="photosInfo-container">
        <h4 class="photosInfo-title">{{ photosInfo.title }}</h4>
        <p>
            <span>发表时间:{{ photosInfo.add_time }}</span>
            <span>点击: {{ photosInfo.click }}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photosInfo.content"></div>
        <!-- 评论区域 -->
        <!-- 可以直接引入写好的评论组件 -->
        <cmt-box :id="id"></cmt-box>

    </div>
</template>

<script>
    import comment from "../../../components/comment/index.vue"

    export default({
        data() {
            return {
                id:this.$route.params.id,
                photosInfo:{},
                list:[]
            }
        },
        created() {
            this.getphotosInfo(),
            this.getList()
        },
        methods: {
            getphotosInfo() {
                this.$http.get("api/getimageInfo/" + this.id).then(result => {
                    if(result.body.status === 0) {
                        this.photosInfo = result.body.message[0]
                    }
                })
            },
            getList() {
                this.$http.get("api/getthumimages/" + this.id).then(result =>{
                    if(result.body.status === 0) {
                        result.body.message.forEach(item=>{
                            item.w = 600;
                            item.h = 400;
                        })
                    }
                    this.list = result.body.message
                })
            }
        },
        components: {
            "cmt-box":comment
        }
    })
</script>


<style lang="less">
body {
    .photosInfo-container {
        padding: 0 4px;
        .photosInfo-title {
            font-size: 14px;
            color: #226aff;
            margin: 13px 0;
        }
        p {
            font-size: 13px;
            display: flex;
            justify-content: space-between;
        }
        .photosInfo-content {
            font-size: 13px;
            line-height: 28px;
        }
        .thumbs {
            img {
                margin: 10px;
                box-shadow: 0 0 8px #999;
            }
        }
    }
}
</style>

