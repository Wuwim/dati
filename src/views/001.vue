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
          <span>请 登 录</span>
        </div>
        <div class="block3-2">
          <input
            class="input-ph"
            type="text"
            v-model="phone"
            placeholder="请输入手机号"
          />
          <input
            class="input-pwd"
            type="password"
            v-model="password"
            placeholder="请输入密码"
          />
        </div>

        <div class="block4">
          <button class="bt btdl" @click="login()">登 录</button>
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
    goBack() {
      this.$router.go(-1);
    },
    login() {
      let reg = /^1[0-9]{10}$/;
      if (
        this.phone == "" ||
        this.phone.length <= 10 ||
        !reg.test(this.phone)
      ) {
        console.log(this.phone);
        this.phone = "";
        this.$message.error({
          message: "手机号输入格式不正确！",
          offset: 260,
          center: true,
        });
      } else {
        if (this.password == "" || this.password.length <= 6) {
          this.$message.error({ message: "密码长度须大于六位", offset: 260 });
        } else {
          this.$router.push({
            path: "002",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/css/common.css";
.block3-1 {
  padding-top: 60px;
}

.block3-2 {
  margin: 60px 60px 0 60px;
}

input {
  width: 164px;
  height: 44px;
  box-shadow: 0px 3px 5px 0px rgba(36, 28, 198, 0.52);
  padding-left: 35px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  outline: none;
}
input::-webkit-input-placeholder {
  font-size: 12px;
  color: #c8c8c8;
  font-weight: bold;
}
.input-ph {
  background: #ffffff url(../assets/img/personal.png) 8px no-repeat;
  background-size: 20px 20px;
}
.input-pwd {
  margin-top: 22px;
  background: #ffffff url(../assets/img/pw.png) 6px no-repeat;
  background-size: 23px 23px;
}

.block4 {
  margin: 33px 56px 99px 52px;
}

.btdl {
  padding: 14px 84px 14px 84px;
}
</style>
