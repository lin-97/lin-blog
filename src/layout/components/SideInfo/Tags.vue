<template>
  <div class="tag-wrapper">
    <h1 class="title">小标签</h1>
    <div class="tag-group">
      <el-tag
        v-for="item in tagsList"
        :key="item.label"
        :type="item.type"
        effect="plain"
        class="tag"
        >{{ item.label }}</el-tag
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {
      tagsList: [
        { type: "", label: "vue" },
        { type: "success", label: "webpack" },
        { type: "info", label: "vue-cli" },
        { type: "danger", label: "element-UI" },
        { type: "warning", label: "前端Web" },
        { type: "success", label: "凌雨微尘" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.tag-wrapper {
  margin-top: 10px;
  padding: 20px;
  background-color: rgba(6, 6, 6, 0.7);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  .title {
    font-size: 18px;
    margin-bottom: 15px;
    color: cornsilk;
  }
  .tag {
    margin: 5px 5px 0 0;
  }
}
</style>
