//objects
//objects come in key value pair;

const myObj={name1:"Komal"};
console.log(myObj.name1);

const anotherObj={
    alive:"true",
    answer:42,
    hobbies:["Eat","Sleep","Code"],
    beverages:{
        morning:"Chai",
        afternoon:"COld coffee"
    }

}
console.log(anotherObj.alive);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);

console.log(anotherObj["alive"]);
console.log(anotherObj["beverages"]["morning"]);

const nextObj={
    action:function(){
        return "Function in an object!!!";
    }
}
console.log(nextObj.action());



const vehicle={
    wheels:4,
    engine:function(){
        return "Vrooooooom!!";
    }
}

const truck=Object.create(vehicle);
truck.doors=2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car=Object.create(vehicle);
car.doors=4;
car.engine=function(){ return "Wooosshhh!!"};
console.log(car.engine());

const tesla= Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine=function(){
    return "SUshhhhhhhhh!!";
};
console.log(tesla.engine());




const band={
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham"
};
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(`On ${job}, it's ${band[job]}!!!`);
}

delete band.drums;
console.log(band.hasOwnProperty("drums"));


//destructuring objects
const{guitar: newNameguitar, bass:myBass}=band;
console.log(newNameguitar);
console.log(myBass);
console.log(band.hasOwnProperty("guitar"));
console.log(band);
