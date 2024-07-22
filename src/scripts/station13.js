function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (check.checked == true) {
    var textElement = document.getElementById("text");
    textElement.style.backgroundColor = "#ff0000";
  } else {
    var textElement = document.getElementById("text");
    textElement.style.backgroundColor = "#ffffff";
  }
}
