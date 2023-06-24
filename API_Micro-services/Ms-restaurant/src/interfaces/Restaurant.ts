import {Evaluation} from "./Evaluation";
import {Menu} from "./Menu";

export interface Restaurant {
    restaurantId: string;
    nom: string;
    owner: string;
    staff: string[];
    adresse: string;
    ville: string;
    codePostal: string;
    pays: string;
    typeCuisine: string;
    evaluation: Evaluation[];
    commentaires: string[];
    heuresOuverture: string;
    menu: Menu[];
}