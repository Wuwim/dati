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
          <span>请选择题目</span>
        </div>
        <div class="block3-2">
          <div class="block3-2-1 timu">
            <span>题目一</span>
          </div>
          <div class="block3-2-2 timu">
            <span>题目二</span>
          </div>
          <div class="block3-2-3 timu">
            <span>题目三</span>
          </div>
        </div>
        <div class="block4">
          <button class="bt dati" @click="goNext()">答题</button>
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
  methods: {
    goNext() {
      this.$router.push({
        path: "003",
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/common.css";

.block3-1 {
  padding-top: 30px;
}
.block3-2 {
  margin-top: 44px;
}
.timu {
  margin: 0 58px;
  padding: 15px;
  box-shadow: 0px 3px 5px 0px rgba(36, 28, 198, 0.52);
  border-radius: 4px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
}
.block3-2-1 {
  background: #1138f0;
}
.block3-2-2 {
  margin-top: 22px;
  background: #3751cb;
}
.block3-2-3 {
  margin-top: 22px;
  background: #3751cb;
}
.block4 {
  margin: 68px 56px 47px 52px;
}
.dati {
  padding: 14px 84px 14px 84px;
}
</style>
