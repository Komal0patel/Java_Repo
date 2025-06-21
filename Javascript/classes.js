//Javascript classes

class Pizza{
    constructor(pizzaSize){
        this.size=pizzaSize,
        this._crust="original"//underscore intends that the variable are private
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.crust} crust Pizza`);
    }
}

const myPizza= new Pizza("pepperoni!!","small");
myPizza.bake();
console.log(myPizza.type);
myPizza.size="Medium";
console.log(myPizza.size);
myPizza.bake();



class SpecialtypePizza extends Pizza{
    constructor(pizzaSize){
        super(pizzaSize);
        this.type="The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const mySpecialty=new SpecialtypePizza("Medium");
mySpecialty.slice();

