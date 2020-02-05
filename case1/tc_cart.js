"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Dominic Torres
   Date: 2/3/20  
   
   Filename: tc_cart.js
	
*/
//declared this variable to zero
var orderTotal = "";
//step 11
var cartHTML = "<table><tr><th></th><th>itemDescription</th><th>itemPrice</th><th>itemQty</th><th>orderTotal</th></tr>";
//step 12
loop:
for(var i = 0; i < item.length; i++){
   //puts an image on the item
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt=" + item[i] + " /></td> ";
   //adds a description to the item
   cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
   //FInds the cost of the items
   var itemCost = itemPrice[i] * itemQty[i];
   //Shows calculated cost
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   //get everything
   orderTotal += itemCost;
}
cartHTML += "<tr><td colspan = '4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";
//Runs the code
document.getElementById("cart").innerHTML = cartHTML;

