//objektiniai uzdaviniai nr. 8

class Stikline {
    static type = 'pepsi';
    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
    }
    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this
    }
    ispilti(){
        const kiek = this.kiekis;
        this.kiekis = 0;
        return kiek
    }
    stiklinejeYra(){
        console.log(`Stiklineja ${this.turis} ml yra: ${this.kiekis} ${this.constructor.type}`);
    }
}

const s1 = new Stikline(200);
const s2 = new Stikline(150);
const s3 = new Stikline(100);
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
console.log(s1);
console.log(Stikline.type);