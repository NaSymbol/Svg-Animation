var s = Snap("#svg2");
var tux = Snap.load("snail.svg", function(loadedFragment) {
    s.append(loadedFragment);

    var lid = s.select("#leftEyeLidsnail");


    var start = "m -3905.5722,10856.694 c 0,5.307 -63.0486,82.243 -140.823,82.243 -77.7744,0 -140.0358,-77.057 -140.823,-82.243 -6.3745,-41.994 63.0486,-78.719 140.823,-78.719 77.7744,0 140.823,35.244 140.823,78.719 z";
    var end = "m -3905.5722,10856.694 c 0,5.307 -63.0486,-62.584 -140.823,-62.584 -77.7744,0 -140.0358,67.77 -140.823,62.584 -6.3745,-41.994 63.0486,-78.719 140.823,-78.719 77.7744,0 140.823,35.244 140.823,78.719 z";

    function blink() {
        lid.animate({
            d: start
        }, 200, function() {
            lid.animate({
                d: end
            }, 200, function() {});
        });
    };

    var id5 = setInterval(blink, 7000);

});

//var lid = s.selectAll(".EyeBlink");
