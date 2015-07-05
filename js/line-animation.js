$(document).ready(function() {
    console.log( "ready!" );
    
    // SVG Paths
    var paths = {
        line : 'M-11.3,45.2c5.8,5.2,11.7,8.9,17.6,8.1c17.3-2.2,21.6-33.9,37.5-33.9s36,33.1,51.9,33.9 c15.9,0.7,30.3-33.9,30.3-33.9s-1.4,160,41.8,161.4c21.8,0.7,30.3-41.8,44.7-50.4c14.4-8.6,21.6,4.3,38.9,1.4s18.7-23.1,34.6-31.7 s32,8.6,45.2,5.8s15.3-51.9,35.5-57.6c20.2-5.8,38.9,28.8,56.2,27.4c17.3-1.4,23.1-25.9,38.9-30.3s28.8,20.2,44.7,21.6 c15.9,1.4,13-34.6,37.5-33.1c8.5,0.5,77.1,66.7,170.7,142.7'
    };

    // Initialize an SVG node & add it to the DOM
    var svg = $('#line-animation');

    // Initialize the Snap svg canvas using the svg DOM node (not the jquery object)
    var paper = Snap( svg[0] );
    var line = paper.path(paths.line);
    line.attr({class: 'line'});
    
    //var circleInner = paper.circle(126, 19.4, 3).attr({class: 'circleInner'});
    var circleOuter = paper.circle(126, 19.4, 0).attr({class: 'circleOuter'});
    //var dot = paper.group(circleInner, circleOuter).attr({id: 'dot2'});
    
    // Animate the dot
    
    setTimeout(function(){ circleOuter.animate({r: 9}, 1000, mina.elastic); }, 500);
    
    
});