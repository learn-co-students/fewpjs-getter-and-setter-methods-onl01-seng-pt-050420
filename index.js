class Circle {

    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2

    }
    set diameter(newRadius){
        this.newradius = this.newRadius * 2
        
    }

    get circumference(){

        return Math.PI * this.diameter

    }
    set circumference(newCirc){
        // console.log(newCirc)
        Math.PI * (this.newCirc ** 2)
        
    }

    get area(){

        return Math.PI *( this.radius * this.radius)

    }
    set area(newArea){
        this.newArea = Math.PI *( this.radius * this.radius)
        
    }
}