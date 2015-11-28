function init() {
	var canvas = document.getElementById("my_canvas");
	var stage = new createjs.Stage(canvas)
	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 25);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);
	
	createjs.Tween.get(circle, {loop: false})
		.to({x: 200 }, 1000, createjs.Ease.getPowInOut(4))
		.to({ alpha: 0, y: 75 }, 500, createjs.Ease.getPowInOut(2))
		.to({ alpha: 0, y: 125 }, 100)
		.to({ alpha: 1, y: 100 }, 500, createjs.Ease.getPowInOut(2))
		.to({x: 100 }, 400, createjs.Ease.getPowInOut(2))

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);
}
