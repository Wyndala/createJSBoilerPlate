/**
 * Created by FamMichael on 25.12.13.
 */

function init() {
    var canvas = document.createElement('canvas');
    canvas.width = this.getWidth();
    canvas.height = this.getHeight();
    document.body.appendChild(canvas);

    stage = new createjs.Stage(canvas);

    createjs.Ticker.setFPS(5);
    createjs.Ticker.on('tick', tick);
}

function tick() {
    stage.update();
}