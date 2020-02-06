"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Dominic Torres
   Date: 2/5/20  
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
//step 5, finds the race title
var reportHTML = "<h1>title</h1>" + raceTitle;
//step 6,
loop:
for(var totalVotes = 0; i < totalVotes; i++){
   totalVotes.forEach(calcSum);
   reportHTML = "<table><caption>" + race. + "</caption><tr><th>Candidate</th><th>Votes</th></tr>"
 }


/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

