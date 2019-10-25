<template>
  <aside class="sidebar">
    <div class="avatar-user">
      <div class="avatar-bg"></div>
      <a class="avatar-a">
        <img src="../../../assets/avatar.png" alt="凌雨微尘" class="avatar" />
        <p class="text-name">凌雨微尘</p>
        <p class="text-desc">风会带走你曾经存在过的证明</p>
      </a>
    </div>
    <Weather />
    <Flow></Flow>
    <Tags></Tags>
  </aside>
</template>

<script>
import Weather from "./Weather";
import Tags from "./Tags";
import Flow from "./FlowCard";

export default {
  name: "SideInfo",
  components: {
    Weather,
    Tags,
    Flow
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  float: right;
  box-sizing: border-box;
  padding: 0 15px 15px;
  width: 30%;
  @media (max-width: 992px) {
    display: none;
  }
  .avatar-user {
    position: relative;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #dee5e7;
    box-sizing: border-box;
    border-radius: 3px;
    height: 240px;
    background-color: rgba(255, 255, 255, 0.8);
    .avatar-bg {
      background: url("../../../assets/avatar_bg4.gif") no-repeat center center;
      background-size: cover;
      height: 50%;
    }
    .avatar-a {
      display: block;
      width: 220px;
      margin: 0 auto;
      text-align: center;
      margin-top: -45px;
      color: #666;
      .avatar {
        width: 90px;
        height: 90px;
        border: rgba(255, 255, 255, 0.4) 4px solid;
        box-sizing: border-box;
        border-radius: 50%;
        animation: rotate linear 5s infinite;
      }
      .text-name {
        font-size: 14px;
        font-weight: 600;
        margin: 5px auto;
      }
      .text-desc {
        font-size: 12px;
      }
    }
  }
}
@keyframes rotate {
  // from {
  // 	transform: rotate(0deg);
  // }
  // to {
  // 	transform: rotate(360deg);
  // }
  0% {
    transform: rotate(30deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-30deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(30deg);
  }
}
</style>
