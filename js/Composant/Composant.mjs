import Affichage from "../Affichage.mjs";

export default class Composant {
    tmplComposant = "";
    constructor(data, gabarit){
        if(data) {
            this.data = data;
        }
        if(gabarit){
            this.gabarit = gabarit;
        }
        this.ChargeTemplate(gabarit);
    }

    setData(data){
        console.log(data);
        if(JSON.stringify(this.data) != JSON.stringify(data)){
            this.data = data;
            this.Afficher();
        }
    }

    getData(){
        return this.data;
    }
    ChargeTemplate(gabarit){
        fetch(gabarit)
            .then(reponse => reponse.text())
            .then(tmpl => {
                this.tmplComposant = tmpl
                console.log(this.tmplComposant);
            });

        //let tmpl = document.querySelector("#test").innerHTML;
        //let chaineHTML = Mustache.render(tmpl, {nom : "Toto le magicien"});
        //console.log(chaineHTML);
        //document.querySelector(".app").innerHTML = chaineHTML;

    }
    Afficher(){
        let chaineHTML = Mustache.render(this.tmplComposant, this.data);
        console.log(chaineHTML);
        this.noeudParent.innerHTML = chaineHTML;
        return chaineHTML;
    }
}