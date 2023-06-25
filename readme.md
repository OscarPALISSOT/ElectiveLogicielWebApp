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
   - ```PORT=3000```
   - (ou un autre port disponible à la suite, exemple : 3001, 3002, etc.)
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
- Dans le fichier **./src/api/index.ts**, supprimer tous et insérer le code suivant :
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
- Les interfaces doivent être nommées en **camelCase** sans majuscule au début.
- Une interface par fichier.

***Voir les interfaces déjà créées pour les autres microservices.***

### 8. Importer Prisma

Run à la racine du microservice
```sh
npm install typescript ts-node @types/node --save-dev
npm install prisma --save-dev
npx prisma init --datasource-provider mongodb
```
### 9. Créer le schema

Dans le fichier **./prisma/schema.prisma/**, créer le schema de la base de données.

**Attention** :
- Le schema doit être nommé en **camelCase** sans majuscule au début.
- le schema doit être coherent avec les types créés précédemment.

***Voir les schemas déjà créés pour les autres microservices.***

https://www.prisma.io/docs/getting-started/quickstart

https://www.prisma.io/docs/concepts/database-connectors/mongodb

https://www.prisma.io/docs/concepts/components/prisma-schema/relations/many-to-many-relations#mongodb

### 10. Créer la Db (pour environnement de dev)

(Oscar) : J'ai déjà créé un cluster avec mon compte, voir avec moi pour ajouter de nouvelles bases. On souhaite avoir toutes les bases de dev sur un seul et même cluster.

Si jamais on veut créer un cluster depuis un autre compte :

- Se rendre sur https://www.mongodb.com/atlas/database
- Se connecter, creer un cluster
- Ajouter une db dans le cluster depuis l'onglet collections (la manip est horrible et pas du tout intuitive)
- Supprimer la collection vide créée par défaut dans la db
- Récupérer le lien de connexion à la db (penser à ajouter le nom de la db à la fin du lien)

### 11. Ajouter la db à prisma

Dans le fichier .env, ajouter la ligne suivante :
```
DATABASE_URL="mongodb://USERNAME:PASSWORD@HOST/DATABASE"
```
**Attention** :
- Remplacer USERNAME, PASSWORD, HOST et DATABASE par les informations de la db.
- Penser à ajouter la ligne à **.env.example**

***Voir les .env.example des autres microservices.***

Run à la racine du microservice :

```sh 
npx prisma db push
```

Cela va créer les collections dans la db.
