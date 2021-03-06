"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Dominic Torres 
   Date: 2/5/20  
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
//step 6, sets inital value to 0
var donationTotal = 0;
//step 7, calculates the donation total
donors.forEach(calcSum);
//step 8, stores text
var summaryTable = "<table><tr><th> Donors </th><td>" + donors.length + "</td></tr> <tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr></table>";
//step 9, finds the value 
document.getElementById("donationSummary").innerHTML = summaryTable;
//step 10, finds the major donors
var majorDonors = donors.filter(findMajorDonors);
//step 11, sorts the donations by descending
majorDonors.sort(donorSortDescending);
//step 12, creates a table for the major donors
var donorTable = "<table><caption>Major Donors</captions><tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Address</th><th>Phone</th><th>E-Mail</th></tr>";
//step 13, creates a row
majorDonors.forEach(writeDonorRow);
//step 14, adds text string
donorTable += "</table>";
//step 15, results in the donators
document.getElementById("donorTable").innerHTML = donorTable;


//---------------------------------------//
function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}

