var s = Snap("#svg");
var clouds1 = s.select("#g5023");

clouds1.attr({
 //transform:"translate(-69.156434,-642.06386)"

})

function cloudMove() {
clouds1.animate({transform:"translate(-739.02395,-483.60571)" },180000,function(){
clouds1.attr({transform:"translate(715.62186,-483.60571)"
})
});
}




setInterval(cloudMove,0);

/**


var paper = Snap('svg');
var circle = paper.circle(10,10,10);
var states = [{
    fill: '#bada55',
    cx: 10,
    cy: 10
}, {
    fill: '#55bada',
    cx: 100
}, {
    fill: '#ba55da',
    cy: 100
}, {
    fill: '#000000',
    cx: 10
}];

(function animateCircle(el, i) {
    el.animate(states[i], 1000, function() {
        animateCircle(el, ++i in states ? i : 0);
    })
})(circle, 0);


**/
