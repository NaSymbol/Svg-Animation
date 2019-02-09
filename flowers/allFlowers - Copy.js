var s = Snap("#svg2");
var tux = Snap.load("flower3.svg", function(loadedFragment) {
    s.append(loadedFragment);

    var lid = s.selectAll("#leftEyeLid, #rightEyeLid");
    var lid2 = s.selectAll("#leftEyeLid2, #rightEyeLid2");
    var lid3 = s.selectAll("#leftEyeLid3, #rightEyeLid3");
    //var head = s.select("#g4874");
    var head = s.selectAll("#g4874, #flowerHead, #g5166")


// function for all blinking done.
     function blink() {
        lid.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 200, function() {
            lid.animate({
                d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
            }, 300, function() {});
        });
    };

    function blink2() {
        lid2.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 200, function() {
            lid2.animate({
                d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
            }, 300, function() {});
        });
    };

    function blink3() {
        lid3.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 200, function() {
            lid3.animate({
                d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
            }, 300, function() {});
        });
    };

    function headMove() {
        head.animate({
            transform: 'matrix(0.99714566,-0.07550193,0.07550193,0.99714566,-23.857532,31.676027)'
        }, 1000, function() {
            head.animate({
                transform: 'matrix(0.99230385,0.1238268,-0.1238268,0.99230385,44.165258,-47.848673)'
            }, 1000);
        });

    };
//reusable funciton
    function animation(el, start, startTime, endTime, end){
      //this.el = el;
     el.animate({d: start}, startTime, function()
                 {el.animate({d:end}, endTime, function(){

                 });
                 });
    };
//use a fixed value to in next once
// var lidanimation = animation(newName, startfix,endFix, endTimefix);
    var id1 = setInterval(blink, (Math.round(Math.random() * 10000 + 2000)));
    var id2 = setInterval(blink2, (Math.round(Math.random() * 10000 + 2000)));
    var id3 = setInterval(blink3, (Math.round(Math.random() * 10000 + 2000)));
    var id5 = setInterval(headMove, 2090);

});

//var lid = s.selectAll(".EyeBlink");
