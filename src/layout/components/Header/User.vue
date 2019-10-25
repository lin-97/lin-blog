<template>
  <div class="site-user">
    <div class="not-login">
      <span class="login">登录</span>
      <span class="register">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.site-user {
  display: flex;
  height: 80px;
  color: white;
  margin-right: 0;
  @media (max-width: 1200px) {
    display: none;
  }
  .not-login {
    margin: auto;
    position: relative;
    .login,
    .register {
      background-color: #67c23a;
      border-radius: 5px;
      cursor: pointer;
      padding: 7px 12px;
      font-size: 14px;
    }
    .register {
      margin-left: 5px;
      background-color: #409eff;
    }
  }
}
</style>
