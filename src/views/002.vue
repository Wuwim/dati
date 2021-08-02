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
      <div class="block2"></div>
      <div class="block3">
        <div class="block3-1">
          <span>请选择题目</span>
        </div>
        <div class="block3-2">
          <div
            :class="{ color: item.checked }"
            @click="click_btn(item, index)"
            v-for="(item, index) in arr"
            :key="index"
            class="timu"
          >
            <span>{{ item.name }}</span>
          </div>
          <!-- <div class="block3-2-2 timu">
            <span>题目二</span>
          </div>
          <div class="block3-2-3 timu">
            <span>题目三</span>
          </div> -->
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
      arr: [
        {
          name: "题目一",
          checked: true,
        },
        {
          name: "题目二",
          checked: false,
        },
        {
          name: "题目三",
          checked: false,
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goNext() {
      this.$router.push({
        path: "003",
      });
    },
    click_btn: function (item, index) {
      var this_1 = this;
      console.log(this_1);
      for (var i in this_1.arr) {
        if (i == index) {
          this_1.arr[i].checked = true;
        } else {
          this_1.arr[i].checked = false;
        }
      }
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
  margin-top: 24px;
}
.timu {
  margin: 20px 58px 0px 58px;
  padding: 15px;
  box-shadow: 0px 3px 5px 0px rgba(36, 28, 198, 0.52);
  border-radius: 4px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #fff;
  background: #3751cb;
}
.color {
  background: #1138f0;
}
.block4 {
  margin: 68px 56px 47px 52px;
}
.dati {
  padding: 14px 84px 14px 84px;
}
</style>
