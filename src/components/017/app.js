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


/*
3.Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0.
Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti 
metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
  */
 /*
4.(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose 
Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą 
bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai 
(kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus 
ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). */

class Troleibusas{
    static visiKeleiviai = 0;
    static keleiviuSuma(a,b){
        keleiviuSum = a + b;
        return keleiviuSum;
    }
    constructor(){
        this.keleiviuSkaicius = 0;
    }
    ilipa = (a) => {
        let ilipo = 0;
        this.keleiviuSkaicius = ilipo;
        ilipo += a;
        console.log(`Ilipa: ${ilipo} keleiviu`);
    }
    islipa = (b) =>{
        let islipo = 0;
        this.keleiviuSkaicius = islipo;
      islipo = islipo -= b  ;
        console.log(`Islipa:${islipo} keleiviu`);
    }
    vaziuoja = () => {
        if (this.keleiviuSkaicius < 0) {
            return console.log("Error negative count ");
        }
        console.log(`Autobuse vaziuoja ${this.keleiviuSkaicius} keleiviu`);
    }
    keleiviuSkaiciusVisuoseTroleibusuose = (keleiviuSkaicius) => {
        keleiviuSkaicius = this.keleiviuSkaicius;
        console.log(`Kel ${keleiviuSkaicius}`);
    }
}
class KeleiviuSkaicius extends Troleibusas {
    static keleiviuSuma(a, b){
        return super.keleiviuSuma(a) + super.keleiviuSuma(b)
    }
}

const keleiviai = new Troleibusas();
const kiek = new KeleiviuSkaicius();
keleiviai.ilipa(10);
keleiviai.islipa(8);
keleiviai.vaziuoja()
keleiviai.ilipa(10);
keleiviai.islipa(12);
keleiviai.vaziuoja()
keleiviai.ilipa(15);
keleiviai.vaziuoja()
keleiviai.keleiviuSkaiciusVisuoseTroleibusuose()



console.log('========================9===================');

/*Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstruktoriuje yra 
priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios 
taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo 
savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- 
true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu 
nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas 
pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis). */
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

class Grybai {
    constructor(valgomas, sukirmijes, svoris){
        valgomas = Math.random() < 0.5;;
        sukirmijes = Math.random() < 0.5;;
        svoris = rand(5, 45);
        this.valgomas = valgomas;
        this.sukirmijes = sukirmijes;
        this.svoris = svoris;
    }
}
const gryb = new Grybai();
console.log(gryb.valgomas, gryb.sukirmijes, gryb.svoris);
class Krepšys extends Grybai{
    constructor(dydis, prikrauta){
        super();
        dydis = 500;
        prikrauta = 0;
        dydis = this.dydis;
        prikrauta = this.prikrauta;
    }
    // deti(grybas){
    //     do {
    //         grybas += this.svoris;
    //     } while (this.dydis > this.prikrauta);
    //     console.log(grybas);
    // }
    
}

const grybas = new Grybai();
const g2 = new Grybai();

const k = new Krepšys()



// Su detytoju 9. Uzdv. Grybai


class Grybas{
    constructor(){
        this.valgomasGrybas = !this.rand(0, 1);
        this.sukirmijesGrybas = !this.rand(0, 1);
        this.gryboSvoris = rand(5, 45);
    }
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
}

class Krepsys{

    constructor(){
        this.dydis = 500;
        this.prikrauta= 0;
    }
    deti(grybas){
        if (grybas.valgomasGrybas && grybas.sukirmijesGrybas) {
            this.prikrauta += grybas.gryboSvoris;
        }
        return this.prikrauta < this.dydis;
    }
}

const Kreps = new Krepsys();
while (Kreps.deti(new Grybas())) {};
console.log(Kreps);