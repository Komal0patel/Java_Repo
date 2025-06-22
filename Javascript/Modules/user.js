export default class User{
    constructor(email,name){
        this._id=email;//private
        this._name=name;
    }
    greeting(){
        return `Hii! My Name is ${this._name}`;
    }
}
