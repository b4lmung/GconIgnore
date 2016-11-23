// ==UserScript==
// @name        Gcon Ignore 100 posts
// @namespace   gconhub.com
// @description Ignore comments from specific users in Gconhub
// @include     http://gconhub.com/*
// @include     http://www.gconhub.com/*
// @version     1
// @grant       none
// ==/UserScript==

var all = document.getElementsByClassName("title");
var c=0;
if(all.length > 0){
  for(i=0; i<all.length; i++){
      var data= all[i].textContent;
      
      data = data.substring(data.lastIndexOf("(") +1, data.lastIndexOf("post")).trim();
      if(parseInt(data) < 100){
        var post = all[i].parentElement.parentElement;
          
        var user =  post.getElementsByClassName("name")[0].textContent;
      
        if(user.indexOf("member") > -1)
            user = user.substring(0, user.lastIndexOf("member"));

        if(user.indexOf("staff") > -1)
            user = user.substring(0, user.lastIndexOf("staff"));
        post.style.visibility = "hidden";
        post.style.display = 'none';
          
        var button = document.createElement('input');
        button.type = "button";
        button.style = 'width:95%; height:50px; margin: 20px';
        button.setAttribute("onclick","toggleBox('block" + c + "', 1);");
        button.value = "ข้อความนี้ถูกซ่อนไว้ เนื่องจาก " + user + "  เป็น User ที่โพสไม่ถึง 100 กดที่ปุ่มนี้เพื่อเปิด/ปิดข้อความ";
        post.parentNode.insertBefore(button, post);
        c++;
      }
  }
  
}



