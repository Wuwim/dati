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
          <div class="block3-1-1">
            <span>第一题 / 共五题</span>
          </div>
          <div class="block3-1-2">
            <span>已用{{ time1 }}秒</span>
          </div>
          <div class="block3-1-3">
            <img src="../assets/img/clock.png" alt="" />
          </div>
        </div>
        <div class="block3-2">
          <span>{{ qs1 }}</span>
          <br />
          <span>{{ qs2 }}</span>
        </div>
        <div class="block3-3">
          <div class="block3-3-1">
            <img class="qsimg" src="../assets/img/q1.png" alt="" />
          </div>
          <div class="block3-3-2">
            <img class="qsimg" src="../assets/img/q2.png" alt="" />
          </div>
          <div class="block3-3-3">
            <img class="qsimg" src="../assets/img/q3.png" alt="" />
          </div>
        </div>
        <div class="block3-4">
          <img src="../assets/img/fgx.png" alt="" />
        </div>
        <div class="block3-5">
          <div class="title1">
            <span>{{ title1 }}</span>
          </div>
          <div class="qsa" v-for="(item, i) in asw1" :key="i">
            <span class="abcd" :style="'background:' + item.background">{{
              item.a1
            }}</span>
            <span class="asw">{{ item.a2 }}</span>
            <div class="chose">{{ item.a3 }}</div>
          </div>
          <!-- <div class="qsa">
            <span class="abcd">A</span>
            <span class="asw">梁宽B（m）</span>
            <div class="chose"></div>
          </div>
          <div class="qsa">
            <span class="abcd">A</span>
            <span class="asw">梁宽B（m）</span>
            <div class="chose"></div>
          </div>
          <div class="qsa">
            <span class="abcd">A</span>
            <span class="asw">梁宽B（m）</span>
            <div class="chose"></div>
          </div> -->
          <div class="title1">
            <span>{{ title2 }}</span>
          </div>
          <div class="qsa" v-for="(item, i) in asw2" :key="i">
            <span class="abcd" :style="'background:' + item.background">{{
              item.a1
            }}</span>
            <span class="asw">{{ item.a2 }}</span>
            <div class="chose">{{ item.a3 }}</div>
          </div>
          <!-- <div class="qsa">
            <span class="abcd">A</span>
            <span class="asw">梁宽B（m）</span>
            <div class="chose"></div>
          </div>
          <div class="qsa">
            <span class="abcd">A</span>
            <span class="asw">梁宽B（m）</span>
            <div class="chose"></div>
          </div>
          <div class="qsa">
            <span class="abcd">A</span>
            <span class="asw">梁宽B（m）</span>
            <div class="chose"></div>
          </div> -->
          <div class="block4">
            <button class="bt xyt" @click="updates(time)">下一题</button>
            <button class="bt cxdt" @click="goAgain()">重新答题</button>
          </div>
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
      time: "",
      time1: 0,
      qs1: "某房建工程基础施工，如下图所示。请根据提供的设计图和已知条件，完成下列要求内容（除题中另有说明外，均按2018版定额计算规则（小数点保留2位，第3位四舍五入）。",
      qs2: "试计算2轴上基础梁【非泵送商品混凝土C30(480元/m3)混凝土，断面尺寸为300*500，底标高同ZJ】浇捣工程量，并完成定额的套用，计算基础梁定额清单分项工程招标控制价。",
      title1: "(1)  2轴基础梁（主体）工程量计量",
      title2: "(2)  2轴基础梁与ZJ2形成的三棱柱搭头",
      asw1: [
        {
          a1: "√",
          a2: "梁宽B（m）",
          a3: "0.3",
          background: "#36A843",
        },
        {
          a1: "X",
          a2: " 梁高H（m）",
          a3: "0.5",
          background: "#E72904",
        },
        {
          a1: "√",
          a2: " 梁长（m）",
          a3: "5.6",
          background: "#36A843",
        },
        {
          a1: "√",
          a2: " 体积（m³）",
          a3: "0.84",
          background: "#36A843",
        },
      ],
      asw2: [
        {
          a1: "X",
          a2: " 三棱柱底面长直角边（m）",
          a3: "0.7",
          background: "#E72904",
        },
        {
          a1: "√",
          a2: " 三棱柱底面短直角边（m）",
          a3: "0.15",
          background: "#36A843",
        },
        {
          a1: "√",
          a2: " 三棱柱高（m）",
          a3: "0.3",
          background: "#36A843",
        },
        {
          a1: "√",
          a2: " 搭头总体积（m³）",
          a3: "0.03",
          background: "#36A843",
        },
      ],
    };
  },
  created() {
    this.getParams();
    var routerParams = this.$route.query.time;
    console.log(routerParams);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goAgain() {
      this.$router.push({
        path: "002",
      });
    },
    countDown() {
      this.time1++;
    },
    getParams() {
      var routerParams = this.$route.query.time;
      this.time = routerParams;
    },
    updates(time) {
      this.$router.push({
        path: "006",
        query: {
          time: parseInt(time) + parseInt(this.time1),
        },
      });
    },
  },
  mounted() {
    this.time1 = 0;
    setInterval(this.countDown, 1000);
  },
};
</script>

<style scoped>
@import "../assets/css/common.css";
.block3 {
  margin: 0 14px 0px 17px;
  background: #ffffff;
  border-radius: 6px;
}

.block3-1 {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
}

.block3-1-1 {
  padding: 8px 22px 8px 11px;
  background: linear-gradient(90deg, #3100a3, #3273fb, #0701ef);
  box-shadow: 0px 3px 5px 0px rgba(36, 28, 198, 0.52);
  border-radius: 0px 17px 17px 0px;
}

.block3-1-2 {
  margin-left: 107px;
  font-size: 15px;
  color: #162cf7;
}

.block3-1-3 img {
  margin-left: 10px;
  padding-top: 4px;
  width: 19px;
  height: 19px;
}

.block3-2 {
  margin: 26px 17px 0px 16px;
  font-size: 12px;
  color: #333333;
  line-height: 18px;
  text-align: left;
}

.block3-3 {
  margin: 22px 12px 0px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.qsimg {
  width: 103px;
  height: 111px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
}

.block3-4 img {
  margin-top: 26px;
  width: 329px;
  height: 14px;
  border-radius: 6px;
}

.block3-5 {
  display: flex;
  flex-direction: column;
  margin: 0px 16px;
  text-align: left;
}

.title {
  font-size: 15px;
  font-weight: bold;
  color: #765af1;
}

.title1 {
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #141313;
}

.qsa {
  margin-top: 12px;
  background: #f6f3fa;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.abcd {
  margin: 8px 0 8px 10px;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 15px;
  color: #fff;
}

.asw {
  width: 165px;
  margin-left: 15px;
  font-size: 12px;
  color: #141313;
}

.chose {
  width: 90px;
  height: 26px;
  background: #ffffff;
  border-radius: 6px;
  text-align: center;
  font-size: 12px;
  line-height: 26px;
}

.block4 {
  margin: 49px auto 41px;
  flex-direction: row;
}
.xyt {
  padding: 13px 36px;
}
.cxdt {
  background: #f22732;
  margin-left: 31px;
  padding: 13px 28px;
}
</style>
