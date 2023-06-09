# Api COOL
## :book: Informacion sobre la API destinos turísticos

`La Api consiste en implementar un sistema de registro e inicio de usuario y al ingresar poder crear destinos turisticos`
_____________________________________________________________________
- ## Pasos para hacer la instalacion
 
 1|clonar el repositorio de GitHub
 
 2|hacer `npm i` para que se instalen todas las dependencias
 
 3|scripts para correr la aplicacion: `npm run dev`
 
  > la base de datos esta en `mongoDB atlas`
   
 

______________________________________________________________________________________________________________________
  `Variables de entorno: .env.example`  
  
  
    URI_MONGO=
  
    PORT=
   
    JWT_SECRET=
   
    CLOUDINARY_NAME=
   
    CLOUDINARY_API_KEY=
   
    CLOUDINARY_API_SECRET=
   


 


## Endpoint para el inicio de sesion
- `post` http://localhost:3001/register

![registro](https://github.com/JerlibGnzlz/COOL/assets/84889284/e3ee9b75-59b4-4c12-bf12-5ff4d66672d4)


- `post` http://localhost:3001/login

![login](https://github.com/JerlibGnzlz/COOL/assets/84889284/96df65d7-fc53-4982-b30c-0671e2249e38)

<br><br>
> El usuario al hacer login le genera un `token` para acceder a la aplicacion.
>
 
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImplcmxpYkBjb3JyZW8uY29tIiwiaWF0IjoxNjg2Mjk3OTYzLCJleHAiOjE2ODYzMDg3NjN9.QlK9nDLhgmSNVHyR61zMEKkG5QAHoeShhP589bWfNKY

## Endpoint para el CRUD de Destinos turisticos: POST / GET / PUT / DELETE

- `post` http://localhost:3001/API/travel 

![crearDestino](https://github.com/JerlibGnzlz/COOL/assets/84889284/d7579bd2-b1a6-45b9-abb0-8fc4d38e4224)

- `get` http://localhost:3001/API/travel/:id + `token`

![getone](https://github.com/JerlibGnzlz/COOL/assets/84889284/d1d18060-e037-4813-abe2-ac30e36ed859)


- `gets` http://localhost:3001/API/travels


![GETALL](https://github.com/JerlibGnzlz/COOL/assets/84889284/4fb27465-5540-43e9-945d-6513bd26e331)

- `put` http://localhost:3001/API/travel/:id + `token`

![UPDATE](https://github.com/JerlibGnzlz/COOL/assets/84889284/287d73d6-f001-4c20-8218-eda6c3841066)


- `delete` http://localhost:3001/API/travel/:id + `token`

![DELETE](https://github.com/JerlibGnzlz/COOL/assets/84889284/82652207-db48-4f32-8365-0e8a390aee70)


## `Skill Utilizadas`

 
    "bcrypt": "^5.1.0",
    "cloudinary": "^1.37.0",
    "dotenv": "^16.1.3",
    "express": "^4.18.2",
    "fs-extra": "^11.1.1",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.2.2",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1"

    "@types/bcrypt": "^5.0.0",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.17",
    "@types/jsonwebtoken": "^9.0.2",
    "@types/mongoose": "^5.11.97",
    "@types/morgan": "^1.9.4",
    "@types/multer": "^1.4.7",
    "@types/node": "^20.2.5"

> Base de datos
> 
   ![image](https://github.com/JerlibGnzlz/COOL/assets/84889284/c9e7251a-e242-4c7d-8513-c0867bc3576e)


> Para subir las imagenes a la nube
> 
   ![image](https://github.com/JerlibGnzlz/COOL/assets/84889284/fc5b7270-6717-4715-a01c-aa78f84913cb)
   
   
   ![image](https://github.com/JerlibGnzlz/COOL/assets/84889284/a9bae36b-2583-4afb-8217-79ab05c8e139)





