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
    //data = [{"id_biere":"6","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate enim ac luctus maximus. Morbi gravida vel eros sit amet semper. Duis vitae semper risus, sed pulvinar leo. Integer ultrices ante quam, non pretium dolor lacinia ut. Praesent in posuere mauris. In vel blandit mauris. Nunc placerat sollicitudin velit id finibus. Praesent quis elit posuere, iaculis nisi in, pretium turpis. Curabitur mattis viverra laoreet. In eleifend ligula et eros varius aliquam. Phasellus facilisis enim quam, sit amet cursus turpis scelerisque et.\r\n","nom":"Une biere 1","brasserie":"La brasserie","image":null,"date_ajout":"2017-03-15 09:02:16","date_modif":null,"note_moyenne":"2.0000","note_nombre":"3"}];
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

        let liste = new ListeComposant(this.data);
        
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


