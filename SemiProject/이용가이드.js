//  마우스 휠 좌,우 이동
$("#mouse_move").on("mousewheel", function (e) {
  event.stopPropagation();
  event.stopImmediatePropagation();

  var wheelDelta = e.originalEvent.wheelDelta;

  if (wheelDelta > 0) {
    $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  } else {
    $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  }

  // 외부 스크롤 이벤트 막기
  return false;
});
