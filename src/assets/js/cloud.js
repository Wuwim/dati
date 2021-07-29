$(function () {
  var obj = $(".cloud");
  var obj1 = $(".cloud1");
  var x = obj.offset().left; //盒子距离左部的位置
  var x1 = obj1.offset().left; //盒子距离左部的位置
  var y = obj.offset().top; //盒子距离顶部的位置
  var y1 = obj1.offset().top; //盒子距离顶部的位置
  var sx = 0; //x轴是否返回的状态，0是值++即正向移动，1是值--即返回
  var sy = 0;
  var sx1 = 0; //x轴是否返回的状态，0是值++即正向移动，1是值--即返回
  var sy1 = 0;
  setInterval(function () {
    if (sx == 0) {
      obj.css("left", x++);
    } else if (sx == 1) {
      obj.css("left", x--);
    }
    if (x <= 30) {
      sx = 0;
    } else if (x >= 250) {
      sx = 1;
    }
    if (sy == 0) {
      obj.css("top", y++);
    } else if (sy == 1) {
      obj.css("top", y--);
    }
    if (y <= 0) {
      sy = 0;
    } else if (y >= 100) {
      sy = 1;
    }

    if (sx1 == 0) {
      obj1.css("left", x1++);
    } else if (sx1 == 1) {
      obj1.css("left", x1--);
    }
    if (x1 <= 100) {
      sx1 = 0;
    } else if (x1 >= 330) {
      sx1 = 1;
    }
    if (sy1 == 0) {
      obj1.css("top", y1++);
    } else if (sy1 == 1) {
      obj1.css("top", y1--);
    }
    if (y1 <= 0) {
      sy1 = 0;
    } else if (y1 >= 80) {
      sy1 = 1;
    }
  }, 15);
});