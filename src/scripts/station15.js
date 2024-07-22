function displayList() {
  const fruit = document.getElementById("fruits");
  console.log(fruit.textContent); //内容の確認用
  var p01 = document.getElementsByTagName("p");
  console.log(p01.length); //長さの確認用
  var li = "";
  for (var i = 0; i < p01.length; i++) {
    li += "<li>" + p01[i].textContent + "</li>";
  }
  fruit.innerHTML = "<ul>" + li + "</ul>";
}
// function displayList() {
//     const fruit = document.getElementById("fruits");
//     var ulElement = document.createElement("ul");
//     console.log(fruit.textContent); //内容の確認用
//     Array.from(fruit.children).forEach(function (pElement) {
//       var liElement = document.createElement("li");
//       liElement.textContent = pElement.textContent; // pタグのテキストをliタグに設定
//       ulElement.appendChild(liElement); // liタグをulに追加
//     });
//     fruit.parentNode.replaceChild(ulElement, fruit);
//   }

// function displayList() {
//   const fruit = document.getElementById("fruits");
//   console.log(fruit.length);
//     for (i = 0; i < fruit.length; i++) {
//       fruit[i].addEventListener("click", function () {
//         this.style.color = "red";
//       });
//       console.log(fruit[i].textContent);
//     }
// }
// const pTag = document.querySelectorAll(".ptagBlock p");
// for (i = 0; i < pTag.length; i++) {
//   // 対象の文字列を取得
//   const pTagText = pTag[i].innerHTML;
//   // 置換前後の文字を指定
//   const pTagTextNext = pTagText.replace("段落（p）タグ", "見出し（h2）タグ");
//   // 置換するタグと一緒に出力
//   pTag[i].outerHTML = '<h2 class="changeH">' + pTagTextNext + "</h2>";
//   console.log(pTagTextNext);
// }
