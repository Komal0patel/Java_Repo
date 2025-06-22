//Modules 
// are usually used to export and import different sections of code from one file to another.
//In the html file just add the type as modules in the script tag
//<script type="modules" src="modules.js"></script>
//it tells js that we're using modules and also applies the strict mode to the file;


import playGuitar from "./file2.js";
import {shredding,plucking}from "./file2.js"


console.log(playGuitar());
console.log(shredding());
console.log(plucking());


import User from "./user.js";
const me= new User("komal.1620patel@gmail.com","KOMAL");
console.log(me);
console.log(me.greeting())
