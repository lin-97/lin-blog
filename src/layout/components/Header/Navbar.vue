<template>
  <div class="navbar">
    <ul class="navbar-ul">
      <router-link
        :to="item.path"
        v-for="item in navList"
        :key="item.title"
        tag="li"
        class="navbar-li"
      >
        <i :class="item.icon"></i>
        {{ item.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navList: [
        {
          title: "首页",
          icon: "el-icon-s-home",
          path: "/home"
        },
        {
          title: "动态",
          icon: "el-icon-s-help",
          path: "/dynamic"
        },
        {
          title: "留言板",
          icon: "el-icon-s-order",
          path: "/message"
        },
        {
          title: "关于",
          icon: "el-icon-message-solid",
          path: "/about"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";
.navbar {
  position: relative;
  width: 55%;
  height: 100%;
  .navbar-ul {
    width: 100%;
    height: $header-height;
    line-height: $header-height;
    list-style: none;
    @media (max-width: 768px) {
      display: flex;
      height: 60px;
      line-height: 60px;
      justify-content: flex-start;
      .navbar-li {
        flex: 1;
        margin: 0 !important;
        padding: 0 !important;
      }
    }
    .navbar-li {
      color: #666;
      margin: 0 15px;
      padding: 0 3px;
      text-align: center;
      float: left;
      position: relative;
      cursor: pointer;
      &:hover {
        background-image: -webkit-linear-gradient(
          bottom,
          rgba(30, 144, 255, 1),
          rgba(255, 0, 255, 1)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        i {
          background-image: -webkit-linear-gradient(
            bottom,
            rgba(30, 144, 255, 1),
            rgba(255, 0, 255, 1)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>
