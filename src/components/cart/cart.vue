<template>
  <div class="cart">
    <m-navbar title="购物车"></m-navbar>
    <!-- 购物车商品 -->
    <section class="good">
      <div
        class="good-item"
        v-for="(item,index) in good"
        :key="index"
      >
        <div
          class="pitch"
          @click="pitch(index)"
          ref="pitch"
          style="background-image:url(static/check.png);"
        ></div>
        <img
          :src="item.img"
          alt=""
          style="width:1.8rem;height:1.8rem;margin-left:0.1rem;"
        >
        <div class="good-message">
          <p style="font-size: 0.4rem;color: #666;line-height:0.35rem;margin-top:0.15rem;">{{item.name}}{{item.color}}{{item.versions}}</p>
          <p style="font-size: 0.3rem;color: #999;margin-top:0.1rem;">售价:{{item.price}}元</p>
          <div class="car-function">
            <div class="add-minus">
              <span
                class="minus"
                @click="minus(item)"
              ></span>
              <span class="number">{{item.number}}</span>
              <span
                class="add"
                @click="add(item)"
              ></span>
            </div>
            <div class="delect" @click="delectGood(index)"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 购物车功能条 -->
    <div class="car-bar">
      <div class="prices">
        <p>共{{allNumber}}件,金额</p>
        <p><span style="font-size:0.36rem;color:#09bb07;">{{allPrice}}</span>元</p>
      </div>
      <router-link
        tag="div"
        class="shopping"
        to="/category"
      >
        继续购物
      </router-link>
      <div class="to-pay">去结算</div>
    </div>
  </div>
</template>
           
<script type="text/ecmascript-6">
import MNavbar from "com/m-navbar/m-navbar";
import Store from "@/store/index";
export default {
  data() {
    return {
      good: []
    };
  },
  created() {
    this.good = Store.getters.getGood;
    console.log(this.good);
  },
  methods: {
    add(good) {
      //增加数量
      if (good.number > 5) return;
      good.number++;
      console.log(good);
    },
    minus(good) {
      //减少数量
      if (good.number < 1) return;
      good.number--;
    },
    pitch(index) {
      //选中商品
      if (this.good[index].select == true) {
        this.good[index].select = false;
        console.log(this.good[index].select);
        this.$refs.pitch[index].style.backgroundImage =
          "url('static/circle.png')"; //未选中图片
      } else {
        this.good[index].select = true;
        console.log(this.good[index].select);
        this.$refs.pitch[index].style.backgroundImage =
          "url('static/check.png')"; //选中图片
      }
    },
    delectGood(index){
      this.good.splice(index,1);
    }
  },
  components: {
    MNavbar
  },
  computed: {
    allNumber() {
      //全部数量
      let allNumber = 0;
      for (let i = 0; i < this.good.length; i++) {
        if (this.good[i].select == true) allNumber += this.good[i].number;
      }
      return allNumber;
    },
    allPrice() {
      //总价
      let allPrice = 0;
      for (let i = 0; i < this.good.length; i++) {
        if (this.good[i].select == true)
          allPrice += this.good[i].number * this.good[i].price;
      }
      return allPrice;
    }
  },
  beforeDestroy(){
    console.log("我走了")
  }
};
</script>
           
<style lang="stylus" scoped>
.cart {
  padding: 1rem 0;

  .good {
    padding-bottom: 0.24rem;

    .good-item {
      background: #fff;
      padding: 0.2rem;
      display: flex;
      width: 7.5rem;
      margin-bottom: 0.2rem;

      .pitch {
        height: 1.8rem;
        width: 0.6rem;
        padding: 0 0.2rem;
        background: url('./circle.png') 50% 50% no-repeat; // s1.mi.com/m/images/m/check_press.png) 50% 50% no-repeat;
        background-size: 0.4rem 0.4rem;
      }

      .good-message {
        text-align: left;
        padding-left: 0.2rem;

        .car-function {
          display: flex;
          justify-content: space-between;
          width: 4.6rem;

          .add-minus {
            font-size: 0;
            display: flex;

            .add {
              height: 0.6rem;
              width: 0.6rem;
              background: #f3f3f3 url('./add.png') no-repeat center;
              background-size: 0.3rem 0.3rem;
            }

            .number {
              font-size: 0.3rem;
              text-align: center;
              line-height: 0.6rem;
              height: 0.6rem;
              width: 0.6rem;
              border: 1px solid #f3f3f3;
              background: #fff;
              color: #000;
            }

            .minus {
              height: 0.6rem;
              width: 0.6rem;
              background: #f3f3f3 url('./minus.png') no-repeat center;
              background-size: 0.3rem 0.3rem;
            }
          }

          .delect {
            height: 0.6rem;
            width: 0.6rem;
            background: #fff url('./delect.png') no-repeat center;
            background-size: 0.4rem 0.4rem;
          }
        }
      }
    }
  }

  .car-bar {
    position: fixed;
    bottom: 1rem;
    width: 7.5rem;
    height: 1rem;
    display: flex;
    font-size: 0.3rem;

    .prices {
      padding-top: 0.1rem;
      height: 1rem;
      width: 2.5rem;
      background: #fff;
    }

    .shopping {
      height: 1rem;
      width: 2.5rem;
      background: #f4f4f4;
      line-height: 1rem;
    }

    .to-pay {
      height: 1rem;
      width: 2.5rem;
      background: #09bb07;
      line-height: 1rem;
      color: #fff;
    }
  }
}
</style>

