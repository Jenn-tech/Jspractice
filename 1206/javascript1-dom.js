window.addEventListener("load", function(){
   var section = document.querySelector("#section6");
   var titleInput = section.querySelector(".title-input");
   var menuListDiv = section.querySelector(".menu-list");
   var addButton = section.querySelector(".add-button");
   var delButton = section.querySelector(".del-button");
    
    addButton.onclick = function(){
        var title = titleInput.Value;
        var txtNode = document.createTextNode(title);
        menuListDiv.appendChild(txtNode);
    };
    delButton.onclick = function(){
        var txtNode = menuListDiv.childNodes[0];
        menuListDiv.removeChild(txtNode); 
    };
});