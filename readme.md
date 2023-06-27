# Web app


## Comment mettre en place un microservice

### 1. Aller dans le repertoire des microservices

```sh
cd API_Micro-services
```
### 2. Cloner le starter Express API Typescript

```sh
npx create-express-api --typescript --directory NomDuMircoService
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

import MessageResponse from '../Interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.status(200).json({ message: 'NomDeLaRoute route' });
});

export default router;
```
- Renommer le fichier **./src/api/Evaluation.ts** en **./src/api/NomDeLaRoute.ts**
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
import nomDeLaRoute from './api/NomDeLaRoute';
```
Et 
```typescript
app.use('/api/v1', api);
```
par :
```typescript
app.use('/api/v1/NomDeLaRoute', nomDeLaRoute);
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

### 7. Créer les middlewares

- Créer le repertoire **./src/middlewares/**.
- Créer le fichier **./src/middlewares/tokenMiddleware.ts**.
- Importer le package jsonwebtoken :
```sh
npm install jsonwebtoken
```

- Dans le fichier **./src/middlewares/tokenMiddleware.ts**, insérer le code suivant :
```typescript
import { NextFunction, Request, Response } from 'express';
import { checkJWT } from '../modules/jwt';
import { JwtPayload } from 'jsonwebtoken';


export function tokenMiddleware(req: Request, res: Response, next: NextFunction) {
   const authorization = req.headers.authorization;
   if (!authorization) {
      res.status(403).json({ error: 'No token provided' } );
   }
   const token = authorization?.split(' ')[1];
   if (!checkJWT(token as string)) {
      res.status(403).json({ error: 'Invalid token' } );
   }
   next();
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
   const authorization = req.headers.authorization;
   if (!authorization) {
      res.status(403).json({ error: 'No token provided' } );
   }
   const token = authorization?.split(' ')[1];
   const decoded = checkJWT(token as string);
   if (!decoded) {
      res.status(403).json({ error: 'Invalid token' } );
   }
   if (!(decoded as JwtPayload).user.roles.includes('admin')) {
      res.status(403).json({ error: 'Unauthorized' } );
   }
   next();
}
```
- Créer le repertoire **./src/modules/**.
- Créer le fichier **./src/modules/jwt.ts**.
- Dans le fichier **./src/modules/jwt.ts**, insérer le code suivant :
```typescript
import jwt, { JwtPayload } from 'jsonwebtoken';


/**
 * check JWT token
 * @param {string} token the token to check
 */
const checkJWT = (token: string) => {

   let check: boolean | string | JwtPayload = false;

   try {
      check = jwt.verify(token, process.env.JWT_SECRET as unknown as string);
   } catch (err) {
      check = false;
      console.log(err);
   }
   return check;
};

export { checkJWT };
```

- Dans le fichier **./src/app.ts**, insérer la ligne suivante dans les imports :
```typescript
import * as middlewaresUser from './middlewares/tokenMiddleware';
```

- Importer les middlewares dans le fichier **./src/app.ts** juste après la fonction de ping "Hello world" :

```typescript
//app.use(middlewaresUser.tokenMiddleware);
//app.use(middlewaresUser.isAdmin);
```

- Dans les fichiers **.env** et **.env.example**, ajouter la ligne suivante :
```sh
JWT_SECRET='jpoerqpoj'
```
On changera la valeur avant la mise en prod.

***Attention*** : 
- Bien laisser les commentaires pour le moment. On traitera les middlewares plus tard après avoir testé les microservices.


### 8. Créer les types

Dans le repertoire **./src/interfaces/**, créer les types nécessaires pour le microservice sous formes d'interfaces.

**Attention** :
- Les interfaces doivent être nommées en **camelCase** sans majuscule au début.
- Une interface par fichier.

***Voir les interfaces déjà créées pour les autres microservices.***

### 9. Importer Prisma

Run à la racine du microservice
```sh
npm install typescript ts-node @types/node --save-dev
npm install prisma --save-dev
npx prisma init --datasource-provider mongodb
```
### 10. Créer le schema

Dans le fichier **./prisma/schema.prisma/**, créer le schema de la base de données.

**Attention** :
- Le schema doit être nommé en **camelCase** sans majuscule au début.
- le schema doit être coherent avec les types créés précédemment.

***Voir les schemas déjà créés pour les autres microservices.***

https://www.prisma.io/docs/getting-started/quickstart

https://www.prisma.io/docs/concepts/database-connectors/mongodb

https://www.prisma.io/docs/concepts/components/prisma-schema/relations/many-to-many-relations#mongodb

### 11. Créer la Db (pour environnement de dev)

(Oscar) : J'ai déjà créé un cluster avec mon compte, voir avec moi pour ajouter de nouvelles bases. On souhaite avoir toutes les bases de dev sur un seul et même cluster.

Si jamais on veut créer un cluster depuis un autre compte :

- Se rendre sur https://www.mongodb.com/atlas/database
- Se connecter, creer un cluster
- Ajouter une db dans le cluster depuis l'onglet collections (la manip est horrible et pas du tout intuitive)
- Supprimer la collection vide créée par défaut dans la db
- Récupérer le lien de connexion à la db (penser à ajouter le nom de la db à la fin du lien)

### 12. Ajouter la db à prisma

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

### 13. Créer les modules pour les CRUD des entités

On va créer un module par entité (les types qu'on a créés à l'étape 8).

- Dans le repertoire **./src/modules/**, créer un fichier par entité ( **./src/modules/nomDeLEntité.ts** ).
- Dans chaque fichier, créer les fonctions nécessaires pour les CRUD de l'entité.
- Générer le schema prisma avec la commande :
```sh
npx prisma generate
```
Cela va générer les fonctions de prisma pour les CRUD.

- Chaque module doit commencer par :
```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
```

***Voir les modules déjà créés pour les autres microservices pour les fonctions. Bien respecter la mise en forme.***

**Attention** :
- Utiliser les fonctions de prisma pour les CRUD.
- Utiliser les types créés à l'étape 8.
- Utiliser Copilot au maximum pour générer le code.
- Commenter le code avec Jsdoc ça aide beaucoup Copilot.

### 14. Créer les routes

- Dans le repertoire **./src/api/**, créer un fichier par entité ( **./src/api/nomDeLEntité.ts** ).
- Insérer le code suivant dans chaque fichier :
```typescript
import express from 'express';

import MessageResponse from '../Interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
    res.status(200).json({ message: 'NomDeLEntité route' });
});

export default router;
```

- Dans chaque fichier, créer les routes nécessaires pour les CRUD de l'entité.

***Voir les routes déjà créées pour les autres microservices pour les fonctions. Bien respecter la mise en forme.***

**Attention** :
- Utiliser les fonctions des modules créés à l'étape 13.
- Utiliser les types créés à l'étape 8.
- Utiliser Copilot au maximum pour générer le code.
- Commenter le code avec Jsdoc ça aide beaucoup Copilot.
