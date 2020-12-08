// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  get circumference() {
     
    return pi * (this.radius * 2);
  }
  
  get area() {
    return pi * (this.radius * this.radius);
  }
  
}







