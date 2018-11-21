<template>
  <div class="app-container">
    <!-- 顶部 Header 区 -->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- 底部 Tabbar 区 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>

    <!-- 中间 router-view 区 -->
  </div>
</template>

<script>
</script>

 <style lang="less">
  .app-container {
    padding-top: 40px;
    padding-bottom: 50px;
  }
</style>

