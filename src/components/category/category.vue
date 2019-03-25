<template>
  <div class="category">
    <m-navbar title="分类"></m-navbar>
    <yd-scrolltab
      :index="2"
      class="m-scrolltab"
    >
      <yd-scrolltab-panel
        label="空调"
        icon="demo-icons-category1"
      >
        <div style="height: 350px;background-color: gray;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel
        label="冰箱"
        icon="demo-icons-category2"
      >
        <div style="height: 350px;background-color: blue;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel
        label="洗衣机"
        icon="demo-icons-category3"
      >
        <div style="height: 350px;background-color: yellow;"></div>
      </yd-scrolltab-panel>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel
        label="冰箱"
        icon="demo-icons-category2"
      >
        <div style="height: 350px;background-color: blue;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel
        label="洗衣机"
        icon="demo-icons-category3"
      >
        <div style="height: 350px;background-color: yellow;"></div>
      </yd-scrolltab-panel>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel
        label="冰箱"
        icon="demo-icons-category2"
      >
        <div style="height: 350px;background-color: blue;"></div>
      </yd-scrolltab-panel>

      <yd-scrolltab-panel
        label="洗衣机"
        icon="demo-icons-category3"
      >
        <div style="height: 350px;background-color: yellow;"></div>
      </yd-scrolltab-panel>

      <!-- ... -->
    </yd-scrolltab>

  </div>
</template>
           
<script type="text/ecmascript-6">
import MNavbar from "com/m-navbar/m-navbar";
export default {
  components: {
    MNavbar
  }
};
</script>
           
<style lang="stylus" scoped>
.m-scrolltab {
  margin: 1rem 0 0 0;
}
</style>