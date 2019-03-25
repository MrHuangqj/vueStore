<template>
  <div class="home">
    <yd-scrollnav>
      <yd-slider autoplay="3000">
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
          </a>
        </yd-slider-item>
      </yd-slider>
      <yd-scrollnav-panel
        :label="item.label"
        v-for="item, key in list"
        :key="key"
      >

        <!-- 内容 -->
        <p>{{item.label}}</p>
        <yd-list :theme="1">
          <yd-list-item
            v-for="i in 10"
            :key="i"
          >
            <img
              slot="img"
              src="//static.shikee.com/common/img/blank.gif"
            >
            <span slot="title">{{item.label}} - {{item.label}}</span>
          </yd-list-item>
        </yd-list>
        <!-- 内容 -->

      </yd-scrollnav-panel>
    </yd-scrollnav>

  </div>
  
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
      list: [
        { label: "今日特惠" },
        { label: "烟灶推荐" },
        { label: "净水饮水推荐" },
        { label: "洗碗机推荐" },
        { label: "电热推荐" },
        { label: "燃热推荐" },
        { label: "消毒柜推荐" },
        { label: "嵌入式推荐" },
        { label: "商用电器" },
        { label: "活动说明" }
      ]
    };
  },
  components: {

  }
};
</script>
           
<style lang="stylus" scoped>
</style>
