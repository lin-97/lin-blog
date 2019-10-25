<template>
  <div>
    <div class="article-wrapper">
      <article
        class="article-content"
        v-for="item in ArticleList"
        :key="item.id"
      >
        <div class="article-t">
          <img
            class="article-pic"
            width="800px"
            height="200px"
            :src="item.image_url"
          />
        </div>
        <div class="article-b">
          <h2 class="title">{{ item.title }}</h2>
          <p class="desc" v-if="item.abstract">{{ item.abstract }}</p>
          <p class="desc" v-else>暂时无可提供的摘要</p>
          <div class="line"></div>
          <div class="article-meta">
            <span class="m-r-sm">发表于{{ item.createdAt }}</span>
            <span class="m-r-sm">{{ item.views }}次围观</span>
            <span class="m-r-sm">{{ item.comments }}条评论</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      ArticleList: [
        {
          id: "001",
          title: "1111111",
          image_url: "http://image.kuakao.com/2015/1120/20151120034741248.jpg",
          abstract: "",
          createdAt: "2019-06-08",
          views: "50",
          comments: "10"
        },
        {
          id: "002",
          title: "2222222",
          image_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565776334019&di=53ec886bc5756ed6cb251d40fa268bb0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F17%2F20151017182423_VzY4R.jpeg",
          abstract: "有个美丽的地方",
          createdAt: "2019-07-10",
          views: "20",
          comments: "15"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.article-wrapper {
  font-size: 14px;
  color: #666;
  padding: 10px;
  height: 800px;
  .article-content {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    margin-bottom: 20px;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    .article-t {
      cursor: pointer;
      .article-pic {
        object-fit: cover;
        min-height: 250px;
        background-position: 50% 50%;
        background-size: cover;
        transition: all 0.5s;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    .article-b {
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 30px;
      .title {
        font-size: 18px;
        color: #666;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: orange;
        }
      }
      .desc {
        font-size: 14px;
        color: silver;
        line-height: 14px;
        margin: 10px 0;
      }
      .line {
        height: 1px;
        width: 100%;
        background-color: silver;
        margin: 15px 0;
      }
      .article-meta {
        color: #666;
        font-size: 10px;
        .m-r-sm {
          margin: 15px 0;
        }
      }
    }
  }
}
</style>
