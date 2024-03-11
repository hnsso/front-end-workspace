// $("nav > a : listpage").hover(
//   function () {
//     $(this).fadeTo(500, 0.5);
//   }, // mouseenter
//   function () {
//     $(this).fadeTo(500, 1);
//   } // mouseleave
// );

// $(window).on("scroll", function () {
//   var value = $(window).scrollTop();
//   console.log("valueY", value);

//   if (value > 20) {
//     $(".directivity > h1").css("animation", "out 1s ease-out forward");
//   } else {
//     $(".directivity > h1").css("animation", "slide 1s ease-out");
//   }
// });

$(window).on("scroll", function () {
  var value = $(window).scrollTop();
  console.log("valueY", value);

  if (value > 750) {
    $(".h1").css("animation", "out 1.8s ease-out forwards");
  } else {
    $(".h1").css("animation", "slide1 1.8s ease-out ");
  }

  if (value > 750) {
    $(".h2").css("animation", "out2 1.9s ease-out forwards");
  } else {
    $(".h2").css("animation", "slide2 1.9s ease-out ");
  }

  //==========================================================

  if (value > 1800) {
    $(".container1 h1").css("animation", "out4 1.9s ease-out forwards");
  } else {
    $(".container1 h1").css("animation", "slide4 1.9s ease-out ");
  }

  //   if (value > 1800) {
  //     $(".container2 h1").css("animation", "out2 1.9s ease-out forwards");
  //   } else {
  //     $(".container2 h1").css("animation", "slide2 1.9s ease-out ");
  //   }

  // ===========================================================

  //   if (value > 750) {
  //     $(".h2").css("animation", "out2 1.9s ease-out forwards");
  //   } else {
  //     $(".h2").css("animation", "slide2 1.9s ease-out ");
  //   }

  //   if (value > 750) {
  //     $(".h2").css("animation", "out2 1.9s ease-out forwards");
  //   } else {
  //     $(".h2").css("animation", "slide2 1.9s ease-out ");
  //   }
});

$("nav a : listpage").ready(function () {
  $("nav a : listpage").on("hover", ".dropbtn", function () {
    if ($(this).siblings("nav a : listpage").length === 0) {
      // Create dropdown content
      var dropdownContent = $(
        '<div class="dropdown-content">' +
          '<a href="#">Link 1</a>' +
          '<a href="#">Link 2</a>' +
          '<a href="#">Link 3</a>' +
          "</div>"
      );
      // Append dropdown content to dropdown container
      $(this).parent(".dropdown").append(dropdownContent);
    } else {
      // Toggle dropdown content
      $(this).siblings(".dropdown-content").toggle();
    }
  });

  // Close the dropdown menu if the user clicks outside of it
  $(document).click(function (event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown-content").hide();
    }
  });
});
