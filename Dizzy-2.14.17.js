$(".dizzy-dropdown-selector-inverse").click(function() {
  $(".dizzy-navbar-inverse-dropdown").toggleClass("showA");
});
$(".dizzy-dropdown-selector-default").click(function() {
  $(".dizzy-navbar-default-dropdown").toggleClass("showB");
});
$("#toggle1").click(function() {
  $("#light").fadeOut(1000);
});
$("#toggle2").click(function() {
  $(".dizzy-alert-primary").fadeOut(1000);
});
$("#toggle3").click(function() {
  $(".dizzy-alert-danger").fadeOut(1000);
});
$("#toggle4").click(function() {
  $(".dizzy-alert-caution").fadeOut(1000);
});
$("#toggle5").click(function() {
  $("dizzy-alert-info").fadeOut(1000);
});
$("#toggleDropdownDefault").click(function() {
  $(".dizzy-default-dropdown").toggleClass("showDropdown");
});
$("#toggleDropdownInverse").click(function() {
  $(".dizzy-inverse-dropdown").toggleClass("showDropdown");
});
$("#hideToggle").click(function() {
  $("#hide").toggleClass("hideElement");
});
