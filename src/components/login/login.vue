<template>
  <div class="login">
    <header class="icon">
      <img
        src="static/favicon.png"
        alt=""
      >
      <h1 style="line-height:0.8rem;font-size:0.3rem;">移动商城账号登录</h1>
    </header>
    <section class="login-input">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">账号：</span>
          <yd-input
            slot="right"
            type="number"
            placeholder="请输入账号"
            regex="mobile"
            v-model="account"
            :show-success-icon="false"
          ></yd-input>
        </yd-cell-item>

        <yd-cell-item type="label">
          <span slot="left">密码：</span>
          <yd-input
            slot="right"
            type="password"
            v-model="password"
            placeholder="请输入密码"
            max="6"
            :show-success-icon="false"
          ></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <yd-button
        size="large"
        type="primary"
        @click.native="login"
      >登录</yd-button>
      <yd-button
        size="large"
        type="primary"
				@click.native="register"
      >注册</yd-button>
    </section>
  </div>
</template>
           
<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  data() {
    return {
      password: null,
      account: null
    };
  },
  methods: {
    login() {
      console.log(this.password, this.account);
      axios.post("http://192.168.43.42:3000/login", {
        account: this.account,
        password: this.password
      }).then((res)=>{
				console.log(res);
			});
		},
		register(){
			console.log(this.password, this.account);
      axios.post("http://192.168.43.42:3000/register", {
        account: this.account,
        password: this.password
      }).then((res)=>{
				console.log(res);
			});
		}
  }
};
</script>
           
<style lang="stylus" scoped>
.login {
  padding: 0 0.3rem;
  background: #fff;
  height: 100%;

  .icon {
    padding: 0.6rem 0 0.2rem;
  }
}
</style>