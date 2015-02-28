/* Lab 5 */

function init() {
 canvas = document.getElementById('game_canvas');
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
        }
        else {
            alert('Sorry, canvas is not supported on your browser!');
        }
        var img = new Image();
        img.src = "pacman10-hp-sprite.png";
        img.addEventListener("load", function() {
        	ctx.drawImage(img,0,0);
  		// statement to draw the blue board
  		// statement to draw Ms. Pac-Man
		}, false);
}