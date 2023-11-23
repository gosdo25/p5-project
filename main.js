function setup(){
    canvas=createCanvas(650,420)
    canvas.position(110,250);

   
   

}

function draw(){
    background(255, 204, 0);
    fill('#fae');
    circle(100,300,100);
    fill('red')
    ellipse(100,270,70,70);
    fill('red')
    ellipse(100,220,70,70);
    fill('red')
    ellipse(100,170,70,70);
    fill('#fae');
    ellipse(100,120, 100, 100);
    fill('#fae');
    ellipse(540,120, 100, 100);
    fill('red');
    ellipse(540,170,70,70);
    fill('red');
    ellipse(540,220,70,70);
    fill('red');
    ellipse(540,270,70,70);
    fill('#fae');
    ellipse(540,300, 100, 100);
    size(200, 300);

    
    strokeWeight(10);
    stroke(0, 128, 0);
    line(100, 100, 100, 300);
    

    ellipse(105, 200, 10, 10);
    ellipse(95, 225, 10, 10);
    
   
    strokeWeight(1);
    stroke(0);
    

    fill(255, 100, 0);
    ellipse(50, 50, 100, 100);
    ellipse(150, 50, 100, 100);
    ellipse(50, 150, 100, 100);
    ellipse(150, 150, 100, 100);
   
    fill(255, 128, 0);
    ellipse(100, 100, 100, 100);
    
    
}
function take_snapshot(){
  save("mypic.png");
}

