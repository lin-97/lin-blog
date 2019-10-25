<template>
  <div class="weather">
    <MARQUEE
      height="30"
      onmouseover="this.stop()"
      onmouseout="this.start()"
      scrolldelay="50"
      direction="left"
      scrollamount="5"
    >
      {{ nowTime }}&nbsp;&nbsp;&nbsp; <i class="el-icon-location"></i>地点：{{
        location
      }}&nbsp;&nbsp;&nbsp; <i class="el-icon-cloudy-and-sunny"></i>天气：{{
        weather
      }}&nbsp;&nbsp;&nbsp; 温度：{{ temperature }}℃
    </MARQUEE>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      nowTime: "",
      location: "",
      timer: "",
      weather: "",
      temperature: ""
    };
  },
  mounted() {
    this.getNowTime();
    this.getLocation();
    this.getWeather();
  },
  methods: {
    getNowTime() {
      var date = new Date();
      var ymd =
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日";
      var w = date.getDay();
      var week = "星期" + "日一二三四五六".split("")[w];
      this.nowTime = ymd + " " + week;
      window.console.log(this.nowTime);
    },
    getLocation() {
      this.axios.get("/api/getLocation").then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          this.location = res.data.data.nm;
        }
      });
    },
    getWeather() {
      this.axios
        .get(
          "http://service.envicloud.cn:8082/v2/weatherlive/BG9SBGLWB3BZY2MXNTQ3OTG1MJY3NJA5/101280101"
        )
        .then(res => {
          if (res.status == 200) {
            this.weather = res.data.phenomena;
            this.temperature = res.data.temperature;
            window.console.log(this.weather);
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.weather {
  margin-top: 10px;
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.8);
  marquee {
    line-height: 30px;
    font-size: 14px;
  }
}
</style>
