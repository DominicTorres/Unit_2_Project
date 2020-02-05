"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Dominic Torres
   Date: 2/4/20  
   
   Filename: hg_report.js
	
*/
//step 5
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt=" + itemID + "id='gameImg' /> <table> <tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr> </table>" + itemSummary + "";
//step 6
document.getElementsByTagName().innerHTML