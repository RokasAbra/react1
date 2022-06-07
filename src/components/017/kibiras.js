//Objektiniai uzdaviniai su Destytoju 7uzdv.

class Kibiras1{
    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose() {
        console.log(`Pririnkta viso: ${this.visiAkmenys} akmenų`);
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        this.visiAkmenys += akmenuSkaicius;
    }

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
        this.constructor.bendrasAkmenuSkaicius(1);
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.bendrasAkmenuSkaicius(kiekis);
    }

}

const k1 = new Kibiras1();
const k2 = new Kibiras1();
const k3 = new Kibiras1();

k1.pridetiDaugAkmenu(10);
k2.prideti1Akmeni();
k3.pridetiDaugAkmenu(9);
k2.prideti1Akmeni();
k2.prideti1Akmeni();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();
