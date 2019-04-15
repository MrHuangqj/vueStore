<template>
  <div
    class="m-tabbar"
    @click="selectItem"
  >
    <yd-tabbar fixed>
      <yd-tabbar-item
        title="首页"
        link="/"
        type="link"
        :active="select=='/'?true:false"
      >
        <yd-icon
          name="home-outline"
          slot="icon"
          size="0.54rem"
        ></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item
        title="分类"
        link="/category"
        type="link"
        :active="select=='/category'?true:false"
      >
        <yd-icon
          name="type"
          slot="icon"
          size="0.54rem"
        ></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item
        title="购物车"
        link="/cart"
        type="link"
        :active="select=='/cart'?true:false"
      >
        <yd-icon
          name="shopcart-outline"
          slot="icon"
          size="0.54rem"
        ></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item
        title="个人中心"
        link="/user"
        type="link"
        :active="select=='/user'?true:false"
      >
        <yd-icon
          name="ucenter-outline"
          slot="icon"
          size="0.54rem"
        ></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>
           
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      // select: '/'
    };
  },
  methods: {
    selectItem() {
      // this.select = index;
      console.log(this.$route.path);
      let tabbar = this.$route.path;
      if (
        tabbar == "/" ||
        tabbar == "/category" ||
        tabbar == "/user" ||
        tabbar == "/cart"
      )
        //解决路径非四个导航栏地址时的显示
        this.select = tabbar;
      else {
        this.show = false;
        this.select = "/";
      }
      // console.log(this.select);
    }
  },
  created() {
    // this.selectItem();
  },
  computed: {
    select: {
      get: function() {
        return this.$route.path;
      },
      set: function() {
        return '/'
      }
    }
  }
};
</script>
           
<style lang="stylus" scoped></style>