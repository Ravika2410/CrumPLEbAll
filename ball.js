class ball
{
    constructor(x,y,w)
    {
        var options=
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
             density:1.2
         }
        this.width=w;
        this.body=Matter.Bodies.circle(x,y,this.width,options);
        Matter.World.add(world,this.body);
    }
    display()
    {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.width);
    }
}