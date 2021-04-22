const {
    Shape,
    Triangle,
    Circle
  } = require('../homework');
  
  describe('Repetify', () => {
   it('debería retornar un string repetido', () => {
     expect("hola".repetify(3)).toBe('holaholahola');
   });
   it('debería retornar un string vacio', () => {
       expect("hola".repetify(-1)).toBe('');
       expect("hola".repetify(0)).toBe('');
       expect("hola".repetify("a")).toBe("");
    });
  });

  describe('Triangle', () => {
    const t = new Triangle(1, 2, 3);
    it('debería ser una instancia de Triangle', () => {
      expect(t instanceof Triangle).toBe(true);
    });
    it('debería tener como prototype Shape', () => {
        expect(Shape.prototype.isPrototypeOf(t)).toBe(true);
     });
    it('debería devolver el perimetro', () => {
        expect(t.getPerimeter()).toBe(6);
    });
    it('debería devolver el type', () => {
        expect(t.getType()).toBe("Triangle");
    });
     
   });
   
   describe('Circle', () => {
    const t = new Circle(2);
    it('debería ser una instancia de Circle', () => {
      expect(t instanceof Circle).toBe(true);
    });
    it('debería tener como prototype Shape', () => {
        expect(Shape.prototype.isPrototypeOf(t)).toBe(true);
     });
    it('debería devolver el perimetro', () => {
        expect(t.getPerimeter()).toBe(12.566370614359172);
    });
    it('debería devolver el type', () => {
        expect(t.getType()).toBe("Circle");
    });
     
   });
