
function preload(){

}
function setup(){
    canvas=createCanvas (600,400);
    canvas.position(110,250);
    video =createCapture(VIDEO);
    video.hide();
tint_color="";
}



function draw(){
    image(video,90,80 ,400 ,250);
    tint(tint_color);
    fill("orange");
    stroke("orange");
    circle(50,50,40)
    circle(50,350,40)
    circle(550,350,40)
    circle(550,50,40)
    fill("red");
    stroke("red")
    rect(90,40,400,20)
    rect(90,350,400,20)
    rect(40,70,20,250)
    rect(540,70,20,250)
}


function take_snapshot(){
    save('student_name.png');
}

 function filter_tint(){
    tint_color =document.getElementById("color_name").value;
}
