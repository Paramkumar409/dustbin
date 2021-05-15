class paper {
    constructor(x,y,r){
        var options={
            restitution : 0.4,density: 0.5,friction: 0.6
                
        }
        this.body= Bodies.circle(x,y,r,options)
        this.image=loadImage("paper.png")
        this.r=r
        World.add(world,this.body)

    }
    display(){
        push()
			translate(this.body.position.x,this.body.position.y);
			imageMode(RADIUS);
			image(this.image,0,0,this.r,this.r)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
    }
}