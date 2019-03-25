<template>
  <div class="m-tabbar" @click="selectItem">
    <yd-tabbar fixed >
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
      select: '/'
    };
  },
  created(){
    select: '/'
  },
  methods: {
    selectItem() {
      // this.select = index;
      console.log(this.$route.path);
      this.select=this.$route.path
      // console.log(this.select);
    }
  }
};
</script>
           
<style lang="stylus" scoped>
</style>