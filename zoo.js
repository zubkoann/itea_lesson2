document.addEventListener('DOMContentLoaded', () => {
  class Animal {
    constructor(name, phrase, foodType) {
      this.name = name;
      this.phrase = phrase;
      this.foodType = foodType;
    }
    eatSomething() {
      console.log(`${this.name} ест ${this.foodType} `)
    }
  }

  class Zoo {
    constructor(name) {
      this.name = name;
      this.animalcount = 0;
      this.zones = {
        mammals: [],
        birds: [],
        fishes: [],
        reptile: [],
        others: []
      }
      this.addAnimal = this.addAnimal.bind(this)
      this.removeAnimal = this.removeAnimal.bind(this)
      this.getAnimal = this.getAnimal.bind(this)
      this.countAnimals = this.countAnimals.bind(this)
    }

    addAnimal(animalObj) {
      let objZone = this.zones;
      for (var key in objZone) {
        if (animalObj.zone == key) {
          objZone[key].push(animalObj)
          console.log(`${animalObj.name} добавлен в zone ${key}`)
        }
      }

    }

    removeAnimal(animalName) {
      let objZone = this.zones;
      for (var key in objZone) {
        objZone[key].forEach((el, i) => {
          if (el.name == animalName) {
            objZone[key].splice(i, i + 1)
            console.log(`${el.name} удален`)
          }
        })
      }
    }


    getAnimal(type, value) {
      let objZone = this.zones;
      for (var key in objZone) {
        objZone[key].forEach((el, i) => {
          if (el.name == value || el.type == value) {
            console.log(el)
          }
        })
      }
    }

    countAnimals() {
      let objZone = this.zones;
      for (var key in objZone) {
        objZone[key].forEach((el) => {
          if(el) this.animalcount++;
        })
      }

    }
  }


  class Mammals extends Animal {
    constructor(name, phrase, foodType, speed) {
      super(name, phrase, foodType);
      this.zone = 'mammals';
      this.type = 'wolf';
      this.run = function () {
        console.log(`${this.type} ${this.name} run with speed ${this.speed} km/h`);
      };
      this.speed = speed;
    }
  }


  class Birds extends Animal {
    constructor(name, phrase, foodType, speed) {
      super(name, phrase, foodType);
      this.zone = 'birds';
      this.type = 'small';
      this.fly = function () {
        console.log(`${this.type} ${this.name} fly with speed ${this.speed} km/h`);
      };
      this.speed = speed;
    }
  }

  class Fishes extends Animal {
    constructor(name, phrase, foodType, speed) {
      super(name, phrase, foodType);
      this.zone = 'fishes';
      this.type = 'piranya';
      this.run = function () {
        console.log(`${this.type} ${this.name} run with speed ${this.speed} km/h`);
      };
      this.speed = speed;
    }
  }

  class Reptile extends Animal {
    constructor(name, phrase, foodType, speed) {
      super(name, phrase, foodType);
      this.zone = 'reptile';
      this.type = 'crocodile';
      this.run = function () {
        console.log(`${this.type} ${this.name} run with speed ${this.speed} km/h`);
      };
      this.speed = speed;
    }
  }


  let Dex = new Mammals('Dex', 'woof', 'herbivore', 11);
  let Rex = new Mammals('Rex', 'woof', 'herbivore', 15);
  let Fish = new Fishes('Fish', 'Fishhhhh', 'herbivore', 1);
  let Rept = new Reptile('Reptile', 'Reptileeeeee', 'herbivore', 1);
  let Birdsss = new Birds('Birdsfff', 'Birds', 'herbivore', 1);
  let myZoo = new Zoo('myZoo');
  myZoo.addAnimal(Dex);
  myZoo.addAnimal(Rex);
  myZoo.addAnimal(Fish);
  myZoo.addAnimal(Rept);
  myZoo.addAnimal(Birdsss);
  myZoo.removeAnimal('Rex');
  myZoo.getAnimal('type', 'crocodile');
  myZoo.countAnimals()
  console.log(myZoo)

})
