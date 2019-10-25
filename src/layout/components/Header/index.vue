<template>
  <transition name="fade">
    <div class="header-wrapper" v-show="visible">
      <header class="header">
        <div class="logo">
          <div>
            <h2>凌雨微尘<sub>Blog</sub></h2>
          </div>
        </div>
        <Navbar></Navbar>
        <Search></Search>
        <User></User>
      </header>
    </div>
  </transition>
</template>

<script>
import Navbar from "./Navbar";
import Search from "./Search";
import User from "./User";
const OFFSET_HEIGHT = 50;
export default {
  name: "Header",
  components: { Navbar, Search, User },
  data() {
    return {
      visible: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      this.visible = offsetTop < OFFSET_HEIGHT;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 300;
  height: $header-height;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  @media (max-width: 768px) {
    height: 60px;
  }
  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.3s;
  }
  &.fade-enter,
  &.fade-leave-to {
    transform: translateY(-75px);
    opacity: 0;
  }
  .header {
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) {
      width: 768px;
    }
    @media (min-width: 970px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }
    .logo {
      flex: 1;
      padding-left: 10px;
      cursor: pointer;
      @media (max-width: 768px) {
        flex: 0 0 auto;
      }
      h2 {
        display: block;
        font-size: 24px;
        color: #666;
        transition: all 0.3s;
        background-image: -webkit-linear-gradient(
          bottom,
          rgba(30, 144, 255, 1),
          rgba(255, 0, 255, 1)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        sub {
          -webkit-line-clamp: 2;
          background-image: -webkit-linear-gradient(
            bottom,
            rgba(30, 144, 255, 1),
            rgba(255, 0, 255, 1)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        sub {
          transition: all 0.3s;
          position: relative;
          top: -1.1em;
          color: #909399;
          font-size: 16px;
        }
        @media (max-width: 768px) {
          font-size: 20px;
          sub {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
