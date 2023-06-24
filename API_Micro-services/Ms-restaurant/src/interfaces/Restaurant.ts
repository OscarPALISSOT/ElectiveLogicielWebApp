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
    evaluationId: string[];
    commentaires: string[];
    heuresOuverture: string;
    menuId: string[];
}