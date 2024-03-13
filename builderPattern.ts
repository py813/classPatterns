class Pizza {
    size: number;
    sauce: boolean;
    cheese: boolean;
    pepperoni: boolean;
    sausage: boolean;
    ham: boolean;
    anchovies: boolean;
    pineapple: boolean;
    onions: boolean;

    setSize(size: number){
        this.size = size;
    }

    addSauce (sauce: boolean){
        this.sauce = sauce;
    }

    addCheese (cheese: boolean){
        this.cheese = cheese;
    }

    addPepperoni (pepperoni: boolean){
        this.pepperoni = pepperoni;
    }

    addSausage (sausage: boolean){
        this.sausage = sausage;
    }

    addHam (ham: boolean){
        this.ham = ham;
    }

    addAnchovies (anchovies: boolean){
        this.anchovies = anchovies;
    }

    addPineapple (pineapple: boolean){
        this.pineapple = pineapple;
    }

    addOnions (onions: boolean){
        this.onions = onions;
    }

}

let orderedPizzas: Pizza[] = [];

const firstPizza = new Pizza();
firstPizza.setSize(14);
firstPizza.addSauce(true);
firstPizza.addCheese(true);
firstPizza.addPepperoni(true);
firstPizza.addSausage(true);
firstPizza.addHam(true);
firstPizza.addAnchovies(true);
firstPizza.addPineapple(true);
firstPizza.addOnions(true);

orderedPizzas.push(firstPizza);

//console.log(orderedPizzas);

const secondPizza = new Pizza();
firstPizza.setSize(8);
firstPizza.addSauce(true);
firstPizza.addCheese(true);
firstPizza.addPepperoni(false);
firstPizza.addSausage(false);
firstPizza.addHam(false);
firstPizza.addAnchovies(true);
firstPizza.addPineapple(false);
firstPizza.addOnions(false);

orderedPizzas.push(secondPizza);

console.log(orderedPizzas);