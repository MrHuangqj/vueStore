<template>
  <div class="category">
    <m-navbar title="分类"></m-navbar>
    <yd-scrolltab
      :index="0"
      class="m-scrolltab"
    >
      <yd-scrolltab-panel
        v-for="(item,index) in list"
        :key="index"
        :label=item.title
        class="category-item"
      >
        <div class="good">
          <img style="margin-bottom:.9rem;width:5.5rem;margin:0 auto;height:2rem" src="http://192.168.43.42:3000/img/kongtiao.webp" alt="">
          <div
            v-for="(item,index) in item.good"
            :key="index"
            class="good-item"
          >
            <img
              :src=item.image
              alt=""
            >
            <p style="">{{item.name}}</p>
          </div>
        </div>
        <div class="good">
          <img style="margin-bottom:1rem;width:5.5rem;margin:0 auto;height:2rem" src="http://192.168.43.42:3000/img/kongtiao.webp" alt="">
          <div
            v-for="(item,index) in item.good"
            :key="index"
            class="good-item"
          >
            <img
              :src=item.image
              alt=""
            >
            <p style="">{{item.name}}</p>
          </div>
        </div>
        <!-- <div style="height: 350px;background-color: gray;"></div> -->
      </yd-scrolltab-panel>
      <!-- ... -->
    </yd-scrolltab>

  </div>
</template>
           
<script type="text/ecmascript-6">
import MNavbar from "com/m-navbar/m-navbar";
import axios from "axios";
export default {
  data() {
    return {
      category: [],
      goods: [],
      list: {}
    };
  },
  components: {
    MNavbar
  },
  created() {
    this.category = ["手机", "电视", "电脑", "家电", "路由"];
    this.goods = [
      {
        url: "http://192.168.43.42:3000/img/shouji/xiaomi9.jpg",
        name: "小米9"
      },
      {
        url: "http://192.168.43.42:3000/img/shouji/xiaomi9.png",
        name: "小米9"
      },
      {
        url: "http://192.168.43.42:3000/img/shouji/xiaomi9.png",
        name: "小米9"
      },
      {
        url: "http://192.168.43.42:3000/img/shouji/xiaomi9.png",
        name: "小米9"
      },
      {
        url: "http://192.168.43.42:3000/img/shouji/xiaomi9.png",
        name: "小米9"
      },
      {
        url: "http://192.168.43.42:3000/img/shouji/xiaomi9.png",
        name: "小米9"
      },
      {
        url: "http://192.168.43.42:3000/img/shouji/xiaomi9.png",
        name: "小米9"
      },
      { url: "http://192.168.43.42:3000/img/shouji/xiaomi9.png", name: "小米9" }
    ];
    axios.get("http://192.168.43.42:3000/category").then(res => {
      this.list = res.data[0].list;
      console.log(this.list);
    });
  }
};
</script>
           
<style lang="stylus" >
.m-scrolltab {
  margin: 1rem 0 0 0;
}

.category {
  .category-item {
    .good {
      padding: 0.1rem 0;
      // background-color: yellow;
      display: flex;
      // justify-content: space-around;
      flex-wrap: wrap;

      .good-item {
        margin: 0.15rem 0.08rem;
        width: 30%;
        height: 1.6rem;

        img {
          width: 1.04rem;
          margin: 0 auto;
          padding-bottom: 0.2rem;
        }

        p {
          line-height: 0.27rem;
        }
      }
    }
  }
}

.yd-scrolltab-content {
  padding: 0 0.24rem 1.1rem 0.24rem!important;
}
</style>