class Circle {

    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2

    }
    set diameter( diameter ) {
        this.radius = diameter / 2
      }

    get circumference(){

        return Math.PI * this.diameter

    }
    set circumference(newCirc){
        // console.log(newCirc)
       this.diameter = newCirc / Math.PI
        
    }

    get area(){

        return Math.PI *( this.radius * this.radius)

    }
    set area(newArea){
        this.newArea = Math.PI *( this.radius * this.radius)
        
    }
}