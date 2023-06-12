
![image](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/42f7f17c-bfd6-479f-84d4-276a8bfad7a8)


## :book: Informacion sobre la API destinos turísticos

`La Api consiste en implementar un sistema de registro e inicio de usuario y al ingresar poder crear destinos turisticos con su nombre descripcion de destino mas una imagen `
_____________________________________________________________________
- ## Pasos para hacer la instalacion
 
 1|clonar el repositorio de GitHub.
 
 2|hacer `npm i` para que se instalen todas las dependencias.
 
 3|scripts para correr la aplicacion: `npm run dev`.
 
 4|al levantar el servidor podra acceder a este Endpont,
   donde podra ver documentacion en `swagger` http://localhost:3001/api/document/ 
   
![image](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/8e94ed0c-2792-4efe-ab22-05bb60c9e49f)


 
  > la base de datos esta en `mongoDB atlas`.

![image](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/8e61d29d-452b-48ef-9e97-3f887e023ef0)


  > las imagenes se almacenan en `cloudinary`.

![image](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/96af00c2-ea4a-418e-95ed-01980dd17d33)


  
   
 

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


![registro](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/c566b27c-e493-4171-af08-8fd93c2a7448)


- `post` http://localhost:3001/login


![login](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/9ddd078c-49fb-4d20-bf8e-9c3628a23a0a)

<br><br>
> El usuario al hacer login le genera un `token` para acceder a la aplicacion.
>
 
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImplcmxpYkBjb3JyZW8uY29tIiwiaWF0IjoxNjg2Mjk3OTYzLCJleHAiOjE2ODYzMDg3NjN9.QlK9nDLhgmSNVHyR61zMEKkG5QAHoeShhP589bWfNKY

## Endpoint para el CRUD de Destinos turisticos: POST / GET / PUT / DELETE

- `post` http://localhost:3001/API/travel 


![crearDestino](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/568aabc2-fe58-4e2f-9949-202b6ebc8f35)

- `get` http://localhost:3001/API/travel/:id + `token`


![getone](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/e19e763a-31f5-4744-b692-4981cc5e7dc4)


- `gets` http://localhost:3001/API/travels


![GETALL](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/b8c75766-888c-4b76-8ff6-2b444419fc2e)


- `put` http://localhost:3001/API/travel/:id + `token`


![UPDATE](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/1ddbf827-466b-40ee-ac86-d15e2f807615)


- `delete` http://localhost:3001/API/travel/:id + `token`


![DELETE](https://github.com/JerlibGnzlz/DT-COOL/assets/84889284/337bf0e2-de4f-4942-bfe3-b4bc1004c79a)


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
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^4.6.3"

    "@types/bcrypt": "^5.0.0",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.17",
    "@types/jsonwebtoken": "^9.0.2",
    "@types/mongoose": "^5.11.97",
    "@types/morgan": "^1.9.4",
    "@types/multer": "^1.4.7",
    "@types/node": "^20.2.5"
    "@types/swagger-jsdoc": "^6.0.1",
    "@types/swagger-ui-express": "^4.1.3"


