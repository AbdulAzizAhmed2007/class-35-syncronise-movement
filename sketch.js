var hynopticBall;
var database,position;
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    hynopticBall = createSprite(250,250,10,10);
    hynopticBall.shapeColor = "red";
    var hynopticBallposition = database.ref('ball/position')
    hynopticBallposition.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    position = data.val()
    hynopticBall.x = position.x
    hynopticBall.y = position.y
}
function showerror(){
    console.log("error in writting in the database")
}
function writePosition(x,y){
database.ref('ball/position').set({
    'x':position.x+x,
    'y':position.y+y
})

}