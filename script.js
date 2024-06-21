var languages=['JavaScript','python','java'];
var ulElement=document.querySelector(".languagesList");
//console.log(document.querySelector(".languagesList"));
for(var i=0;i<languages.length;i++){
    var li=document.createElement("li");
    li.textContent=languages[i];
    ulElement.appendChild(li);
}
console.log(document.querySelector(".languagesList"));