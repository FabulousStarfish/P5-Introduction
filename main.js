function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_colour="";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_colour);
    fill(100,0,0);
    noFill();
    stroke(100,0,0);
    circle(330,330,600)
}
function filter_tint(){
    tint_colour=document.getElementById("filter_colour").value;
    document.getElementById("filter_colour").value="";
}
function take_snapshot(){
    save('Tinted_Selfie');
}