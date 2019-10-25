<template>
  <div class="flowcard">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in ImgsList" :key="item.id">
        <img :src="item.img_url" alt="" class="imgs" />
        <h3 class="small">{{ item.id }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "FlowCard",
  data() {
    return {
      ImgsList: [
        {
          id: "02",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562668035478&di=ebc8fb0d34fadb94c398de5cafd01287&imgtype=0&src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F148%2F103453%2F7fb4711a91eb3574.jpg"
        },
        {
          id: "03",
          img_url: "http://pic1.win4000.com/wallpaper/0/5987c6b671d57.jpg"
        },
        {
          id: "04",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562668099869&di=c70674c1ffb740b80bc2fdfc1a6c396a&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201408%2F06%2F123309bddwlhp08phjfjzd.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.flowcard {
  margin-top: 10px;
  border-radius: 3px;
  overflow: hidden;
  .imgs {
    width: 100%;
  }
  .el-carousel-item {
    h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
  }
}
</style>
