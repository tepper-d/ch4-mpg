/*
CIS 124: Introduction to JavaScript
Murach JavaScript & jQuery, 4th ed
Chapter 4: JavaScript objects, functions, and events
Exercise 4-1 Enhance the MPG application
Dominique Tepper, 24OCT2022
*/

"use strict";

const $ = selector => document.querySelector(selector);

/* 5-2. Use 2 different functions that display different error messages
const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;*/

// 5-2A. NaN error message. Tepper, 24OCT2022.
const errorNonNumeric = lbl => `${lbl} must be a valid number.`;

// 5-2B, 5-2C. input < 0 || input == 0 error message. Tepper, 24OCT2022.
const errorZero = lbl => `${lbl} must be greater than zero.`;


const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    /* 5-1. Modify the if-else statement that provides the data validation so a different error message is displayed for each entry: (A) NAN, (B) <0, (C) == 0*/

    // 5-1A. for miles input. Tepper, 24OCT2022.
    if (isNaN(miles)) {
        alert(errorNonNumeric("Miles driven"));
        focusAndSelect("miles");
    }

    // 5-1B, 5-1C. for miles input. Tepper, 24OCT2022.
    else if (miles <= 0) {
        alert(errorZero("Miles driven"));
        focusAndSelect("miles");
    }

    // 5-1A. for gas used. Tepper, 24OCT2022.
    else if (isNaN(gallons)) {
        alert(errorNonNumeric("Gallons of gas used"));
        focusAndSelect("gallons");
    }

    // 5-1B, 5-1C. for gas used. Tepper, 24OCT2022.
    else if (gallons <= 0) {
        alert(errorZero("Gallons of gas used"));
        focusAndSelect("gallons");
    }

    // calculates mpg if all inputs are valid
    else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }

    /*if (isNaN(miles) || miles <= 0) {
            alert(getErrorMsg("Miles driven"));
            focusAndSelect("#miles");
        } else if (isNaN(gallons) || gallons <= 0) {
            alert(getErrorMsg("Gallons of gas used"));
            focusAndSelect("#gallons");
        } else {
            $("#mpg").value = (miles / gallons).toFixed(2);
        }*/
};

/*
8-A. Add an arrow function named clearEntries() that clears the entries in the three text boxes and moves the focus to the first text box. Tepper, 24OCT2022.
*/

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    $("#miles").focus();
    console.log("CLEAR!"); // logs use of clearEntries(). Tepper, 24OCT2022.
}

/*
Add statements in the DOMContentLoaded event handler that attaches the
clearEntries() function to
    8-2. Clear Entries button's click event
    9. double-click event of the miles text box.
*/

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();

    // 8-2.Clear Entries button's click event. Tepper, 24OCT2022.
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();

    // 9. double-click event of the miles text box. Tepper, 24OCT2022.
    $("#miles").addEventListener("dblclick", clearEntries);
    $("#miles").focus();

});
