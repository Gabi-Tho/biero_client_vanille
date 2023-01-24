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
        console.log(data)
        
        if(!data){
            this.getBieres();
        }else{
            console.log(data);
            this.setData(data, true); 
        }

    }

    getBieres(){
        ServiceBiere.getListeBieres(this.setData.bind(this));

    }

    
}
