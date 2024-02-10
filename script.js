import * as notionService from './notionServices.js';

function showOnPage() {
    var notionOAuth = document.getElementById("notion-auth").value;
    notionService.setOAuth(notionOAuth);
    var notionId = document.getElementById("notion-id").value;
    notionService.setDatabaseId(notionId);
    
    var score = document.getElementById("checkbox_score").checked;
    var time = document.getElementById("checkbox_time").checked;
    var language = document.getElementById("checkbox_language").checked;
    var selectedLanguage = document.getElementById("select_language").value;
    if(!language) {
      selectedLanguage = "";
    }
    var checkbox4 = document.getElementById("checkbox_gamepass").checked;
    //document.getElementById("output").innerHTML = `${notionId} ${score} ${time} ${language} ${selectedLanguage}`;

    notionService.getNotionEntryNames();
}
