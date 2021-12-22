img="";
objects=[];
status=true;
function preload(){
img=loadImage("ok1.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innetHTML="Status: Detecting Objects";

}
function draw(){
    image(img ,0 ,0 ,640,420);
    if(status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        for(i=0;i<objects.length; i++){
    
            document.getElementById("status").innerHTML="Status: Objects Detected!";
            document.getElementById("num_of_obj").innerHTML="Number Of Objects Detecte Are: "+objects.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    
}

}
 function modelLoaded(){
     console.log("MODEL LOADED");
     status=true;
     objectDetector.detect(img,gotResult);
 }
 function gotResult(error,results){
     if(error){
         console.log(error);
     }
console.log(results);
objects=results;
 }