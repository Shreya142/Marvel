var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update()
{
    fabric.Image.fromURL("captainMarvel.png", function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function newImage(get_Image)
{
  fabric.Image.fromURL(get_Image,function(Img){
      block_image_object=Img;
      block_image_object.scaleToWidth(block_image_width);
      block_image_object.scaleToHeight(block_image_height);
      block_image_object.set({top:player_y, left:player_x});
      canvas.add(block_image_object);    
  });
}
window.addEventListener("keydown",my_Keydown);
function my_Keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80'){
    console.log("p and shiftKey pressed together");
    block_image_width=block_image_width + 10;
    block_image_height=block_image_height + 10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keyPressed=='77'){
    console.log("m and shiftKey pressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if (keyPressed=='38'){
    up();
    console.log(up);
}
if (keyPressed=='40'){
    down();
    console.log(down);
}
if (keyPressed=='37'){
    left();
    console.log(left);
}
if (keyPressed=='39'){
    right();
    console.log(right);
}
if(keyPressed=='76'){
    newImage('marvelslegs.jpg');
    console.log("l");
}
if(keyPressed=='82'){
    newImage('marvelsrighthand.jpg');
console.log("r");
}
if(keyPressed=='65'){
    newImage('marvelslefthand.jpg');
console.log("a");
}
if(keyPressed=='72'){
    newImage('marvelstorso.jpg');
console.log("t");
}
if(keyPressed=='84'){
    newImage('marvelshead.jpg');
console.log("h");
}
}



