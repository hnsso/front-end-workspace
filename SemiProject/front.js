$(window).on("scroll", function () {
  var value = $(window).scrollTop();
  console.log("valueY", value);
  if (value > 789) {
    $(".h1").css("animation", "out1 1.8s ease-out forwards");
  } else {
    $(".h1").css("animation", "slide1 1.8s ease-out ");
  }
  if (value > 789) {
    $(".h2").css("animation", "out2 1.8s ease-out forwards");
  } else {
    $(".h2").css("animation", "slide2 1.8s ease-out ");
  }
  // //==========================================================
  if (value > 1800) {
    $(".container1 h1").css("animation", "out4 1.5s ease-out forwards");
  } else {
    $(".container1 h1").css("animation", "slide4 1.5s ease-out ");
  }
  if (value > 1800) {
    $(".container2 h1").css("animation", "out5 1.5s ease-out forwards");
  } else {
    $(".container2 h1").css("animation", "slide5 1.5s ease-out ");
  }
  // // ===========================================================
  if (value > 1800) {
    $(".Floor p:first-child").css("animation", "out6 1.9s ease-out forwards");
  } else {
    $(".Floor p:first").css("animation", "slide6 1.9s ease-out ");
  }
  if (value > 1800) {
    $(".Floor p:last-child").css("animation", "out7 1.9s ease-out forwards");
  } else {
    $(".Floor p:last-child").css("animation", "slide7 1.9s ease-out ");
  }
});
