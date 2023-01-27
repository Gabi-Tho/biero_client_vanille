import ServiceBiere from "../../ServiceBiere.mjs";
import Composant from "../Composant.mjs";

export default class BiereComposant extends Composant{
    template = "biere";
    noeudParent = ""
    
    constructor(id, gabarit){
        let pathGabarit ="./js/Composant/Biere/biere.html";
        //why is this empty? and what is super?
        super("", pathGabarit); // this calls the parent cosntructor in this case
        this.noeudParent = document.querySelector(".app");
        this.data = {};
        this.getInformation(id);
        this.id = id;
    }

    getInformation(id){
        
        //class     //method inside the class /CB with data
        ServiceBiere.getCommentaires(id, this.setCommentaire.bind(this));
        ServiceBiere.getUneBiere(id, this.setBiere.bind(this));

    }

    //call back that contains data
    setBiere(biere){
        //data of the instance of bierecomposant  //data du serveur         
        this.data.biere = biere.data;
        //biere{biere : }

        this.setData(this.data);
    }

    setCommentaire(data){
        this.data.commentaires = data.data;

        this.setData(this.data);
    }

    AjouterListener(){
        this.noeudParent.querySelector(".btnSoumettre").addEventListener("click", (evt)=>{

            let regexCourriel = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let courrielz = this.noeudParent.querySelector("[name='courriel']").value;
            let commentairez = this.noeudParent.querySelector("[name='commentaire']").value;
            let erreur = this.noeudParent.querySelector(".erreur");


            if(courrielz.match(regexCourriel)){
                ServiceBiere.ajouterCommentaires(this.id, {courriel : courrielz, commentaire: commentairez}, (data)=>{

                    ServiceBiere.getCommentaires(this.id, this.setCommentaire.bind(this));
                    this.setData(this.data);

                    console.log(data);
                });
            }else{
                erreur.innerHTML = "format de courriel invalide";
            }



        })
    }

    
}
