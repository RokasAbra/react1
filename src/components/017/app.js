console.log('Vasara');
//i viska javaScriptas ziuri kaip i objektus

let a = 'Labas';// pasleptas objektas "primityvas"

let b = new String('Labas')// atviras objektas 'Objektinis budas' (String yra klase kuri nurodo kaip turi buti pagamintas objektas)
let c = Number(55); // number kaip pagaminti skaiciu
let d = Array(55)// Array(irasiu skaiciu nurodis array;iaus ilgi)
let e = Array(5,5,5)// jeigu per kableli viska sumeta i savybes
console.log(typeof a);
console.log(b);
console.log(d);
console.log(e);

String.prototype.tail = function () {
    return this.valueOf() + '#--------------'; 
}/// modifikacija pridedant nauja savybe
console.log(a.tail);

class Cat{
    constructor(a,b){ // pasileidzia automatiskai, galime rasyti koki tik norime koda
        console.log('Naujas!');
        this.name = a ?? 'Bevardis'; //this.name = name vienas vardas; a argumentas naudojamas norint duoti skirtingus vardus katinams
        this.size = b;  // du klaustuka priskiria kaip default reiksme 'Bevardis'  
    }
    miau = (m = '') => {
        console.log(this.name + ' Miauuu!' + m);
    }
    
}
const myCat = new Cat('pilkis', '2');
const myCat22 = new Cat('mikis');
console.log(myCat.name, myCat.size);
console.log(myCat22.name);
myCat.miau(' kiss kiss');


// Objektiniai Uzdaviniai

class Kibiras {
    constructor(){
        this.akmenuKiekis = 0;

    }
    prideti1Akmeni = () => {
        this.akmenuKiekis += 1
        console.log(this.akmenuKiekis);
    }
    pridetiDaugAkmenu = (c) => {
        this.akmenuKiekis += c -1;
        console.log('Daug akmenu ' + this.akmenuKiekis );
    }
    kiekPririnktaAkmenu = () => {
       console.log(this.akmenuKiekis); 
    }
}

const kbr = new Kibiras()
console.log(kbr.akmenuKiekis);
kbr.prideti1Akmeni()
kbr.pridetiDaugAkmenu(10)
kbr.kiekPririnktaAkmenu()


const m = new Map();
m.set('cat1', myCat);// ('cat1' yra key'ius-indexas kuris turi buti unikalus )
m.set('cat2', myCat22);
console.log(m);
console.log(m.get('cat1'));// susirandame katina pagal key'iu