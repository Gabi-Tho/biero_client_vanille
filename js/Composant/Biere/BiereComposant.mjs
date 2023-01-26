import ServiceBiere from "../../ServiceBiere.mjs";
import Composant from "../Composant.mjs";

export default class BiereComposant extends Composant{
    template = "biere";
    noeudParent = ""
    
    constructor(id, gabarit){
        let pathGabarit ="./js/Composant/Biere/biere.html";
        //why is this empty? and what is super?
        super("", pathGabarit);
        this.noeudParent = document.querySelector(".app");
        this.data = {};
        this.getInformation(id);
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
        console.log(this.data)
        this.setData(this.data);
    }

    setCommentaire(data){
        this.data.commentaires = data.data;
        console.log(this.data)
        this.setData(this.data);
    }

    AjouterListener(){
        this.noeudParent.querySelector(".btnSoumettre").addEventListener("click", (evt)=>{

            let courrielz = this.noeudParent.querySelector("[name='courriel']").value;
            let commentairez = this.noeudParent.querySelector("[name='commentaire']").value;

            ServiceBiere.ajouterCommentaires(1, {courriel : courrielz, commentaire: commentairez}, (data)=>{
                console.log(data);
            });

        })
    }

    
}
