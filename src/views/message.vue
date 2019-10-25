<template>
  <div>
    <div class="message-box">
      <ul>
        <li>
          <div class="pic_show"><img src="../assets/avatar.png" /></div>
          <div class="info_list">
            <h2>大侠客</h2>
            <p>发表时间 <span class="grade">2019-8-10 16:22</span></p>
            <p>
              日子总是像从指尖渡过的细纱，在不经意间悄然滑落。那些往日的忧愁和误用伤，在似水流年的荡涤下随波轻轻地逝去，而留下的欢乐和笑靥就在记忆深处历久弥新
            </p>
          </div>
          <div class="btn_mall">
            点赞
          </div>
        </li>
        <li>
          <div class="pic_show"><img src="../assets/avatar.png" /></div>
          <div class="info_list">
            <h2>大侠客</h2>
            <p>发表时间 <span class="grade">2019-8-10 16:22</span></p>
            <p>
              日子总是像从指尖渡过的细纱，在不经意间悄然滑落。那些往日的忧愁和误用伤，在似水流年的荡涤下随波轻轻地逝去，而留下的欢乐和笑靥就在记忆深处历久弥新
            </p>
          </div>
          <div class="btn_mall">
            点赞
          </div>
        </li>
        <li>
          <div class="pic_show"><img src="../assets/avatar.png" /></div>
          <div class="info_list">
            <h2>大侠客</h2>
            <p>发表时间 <span class="grade">2019-8-10 16:22</span></p>
            <p>
              日子总是像从指尖渡过的细纱，在不经意间悄然滑落。那些往日的忧愁和误用伤，在似水流年的荡涤下随波轻轻地逝去，而留下的欢乐和笑靥就在记忆深处历久弥新
            </p>
          </div>
          <div class="btn_mall">
            点赞
          </div>
        </li>
        <li>
          <div class="pic_show"><img src="../assets/avatar.png" /></div>
          <div class="info_list">
            <h2>小怪兽.嗷</h2>
            <p>发表时间 <span class="grade">2019-6-10 09:15</span></p>
            <p>
              生活的海洋并不像碧波涟漪的西子湖，随着时间的流动，它时而平静如镜，时而浪花飞溅，时而巨浪冲天……人们在经受大风大浪的考验之后，往往会变得更加坚强
            </p>
          </div>
          <div class="btn_mall">
            点赞
          </div>
        </li>
        <li>
          <div class="pic_show"><img src="../assets/avatar.png" /></div>
          <div class="info_list">
            <h2>小怪兽.嗷</h2>
            <p>发表时间 <span class="grade">2019-6-10 09:15</span></p>
            <p>
              生活的海洋并不像碧波涟漪的西子湖，随着时间的流动，它时而平静如镜，时而浪花飞溅，时而巨浪冲天……人们在经受大风大浪的考验之后，往往会变得更加坚强
            </p>
          </div>
          <div class="btn_mall">
            点赞
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message"
};
</script>

<style lang="scss" scoped>
.message-box {
  flex: 1;
  ul {
    margin: 0 12px;
    li {
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-bottom: 1px #e6e6e6 solid;
      padding-bottom: 10px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      padding: 0 20px;
      background-color: rgba(255, 255, 255, 0.9);
      .pic_show {
        width: 60px;
        height: 60px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .info_list {
        margin-left: 10px;
        flex: 1;
        position: relative;
        h2 {
          font-size: 17px;
          line-height: 24px;
          width: 150px;
          white-space: nowrap;
        }
        p {
          font-size: 13px;
          color: #666;
          line-height: 22px;
          width: 100%;
          white-space: wrap;
        }
        .grade {
          font-weight: 700;
          color: #b300fa;
          font-size: 15px;
        }
        img {
          width: 50px;
          position: absolute;
          right: 10px;
          top: 5px;
        }
      }
      .btn_mall {
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background-color: #f03d37;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
}
</style>
