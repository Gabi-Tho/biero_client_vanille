import Affichage from "../Affichage.mjs";

export default class Composant {
    constructor(data, gabarit){
        if(data) {
            this.data = data;
        }
        if(gabarit){
            this.gabarit = gabarit;
        }
        this.ChargeTemplate();
    }

    setData(data){
        this.data = data;
    }

    getData(){
        return this.data;
    }
    ChargeTemplate(){
        let tmpl = document.querySelector("#test").innerHTML;
        let chaineHTML = Mustache.render(tmpl, {nom : "Toto le magicien"});
        console.log(chaineHTML);
        document.querySelector(".app").innerHTML = chaineHTML;

    }
    Afficher(){
        
    }
}