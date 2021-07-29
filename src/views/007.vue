<template>
  <div class="content">
    <div class="set-bg">
      <div class="block1">
        <img class="house" src="../assets/img/house.png" alt="" />
        <img class="cloud" src="../assets/img/cloud.png" alt="" />
        <img class="cloud1" src="../assets/img/cloud.png" alt="" />
      </div>
      <div class="block2"></div>
      <div class="block3">
        <div class="block3-1">
          <span>正确率</span>
        </div>
        <div class="block3-2">
          <div class="tm-box">
            <div class="tm-bg bg">
              <div class="tm-1"></div>
              <div class="tm-2">
                <span class="tm-2-1">创志建设</span>
                <span class="tm-2-2">90%</span>
              </div>
            </div>
          </div>
          <div class="tm-box">
            <div class="tm-bg bg1">
              <div class="tm-1"></div>
              <div class="tm-2">
                <span class="tm-2-1">塞班建设</span>
                <span class="tm-2-2">89%</span>
              </div>
            </div>
          </div>
          <div class="tm-box">
            <div class="tm-bg bg2">
              <div class="tm-1"></div>
              <div class="tm-2">
                <span class="tm-2-1">万亿咨询</span>
                <span class="tm-2-2">88%</span>
              </div>
            </div>
          </div>
          <div class="tm-box tm-box1">
            <div class="tm-bg bg3">
              <div class="tm-1"></div>
              <div class="tm-2">
                <span class="tm-2-1">精峰咨询</span>
                <span class="tm-2-2">95%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="block4">
          <img class="down" src="../assets/img/down.png" alt="" />
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
      phone: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.block3-1 {
  padding-top: 40px;
}
.block3-2 {
  padding-top: 10px;
}
.tm-box {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.tm-box1 {
  margin-bottom: 50px;
}
.tm-bg {
  border: 2px solid #000000;
  border-radius: 9px;
}

.bg {
  background: #fcd400;
}
.bg1 {
  background: #ff7a57;
}

.bg2 {
  background: #00d5cb;
}

.bg3 {
  background: #bfceff;
}

.tm-1 {
  margin-left: 9px;
  margin-top: 6px;
  width: 163px;
  height: 1px;
  background: #ffffff;
  border: 2px solid #ffffff;
  opacity: 0.4;
  border-radius: 2px;
}

.tm-2 {
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: bold;
  color: #0d0d0d;
}

.tm-2-1 {
  margin-left: 16px;
}

.tm-2-2 {
  margin-left: 136px;
}
.block4 {
  margin-bottom: 10px;
}
.down {
  width: 21px;
  height: 17px;
}
</style>
