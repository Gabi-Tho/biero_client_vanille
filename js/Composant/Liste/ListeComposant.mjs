import ServiceBiere from "../../ServiceBiere.mjs";
import Composant from "../Composant.mjs";

export default class ListeComposant extends Composant{
    template = "liste";
    noeudParent = ""
    //pathGabarit ="/js/Composant/Liste/liste.html";
    constructor(data, gabarit){
        let pathGabarit ="./js/Composant/Liste/liste.html";
        super(data, pathGabarit);
        this.noeudParent = document.querySelector(".app");
        
        if(!data){
            this.getBieres();
        }else{
            this.setData(data);
        }

    }

    getBieres(){
        ServiceBiere.getListeBieres(this.setData.bind(this));

    }

    
}
