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
  
//   describe('url repo github', function() {
//    it('debería retornar un string', function() {
//      expect(typeof urlRepo()).toEqual('string');
//    });
  
//    it('debería devolver un repo válido de github', function() {
//     expect(urlRepo().includes('https://github.com/')).toBe(true);
//     expect(urlRepo().includes('.git')).toBe(true);
//    });
//   });
  
//   describe('clase en ES6', function() {
//     it('debería retornar una clase', function() {
//       expect(typeof crearClase()).toEqual('function');
//     });
  
//     it('debería devolver la cantidad de instancias adecuada', function() {
//      const Clase = crearClase()
//      new Clase()
//      new Clase()
//      new Clase()
//      expect(Clase.contadorInstancias).toEqual(3);
//     });
  
//     it('Los métodos deberían devolver -1 para un texto no válido', function() {
//       const Clase = crearClase()
//       const objeto = new Clase()
//       expect(objeto.contadorPalabras()).toEqual(-1);
//       expect(objeto.hayNumeros()).toEqual(-1);
//      });
  
//      it('El método contadorPalabras debe devolver un valor adecuado', function() {
//       const Clase = crearClase()
  
//       let objeto = new Clase('Hola mundo como están')
//       expect(objeto.contadorPalabras()).toEqual(4);
      
//       objeto = new Clase('')
//       expect(objeto.contadorPalabras()).toEqual(0);
      
//       objeto = new Clase('Hola')
//       expect(objeto.contadorPalabras()).toEqual(1);
//      });
  
//      it('El método hayNumeros debe devolver un valor adecuado', function() {
//       const Clase = crearClase()
  
//       let objeto = new Clase('Hola mundo como están')
//       expect(objeto.hayNumeros()).toBe(false);
      
//       objeto = new Clase('')
//       expect(objeto.hayNumeros()).toBe(false);
      
//       objeto = new Clase('Hola mundo como están 1')
//       expect(objeto.hayNumeros()).toBe(true);
      
//       objeto = new Clase('123')
//       expect(objeto.hayNumeros()).toBe(true);
//      });
//   });
  