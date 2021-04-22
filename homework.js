//Repetify

String.prototype.repetify = function(entero){
    if(typeof entero !== "number" || entero <= 0) return ""
    return this.toString().repeat(entero)
}

// console.log("hola".repetify(2))

//Shapes

const Shape = function(){
    this.type 
}

Shape.prototype.getType = function(){
    return this.type
}

const Triangle = function(a,b,c){
    this.type = "Triangle"
    this.a = a
    this.b = b
    this.c = c
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.getPerimeter = function(){
    return this.a+this.b+this.c
}


// var t = new Triangle(1, 2, 3);
// console.log( t instanceof Triangle )
// console.log( Shape.prototype.isPrototypeOf(t))
// console.log( t.getPerimeter())
// console.log( t.getType())

const Circle = function(a){
    this.type = "Circle"
    this.a = a
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.getPerimeter = function(){
    return this.a * 2 * Math.PI
}

// var c = new Circle(2);
// console.log( c instanceof Circle)
// console.log( Shape.prototype.isPrototypeOf(c))
// console.log( c.getPerimeter())
// console.log( c.getType())



module.exports = {
    Shape, 
    Triangle,
    Circle
}
