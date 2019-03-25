<template>
  <div class="cart">
    <m-navbar title="购物车"></m-navbar>

    <yd-checklist
      v-model="checklist4"
      :label="false"
      class="checklist"
    >
      <yd-checklist-item val="aaa">
        <yd-flexbox style="padding: 15px 0;">
          <img
            src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
            class="demo-checklist-img"
            style="height:60px;width:60px;"
          >
          <yd-flexbox-item
            align="top"
            style="text-align:left;padding:0 0.2rem;"
          >
            <span style="color: blue;">点击这边的内容是禁止选中的</span><br />
            <p style="color:#F00;">选中值：{{checklist4}}</p>
            <yd-spinner
              max="75"
              unit="1"
              v-model="spinner1"
            ></yd-spinner>
          </yd-flexbox-item>
        </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="bbb">
        <yd-flexbox style="padding: 15px 0;">
          <img
            src="//img10.360buyimg.com/n1/jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg"
            class="demo-checklist-img"
            style="height:60px;width:60px"
          >
          <yd-flexbox-item
            align="top"
            style="text-align:left;padding:0 0.2rem;"
          >
            <p>南非进口红西柚 6个 单果重约300-330g 新鲜水果</p>
            <yd-spinner
              max="75"
              unit="1"
              v-model="spinner1"
            ></yd-spinner>
          </yd-flexbox-item>
        </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="ccc">
        <yd-flexbox style="padding: 15px 0;">
          <img
            src="//img14.360buyimg.com/n1/jfs/t3232/69/539717695/176729/cf1ff3d8/57baa5d1N901ffea5.jpg"
            class="demo-checklist-img"
            style="height:60px;width:60px"
          >
          <yd-flexbox-item
            align="top"
            style="text-align:left;padding:0 0.2rem;"
          >
            <p>展卉 越南进口红心火龙果 3个装中果 单果约300~350g 新鲜水果</p>
            <yd-spinner
              max="75"
              unit="1"
              v-model="spinner1"
            ></yd-spinner>
          </yd-flexbox-item>
        </yd-flexbox>
      </yd-checklist-item>
    </yd-checklist>

    <yd-grids-group
      :rows="3"
      class="grids-group"
    >
      <yd-grids-item>
        <span slot="text" style="color:#09BB07;text-align:left;">
          共:999111元
         
        </span>
      </yd-grids-item>
      <yd-grids-item 	style="background:#e5e5e5;">
        <span slot="text">继续购物</span>
      </yd-grids-item>
      <yd-grids-item style="background:#09BB07;">
        <span
          slot="text"
          style="color:#fff;"
        >去结算</span>
      </yd-grids-item>
    </yd-grids-group>

  </div>
</template>
           
<script type="text/ecmascript-6">
import MNavbar from "com/m-navbar/m-navbar";
export default {
  data() {
    return {
      checklist4: [],
      spinner1: 0
    };
  },
  components: {
    MNavbar
  }
};
</script>
           
<style lang="stylus" scoped>
.checklist {
  margin: 1rem 0 0 0;
}

.grids-group {
  position: fixed;
  width: 100%;
  bottom: 1rem;
}
</style>

