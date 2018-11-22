<template>
    <div class="comment-container">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请输入需要评论的内容(最多120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item">
                <div class="comment-title">
                    第一楼 用户名:匿名用户 发表时间:
                </div>
                <div class="comment-body">
                    刘希晗是笨蛋
                </div>
            </div>
            <div class="comment-item">
                <div class="comment-title">
                    第一楼 用户名:匿名用户 发表时间:
                </div>
                <div class="comment-body">
                    刘希晗是笨蛋
                </div>
            </div>
            <div class="comment-item">
                <div class="comment-title">
                    第一楼 用户名:匿名用户 发表时间:
                </div>
                <div class="comment-body">
                    刘希晗是笨蛋
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    
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
                    .comment-body{
                        text-indent: 2em;
                        line-height: 32px;
                    }
                }
            }
        }
    }
</style>

