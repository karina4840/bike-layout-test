import $ from "jquery";
import "bootstrap";
import "../src/styles/index.scss";

$(".section-title").on("mouseenter mouseleave", (e) => {
  e.preventDefault();
  $(e.target).find(".arrow-down").toggleClass("hidden");
  $(e.target).find(".arrow-up").toggleClass("hidden");
});

$("#tabs-container").css("display", "none");

$(window).on("resize", (e) => {
  e.preventDefault();
  if ($(window).width() > 900) {
    $("#tabs-container").css("display", "block");
    $(".dropdown-menu").toggleClass("dropdown-menu");
    $(".section-title").attr("style", "display: none !important");

    $("#female-bike-card").appendTo("#female-bike-tab");
    $("#mount-bike-card").appendTo("#mount-bike-tab");

    $(".navbar-nav").css("display", "none");
  } else {
    $("#tabs-container").css("display", "none");
    $(".dropdown-menu").toggleClass("dropdown-menu");
    $(".section-title").css("display", "none");
    $(".navbar-nav").css("display", "block");

    $("#female-bike-card").appendTo(".female-bike-dropdown");
    $("#mount-bike-card").appendTo(".mount-bike-dropdown");
    $(".dropdown-card").addClass("dropdown-menu");
  }
});
