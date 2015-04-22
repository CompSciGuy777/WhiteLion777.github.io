var canvas = document.getElementById('my_canvas');
var context = canvas.getcontext("2d");
var stage = createjs.stage(canvas);

var circle = new.createjs.shape();
circle.graphics.beginfill("blue").draw(0,0,40);
circle.x = circle.y = 50;

stage.addchild(circle);

stage.update();
