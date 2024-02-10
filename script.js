function showOnPage() {
    var text = document.getElementById("myText").value;
    var checkbox1 = document.getElementById("checkbox_score").checked;
    var checkbox2 = document.getElementById("checkbox_time").checked;
    var checkbox3 = document.getElementById("checkbox_language").checked;
    var select = document.getElementById("select_language").value;
    if(!checkbox3) {
      select = "";
    }
    var checkbox4 = document.getElementById("checkbox_gamepass").checked;
    document.getElementById("output").innerHTML = `${text} ${checkbox1} ${checkbox2} ${select} ${checkbox4}`;
}
