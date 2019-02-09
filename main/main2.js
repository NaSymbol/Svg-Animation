var s = Snap("#svg2");
var tux = Snap.load("main.svg", function(loadedFragment) {
    s.append(loadedFragment);

    var cloudsA = s.select("#cloudsA");
    var cloudsB = s.select("#cloudsB");

    function cloudMove() {
    cloudsA.animate({transform:"translate(-1559.8771,-365.18296)" },180000,function(){
    cloudsA.attr({transform:"translate(720.88162,-365.18296)"
    })
    });
    }

    function cloudMoveB() {
    cloudsB.animate({transform:"translate(-1470.9304,-353.81515)" },390000,function(){
    cloudsB.attr({transform:"translate(713.83062,-353.81515)"
    })
    });
    }

    //need to clean this up.
        setTimeout(cloudMoveB, 10);
        setInterval(cloudMoveB,200000);

//need to clean this up.
//the first run the animation needs a shorter time for it.
    setTimeout(cloudMove, 10);
    setInterval(cloudMove, 390090);



    var grass = s.select("#path11463");
    var grassShadow = s.select("#path11493");
    var grassF1Leaf = s.select("#path11465");
    var grassF2Leaf = s.select("#path11479");
    var grassF3Leaf = s.select("#path11467");
    var grassF4Leaf = s.select("#path11475");
    var grassF5Leaf = s.select("#path11469");
    var grassF6Leaf = s.select("#path11477");
    var grassF7Leaf = s.select("#path11471");
    var grassF8Leaf = s.select("#path11481");


    var grassF1LeafStart = "m -406.95029,1313.0292 c -2.76092,-10.9327 8.20779,-30.6909 10.98541,-33.2719 -5.8239,10.9403 -9.92033,21.8556 -10.98541,33.2719 z";
    var grassF1LeafEnd = "m -406.95029,1313.0292 c -2.76092,-10.9327 1.51553,-29.3019 2.14658,-32.388 -0.89941,11.5716 -1.0815,20.9717 -2.14658,32.388 z";

    var grassF2LeafStart = "m -402.5,1309.8622 c -2.2982,-12.3662 3.11212,-18.2572 6.33928,-25.9821 -3.37442,6.8738 -5.81409,15.0719 -6.33928,25.9821 z";
    var grassF2LeafEnd = "m -402.5,1309.8622 c -2.2982,-12.3662 -2.3625,-16.9945 -1.66072,-25.9821 0.16111,7.6314 2.18591,15.0719 1.66072,25.9821 z";

    var grassF3LeafStart = "m -400.00549,1313.7868 c 1.29935,-13.5188 6.497,-24.6098 10.48034,-34.9134 -3.54625,11.5322 -7.5327,22.184 -10.48034,34.9134 z";
    var grassF3LeafEnd = "m -400.00549,1313.7868 c 1.29935,-13.5188 0.56235,-23.9785 4.54569,-34.2821 -2.15729,12.0373 -1.59805,21.5527 -4.54569,34.2821 z";

    var grassF4LeafStart = "m -389.10715,1287.7193 c -1.67807,5.8226 -3.32721,11.6423 -2.67857,17.2322 z";
    var grassF4LeafEnd = "m -393.02149,1287.088 c -0.84659,5.7038 0.17818,17.6173 -0.65827,23.4193 2.27413,-8.0633 0.84495,-15.6636 0.65827,-23.4193 z";

    var grassF5LeafStart = "m -391.54546,1313.0292 c -1.20314,-4.5606 5.72224,-21.5538 6.7554,-20.14 -3.46813,6.3658 -5.64379,13.1009 -6.7554,20.14 z";
    var grassF5LeafEnd = "m -391.54546,1313.0292 c -1.20314,-4.5606 3.32313,-13.3463 3.72494,-17.4883 -0.18513,7.1234 -2.61333,10.4492 -3.72494,17.4883 z";

    var grassF6LeafStart = "m -386.16072,1310.3086 c -2.14799,-4.494 0.15892,-8.9881 0.80357,-13.4821 -0.55951,4.5524 -1.37569,9.1561 -0.80357,13.4821 z";
    var grassF6LeafEnd = "m -385.78191,1311.9501 c -2.14799,-4.494 -1.73512,-8.9881 -1.09047,-13.4821 -0.55951,4.5524 0.51835,9.1561 1.09047,13.4821 z";

    var grassF7LeafStart = "m -382.95916,1312.3978 c -0.67224,-1.9323 8.96923,-29.526 9.47017,-29.1682 z";
    var grassF7LeafEnd = "m -382.95916,1312.3978 c -0.67224,-1.9323 3.91846,-32.1777 4.4194,-31.8199 -1.02514,9.8208 -2.47076,22.3354 -4.4194,31.8199 z";

    var grassF8LeafStart = "m -377.5,1309.4158 c 0.51176,-1.298 2.19669,-13.9102 2.32143,-13.6607 -1.98073,4.2518 -2.21073,8.9414 -2.32143,13.6607 z";
    var grassF8LeafEnd = "m -378.25761,1313.3301 c 0.51176,-1.298 -0.0762,-24.0117 0.0486,-23.7622 -1.34938,4.3781 0.0621,19.0429 -0.0486,23.7622 z";

    var grassShadowStart = "m -405.32079,1309.4151 c -13.41438,12.4139 -14.27924,39.0147 -13.08348,39.3771 4.70597,-11.9171 7.08095,-24.6292 18.31073,-34.3213 -8.99211,11.9136 -11.55298,27.0759 -16.1355,41.2171 7.51666,-11.953 15.71712,-23.3401 21.71344,-36.5511 -3.69785,8.5639 -8.44123,16.9285 -7.05012,26.4625 3.08049,-9.7778 7.60529,-16.2855 13.04918,-20.7123 1.94928,-4.0742 -13.3854,36.5811 -12.6978,35.844 1.38757,-1.4873 22.14488,-48.2 24.44318,-46.6732 -6.78373,-1.8211 -7.60918,4.1466 -28.54963,-4.6428 z";
    var grassShadowEnd = "m -405.32079,1309.4151 c -13.41438,12.4139 -20.27924,35.0147 -19.08348,35.3771 10.76689,-7.8765 13.08095,-20.6292 24.31073,-30.3213 -8.99211,11.9136 -15.17417,23.2022 -20.1355,37.2171 9.53697,-10.059 19.71712,-19.3401 25.71344,-32.5511 -3.69785,8.5639 -8.18869,14.9082 -10.08058,22.6744 4.97453,-4.727 10.63575,-12.4974 16.07964,-16.9242 1.94928,-4.0742 -16.10351,31.1185 -15.09691,31.172 2.9028,0.1542 24.54399,-43.528 26.84229,-42.0012 -6.78373,-1.8211 -7.60918,4.1466 -28.54963,-4.6428 z";

    var grassStart = "m -407.80794,1314.2517 c -2.42159,-18.1159 13.86969,-39.1621 15.02206,-38.6791 -3.97125,12.1817 -10.24521,23.4899 -7.77166,38.1161 0.66667,-14.9113 8.35939,-28.2258 13.84352,-42.0423 -1.82859,14.0011 -2.76957,28.0021 -6.57143,42.0032 2.61033,-8.9555 4.28802,-18.4239 11.43764,-24.8827 -3.85983,9.4972 -4.52219,17.3956 -3.14992,24.2767 -1.09544,4.3817 13.007,-36.7173 13.06691,-35.7111 0.12091,2.0305 -6.39906,36.8693 -3.655,37.1581 -7.99527,1.5427 -10.48522,6.3385 -32.22212,-0.2389 z";
    var grassEnd = "m -407.80794,1314.2517 c -2.42159,-18.1159 2.10192,-34.9952 3.25429,-39.1842 1.71086,7.0047 1.52256,23.995 3.99611,38.6212 0.66667,-14.9113 1.22297,-27.4885 6.7071,-41.305 1.83321,12.7384 4.36685,27.2648 0.56499,41.2659 2.61033,-8.9555 4.32863,-18.0451 6.30122,-25.2615 0.68585,8.2345 0.61423,17.7744 1.9865,24.6555 -1.09544,4.3817 5.81092,-36.131 6.56183,-35.4586 2.26749,2.0305 0.10602,36.6168 2.85008,36.9056 -7.99527,1.5427 -10.48522,6.3385 -32.22212,-0.2389 z";

    function breeze(){
    grass.animate({d: grassEnd}, 1000, function(){grass.animate({d: grassStart}, 1000);})

    grassShadow.animate({d: grassShadowEnd}, 1000, function(){grassShadow.animate({d: grassShadowStart}, 1000);})

    grassF1Leaf.animate({d: grassF1LeafEnd}, 1000, function(){ grassF1Leaf.animate({d: grassF1LeafStart}, 1000);})
    grassF2Leaf.animate({d: grassF2LeafEnd}, 1000, function(){ grassF2Leaf.animate({d: grassF2LeafStart}, 1000);})
    grassF3Leaf.animate({d: grassF3LeafEnd}, 1000, function(){ grassF3Leaf.animate({d: grassF3LeafStart}, 1000);})
    grassF4Leaf.animate({d: grassF4LeafEnd}, 1000, function(){ grassF4Leaf.animate({d: grassF4LeafStart}, 1000);})
    grassF5Leaf.animate({d: grassF5LeafEnd}, 1000, function(){ grassF5Leaf.animate({d: grassF5LeafStart}, 1000);})
    grassF6Leaf.animate({d: grassF6LeafEnd}, 1000, function(){ grassF6Leaf.animate({d: grassF6LeafStart}, 1000);})
    grassF7Leaf.animate({d: grassF7LeafEnd}, 1000, function(){ grassF7Leaf.animate({d: grassF7LeafStart}, 1000);})
    grassF8Leaf.animate({d: grassF8LeafEnd}, 1000, function(){ grassF8Leaf.animate({d: grassF8LeafStart}, 1000);})
    }//end of function

    setInterval(breeze, 2000);

/// sun animations
var lidSun = s.selectAll("#leftEyeLid5, #rightEyeLid5");
var sunMove = s.select("#sunG");

function blinkSun() {
    lidSun.animate({
        d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
    }, 200, function() {
        lidSun.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 300, function() {});
    });
};

//head rotate
function headMoveSun() {
    sunMove.animate({
        transform: 'matrix(0.99876505,0.04968275,-0.04968275,0.99876505,1516.1719,-230.05011)'
    }, 2000, function() {
        sunMove.animate({
            transform: 'matrix(0.9942174,-0.10738605,0.10738607,0.9942174,1452.864,-295.98389)'
        }, 2000);
    });
};


var sunB = setInterval(blinkSun, (Math.round(Math.random() * 10000 + 2000)));
var sunR = setInterval(headMoveSun, 4090);

// snail move

var lidsnail = s.select("#leftEyeLidsnail");


var start = "m -3905.5722,10856.694 c 0,5.307 -63.0486,82.243 -140.823,82.243 -77.7744,0 -140.0358,-77.057 -140.823,-82.243 -6.3745,-41.994 63.0486,-78.719 140.823,-78.719 77.7744,0 140.823,35.244 140.823,78.719 z";
var end = "m -3905.5722,10856.694 c 0,5.307 -63.0486,-62.584 -140.823,-62.584 -77.7744,0 -140.0358,67.77 -140.823,62.584 -6.3745,-41.994 63.0486,-78.719 140.823,-78.719 77.7744,0 140.823,35.244 140.823,78.719 z";

function blinksnail() {
    lidsnail.animate({
        d: start
    }, 200, function() {
        lidsnail.animate({
            d: end
        }, 200, function() {});
    });
};

var id55 = setInterval(blinksnail, 7000);

// worm animation
var lidworm = s.selectAll("#leftEyeLid4, #rightEyeLid4");


function blinkworm() {
    lidworm.animate({
        d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
    }, 200, function() {
        lidworm.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 300, function() {});
    });
};


var idworm = setInterval(blinkworm, (Math.round(Math.random() * 10000 + 2000)));

//sunflower

var lidf = s.selectAll("#leftEyeLid, #rightEyeLid");
var lid2f = s.selectAll("#leftEyeLid2, #rightEyeLid2");
var lid3f = s.selectAll("#leftEyeLid3, #rightEyeLid3");
//var head = s.select("#g4874");
var headf = s.selectAll("#g4874, #flowerHead, #g5166")


// function for all blinking done.
 function blinkf() {
    lidf.animate({
        d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
    }, 200, function() {
        lidf.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 300, function() {});
    });
};

function blink2f() {
    lid2f.animate({
        d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
    }, 200, function() {
        lid2f.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 300, function() {});
    });
};

function blink3f() {
    lid3f.animate({
        d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,8.724 -27.36754,8.724 -15.11466,0 -27.21452,-8.1531 -27.3675,-8.724 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
    }, 200, function() {
        lid3f.animate({
            d: 'm 1023.3165,3774.8799 c 0,0.5842 -12.2529,-6.8903 -27.36754,-6.8903 -15.11466,0 -27.21452,7.4612 -27.3675,6.8903 -1.23883,-4.6234 12.25284,-8.6667 27.3675,-8.6667 15.11464,0 27.36754,3.8802 27.36754,8.6667 z'
        }, 300, function() {});
    });
};

function headMovef() {
    headf.animate({
        transform: 'matrix(0.9961947,-0.08715574,0.08715575,0.9961947,-25.80729,57.441359)'
    }, 1000, function() {
        headf.animate({
            transform: 'matrix(0.9961947,0.08715574,-0.08715575,0.9961947,30.71543,-54.973524)'
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
var id1flower = setInterval(blinkf, (Math.round(Math.random() * 10000 + 2000)));
var id2flower = setInterval(blink2f, (Math.round(Math.random() * 10000 + 2000)));
var id3flower = setInterval(blink3f, (Math.round(Math.random() * 10000 + 2000)));
var id5flower = setInterval(headMovef, 2120);


});

//var lid = s.selectAll(".EyeBlink");
