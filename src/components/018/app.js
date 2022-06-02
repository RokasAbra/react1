//objektiniai uzdaviniai nr. 8

class Stikline {
    static type = 'pepsi';
    static registras = [];
    static naujaStikline(t){
        return new this(t)
    };
    static whatType(){
        console.log(this.type);
    };
    static visosStiklines(stikline) {
        this.registras.push(stikline);
    }
    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
        this.constructor.visosStiklines(this);// 
    }
    
    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
    }
    ispilti(){
        const kiek = this.kiekis;
        this.kiekis = 0;
        return kiek;
    }
    stiklinejeYra(){
        console.log(`Stiklineja ${this.turis} ml yra: ${this.kiekis} ${this.constructor.type}`);
    }
}

const s1 = new Stikline(200);
const s2 = Stikline.naujaStikline(150);// static metodu susikuri nauja stikline 6 eilute
const s3 = new Stikline(100);
const s4 = Stikline.naujaStikline()

s3.ipilti(s2.ipilti((s1.ipilti(80).ispilti())).ispilti());
// chaininimas i s1 ipilame 80 ir ispilame tada ipilame i s2 ir ispilame i s3

// s1.ipilti(1000);
// s1.stiklinejeYra();
// s2.ipilti(s1.ispilti());
// s3.ipilti(s2.ispilti());
s1.stiklinejeYra();
s2.stiklinejeYra();
s3.stiklinejeYra();


/// JS Static !!
// statinis yra uzdarytas pacioje klaseje 
// static metodai visada rasomi virsuje constructoriaus
// objektiniame metode static savybe iskvieciama this.constructor.savybesPavadinimas. 31 eilute
//statiniame metode savybe iskvieciama this.savybesPavadinimas. 10 eilute
//
console.log(s1);
console.log(Stikline.type);
Stikline.whatType()
console.log(Stikline.registras);
Stikline.registras[0].ipilti(40)