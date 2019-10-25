<template>
  <div>
    <div class="music-nav" :class="{ move: flag }">
      <div class="music-nav-con">
        <!-- 歌手图片 -->
        <div class="songer">
          <img src="../assets/avatar.jpeg" />
        </div>
        <!-- 播放和时长start -->
        <div class="play-info">
          <el-popover placement="top-start" trigger="hover">
            <div style="text-align: center">
              <el-progress
                color="#67C23A"
                type="circle"
                :percentage="music.volume"
              ></el-progress
              ><br />
              <el-button
                @click="changeVolume(-10)"
                icon="el-icon-minus"
                circle
              ></el-button>
              <el-button
                @click="changeVolume(10)"
                icon="el-icon-plus"
                circle
              ></el-button>
            </div>
            <el-button
              @click="play"
              id="play"
              slot="reference"
              :icon="music.isPlay ? 'el-icon-refresh' : 'el-icon-caret-right'"
              circle
            ></el-button>
          </el-popover>

          <el-row>
            <el-col :span="14" style="padding-left: 20px">
              <el-slider
                @change="changeTime"
                :format-tooltip="formatTime"
                :max="music.maxTime"
                v-model="music.currentTime"
                style="width: 100%;"
              ></el-slider>
            </el-col>
            <el-col
              :span="10"
              style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px"
            >
              {{ formatTime(music.currentTime) }}/{{
                formatTime(music.maxTime)
              }}
            </el-col>
          </el-row>
          <audio ref="music" loop autoplay>
            <source
              src="http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
        <!-- 播放和时长end -->
      </div>
      <el-button
        type="success"
        :icon="flag ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'"
        class="music-nav-btn"
        @click="flag = !flag"
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      flag: false,
      music: {
        isPlay: true, //是否播放
        currentTime: 0, //当前时间
        maxTime: 0, //最大时间
        volume: 100, //音量
        name: "房东的猫 - 云烟成雨.mp3"
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.listenMusic, 1000);
    });
  },
  methods: {
    listenMusic() {
      if (!this.$refs.music) {
        return;
      }
      if (this.$refs.music.readyState) {
        this.music.maxTime = this.$refs.music.duration;
      }
      this.music.isPlay = !this.$refs.music.paused;
      this.music.currentTime = this.$refs.music.currentTime;
    },
    play() {
      if (this.$refs.music.paused) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
      this.music.isPlay = !this.$refs.music.paused;
      this.$nextTick(() => {
        document.getElementById("play").blur();
      });
    },
    changeTime(time) {
      this.$refs.music.currentTime = time;
    },
    changeVolume(v) {
      this.music.volume += v;
      if (this.music.volume > 100) {
        this.music.volume = 100;
      }
      if (this.music.volume < 0) {
        this.music.volume = 0;
      }
      this.$refs.music.volume = this.music.volume / 100;
    },
    formatTime(time) {
      let it = parseInt(time);
      let m = parseInt(it / 60);
      let s = parseInt(it % 60);
      return (
        (m < 10 ? "0" : "") +
        parseInt(it / 60) +
        ":" +
        (s < 10 ? "0" : "") +
        parseInt(it % 60)
      );
    }
  }
};
</script>

<style lang="scss">
.music {
  &-nav {
    position: fixed;
    bottom: 12%;
    width: 330px;
    left: -300px;
    z-index: 2;
    display: flex;
    transition: left 1s ease-out;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    &-btn {
      width: 30px;
      height: 100px;
      box-sizing: border-box;
    }
    &-con {
      width: 300px;
      height: 100px;
      background-color: #fff;
      border: 1px solid #eee;
      box-sizing: border-box;
      display: flex;
      .songer {
        width: 100px;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        img {
          width: 100%;
          border-radius: 50%;
          border: 3px solid #ccc;
          box-sizing: border-box;
          animation: rotate linear 5s infinite;
        }
      }
      .play-info {
        padding: 15px 0;
        flex: 1;
        box-sizing: border-box;
      }
    }
    .el-button {
      border-radius: 0;
      padding: 0;
    }
  }
}
.move {
  position: fixed;
  left: 0px;
  transition: left 0.5s ease-out;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
