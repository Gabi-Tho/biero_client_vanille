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
        this.ChargeTemplate(this.gabarit);
    }
    /**
     * 
     * @param {*} data 
     * @param {boolean} bDirty Force le rafraichissement des données (et l'affichage)
     */
    setData(data, bDirty){
        console.log(data);
        bDirty = bDirty || false;
        if(bDirty || (JSON.stringify(this.data) != JSON.stringify(data))){
            this.data = data;
            console.log(this.data);
            this.AfficherTemplate();
        }
    }

    getData(){
        return this.data;
    }

    AfficherTemplate(){
        console.log(this.tmplComposant)
        if(this.tmplComposant){
            console.log("afficher")
            this.Afficher();
        }
        else{
            console.log("charge")
            this.ChargeTemplate();
        }

    }

    ChargeTemplate(){
        fetch(this.gabarit)
            .then(reponse => reponse.text())
            .then(tmpl => {
                this.tmplComposant = tmpl
                //console.log(this.tmplComposant);
                if(this.data){
                    console.log(this.data)
                    this.Afficher();
                }
            });

        //let tmpl = document.querySelector("#test").innerHTML;
        //let chaineHTML = Mustache.render(tmpl, {nom : "Toto le magicien"});
        //console.log(chaineHTML);
        //document.querySelector(".app").innerHTML = chaineHTML;

    }
    Afficher(){
        console.log(this.tmplComposant);
        let chaineHTML = Mustache.render(this.tmplComposant, this.data);
        //console.log(chaineHTML);
        this.noeudParent.innerHTML = chaineHTML;
        return chaineHTML;
    }
}