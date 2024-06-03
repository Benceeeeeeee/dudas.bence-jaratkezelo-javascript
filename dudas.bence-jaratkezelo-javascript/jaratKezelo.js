export class JaratKezelo{
    #jaratok = [];

    ujJarat(jaratSzam, repterHonnan, repterHova, indulas){
        if(jaratSzam == null){
            throw new Error("A járatszám nem lehet null")
        }

        if(jaratSzam == ""){
            throw new Error("A járatszám nem lehet üres")
        }

        if(repterHonnan == null){
            throw new Error("Az 1.reptér nem lehet null")
        }

        if(repterHonnan == ""){
            throw new Error("Az 1.reptér nem lehet üres")
        }

        if(repterHova == null){
            throw new Error("A 2.reptér nem lehet null")
        }

        if(repterHova == ""){
            throw new Error("A 2.reptér nem lehet üres")
        }

        if(indulas == null){
            throw new Error("Az indulás nem lehet null")
        }

        if(indulas == ""){
            throw new Error("Az indulás nem lehet üres")
        }

        if (!(indulas instanceof Date)) {
            throw new Error("Az indulas paraméternek Date típusúnak kell lennie.");
        }


        let index = 0;
        while (index < this.#jaratok.length && this.#jaratok[index].jaratSzam != jaratSzam) {
            index++;
        }

        if (index < this.#jaratok.length) {
            throw new Error("A megadott járat már létezik")
        }

        const jarat = {
            jaratSzam: jaratSzam,
            repterHonnan: repterHonnan,
            repterHova: repterHova,
            indulas: new Date(indulas),
            keses: 0
        }

        this.#jaratok.push(jarat)
    }

    jaratKereses(jaratSzam){
        if (jaratSzam == null) {
            throw new Error("A járatszám nem lehet null");
        }
        if (jaratSzam == "") {
            throw new Error("A járatszám nem lehet üres");
        }

        let index = 0;
        while (index < this.#jaratok.length && this.#jaratok[index].jaratszam != jaratSzam) {
            index++;
        }

        if (index > this.#jaratok.length) {
            throw new Error("A megadott járatszám nem létezik");
        }

        return this.#jaratok[index];

    }

    keses(jaratSzam, keses){
        if (jaratSzam == null) {
            throw new Error("A járatszám nem lehet null");
        }
        if (jaratSzam == "") {
            throw new Error("A járatszám nem lehet üres");
        }
        if (keses == null) {
            throw new Error("A járatszám nem lehet null");
        }
        if (keses == "") {
            throw new Error("A járatszám nem lehet üres");
        }


        let osszKeses = keses * 60 * 1000;
        const jarat = this.jaratKereses(jaratSzam)
        
        
        if(new Date(jarat.keses.getTime() + osszKeses) < jarat.indulas){
            throw new Error("A járat nem indulhat előbb")
        }
        
        if(jarat.indulas + keses > jarat.indulas){
            new Date(jarat.keses.getTime() + osszKeses)
        }
    }

    kesesLekerdezes(jaratSzam){
        const jarat = this.jaratKereses(jaratSzam)

        return jarat.keses;
    }

    mikorIndul(jaratSzam){
        if (jaratSzam == null) {
            throw new Error("A járatszám nem lehet null");
        }
        if (jaratSzam == "") {
            throw new Error("A járatszám nem lehet üres");
        }

        const jarat = this.jaratKereses(jaratSzam);
        let osszKeses = keses * 60 * 1000;
        const indulas = new Date(jarat.indulas.getTime() + osszKeses)

        return indulas;
    }

    jaratokRepuloterrol(repter){
        if (repter == null) {
            throw new Error("A reptér nem lehet null");
        }
        if (repter == "") {
            throw new Error("A reptér nem lehet üres");
        }

        let index = 0;
        let jaratSzamok = [];
        while(index < this.#jaratok.length && (this.#jaratok[index].repterHonnan != repter || this.#jaratok[index].repterHova != repter)){
            index++;
            if(this.#jaratok.repterHonnan == repter || this.#jaratok.repterHova == repter){
                jaratSzamok.push(this.#jaratok[index].jaratSzam);
            }
        }

        if(index > this.#jaratok.length){
            throw new Error("Nincs ilyen reptér");
        }

        return jaratSzamok;
    }
}