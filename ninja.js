// construye la clase ninja
class Ninja {
    constructor(nombre, velocidad = 3, salud = 0, fuerza = 3) {
      this.nombre = nombre;
      this.salud = salud;
      this.velocidad = velocidad;
      this.fuerza = fuerza;
    }
    sayName() {
      console.log(this.nombre);
    }
    showStats() {
      const { nombre, salud, fuerza, velocidad } = this;
      return {
        nombre,
        salud,
        fuerza,
        velocidad,
      };
    }
    drinkSake() {
      this.salud += 10;
    }
  }
  class Sensei extends Ninja {
      constructor (sabiduria = 10) {
          this.sabiduria = sabiduria;
      }
      speakWisdom (){

      }

      drinkSake (){

      }
  }
  
 