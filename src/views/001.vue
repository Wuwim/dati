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
          <button class="bt btdl" @click="login()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/js/cloud"
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
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

// $(function () {
//   var obj = $(".cloud1");
//   var x = obj.offset().left; //盒子距离左部的位置
//   var y = obj.offset().top; //盒子距离顶部的位置
//   var sx = 0; //x轴是否返回的状态，0是值++即正向移动，1是值--即返回
//   var sy = 0;
//   setInterval(function () {
//     if (sx == 0) {
//       obj.css("left", x++);
//       // console.log(x);
//     } else if (sx == 1) {
//       obj.css("left", x--);
//     }
//     console.log(x);
//     if (x <= 0) {
//       sx = 0;
//     } else if (x >= 0) {
//       sx = 1;
//     }
//     if (sy == 0) {
//       obj.css("top", y++);
//     } else if (sy == 1) {
//       obj.css("top", y--);
//     }
//     if (y <= -180) {
//       sy = 0;
//     } else if (y >= -50) {
//       sy = 1;
//     }
//   }, 15);
//   console.log(x);
//   console.log(y);
// });
// $(function () {
//   setInterval(myanimate, 2000);
//   function myanimate() {
//     var ko = true;
//     if (ko) {
//       $(".cloud").animate({ left: "+=200px" }, 1000);
//       ko = false;
//       // console.log("le" + ko);
//     } else {
//       $(".cloud").animate({ left: "-=200px" }, 1000);
//       console.log(666);
//       ko = true;
//     }
//     console.log("11" + ko);
//   }
// });

// $(function () {
//   $(".cloud").click(function () {
//     $(".cloud").animate({ left: "+50px" }, "slow");
//   });
// });
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
