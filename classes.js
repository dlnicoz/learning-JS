console.log('lets learn classes')
class fclass {
    constructor(a, b) { this.treename = a; this.age = b }
    treeage() {
        let x = new Date(); let year = x.getFullYear();
        return -(this.age - year);
    }
    treeName() { return this.treename }
}
let c = new fclass('lily', 2001)
console.log(c.treeage());
console.log(c.treeName());

// now lets learn class inheritance

class Nclass extends fclass {
    constructor(a, b, trHeight) {
        super(a, b); //to access parent class we have to first pass arguments to parent class constructor
        this.trHeight = trHeight;
    }
    showHeight() { return `${this.treename} height is ${this.trHeight}`; }
}
//now lets see Getter and Setter
class car {
    constructor(nam, price) {
        this.nam = nam; this.price;
    }
    get cnam() { return this.nam; }
    set cnam(NewNam) { this.nam = NewNam; }
}
let Acar = new car("tesla", 40);
console.log(Acar.cnam);
Acar.cnam = "tata";  // this is way to use set method in class
console.log(Acar.cnam); //this is way to use get method is class

//lets learn static method 
class staaa {
    constructor(Name) {
        this.Name = Name;

    }
    firstMethod() {
        return "this is first  method ";
    }
    static SecondMethod(x) {
        return "this is static method " + x.Name;
    }
}
//creating object
let saa = new staaa('dheeraj !');
// how to call static method
//you cant pass normal argument 
let st = staaa.SecondMethod(saa);
console.log(st);
console.log(saa.firstMethod());





// 