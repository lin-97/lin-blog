<template>
  <section class="site-main">
    <div class="content">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </div>
    <SideInfo></SideInfo>
  </section>
</template>

<script>
import SideInfo from "./SideInfo/index";
export default {
  name: "SiteMain",
  components: { SideInfo }
};
</script>

<style lang="scss" scoped>
.site-main {
  position: relative;
  margin: 90px auto 30px;
  overflow: hidden;
  min-height: 100%;
  padding-bottom: 86px;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 970px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 768) {
    margin: 60px 0 0;
  }
  .content {
    box-sizing: border-box;
    padding: 0 10px;
    float: left;
    width: 70%;
    min-height: 100%;
    .fade-transform-leave-active,
    .fade-transform-enter-active {
      transition: all 0.5s;
    }
    .fade-transform-enter {
      opacity: 0;
      transform: translateX(-30px);
    }
    .fade-transform-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
    @media (max-width: 992px) {
      width: 100%;
      padding: 0 15px;
    }
    @media (max-width: 768px) {
      padding: 0;
    }
  }
}
</style>
