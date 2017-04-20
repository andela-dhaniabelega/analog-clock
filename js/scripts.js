
var id;
//#565658
window.onload = function () {

        id = setInterval(showClockOnLoad, 1000);

        //showClockOnLoad();
        function showClockOnLoad() {
        var curDate = new Date;
        showClock(curDate);
    }
}     



var timeZoneOffsets = {
    "WAT": [1,"UTC+1"],
    "CET": [1,"UTC+1"],
    "CST": [-6,"UTC-6"]
}





function getCountryTime(){
    var timeZoneElement = document.getElementById("timeZones");
    var timeZone = Number(timeZoneElement.value);
    var tZoneoffset = returnTimeZoneOffset(timeZone);
    //OBTAIN THE CURRENT DATE AND TIME
    var testDate = new Date;
    var localTime = testDate.getTime();

    //FIND THE LOCAL TIME-ZONE OFFSET AND MULTIPLY BY (60000) to convert from minutes to millissecconds
    var localOffset = testDate.getTimezoneOffset() * 60000;

    //OBTAIN THE CURRENT UTC TIME BY ADDING LOCAL TIME ZONE OFFSET TO THE LOCAL TIME
    var utc = localOffset + localTime;
    /*Note: localOffset might return positive or negative depending on if the
        local time-zone is before or behinf the UTC time*/
    var offset = tZoneoffset[0];
    var timeZoneName = tZoneoffset[1];

    var currentTimeInZone = utc + (3600000 * offset);
    /*Note: 360000 represents a converting factor to convert from hours to milliseconds*/
    //CHANGE CALCULATED TIME TO A READABLE DATE/TIME STRING
    var finalDate = new Date(currentTimeInZone);

    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February","March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var selectedCountry = $('#timeZones option:selected').text();
    var presentDay = days[finalDate.getDay()];
    var presentMonth = months[finalDate.getMonth()];
    var presentDate = finalDate.getDate();
    var presentYear = finalDate.getYear();
    var selectedCountryTime = finalDate.getHours() + ":" + finalDate.getMinutes() + ":" + finalDate.getSeconds();


    document.getElementById('displayInfo').innerHTML = "The time in " + selectedCountry + " is: <b>" + 
    selectedCountryTime + "</b>. It is " + presentDay + ", " + presentMonth + " " +
     presentDate + "th" + " " + presentYear + ". " + selectedCountry + " is on the <b>" + timeZoneName + 
     "</b> time zone.";
   

    showClock(finalDate);


  }


 function returnTimeZoneOffset(value) {
    switch(value){
        case 0: return timeZoneOffsets.WAT;
        case 1: return timeZoneOffsets.CET;
        case 2: return timeZoneOffsets.CST;
      }
}



function check() {
    //var zonesElem = document.getElementById("outputTab").style;
    //zonesElem.visibility = "visible";
    var temp = function() {return 1;}
    var temp = window.onload;
    clearInterval(id);
    window.onload = setInterval(getCountryTime,1000);
}

function larg(can){
    $(window).resize(function () {
        width = $(can).parent().width();
        can.width = width;
        canCtx.fillRect(0, 0, width, 410);
    });
}

        function showClock(date) {

            // Canvas Set Up
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

            
            var angle;
            var secHandLength = 185;


            // CLEAR EVERYTHING ON THE CANVAS. RE-DRAW NEW ELEMENTS EVERY SECOND.
            ctx.clearRect(0, 0, canvas.width, canvas.height);        

            OUTER_DIAL1();
            CENTER_DIAL();
            MARK_THE_HOURS();
            MARK_THE_SECONDS();

            SHOW_SECONDS();
            SHOW_MINUTES();
            SHOW_HOURS();

            function OUTER_DIAL1() {
                ctx.fillStyle= "#ffffff";
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 , 0, Math.PI * 2);
                ctx.fill();
            }
            
            function CENTER_DIAL() {
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2);
                ctx.lineWidth = 3;
                ctx.fillStyle = '#000000';
                ctx.strokeStyle = '#000000';
                ctx.stroke();
            }

            function MARK_THE_HOURS() {

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

                    ctx.strokeStyle = '#000000';
                    ctx.stroke();
                }
            }

            function MARK_THE_SECONDS() {

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

            function SHOW_SECONDS() {

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

            function SHOW_MINUTES() {

                var min = date.getMinutes();
                angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
                ctx.lineWidth = 1.5;              // HAND WIDTH.

                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);  // START FROM CENTER.
                // DRAW THE LENGTH.
                ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.1),      
                    canvas.height / 2 + Math.sin(angle) * secHandLength / 1.1);

                ctx.strokeStyle = '#000000';  // COLOR OF THE HAND.
                ctx.stroke();
            }

            function SHOW_HOURS() {

                var hour = date.getHours();
                var min = date.getMinutes();
                angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
                ctx.lineWidth = 1.5;              // HAND WIDTH.

                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);     // START FROM CENTER.
                // DRAW THE LENGTH.
                ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.5),      
                    canvas.height / 2 + Math.sin(angle) * secHandLength / 1.5);

                ctx.strokeStyle = '#000000';   // COLOR OF THE HAND.
                ctx.stroke();
            }
        }
    