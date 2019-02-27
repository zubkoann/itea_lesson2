document.addEventListener('DOMContentLoaded', () => {
    let superPowers = [
        {
            name: 'Invisibility',
            spell: function () {
                return `${this.name} hide from you`
            }
        },
        {
            name: 'superSpeed',
            spell: function () {
                return `${this.name} running from you`
            }
        },
        {
            name: 'superSight',
            spell: function () {
                return `${this.name} see you`
            }
        },
        {
            name: 'superFroze',
            spell: function () {
                return `${this.name} will froze you`
            }
        },
        {
            name: 'superSkin',
            spell: function () {
                return `${this.name} skin is unbreakable`
            }
        },
    ];

    class SuperDude{
        constructor({name, spell}) {
            this.name = name;
            this.spell = spell;
        }
    }


    class Dude {
        constructor(name, superPowers) {
            this.superPowers = superPowers;
            Object.defineProperty(
                this,
                "name",
                {
                    value: name,
                    configurable: true,
                    writable: false,
                    enumerable: false,

                })
            this.render();

        };

        render() {
            this.superPowers.forEach(item => {
                new SuperDude(item);
                Object.defineProperty(
                    this,
                    item.name,
                    {
                        value: () =>  item.spell(),
                        configurable: true,
                        writable: false,
                        enumerable: false,

                    })

            })
        }

    };

    let Luther = new Dude('Luther', superPowers);

    // Тестирование: Методы должны работать и выводить сообщение.
    console.log(Luther);
     console.log(Luther.superSight());
     console.log(Luther.superSpeed());
     console.log(Luther.superFroze());
     console.log(Luther.Invisibility());
     console.log(Luther.superSkin());

})