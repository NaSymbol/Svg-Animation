var s = Snap("#svg");

//var lid = s.select("#path3941");
//var lid = s.select("#path22394");
var lid = s.selectAll(".EyeBlink");



lid.attr({
});

var eyeOpen = 'm 585.84844,350.96849 c 0,0.8252 -17.30458,-7.73103 -38.65087,-7.73103 -21.34628,0 -38.43479,8.53739 -38.65085,7.73103 -1.74958,-6.52952 17.30457,-12.23979 38.65085,-12.23979 21.34629,0 38.65087,5.47994 38.65087,12.23979 z';
var eyeClosed = 'm 585.84844,350.96849 c 0,0.8252 -17.30458,12.26897 -38.65087,12.26897 -21.34628,0 -38.43479,-11.46261 -38.65085,-12.26897 -1.74958,-6.52952 17.30457,-12.23979 38.65085,-12.23979 21.34629,0 38.65087,5.47994 38.65087,12.23979 z';


/*
function blink(){
 lid.animate({d:eyeOpen},300};
};
*/

function blink(){
 lid.animate({d:'m 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'}, 200, function()
             {lid.animate({d:'m 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'}, 300);
             });
};
// Recall blink method once every 3 seconds

setInterval(blink, 3000);