import "dotenv/config"
import { dbConexion } from "./db"
import express from "express"
import morgan from "morgan"
import userRoutes from "./routes/user.routes"
import destinationRoutes from "./routes/travels.routes"
import swaggerUI from "swagger-ui-express"
import swggerInitial from "./docs/swagger"


const app = express()


const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))


app.use(userRoutes)
app.use(destinationRoutes)

app.use("/api/document", swaggerUI.serve, swaggerUI.setup(swggerInitial))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
    dbConexion()
})