<template>
  <div class="m-navbar">
    <yd-navbar
      :title=title
      bgcolor="#f5f5f5"
      fixed
      class="navbar"
    >
      <router-link
        to="#"
        slot="left"
      >
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <router-link
        to="#"
        slot="right"
      >
        <yd-icon
          name="search"
          size=".45rem"
          color="rgb(92, 92, 92)"
        ></yd-icon>
      </router-link>
    </yd-navbar>
  </div>
</template>
           
<script type="text/ecmascript-6">
export default {
  props: {
    title: String
  }
};
</script>
           
<style lang="stylus" scoped>
.navbar {
  padding: 0 0.15rem;
}
</style>