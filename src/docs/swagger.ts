import path from "path";
import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";



const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.1",
    info: {
        title: "Documentacion API Destinos turisticos",
        description: "Cada usuario que se registra podra crear editar y eliminar sus destinos turisticos",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3001",
        },

    ],
    components: {
        securitySchemes: {
            Auth: {
                type: "http",
                scheme: "basic"
            }
        },

        schemas: {

            User: {
                type: "object",
                required: ["name", "email", "password"],
                properties: {
                    name: {
                        type: "string"
                    },
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },

                },
                example: {
                    name: "jerlib",
                    email: "jerlibgnzlz@gmail.com",
                    password: "1234"
                },

            },

            Travel: {
                type: "object",
                required: ["description"],
                properties: {
                    name: {
                        type: "string"
                    },
                    description: {
                        type: "string"
                    },
                    imagen: {
                        type: "string"
                    }
                },
                example: {
                    name: "Argentina",
                    description: "Es un país bicontinental con una superficie de 2 780 400 km²,​ es el país hispanohablante más extenso del planeta, el segundo más grande de América Latina y octavo en el mundo, si se considera solo la superficie continental sujeta a soberanía efectiva.",
                    imagen: "https://res.cloudinary.com/dza5pmwmj/image/upload/v1686468003/vobp15c6st8jvmdm2kum.jpg"
                }
            },

        },

    },



}


const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: [`${__dirname}/**/*.yaml`],

}


export default swaggerJSDoc(swaggerOptions) 
