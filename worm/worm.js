var s = Snap("#svg2");
var tux = Snap.load("worm.svg", function(loadedFragment) {
    s.append(loadedFragment);

    var lid = s.selectAll("#leftEyeLid4, #rightEyeLid4");


    function blink() {
        lid.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 200, function() {
            lid.animate({
                d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
            }, 300, function() {});
        });
    };


    var id1 = setInterval(blink, (Math.round(Math.random() * 10000 + 2000)));


});

//var lid = s.selectAll(".EyeBlink");
