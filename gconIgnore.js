// ==UserScript==
// @name        Gcon Ignore
// @namespace   gconhub.com
// @description Ignore comments from specific users in Gconhub
// @include     http://gconhub.com/*
// @include     http://www.gconhub.com/*
// @version     1
// @grant       none
// ==/UserScript==

var blocklist = ["RayBan", "User1"]; //example user list

var allPosts = document.getElementsByClassName("name");
if(allPosts.length > 0){
  var targets = [];
  for(i=0; i<allPosts.length; i++){
      var user =  allPosts[i].textContent;
      if(user.contains("member"))
        user = user.substring(0, user.lastIndexOf("member"));

      if(user.contains("staff"))
        user = user.substring(0, user.lastIndexOf("staff"));

      if(blocklist.indexOf(user) > -1){
        var postElement = allPosts[i].parentNode.parentNode;
        targets.push(postElement);
      }  
   }
  
   for(i=0; i<targets.length; i++){
      targets[i].parentNode.removeChild(targets[i]);
   }
}

