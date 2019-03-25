<template>
  <div class="user">
    <yd-flexbox class="head">
      <div class="head-photo">
        <img
          class="head-photo-img"
          src="./user.png"
          alt=""
          style="width:auto;height:100%;margin: 0 auto;"
        >
      </div>
      <yd-flexbox-item class="head-name">17338878114@qq.com</yd-flexbox-item>
    </yd-flexbox>

    <yd-cell-group>
      <yd-cell-item arrow>
        <span slot="left">我的订单</span>
        <span slot="right">全部订单</span>
      </yd-cell-item>
    </yd-cell-group>

    <yd-grids-group
      :rows="3"
      class="grids-group"
    >
      <yd-grids-item>
        <img
          slot="icon"
          src="./obligation.png"
        >
        <span slot="text">待付款</span>
      </yd-grids-item>
      <yd-grids-item>
        <img
          slot="icon"
          src="./receiving.png"
        >
        <span slot="text">待收货</span>
      </yd-grids-item>
      <yd-grids-item>
        <img
          slot="icon"
          src="./repairs.png"
        >
        <span slot="text">退换修</span>
      </yd-grids-item>
    </yd-grids-group>

    <yd-cell-group>
      <yd-cell-item arrow>
        <yd-icon
          slot="icon"
          name="order"
          size=".42rem"
        ></yd-icon>
        <span slot="left">我的订单</span>
        <span slot="right">查看全部订单</span>
      </yd-cell-item>

      <yd-cell-item arrow>
        <img
          slot="icon"
          src="http://static.ydcss.com/ydui/img/logo.png"
        >
        <span slot="left">图标</span>
        <span slot="right">图标是image</span>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group>
      <yd-cell-item arrow>
        <yd-icon
          slot="icon"
          name="order"
          size=".42rem"
        ></yd-icon>
        <span slot="left">我的订单</span>
        <span slot="right">查看全部订单</span>
      </yd-cell-item>

      <yd-cell-item arrow>
        <img
          slot="icon"
          src="http://static.ydcss.com/ydui/img/logo.png"
        >
        <span slot="left">图标</span>
        <span slot="right">图标是image</span>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group>
      <yd-cell-item arrow>
        <yd-icon
          slot="icon"
          name="order"
          size=".42rem"
        ></yd-icon>
        <span slot="left">我的订单</span>
        <span slot="right">查看全部订单</span>
      </yd-cell-item>

      <yd-cell-item arrow>
        <img
          slot="icon"
          src="http://static.ydcss.com/ydui/img/logo.png"
        >
        <span slot="left">图标</span>
        <span slot="right">图标是image</span>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>
           
<script type="text/ecmascript-6">
export default {
  components: {}
};
</script>
           
<style lang="stylus" scoped>
.user {
  .head {
    padding: 0.36rem 0;
    background: url('./background.png') #f37d0f center 0;
    background-size: auto 100%;

    .head-photo {
      margin: 0 0.16rem 0 0.32rem;
      width: 0.96rem;
      height: 0.96rem;
      overflow: hidden;
      box-sizing: border-box;
      border-radius: 100%;
      border: 3px solid hsla(0, 0%, 100%, 0.4);
      text-align: center;

      .head-photo-img {
        background: #fff;
      }
    }

    .head-name {
      color: #fff;
      font-size: 0.27rem;
      text-align: left;
    }
  }
}

.grids-group {
  position: relative;
  top: -10px;
}
</style>
