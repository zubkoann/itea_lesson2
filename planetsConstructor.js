document.addEventListener('DOMContentLoaded', () => {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    class Planet {
        constructor(name) {////public
            this.name = name;
            this.population = randomPopulation(1000, 10000);

            function randomPopulation(max, min) {
                return Math.floor(Math.random() * (max - min)) + min;
            }

            this.rotatePlanet();
        }

        rotatePlanet() {
            let {population, name} = this;
            let populationMultiplyRate = getRandomInt(0, 10);//privat
            let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
            console.log(`Было на планете ${this.name} ${this.population}`)
            if ((randomNumber % 2) == 0) {
                growPopulation(population, name);
            } else {
                Cataclysm(population, name);
            }
            function growPopulation(population, name) {
                let a = populationMultiplyRate * 100;
                population = population + a;
                console.log(`Сейчас на планете ${name}  ${population}, на планете добавилось ${a} человек`)
            }

            function Cataclysm(population, name) {
                let a = populationMultiplyRate * 10000;
                population = population - a;
                console.log(`Сейчас на планете ${name} ${population} от катаклизма погибло   ${a} человек на планете`)
            }
        }
    }

    new Planet('mars');

})