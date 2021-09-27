var resultsArr = [-1, -1, -1];

const radioClick = (x) => {
  resultsArr[0] = x;
  returnHtml(arrToStr(resultsArr));
  console.log(resultsArr);
};
const radioFuncClick = (x) => {
  if (resultsArr[1] != x) {
    unCheck();
  }
  resultsArr[1] = x;
  $("#rolesTitle").removeClass("hide");
  $("#roles" + x).removeClass("hide");

  returnHtml(arrToStr(resultsArr));
  console.log(resultsArr);
};
const radioRoleClick = (x) => {
  resultsArr[2] = x;
  returnHtml(arrToStr(resultsArr));
  console.log(resultsArr);
};

const unCheck = () => {
  var x = document.getElementsByClassName("roleClass");
  resultsArr[2] = -1;
  for (i = 0; i < x.length; i++) {
    x[i].checked = false;
  }
  $(".radBtnsRoles").addClass("hide");
};

const returnHtml = (index) => {
  let matchFound = false;
  let matchFound2 = false;

  // check if function results box should be shown
  for (let i = 0; i < data2.length; i++) {
    if (data2[i][0] == index[1]) {
      let str = "<ul>";
      let str2 = "<ul>";
      for (let j = 0; j < data2[i][1].length; j++) {
        str += "<li>" + data2[i][1][j] + "</li>";
      }
      for (let k = 0; k < data2[i][2].length; k++) {
        str2 += "<li>" + data2[i][2][k] + "</li>";
      }
      $("#growBullets2").html(str);
      $("#shrinkBullets2").html(str2);
      $("#resultsSection2").removeClass("hide");
      matchFound2 = true;
    }
  }

  //   check if roles results box should be shown
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == index) {
      let str = "<ul>";
      let str2 = "<ul>";
      for (let j = 0; j < data[i][1].length; j++) {
        str += "<li>" + data[i][1][j] + "</li>";
      }
      for (let k = 0; k < data[i][2].length; k++) {
        str2 += "<li>" + data[i][2][k] + "</li>";
      }
      $("#growBullets").html(str);
      $("#shrinkBullets").html(str2);
      $("#resultsSection").removeClass("hide");
      matchFound = true;
    }
  }
  if (!matchFound) {
    $("#resultsSection").addClass("hide");
  }
  if (!matchFound2) {
    $("#resultsSection2").addClass("hide");
  }
};

const arrToStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
};
