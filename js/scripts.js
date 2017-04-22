
var id;
var mycurDate = new Date;
window.onload = function () {
        id = setInterval(showClockOnLoad, 1000);
        displayCurrentInfo();
        function showClockOnLoad() {
        var curDate = new Date;
        showClock(curDate);
    }
}     

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January", "February","March","April", "May", "June", "July", "August", "September", "October", "November", "December"];

var timeZoneOffsets = {
    "WAT": [1,"UTC+1"],
    "CST": [8,"UTC+8"],
    "CEST": [2,"UTC+2"],
    "JST": [9,"UTC+9"],
    "EDT": [-4,"EDT-4"],
    "KST": [9,"UTC+9"],
    "ICT": [7,"UTC+7"],
    "BST": [1,"UTC+1"],
    "SGT": [8,"UTC+8"],
    "MYT": [8,"UTC+8"],
    "TRT": [3,"UTC+3"],
    "NZST": [12,"UTC+12"],
    "GST": [4,"UTC+4"]
}


/**
  * Displays Current Location Information in the info Tab
  */
function displayCurrentInfo(){

    var selectedCountry = "Lagos";
    var timeZoneName = "UTC+1";
    var presentDay = days[mycurDate.getDay()];
    var presentMonth = months[mycurDate.getMonth()];
    var presentDate = mycurDate.getDate();
    var presentYear = mycurDate.getFullYear();
    var selectedCountryTime = mycurDate.getHours() + ":" + mycurDate.getMinutes() + ":" + mycurDate.getSeconds();

    document.getElementById('displayInfo').innerHTML = "<div style = 'padding-top:5px; padding-left:1px'>The time in " + selectedCountry + " is: <b>" + 
    selectedCountryTime + "</b>. It is " + presentDay + ", " + presentMonth + " " +
     presentDate + " " + presentYear + ". " + selectedCountry + " is on the <b>" + timeZoneName + 
     "</b> time zone. </div>";

}

/**
  * Returns the time zone offset of the selected value
  */
function returnTimeZoneOffset(value) {
    switch(value){
        case 0: return timeZoneOffsets.JST;
        case 1: return timeZoneOffsets.EDT;
        case 2: return timeZoneOffsets.KST;
        case 3: return timeZoneOffsets.CST;
        case 4: return timeZoneOffsets.ICT;
        case 5: return timeZoneOffsets.WAT;
        case 6: return timeZoneOffsets.BST;
        case 7: return timeZoneOffsets.CEST;
        case 8: return timeZoneOffsets.SGT;
        case 9: return timeZoneOffsets.MYT;
        case 10: return timeZoneOffsets.TRT;
        case 11: return timeZoneOffsets.CEST;
        case 12: return timeZoneOffsets.CEST;
        case 13: return timeZoneOffsets.CEST;
        case 14: return timeZoneOffsets.CST;
        case 15: return timeZoneOffsets.NZST;
        case 16: return timeZoneOffsets.CEST;
        case 17: return timeZoneOffsets.CEST;
        case 19: return timeZoneOffsets.GST;
      }
}


/** 
 * Stops the clock from appearing and disappearing 
 */
function check() {
    clearInterval(id);
    window.onload = setInterval(getCountryTime,1000);
}


/** 
 * Resizes page elements when browser is resized
 */
function larg(can){
    $(window).resize(function () {
        width = $(can).parent().width();
        can.width = width;
        canCtx.fillRect(0, 0, width, 410);
    });
}


/**
  * Calculates the time for selected location using time zone offset
  */
function getCountryTime(){
    var getSelectedValue    = document.getElementById("timeZones");
    var getSelectedName     = document.getElementById("timeZones").name;
    var timeZone            = getSelectedValue.value;
    var selectedCountry     = $('#timeZones option:selected').text();

    if(timeZone == 'null'){
        timeZone = 5;
        selectedCountry = 'Lagos';
    }else{
        timeZone = Number(getSelectedValue.value);
    }

    var offsetValue         = returnTimeZoneOffset(timeZone);
    var testDate            = new Date;
    var localTime           = testDate.getTime();

    /* Calculate time using offset */
    var localOffset         = testDate.getTimezoneOffset() * 60000;
    var utc                 = localOffset + localTime;
    var offset              = offsetValue[0];
    var timeZoneName        = offsetValue[1];
    var currentTimeInZone   = utc + (3600000 * offset);
    
    var finalDate           = new Date(currentTimeInZone);

    /* These variables have been redeclared to display info about the selected country */
    var presentDay          = days[finalDate.getDay()];
    var presentMonth        = months[finalDate.getMonth()];
    var presentDate         = finalDate.getDate();
    var presentYear         = finalDate.getFullYear();
    var selectedCountryTime = finalDate.getHours() + ":" + finalDate.getMinutes() + ":" + finalDate.getSeconds();
    

    /* Return country info to Info Box */
    document.getElementById('displayInfo').innerHTML = "<div style = 'padding-top:5px; padding-left:1px'>The time in " + selectedCountry + " is: <b>" + 
    selectedCountryTime + "</b>. It is " + presentDay + ", " + presentMonth + " " +
     presentDate + " " + presentYear + ". " + selectedCountry + " is on the <b>" + timeZoneName + "</b> time zone </div>" 
    

     /* Determine hours ahead or behind */
     if(timeZoneOffsets.WAT[0]===offsetValue[0]){
             document.getElementById('displayAddInfo').innerHTML = "This means you are In your time Zone"
        }else if (offset < 1){
            document.getElementById('displayAddInfo').innerHTML  =  "This means it is " + Math.abs(offset-1) + " hour(s) behind your location"
        }else{
            document.getElementById('displayAddInfo').innerHTML  =  "This means it is " + Math.floor(offset-1) +" hour(s) "+(60 *(offset - Math.floor(offset))) +" mins  ahead of your location";
        }
     
   

    showClock(finalDate);


  }

function showClock(date) {

      // Canvas Set Up
    var canvas           = document.getElementById('canvas');
    var ctx              = canvas.getContext('2d');

      
    var angle;
    var secHandLength    = 185;

    var nightHours       = date.getHours();


      /* Redraw Canvas every second to make clock tick*/
      ctx.clearRect(0, 0, canvas.width, canvas.height);        

      
      drawCircle();
      drawInnerCircle();
      drawHourMarks();
      drawSecondMarks();

      displaySeconds();
      displayMinutes();
      displayHours();


      function drawCircle() {

          if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){ 
              ctx.fillStyle= "#000000";   
          } else {
              ctx.fillStyle= "#ffffff";
          }
              ctx.beginPath();
              ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 , 0, Math.PI * 2);
              ctx.fill();

      }
      
      function drawInnerCircle() {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2);
          ctx.lineWidth = 3;
          if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){ 
              ctx.fillStyle = '#ffffff';
              ctx.strokeStyle = '#ffffff';
          }else{
              ctx.fillStyle = '#000000';
              ctx.strokeStyle = '#000000';
          }
          ctx.stroke();
      }

      function drawHourMarks() {

          for (var i = 0; i < 12; i++) {
              angle = (i - 3) * (Math.PI * 2) / 12;       // THE ANGLE TO MARK.
              ctx.lineWidth = 1;            // HAND WIDTH.
              ctx.beginPath();

              var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
              var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
              var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 7));
              var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 7));

              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);

              if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
                  ctx.strokeStyle = '#ffffff';
              }else{
                  ctx.strokeStyle = '#000000';
              }

              ctx.stroke();
          }
      }

      function drawSecondMarks() {

          for (var i = 0; i < 60; i++) {
              angle = (i - 3) * (Math.PI * 2) / 60;       // THE ANGLE TO MARK.
              ctx.lineWidth = 1;            // HAND WIDTH.
              ctx.beginPath();

              var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
              var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
              var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 30));
              var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 30));

              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);

              ctx.strokeStyle = '#C4D1D5';
              ctx.stroke();
          }
      }

      function displaySeconds() {

          var sec = date.getSeconds();
          angle = ((Math.PI * 2) * (sec / 60)) - ((Math.PI * 2) / 4);
          ctx.lineWidth = 0.5;              // HAND WIDTH.

          ctx.beginPath();
          // START FROM CENTER OF THE CLOCK.
          ctx.moveTo(canvas.width / 2, canvas.height / 2);   
          // DRAW THE LENGTH.
          ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength),
              canvas.height / 2 + Math.sin(angle) * secHandLength);

          // DRAW THE TAIL OF THE SECONDS HAND.
          ctx.moveTo(canvas.width / 2, canvas.height / 2);    // START FROM CENTER.
          // DRAW THE LENGTH.
          ctx.lineTo((canvas.width / 2 - Math.cos(angle) * 20),
              canvas.height / 2 - Math.sin(angle) * 20);

          ctx.strokeStyle = '#D33C37';        // COLOR OF THE HAND.
          ctx.stroke();
      }

      function displayMinutes() {

          var min = date.getMinutes();
          angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
          ctx.lineWidth = 1.5;              // HAND WIDTH.

          ctx.beginPath();
          ctx.moveTo(canvas.width / 2, canvas.height / 2);  // START FROM CENTER.
          // DRAW THE LENGTH.
          ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.1),      
              canvas.height / 2 + Math.sin(angle) * secHandLength / 1.1);

          //color the hand
          if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
              ctx.strokeStyle = '#ffffff'; 
          }else{
              ctx.strokeStyle = '#000000'; 
          }
          ctx.stroke();
      }

      function displayHours() {

          var hour = date.getHours();
          var min = date.getMinutes();
          angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
          ctx.lineWidth = 1.5;              

          ctx.beginPath();
          ctx.moveTo(canvas.width / 2, canvas.height / 2);     
          
          ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.5),      
          canvas.height / 2 + Math.sin(angle) * secHandLength / 1.5);

          /* Make color relative to night and day */
          if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
              ctx.strokeStyle = '#ffffff'; 
          }else{
              ctx.strokeStyle = '#000000'; 
          }
          ctx.stroke();
      }
  }
  
        