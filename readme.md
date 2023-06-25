# Web app


## Comment mettre en place un microservice

### 1. Aller dans le repertoire des microservices

```sh
cd API_Micro-services
```
### 2. Cloner le starter Express API Typescript

```sh
npx create-express-api --typescript --directory nom_du_mirco_service
```

### 3. Assigner un port au microservice

 - Créer un fichier **.env.example** dans à la racine du microservice
 - Ajouter la ligne suivante dans le fichier **.env.example** :
   - PORT=3000 (ou un autre port disponible à la suite, exemple : 3001, 3002, etc.)
 - Copier le fichier **.env.example** et le nommer **.env**

### 4. Tester le microservice

```sh
cd nom_du_mirco_service
npm run dev
```
Avec Postman, faire une requête GET sur http://localhost:PORT

On doit recevoir un truc du style :
```json
{
   "message": "🦄🌈✨👋🌎🌍🌏✨🌈🦄"
}
```

### 5. Nettoyer le starter

Dans le repertoire **./src** :

- Supprimer le fichier **./src/api/emojis.ts**
- Dans le fichier **./src/api/Menus.ts**, supprimer tous et insérer le code suivant :
```typescript
import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.status(200).json({ message: 'Nom_de_la_route route' });
});

export default router;
```
- Renommer le fichier **./src/api/Menus.ts** en **./src/api/nom_de_la_route.ts**
- Dans le fichier **./src/app.ts**, remplacer la ligne suivante :
```typescript
res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
```
par :
```typescript
res.status(200).json({ message: 'Hello world' });
```
- Toujours dans le fichier **./src/app.ts**, remplacer la ligne suivante :
```typescript
import api from './api/index';
```
par :
```typescript
import nom_de_la_route from './api/Nom_de_la_route';
```
Et 
```typescript
app.use('/api/v1', api);
```
par :
```typescript
app.use('/api/v1/nom_de_la_route', nom_de_la_route);
```

### 6. Tester

Dans postman requête Get sur :
- http://localhost:PORT
- http://localhost:PORT/api/v1/nom_de_la_route

On doit recevoir :
```json
{
   "message": "Hello world"
}
```
et 
```json
{
   "message": "Nom_de_la_route route"
}
```

### 7. Créer les types

Dans le repertoire **./src/interfaces/**, créer les types nécessaires pour le microservice sous formes d'interfaces.

**Attention** :
- Les interfaces doivent être nommées en **PascalCase** sans majuscule au début.
- Une interface par fichier.

***Voir les interfaces déjà créées pour les autres microservices.***


