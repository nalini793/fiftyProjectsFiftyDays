$(document).ready(function () {
  var timer = 0;
  var percentageWidth = $("#progressBar").outerWidth() / 100;
  const progressBars = $(".progress-bar");
  const values = [99, 94, 86, 90, 81, 84];

  progressBars.each(function (index, bar) {
    const currentValue = values[index];
    console.log(index);
    const currentProgBar = "#progressBar" + index;
    function timerRun() {
      $(bar)
        .css("width", timer + "%")
        .attr("aria-valuenow", timer);

      $(currentProgBar)
        .css(
          "-webkit-transform",
          "translateX(" + percentageWidth * timer + "px)"
        )
        .attr("aria-valuenow", timer);

      if (timer >= currentValue) {
        $(bar).css("width", currentValue + "%");
        return;
      }
      timer++;
      setTimeout(function () {
        timerRun();
      }, 10);
    }
    timerRun();
  });
});
