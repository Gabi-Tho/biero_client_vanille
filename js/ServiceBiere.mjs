//=========this class creates the URL and fetches data==========\\

/**
 * Module de gestion des données et des requêtes des bieres
 *
 * @module Biere
 */
export default class ServiceBiere {
    /**
     * URL de base du service Web utilisé pour les appels de l'API.
     * @static
     * @memberof Biere
     */
    static api_url = "http://127.0.0.1:8000/webservice/php/";


    /**
     * Récupérer l'ensemble des biere sur le service Web
     *
     * @static
     * @returns void
     * @memberof Biere
     */

    //fetch will default to get
    //ALL REQUESTS ARE BY DEFAULT GET
    static getListeBieres (fctRappel){
        //console.log(this);
        fetch(this.api_url+"biere")
            .then(reponse=> reponse.json())
            .then(data => fctRappel(data));
    }

    static getListeDesMeilleuresBieres(fctRappel){
        fetch(this.api_url+"biere")
        .then(reponse=> reponse.json())
        .then(data => {


            
            data.data.sort((a,b)=>{
                return b.note_moyenne.localeCompare(a.note_moyenne);
            });

            data.data.splice(5);

            fctRappel(data)

        });
    }

    static getUneBiere(id, fctRappel){
        fetch(this.api_url+"biere"+"/"+id)
        .then(reponse=> reponse.json())
        .then(data => {
            fctRappel(data)
        });
    }

    static getCommentaires(id, fctRappel){
        fetch(this.api_url+"biere"+"/"+id+"/commentaire")
            .then(reponse=> reponse.json())
            .then(data => {
                fctRappel(data)
            });
    }

    static getNote(id, fctRappel){
        fetch(this.api_url+"biere"+"/"+id+"/note")
            .then(reponse=> reponse.json())
            .then(data => {
                fctRappel(data)
                console.log(data);
            });
    }

    static ajouterCommentaires(id, commentaire, fctRappel){

        //WHAT IS THIS? read fetch documentation configuration of http request
        var entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Basic " + btoa("biero:biero"));
        

        //construction de l'url qui fait fetch au serveur pour isnerer données
        fetch(this.api_url+"biere"+"/"+id+"/commentaire", {
            method:"PUT",
            body : JSON.stringify(commentaire),
            headers : entete
        })
            .then(reponse=> reponse.json())
            .then(data => {
                fctRappel(data)
            });
    }



}
