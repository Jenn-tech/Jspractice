window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var titleInput =section.querySelector(".title-input"); 
    var menuListUl =section.querySelector(".menu-list"); 
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");
    
    addButton.onclick = function(){
        var title = titleInput.Value;
        var html = '<a href="">'+title+'</a>';
        var li = document.createElement("li");
        li.innerHTML = html;

        menuListUl.appendChild(li);
    };
    delButton.onclick = function(){
      //  var txtNode = menuListDiv.childNodes[0];
      //  menuListDiv.removeChild(txtNode); 

        var liNode = menuLisUI.children[0];
        liNode.remove();
    };
});