window.onload = function () {
	showNewYork();
	showKorea();
	showJapan();
	showChina();
	showItaly();
	showSingapore();
	showLondon();
	showThailand();
	showAmsterdam();
	showDuabi();
	showParis();
	showTurkey();
	showSpain();
	showTaiwan();
	showNewZealand();
	showAustria();
	showCzech();
	showMalaysia();
	showNigeria();
}

var newYorkOffset 		= -4;
var koreaOffset 		= 9;
var japanOffset 		= 9;
var chinaOffset 		= 8;
var italyOffset 		= 2;
var singaporeOffset 	= 8;
var londonOffset 		= 1;
var thailandOffset 		= 7;
var amsterdamOffset 	= 2;
var dubaiOffset 		= 4;
var parisOffset 		= 2;
var turkeyOffset 		= 3;
var spainOffset 		= 2;
var taiwanOffset 		= 8;
var newZealandOffset 	= 12;
var austriaOffset 		= 2;
var czechOffset 		= 2;
var malaysiaOffset 		= 8;
var nigeriaOffset	 	= 1;


function getCountryTime(offset){
    var testDate = new Date;
    var localTime = testDate.getTime();
    var localOffset = testDate.getTimezoneOffset() * 60000;
    var utc = localOffset + localTime;
    var currentTimeInZone = utc + (3600000 * offset);
    var finalDate = new Date(currentTimeInZone);

    return finalDate;
 }

 newYorkDate 	= getCountryTime(newYorkOffset);
 koreaDate 		= getCountryTime(koreaOffset);
 japanDate 		= getCountryTime(japanOffset);
 chinaDate 		= getCountryTime(chinaOffset);
 italyDate 		= getCountryTime(italyOffset);
 singaporeDate 	= getCountryTime(singaporeOffset);
 londonDate 	= getCountryTime(londonOffset);
 thailandDate 	= getCountryTime(thailandOffset);
 amsterdamDate 	= getCountryTime(amsterdamOffset);
 dubaiDate 		= getCountryTime(dubaiOffset);
 parisDate 		= getCountryTime(parisOffset);
 turkeyDate 	= getCountryTime(turkeyOffset);
 spainDate 		= getCountryTime(spainOffset);
 taiwanDate		= getCountryTime(taiwanOffset);
 newZealandDate = getCountryTime(newZealandOffset);
 austriaDate 	= getCountryTime(austriaOffset);
 czechDate 		= getCountryTime(czechOffset);
 malaysiaDate 	= getCountryTime(malaysiaOffset);
 nigeriaDate 	= getCountryTime(nigeriaOffset);

 function showNewYork(){
 	var newYorkCanvas = document.getElementById('canvas1');
    var newYorkCtx = newYorkCanvas.getContext('2d');
    showClock(newYorkDate,newYorkCtx,newYorkCanvas);
    //setInterval( function() {showClock(newYorkTime,newYorkCtx,newYorkCanvas); }, 1000 );
 }

 function showKorea(){
 	var koreaCanvas = document.getElementById('canvas2');
    var koreaCtx = koreaCanvas.getContext('2d');
    showClock(koreaDate,koreaCtx,koreaCanvas);
    //setInterval( function() { showClock(koreaTime,koreaCtx,koreaCanvas); }, 1000 );
 }

 function showJapan(){
 	var japanCanvas = document.getElementById('canvas3');
 	var japanCtx = japanCanvas.getContext('2d');
 	showClock(japanDate,japanCtx,japanCanvas);
 }

function showChina(){
	var chinaCanvas = document.getElementById('canvas4');
 	var chinaCtx = chinaCanvas.getContext('2d');
 	showClock(chinaDate,chinaCtx,chinaCanvas);
 	
 }

 function showItaly(){
 	var italyCanvas = document.getElementById('canvas5');
 	var italyCtx = italyCanvas.getContext('2d');
 	showClock(italyDate,italyCtx,italyCanvas);
 }

 function showSingapore(){
 	var singaporeCanvas = document.getElementById('canvas6');
 	var singaporeCtx = singaporeCanvas.getContext('2d');
 	showClock(singaporeDate,singaporeCtx,singaporeCanvas);
 	
 }

 function showLondon(){
 	var londonCanvas = document.getElementById('canvas7');
 	var londonCtx = londonCanvas.getContext('2d');
 	showClock(londonDate,londonCtx,londonCanvas); 
 }

 function showThailand(){
 	var thailandCanvas = document.getElementById('canvas8');
 	var thailandCtx = thailandCanvas.getContext('2d');
 	showClock(thailandDate,thailandCtx,thailandCanvas); 
 }

 function showAmsterdam(){
 	var amsterdamCanvas = document.getElementById('canvas9');
 	var amsterdamCtx = amsterdamCanvas.getContext('2d');
 	showClock(amsterdamDate,amsterdamCtx,amsterdamCanvas); 
 }

 function showDuabi(){
 	var dubaiCanvas = document.getElementById('canvas10');
 	var dubaiCtx = dubaiCanvas.getContext('2d');
 	showClock(dubaiDate,dubaiCtx,dubaiCanvas); 
 }

 function showParis(){
 	var parisCanvas = document.getElementById('canvas11');
 	var parisCtx = parisCanvas.getContext('2d');
 	showClock(parisDate,parisCtx,parisCanvas); 

 }

 function showTurkey(){
 	var turkeyCanvas = document.getElementById('canvas12');
 	var turkeyCtx =  turkeyCanvas.getContext('2d');
 	showClock(turkeyDate,turkeyCtx, turkeyCanvas); 
 }

 function showSpain(){
 	var spainCanvas = document.getElementById('canvas13');
 	var spainCtx =  spainCanvas.getContext('2d');
 	showClock(spainDate,spainCtx, spainCanvas); 
 }

 function showTaiwan(){
 	var taiwanCanvas = document.getElementById('canvas14');
 	var taiwanCtx =   taiwanCanvas.getContext('2d');
 	showClock(taiwanDate, taiwanCtx, taiwanCanvas); 
 }

 function showNewZealand(){
 	var newZealandCanvas = document.getElementById('canvas15');
 	var newZealandCtx =   newZealandCanvas.getContext('2d');
 	showClock(newZealandDate, newZealandCtx, newZealandCanvas); 
 }

 function showAustria(){
 	var austriaCanvas = document.getElementById('canvas16');
 	var austriaCtx =   austriaCanvas.getContext('2d');
 	showClock(austriaDate, austriaCtx, austriaCanvas); 
 }

 function showCzech(){
 	var czechCanvas = document.getElementById('canvas17');
 	var czechCtx =   czechCanvas.getContext('2d');
 	showClock(czechDate, czechCtx, czechCanvas); 
 }

 function showMalaysia(){
 	var malaysiaCanvas = document.getElementById('canvas18');
 	var malaysiaCtx =   malaysiaCanvas.getContext('2d');
 	showClock(malaysiaDate, malaysiaCtx, malaysiaCanvas); 
 }

 function showNigeria(){
 	var nigeriaCanvas = document.getElementById('canvas19');
 	var nigeriaCtx =   nigeriaCanvas.getContext('2d');
 	showClock(nigeriaDate, nigeriaCtx, nigeriaCanvas); 
 }

 function showClock(date, ctx, canvas) {

            // Canvas Set Up
            
            
            var angle;
            var secHandLength = 80;

            var nightHours = date.getHours();


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

                if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){ 
                    ctx.fillStyle= "#000000";   
                } else {
                    ctx.fillStyle= "#ffffff";
                }
                    ctx.beginPath();
                    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 , 0, Math.PI * 2);
                    ctx.fill();

            }
            
            function CENTER_DIAL() {
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

                    if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
                        ctx.strokeStyle = '#ffffff';
                    }else{
                        ctx.strokeStyle = '#000000';
                    }

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

                //color the hand
                if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
                    ctx.strokeStyle = '#ffffff'; 
                }else{
                    ctx.strokeStyle = '#000000'; 
                }
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

                //color the hand
                if ((nightHours>=0 && nightHours<=6) || (nightHours>=18 && nightHours<=23)){
                    ctx.strokeStyle = '#ffffff'; 
                }else{
                    ctx.strokeStyle = '#000000'; 
                }
                ctx.stroke();
            }
        }
    

