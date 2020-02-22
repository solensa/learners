

var headerHeight;


$(document).ready(function(){

  // open first content pane
  $("#chapter1").addClass("sidePanelChapterSelected");
  $("#contentPane1").addClass("visible");

  $(".sidePanelChapterWrap li" ).each(function() {
    var cookieText = "LOTF-" + this.id;
    if (getCookie(cookieText)){
      $("div",this).addClass("visible");
    }
  });
  // var x = getCookie("LOTF-chapter1");
  // console.log(x);

  $( ".sidePanelChapterWrap li" ).click(function() {

    // change panel classes
    $(".sidePanelChapterWrap li").removeClass("sidePanelChapterSelected");
    $(this).toggleClass("sidePanelChapterSelected");

    // Change the pane on show
    $(".mainContentPane" ).each(function() {
      $(this).removeClass("visible fadeOut");
    });
    var idNum = this.id.replace(/\D/g, "");
    var idStr = "#contentPane" + idNum;
    $(idStr).addClass("visible fadeIn");

    // COOKIE STUFF TO GO BACK IN LATER
    // var cookieText = "LOTF-" + this.id;
    // setCookie(cookieText,1,60);
  });

  headerHeight = $('#header').height() + 140;

 });


 $(function($) {
   $(window).scroll(function fix_element() {
     $('#sidePanel').css(
       $(window).scrollTop() > headerHeight
         ? { 'position': 'fixed', 'top': '0px', 'left':'0px' }
         : { 'position': 'relative', 'top': 'auto' }
     );
     $('#mainContentBox').css(
       $(window).scrollTop() > headerHeight
         ? { 'margin-left':'250px' }
         : { 'margin-left':'0' }
     );
     return fix_element;
   }());
 });



// help functions
 function setCookie(name, value, days) {
   var expires = "";
   if (days) {
     var date = new Date();
     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
     expires = "; expires=" + date.toUTCString();
   }
   document.cookie = name + "=" + (value || "") + expires + "; path=/";
 }

 function getCookie(name) {
   var nameEQ = name + "=";
   var ca = document.cookie.split(';');
   for (var i = 0; i < ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
   }
   return null;
 }
