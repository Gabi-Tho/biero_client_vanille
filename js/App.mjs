/**
 * Fichier principal, il contient la logique de l'application. 
 * 
 * De manière générale, cette application permet d'afficher la liste des bières, le détail d'une bière et de laisser des commentaires (usager connecté)
 * @todo Ajouter l'affichage de la page d'accueil (les 5 meilleures bières, avec les informations de base [nom, brasserie, moyenne, nombre de note])
 * @todo Compléter la page /liste. Faire fonctionner les tris (nom, brasserie et note [ASC et DESC])
 * @todo Ajouter une page Détail. Une route supplémentaire /liste/:id_biere qui affiche les détails d'une bière ([nom, brasserie, moyenne, nombre de note, description]) ainsi que les commentaires reçus 
 * @todo Un utilisateur connecté (case à cocher et courriel valide) peut aljouter un commentaire sur une bière
 * @todo (Bonus mais juste pour des points virtuels) Utiliser les partials (mustache) pour gérer les affichages (accueil et liste)
 * @todo (Bonus mais juste pour des points virtuels) Remplacer mustache.js par handlebar.js
 * @todo (Bonus mais juste pour des points virtuels) Utiliser page.js pour faire les tris (Donc l'url)
 */
 
import ServiceBiere from './ServiceBiere.mjs';
import Affichage from './Affichage.mjs';
import page from "//unpkg.com/page/page.mjs";
import ListeComposant from './Composant/Liste/ListeComposant.mjs';


class App {

    // Créer trois routes : /accueil ou /, /produit, /produit/:id


    constructor(){
        this._app = document.querySelector(".app");
        
        page("/", this.pageAccueil.bind(this));
        page("/accueil", this.pageAccueil.bind(this));
        page("/produit", this.pageProduit.bind(this));
        page("/produit/:id", this.pageDetail.bind(this));
        page({hashbang:true});

        

    }

    pageAccueil(){
        console.log("Accueil")
    }

    pageProduit(){
        console.log(this)
        //ServiceBiere.getListeBieres(this.afficherBiere.bind(this));
        let liste = new ListeComposant();
        liste.Afficher();
        console.log(liste);
        console.log("Produit")
    }

    pageDetail(){
        console.log("Detail")
    }

    
    afficherBiere(bieres){
        console.log(bieres);
     }
 
}
new App();


