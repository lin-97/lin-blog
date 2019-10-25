<template>
  <div id="app">
    <!-- <div class="bg"><img src="/bg01.jpg" alt="" /></div> -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -999;
  img {
    width: 100%;
    height: 100vh;
  }
}
</style>
