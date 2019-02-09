var s = Snap("#svg2");
var tux = Snap.load("cloudSet.svg", function(loadedFragment) {
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


});

//var lid = s.selectAll(".EyeBlink");
