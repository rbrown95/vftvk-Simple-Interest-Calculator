//function called by the compute button
function compute(){   
    //declaration of variables linked to form entry items in html file
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculate interest from entry items and assign to variable
    var interest = (principal * years * rate) / 100;
    //get date, then just year and add number of years variable
    var date = new Date();
    var futureYear = date.getFullYear() + Number(years);

    //if statement checking that appropriate value is entered in amount field
    if (principal !== 0 && principal > 0){
        //code that will set result span equal to specified statement and highlight all variables
        document.getElementById("result").innerHTML = `If you deposit <mark>$${principal}</mark>,<br>
                                                   at an interest rate of <mark>${rate}%</mark>,<br>
                                                   you will receive an amount of <mark>$${interest}</mark><br> 
                                                   in the year <mark>${futureYear}</mark>.`;
    } else {
        //will display an alert if entry amount is not above 0, then will focus on amount field
        alert("Enter a Positive Number.");
        document.getElementById("principal").focus();
    }   
}

//function that updates span field next to slider
function range(){
    //assigns slider amount to variable
    var slider = document.getElementById("rate").value;
    var formattedSlider = parseFloat(slider).toFixed(2);
    //grabs reference to span field
    var span = document.getElementById("rateDisplay");
    //sets the span equal to slider amount
    span.innerHTML = `${formattedSlider}%`;
}
 