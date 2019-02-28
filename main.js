class Mammal
{
    constructor(name)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }
}


class Dog extends Mammal 
{
    constructor(name, wiek)
    {
        super(name);
        this.wiek = wiek; 
    }

    getWiek()
    {
        return this.wiek;
    }

    setWiek(val)
    {
        this.wiek = val;
    }

    getName()
    {
        return this.name + " z pyskiem"
    }
}

let ssak = new Mammal('super ssak');
let dog = new Dog('Reksio', 5);
dog.setWiek(4);

console.log(ssak.getName() + '<-- Ssak');

console.log(dog.getName() + '<-- Pies');
