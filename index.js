// Add your Circle class here

class Circle {

    constructor(radius){
        this.radius = radius
    }
    get area(){
        return this.radius ** 2 * Math.PI
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return this.diameter*Math.PI
    }
    set diameter(newD){
       return this.radius = newD/2
    }
    set circumference(newCirc){
       return  this.radius = (newCirc/Math.PI)/2
    }
}