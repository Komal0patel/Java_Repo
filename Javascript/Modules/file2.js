const playGuitar=()=>{
    return "Playing the Guitar!";
};

const shredding= () =>{
    return "SHredding some licks!!";
};

const plucking = () =>{
    return "Plucking the strings...";
};

//Every file can have one default export
export default playGuitar;
//Exporting other functions also
export {shredding,plucking};
