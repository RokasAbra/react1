class Senelis {
    constructor(){
        // console.log('Senelis');
        this.name = 'Bronius';
    }

    Miegoti(){
        console.log('pssssszs');
    }
    bliauti(){
        console.log('uh uh uh uh ');
    }
}

class Tevas extends Senelis {
    constructor(){
        // console.log('Tevas');
       super()
        this.name = 'Kazys';
    }
    barti = () => {
        console.log('nu nu nu');
    }
}

class Vaikas extends Tevas{ // extends perduoda savybes,metodus is Tevo vaikui. Vienas vaikas turi viena teva!!!
    constructor(){
        // console.log('Vaikutis');
        super();// jeigu paleidinejame constructoriu ir tas constr. yra zemiau tai pries panaudojant this. pirma kart reikia iskviesti metoda super(); metodas super(); kviecia auksciau esancius construktorius
        this.name = 'Jonukas';
    }
    bliauti(){
        console.log('Beeee...');
    }
}
const vaikutis = new Vaikas();

const tetis = new Tevas();
tetis.bliauti()

tetis.barti();
vaikutis.bliauti();
vaikutis.barti();
vaikutis.Miegoti();
console.log(vaikutis.name);
console.log(tetis.name);


document.querySelector('button')
.addEventListener('click', () => {vaikutis.barti()})


/*
= () => {} ===> pasiema konteksta is tevo this
(){} ===> neturi konteksto this 
 */