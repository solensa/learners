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
};

const arrToStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
};