var images = ['images/time.jpg','images/sati.jpg','images/effect.jpg'];
var i =0;
function slideshow() {
    document.getElementById("images").src=images[i];

    if(i<images.length-1){
        i++;
    }
    else {
            i=0;
    }
    setTimeout("slideshow()" , 2000);
}
window.onload = slideshow;