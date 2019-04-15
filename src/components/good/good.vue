<template>
  <div class="good">
    <!-- 轮播 -->
    <yd-slider>
      <yd-slider-item
        v-for="(item,index) in good.good_pic"
        :key="index"
      >
        <a href="#">
          <!-- <img src="http://static.ydcss.com/uploads/ydui/1.jpg"> -->
          <img :src="item">
        </a>
      </yd-slider-item>
    </yd-slider>

    <!-- 商品信息 -->
    <section class="good-message">
      <h1 class="name">{{good.name}}</h1>
      <p class="description">{{good.description}}</p>
      <span class="price"> <span style="font-size:70%;">￥</span>{{good.price}}</span>
      <span
        v-if="good.w_price"
        class="original-price"
      >￥{{good.w_price}}</span>
    </section>

    <!-- 购买选项 -->
    <section class="good-option">
      <yd-cell-group title=" ">
        <yd-cell-item
          arrow
          @click.native="show2 = true"
        >
          <span slot="left">已选 <span style="margin-left:0.25rem;">{{good.name}} {{good.versions}} {{color}}</span> </span>
          <span slot="right"></span>
        </yd-cell-item>
        <yd-cell-item
          arrow
          @click.native="show1 = true"
        >
          <span slot="left">送至 </span>
          <input
            style="margin-left:0.3rem"
            slot="right"
            type="text"
            @click.stop="show1 = true"
            v-model="model1"
            readonly
            placeholder="请选择收货地址"
          >
        </yd-cell-item>
      </yd-cell-group>

      <!-- 弹窗 -->
      <yd-popup
        v-model="show2"
        position="bottom"
        height="70%"
      >
        <div class="popup-message">
          <div class="message-description">
            <img
              class="image"
              :src="mobile_pic"
              alt="手机图片"
            >
            <div class="description">
              <span style="font-size:0.4rem;color:#eb5211;line-height:0.6rem;"> <span style="font-size:0.28rem;">￥</span>{{good.price}}</span>
              <span style="font-size:0.3rem;text-decoration:line-through;">￥{{good.w_price}}</span>
              <h1 style="line-height:0.6rem;font-size: 0.3rem;">{{good.name}}</h1>
            </div>
          </div>
          <div class="message-option">
            <h3 class="title">规格</h3>
            <span
              class="option-item"
              style="border:1px solid #ff6700;"
            >{{good.versions}}</span>
          </div>
          <div class="message-option">
            <h3 class="title">颜色</h3>
            <span
              class="option-item"
              :style="color==item.type?'border: 1px solid #ff6700;':''"
              v-for="(item,index) in good.color"
              :key="index"
              @click.stop="selectColor(item)"
            >{{item.type}}</span>
          </div>
        </div>
        <p style="text-align: center; position:absolute;bottom:0;width:100%;padding:0 0.1rem 0.2rem ">
          <yd-button
            size="large"
            @click.native="addNumber"
          >加入购物车</yd-button>
        </p>
      </yd-popup>

      <!-- 地址选择 -->
      <yd-cityselect
        v-model="show1"
        :callback="result1"
        :items="district"
      ></yd-cityselect>
    </section>

    <!-- 商品详情图 -->
    <section
      class="good-details"
      style="width:100%;font-size:0;"
    >
      <img
        style="width:100%"
        v-for="(item,index) in good.detail_pic"
        :key="index"
        :src="item"
        alt=""
      >
    </section>
    <!-- 购买bar -->
    <div class="bottom-bar">
      <yd-tabbar style="width:2.2rem">
        <yd-tabbar-item
          title="首页"
          link="/"
          padding=".1rem"
        >
          <yd-icon
            name="home-outline"
            slot="icon"
            size="0.54rem"
          ></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item
          title="购物车"
          link="/cart"
        >
          <yd-icon
            name="shopcart-outline"
            slot="icon"
            size="0.54rem"
          ></yd-icon>
          <yd-badge
            slot="badge"
            type="danger"
            v-show="number>0"
          >{{number}}</yd-badge>
        </yd-tabbar-item>
      </yd-tabbar>
      <div style="width:3rem;margin-right:0.4rem;">
        <yd-button
          type="primary"
          shape="circle"
          size="large"
          @click.native="addNumber"
        >加入购物车</yd-button>
      </div>
    </div>
    <!-- 商品推荐 -->
    <section class="good-recommend">
      <h1 class="title">为你推荐</h1>
      <div class="goods">
        <div
          class="good-item"
          v-for="(item,index) in good.recommend"
          :key="index"
        >
          <img
            :src="item.image"
            alt=""
            style="width:3.2rem;height:3.2rem;border-radius:0.25rem"
          >
          <h2 style="font-size:0.4rem;">{{item.name}}</h2>
          <p style="font-size:0.4rem;color:#ff6700"><span style="font-size:0.3rem;">￥</span>{{item.price}}</p>
        </div>
      </div>
    </section>
  </div>
</template>
           
<script type="text/ecmascript-6">
import MNavbar from "com/m-navbar/m-navbar";
import District from "ydui-district/dist/gov_province_city_area_id";
import Store from "@/store/index";
import axios from "axios";
export default {
  data() {
    return {
      version: "", //手机版本
      color: "", //手机颜色
      mobile_pic: "", //手机图片地址
      number: 0, //商品数量
      show2: false,
      show1: false,
      model1: "",
      district: District,
      good: {} //商品
    };
  },
  created() {
    Store.commit("setShowBar");
    setTimeout(() => {
      axios
        .get("http://192.168.43.42:3000/good", {
          params: { ID: this.id }
        })
        .then(res => {
          this.good = res.data[0];
          this.mobile_pic = res.data[0].color[0].img;
          this.color = res.data[0].color[0].type;
          console.log(this.good);
        });
    }, 0);
  },
  components: {
    MNavbar
  },
  methods: {
    result1(ret) {
      this.model1 = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
    },
    addNumber() {
      if (this.number >= 2) {
        this.$dialog.alert({ mes: "超过最大购买数量" });
        return;
      }
      this.number++;
      this.$dialog.toast({
        mes: "成功加入购物车",
        timeout: 1500,
        icon: "success"
      });
      this.show2 = false;
      // console.log(this.number);
    },
    selectColor(color) {
      if (this.color == color.type) return;
      this.color = color.type;
      this.mobile_pic = color.img;
      console.log(color);
    }
  },
  computed: {
    id() {
      return Store.getters.getId;
    }
  },
  // activated() {
  //   Store.commit("setShowBar", false);
  //   this.good = { good_pic: [] };
  //   setTimeout(() => {
  //     axios
  //       .get("http://192.168.43.42:3000/good", {
  //         params: { ID: this.id }
  //       })
  //       .then(res => {
  //         this.good = res.data[0];
  //         console.log(this.good);
  //       });
  //   }, 0);
  // },
  beforeDestroy() {
    Store.commit("setShowBar", true);
    Store.commit("addGood", {
      id: this.good.good_id,
      name: this.good.name,
      number: this.number,
      versions: this.version,
      img: this.mobile_pic,
      color: this.color,
      price: this.good.price,
      select: true
    });
  },
  // deactivated() {
  //   console.log("我离开good了")
  //   Store.commit("setShowBar", true);
  //   Store.commit("addGood", {
  //     id: this.good.good_id,
  //     name: this.good.name,
  //     number: this.number,
  //     versions: this.version,
  //     img: this.mobile_pic,
  //     color: this.color,
  //     price: this.good.price,
  //     select: true
  //   });
  // }
};
</script>
           
<style lang="stylus" scoped>
.good {
  padding: 0 0 1.5rem 0;
  background: #fff;

  .good-message {
    padding: 0 0.2rem;
    text-align: left;
    background: #fff;

    .name {
      line-height: 1rem;
      font-size: 0.4rem;
    }

    .description {
      font-size: 0.3rem;
    }

    .price {
      font-size: 0.4rem;
      color: #eb5211;
    }

    .original-price {
      font-size: 0.3rem;
      text-decoration: line-through;
    }
  }

  .good-option {
    .popup-message {
      background-color: #fff;
      borde-radius: 1rem;
      padding: 0.2rem 0.4rem;
      text-align: left;

      .message-description {
        .image {
          width: 2rem;
          max-height: 2.5rem;
          display: inline-block;
          vertical-align: top;
        }

        .description {
          display: inline-block;
          vertical-align: top;
          margin: 0.2rem 0;
        }
      }

      .message-option {
        text-align: left;
        padding: 0.2rem 0;

        .title {
          font-size: 0.4rem;
          line-height: 1rem;
        }

        .option-item {
          min-width: 1.4rem;
          display: inline-block;
          height: 0.6rem;
          padding: 0 0.1rem;
          margin-right: 0.2rem;
          border: 1px solid #000;
          text-align: center;
          line-height: 0.6rem;
        }
      }
    }
  }

  .bottom-bar {
    padding: 0.08rem 0 0 0;
    background-color: #fff;
    width: 7.3rem;
    border: 1px solid #e5e5e5;
    border-radius: 0.16rem;
    overflow: hidden;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0.3rem;
    left: 0.1rem;
    z-index: 100;
  }

  .good-recommend {
    width: 100%;
    background: #fafafa;
    text-align: left;

    .title {
      font-size: 0.48rem;
      padding: 0.6rem 0.4rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .goods {
      display: flex;
      flex-wrap: wrap;

      .good-item {
        margin: 0.4rem 0 0 0.4rem;
        width: 3.2rem;
        heigt: 4.4rem;
      }
    }
  }
}

.yd-btn-block {
  margin-top: 0;
}
</style>