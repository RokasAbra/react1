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
const myCat = new Cat('pukis', '2');
const myCat22 = new Cat('mikis');
console.log(myCat.name, myCat.size);
console.log(myCat22.name);
myCat.miau(' kiss kiss');


// Objektiniai Uzdaviniai

// class Kibiras {
//     constructor(){
//         this.akmenuKiekis = 0;

//     }
//     prideti1Akmeni = () => {
//         this.akmenuKiekis += 1
//         console.log(this.akmenuKiekis);
//     }
//     pridetiDaugAkmenu = (c) => {
//         this.akmenuKiekis += c -1;
//         console.log('Daug akmenu ' + this.akmenuKiekis );
//     }
//     kiekPririnktaAkmenu = () => {
//        console.log(this.akmenuKiekis); 
//     }
// }

// const kbr = new Kibiras()
// console.log(kbr.akmenuKiekis);
// kbr.prideti1Akmeni()
// kbr.pridetiDaugAkmenu(10)
// kbr.kiekPririnktaAkmenu()


const m = new Map();
m.set('cat1', myCat);// ('cat1' yra key'ius-indexas kuris turi buti unikalus )
m.set('cat2', myCat22);
console.log(m);
console.log(m.get('cat1'));// susirandame katina pagal key'iu


/*Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir 
metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie 
popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę 
popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą.
Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje. */


class Pinigine {
    constructor() {
        
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        
        
    }
    ideti = (a) => {
      if (  a > 2
        ) {
         this.popieriniaiPinigai += a ;
         return console.log('popieriniaiPinigai', a )
      }
     else if ( a <= 2
        ) {
           this.metaliniaiPinigai += a 
           return console.log('metaliniaiPinigai', a)
      }
    }
    skaiciuoti = () => {
       console.log(this.popieriniaiPinigai + this.metaliniaiPinigai)
    }
    metaliniai = () => {
        this.metaliniaiPinigai;
        console.log(this.metaliniaiPinigai);
    }
    popieriniai = () => {
        this.popieriniaiPinigai
        console.log(this.popieriniaiPinigai);
    }
}



const sum = new Pinigine()
sum.ideti(2);
sum.ideti(4);
sum.ideti(2);
sum.ideti(3);
sum.skaiciuoti();
sum.metaliniai();
sum.popieriniai();
