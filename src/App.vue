<template>
  <div class="app-container">
    <!-- 顶部 Header 区 -->
    <mt-header fixed title="vue·cms"></mt-header>

    <!-- 底部 Tabbar 区 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
          </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    <!-- 中间 router-view 区 -->
    <transition class="">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

</script>

 <style lang="less">
  .app-container {
    padding-top: 40px;
    padding-bottom: 50px;
    // 隐藏横向滚动条
    overflow-x: hidden;
    .v-enter{
      transform:translateX(100%);
      opacity: 0;
    }
    .v-leave-to {
      position: absolute;
      transform:translateX(-100%);
      opacity: 0;
    }
    .v-enter-active,
    .v-leave-active {
      transition: all .8s ease;
    }
  }
</style>

