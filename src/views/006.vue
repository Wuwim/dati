<template>
  <div class="content">
    <div class="biaotilan">
      <img
        @click="goBack()"
        class="goback"
        src="../assets/img/goback.png"
        alt=""
      />
      <span class="biaoti-w1">建工课题答题系统</span>
    </div>
    <div class="set-bg">
      <div class="block1">
        <img class="house" src="../assets/img/house.png" alt="" />
        <img class="cloud" src="../assets/img/cloud.png" alt="" />
        <img class="cloud1" src="../assets/img/cloud.png" alt="" />
      </div>
      <img class="dd" src="../assets/img/dd.png" alt="" />
      <div class="block3">
        <div class="w1-box">
          <span class="w1">恭喜完成</span>
        </div>
        <span class="w2 zq1">正确答题 4题</span>

        <span class="w2 cw1">错误答题 1题</span>

        <div class="ljys-box">
          <div class="gang1"></div>
          <div class="ljys">
            <span>累计用时</span>
          </div>
          <div class="gang2"></div>
        </div>
        <div class="times-box">
          <div class="timebg1">
            <div class="timebg">
              <div class="timebg2">
                <div class="shi-box">
                  <div class="shi">
                    <span class="sj">{{ hour }}</span>
                  </div>
                  <div class="shi"></div>
                  <span class="sj1">时</span>
                </div>
                <div class="fen-box">
                  <div class="shi">
                    <span class="sj">{{ min }}</span>
                  </div>
                  <div class="shi"></div>
                  <span class="sj1">分</span>
                </div>
                <div class="miao-box">
                  <div class="shi">
                    <span class="sj">{{ second }}</span>
                  </div>
                  <div class="shi"></div>
                  <span class="sj1">秒</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block4">
          <button class="dati" @click="goNext()">结束</button>
        </div>
        <div style="height: 20px">
          <img class="firecracker" src="../assets/img/firecracker.png" alt="" />
        </div>
        <div style="height: 20px">
          <img class="fireworks" src="../assets/img/fireworks.png" alt="" />
        </div>
        <div style="height: 1px">
          <img class="fireworks1" src="../assets/img/fireworks.png" alt="" />
        </div>
        <div style="height: 1px">
          <img class="fireworks2" src="../assets/img/fireworks.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/js/cloud";
export default {
  data() {
    return {
      time: 0,
      second: "00",
      min: "00",
      hour: "00",
    };
  },
  created() {
    this.getParams();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goNext() {
      this.$router.push({
        path: "007",
      });
    },
    getParams() {
      var routerParams = this.$route.query.time;
      this.time = routerParams;
      console.log(this.time);
      if (this.time > 60) {
        this.second = parseInt(this.time) % 60;
        this.min = parseInt(this.time / 60);
        if (this.second < 10) {
          this.second = String("0" + this.second);
          console.log(this.second);
        }
        if (this.min < 10) {
          this.min = String("0" + this.min);
          console.log(this.min);
        }
        if (this.min > 60) {
          this.min = parseInt(this.time / 60) % 60;
          this.hour = parseInt(parseInt(this.time / 60) / 60);
          console.log(this.min);
          console.log(this.hour);
        }
      } else {
        this.second = parseInt(this.time);
        if (this.second < 10) {
          this.second = String("0" + this.second);
          console.log(this.second);
        }
      }
    },
  },
  mounted() {},
};
$(function () {
  $(".times-box").click(function () {
    $(".firecracker").fadeIn("show", function () {
      $(".firecracker").fadeOut("slow", function () {
        $(".firecracker").fadeIn("show", function () {
          $(".firecracker").fadeOut("slow", function () {
            $(".fireworks").show("slow", function () {
              $(".fireworks").animate({ top: "-320px" }, "slow", function () {
                $(".fireworks").animate(
                  { height: "200px", width: "280px" },
                  function () {
                    $(".fireworks").fadeOut("slow", function () {
                      $(".fireworks").fadeIn("show", function () {
                        $(".fireworks").fadeOut("slow", function () {
                          $(".fireworks").css({
                            top: "-80px",
                            height: "25px",
                            width: "30px",
                          });
                          $(".fireworks1").fadeIn("show", function () {
                            $(".fireworks2").fadeIn("show");
                            $(".fireworks1").fadeOut("slow", function () {
                              $(".fireworks2").fadeOut("show");
                              $(".fireworks1").fadeIn("show", function () {
                                $(".fireworks2").fadeIn("show");
                                $(".fireworks1").fadeOut("slow", function () {
                                  $(".fireworks2").fadeOut("show");
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  }
                );
              });
            });
          });
        });
      });
    });
  });
});
</script>

<style scoped>
@import "../assets/css/common.css";
.set-bg {
  width: 100%;
  height: 100%;
  background: url(~@/assets/img/bg2.jpg);
  background-size: cover;
}
.dd {
  width: 185px;
  height: 42px;
  position: relative;
  top: -25px;
  z-index: 6;
}
.block3 {
  top: -50px;
  margin: 0 29px 95px 29px;
}
.w1-box {
  padding-top: 50px;
}

.w1 {
  font-size: 30px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 6px 7px 23px rgba(43, 16, 161, 0.65);
}
.w2 {
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
}
.zq1 {
  margin-top: 28px;
}
.cw1 {
  margin-top: 16px;
}
.ljys-box {
  margin: auto;
  margin-top: 53px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.gang1 {
  width: 28px;
  height: 1px;
  background: #8b83ee;
}

.gang2 {
  margin-left: 5px;
  width: 28px;
  height: 1px;
  background: #8b83ee;
}

.ljys {
  margin-left: 5px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
  line-height: 15px;
  opacity: 0.93;
}

.times-box {
  margin-top: 13px;
  margin-left: 55px;
  width: 203px;
  height: 57px;
}

.timebg1 {
  width: 203px;
  height: 57px;
  background: #3751cb;
  box-shadow: 0px 3px 5px 0px rgba(36, 28, 198, 0.52);
  border-radius: 4px;
}

.timebg {
  padding-top: 7px;
}

.timebg2 {
  margin: auto;
  width: 185px;
  height: 45px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shi-box {
  padding-left: 13px;
  width: 57px;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.fen-box {
  width: 57px;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.miao-box {
  width: 57px;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shi {
  margin-left: 2px;
  width: 19px;
  height: 27px;
  background: #373636;
  border-radius: 1px;
}

.sj {
  position: relative;
  bottom: 3px;
  z-index: 100;
  margin-left: 4px;
  font-size: 19px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 27px;
  letter-spacing: 10px;
}

.sj1 {
  margin-left: 3px;
  font-size: 9px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #010101;
  line-height: 27px;
}
.block4 {
  margin: auto;
  margin-top: 33px;
  width: 208px;
  height: 45px;
}
.dati {
  width: 208px;
  height: 45px;
  background: #2652e1;
  border-radius: 23px;
  border: 0;
  font-size: 19px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
}
.firecracker {
  display: none;
  width: 40px;
  height: 200px;
  position: relative;
  top: -200px;
}
.fireworks {
  display: none;
  z-index: 25;
  width: 30px;
  height: 25px;
  position: relative;
  top: -120px;
}
.fireworks1 {
  display: none;
  z-index: 25;
  width: 140px;
  height: 100px;
  position: relative;
  top: -520px;
  left: 110px;
}
.fireworks2 {
  display: none;
  z-index: 25;
  width: 140px;
  height: 100px;
  position: relative;
  top: -450px;
  left: -180px;
}
</style>
