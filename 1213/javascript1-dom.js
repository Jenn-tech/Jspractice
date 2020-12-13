window.addEventListener("load", function(){
    var notices = [
        {id:5, title:"퐈이야~~~", regDate:"2019-01-26", writerId:"newlec", hit:0},
        {id:6, title:"나 좀 복제해줘~", regDate:"2019-01-26", writerId:"newlec", hit:17}
    ];

    var section = document.querySelector("#section7");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function(){
        //쿼리셀렉터는 tbody에 있는 tr중에 첫번째 하나만 가져옴
        var trNode = noticeList.querySelector("tbody tr");
        var cloneNode = trNode.cloneNode(true) //true는 모든 자손들을 복제
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML ='<a href="'+ notices[0].id+'">'+notices[0].title;
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.appendChild(cloneNode); 

    };

    templateButton.onclick = function(){
        var template = section.querySelector("template");
        
        //template안에 있는 content를 안에까지 가져오겠다
        var cloneNode = document.importNode(template.content, true); 
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML ='<a href="'+ notices[0].id+'">'+notices[0].title;
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.appendChild(cloneNode); 

        
    };

});
