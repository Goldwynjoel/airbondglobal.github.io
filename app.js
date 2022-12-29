
var images = ['images/ARTS.jpg','images/cardd.jpg','images/cat.jpg','images/LP.jpg','images/SMM.jpg','images/cont.jpg'];
var i =0;
function slideshow() {
    document.getElementById("LGS").src=images[i];

    if(i<images.length-1){
        i++;
    }
    else {
            i=0;
    }
    setTimeout("slideshow()" , 2000);
}
window.onload = slideshow;