<template>
  <div class="home">
    <!-- 头部搜索 -->
    <header class="home-header">
      <yd-search
        v-model="value1"
        :on-submit="submitHandler"
        fullpage
        placeholder="搜索商品名称"
      ></yd-search>
      <div class="home-icon"></div>
      <router-link
        tag="div"
        to="/user"
      >
        <div class="user-icon"></div>
      </router-link>
    </header>

    <yd-scrollnav
      height="0.8rem"
      toggle-text="商品"
    >
      <yd-slider autoplay="3000">
        <yd-slider-item>
          <a href="http://192.168.43.42:3000/img/1.jpg">
            <!-- <img src="http://static.ydcss.com/uploads/ydui/1.jpg"> -->
            <img src="http://192.168.43.42:3000/img/1.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://192.168.43.42:3000/img/2.jpg">
            <!-- <img src="http://static.ydcss.com/uploads/ydui/2.jpg"> -->
            <img src="http://192.168.43.42:3000/img/2.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://192.168.43.42:3000/img/3.jpg">
            <!-- <img src="http://static.ydcss.com/uploads/ydui/3.jpg"> -->
            <img src="http://192.168.43.42:3000/img/3.jpg">
          </a>
        </yd-slider-item>
      </yd-slider>

      <yd-scrollnav-panel
        :label="item.title"
        v-for="(item, key) in list"
        :key="key"
      >

        <!-- 内容 -->
        <h1 style="height:0.8rem;line-height:0.8rem;font-size:0.4rem;">{{item.title}}</h1>
        <yd-list :theme="2">
          <router-link
            to="/good"
            tag="div"
            v-for="(item,index) in item.good"
            :key="index"
            @click.native=selectGood(item.good_id)
          >
            <yd-list-item>
              <img
                slot="img"
                :src='item.image'
              >
              <span slot="title">{{item.name}}</span>
              <yd-list-other slot="other">
                <div>
                  <span class="list-price"><em>¥</em>{{item.price}}</span>
                  <span
                    v-if="item.w_price"
                    class="list-del-price"
                  >¥{{item.w_price}}</span>
                </div>
                <!-- <router-link
                to="/good"
                tag="div"
              >
                <div style="height:0.5rem;width:0.8rem;color:red;border:1px solid red;line-height:0.5rem">购买</div>
              </router-link> -->
              </yd-list-other>
            </yd-list-item>
          </router-link>
        </yd-list>
        <yd-backtop class="backtop"></yd-backtop>
        <!-- 内容 -->
      </yd-scrollnav-panel>
    </yd-scrollnav>

  </div>

</template>

<script type="text/ecmascript-6">
import axios from "axios";
import Store from "@/store/index";
export default {
  data() {
    return {
      list: [],
      value1: ""
    };
  },
  components: {},
  created() {
    axios.get("http://192.168.43.42:3000/home").then(res => {
      this.list = res.data[0].list;
      // console.log(res.data[0].list);
    });
  },
  methods: {
    submitHandler(value) {
      this.$dialog.toast({ mes: `搜索：${value}` });
    },
    selectGood(id) {
      // console.log(id);
      Store.commit("setId", id);
    }
  }
};
</script>
           
<style lang="stylus" >
.home {
  .home-header {
    padding: 0 40px;
    height: 50px;
    width: 100%;
    position: fixed;
    z-index: 1000;
    background: #efeff4;

    .home-icon {
      background: url('./favicon.png') no-repeat center;
      background-size: 20px 20px;
      height: 50px;
      width: 50px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .user-icon {
      background: url('./user.png') no-repeat center;
      background-size: 25px 25px;
      height: 50px;
      width: 1rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}

.yd-backtop {
  z-index: 100 !important;
}

.list-price {
  font-size: 0.3rem;
  color: #eb5211;

  em {
    font-size: 0.2rem;
  }
}

.list-del-price {
  padding-left: 0.06rem;
  font-size: 0.2rem;
  margin-left: 0.02rem;
  position: relative;
  color: #8c8c8c;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    border-top: 1px solid #8c8c8c;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    top: auto;
    bottom: 50%;
  }
}

.yd-scrollnav-content {
  margin-top: 50px;
}

.yd-scrollnav-tab {
  top: 50px;
}
</style>
