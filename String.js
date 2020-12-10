class Chain{
    constructor(bodyA,bodyB,bodyC){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            bodyC:bodyC,
            stiffness:0.05,
            length:5        
            }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

        this.chain1 = Constraint.create(options);
        World.add(world,this.chain1);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointA1 = this.chain1.bodyA.position;
        var pointB = this.chain.bodyB.position;
        var pointC = this.chain1.bodyC.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        line(pointA1.x,pointA1.y,pointC.x,pointC.y);
        
    }
}