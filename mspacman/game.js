/* Lab 5 */

function drawPacman(ctx) {
    var img = new Image();
        img.src = "pacman10-hp-sprite.png";
        img.addEventListener("load", function() {
            ctx.drawImage(img,320,0,458,137,0,0, 458, 137);
            ctx.drawImage(img, 70,18,26,24, 25, 55, 26, 24);
        }, false);

}


function init() {
 canvas = document.getElementById('game_canvas');
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
        }
        else {
            alert('Sorry, canvas is not supported on your browser!');
        }
        drawPacman(ctx);
}


