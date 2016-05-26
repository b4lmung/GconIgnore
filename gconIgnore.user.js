// ==UserScript==
// @name        Gcon Ignore
// @namespace   gconhub.com
// @description Ignore comments from specific users in Gconhub
// @include     http://gconhub.com/*
// @include     http://www.gconhub.com/*
// @version     1
// @grant       none
// ==/UserScript==

var blocklist = ["User1", "User2"]; //example user list
var cnt = 0;

var allPosts = document.getElementsByClassName("comment-block");

if(allPosts.length > 0){
  var targets = [];
  for(i=0; i<allPosts.length; i++){
     
      var user =  allPosts[i].getElementsByClassName("name")[0].textContent;
     
      if(user.contains("member"))
        user = user.substring(0, user.lastIndexOf("member"));

      if(user.contains("staff"))
        user = user.substring(0, user.lastIndexOf("staff"));

      if(blocklist.indexOf(user) > -1){
        cnt++;

        allPosts[i].id = "block" + cnt;
        allPosts[i].style.visibility = "hidden";
        allPosts[i].style.display = 'none';
        var button = document.createElement('input');
        button.type = "button";
        button.style = 'width:95%; height:50px; margin: 20px';
        button.setAttribute("onclick","toggleBox('block" + cnt + "', 1);");
        button.value = "ข้อความนี้ถูกซ่อนไว้ เนื่องจากเป็นโพสของผู้ไม่พึงประสงค์ (" + user + ") กดที่ปุ่มนี้เพื่อเปิด/ปิดข้อความ";
        allPosts[i].parentNode.insertBefore(button, allPosts[i]);
        
      }  
   }
  
}



 
