import { Request, Response, } from 'express';
import { Usermodel } from '../models/UsersModel';
import { encryptPassword, isCorrectPass } from "../utils/bycript"
import { generateToken } from "../utils/Jwt"





export const registerUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body

    try {
        if (!email || !password) {
            return res.status(400).json({ msg: "both fields are required" })
        }

        const user = await Usermodel.findOne({ email })


        if (user) {
            return res.status(400).json({ msg: "user already exists", user })
        }

        // ─── Password Encriptada ──────────────────────────────────────
        const passHash = await encryptPassword(password)


        const newUser = await Usermodel.create({ name, email, password: passHash })

        if (newUser) {
            return res.status(201).json({ msg: "User created successfully", newUser })
        }
    } catch (error) {
        console.log(error)
    }
}


export const loginUser = async (req: Request, res: Response) => {

    const { email, password } = req.body

    try {
        const userExist = await Usermodel.findOne({ email })
        if (!userExist) {

            return res.status(401).json({ msg: "this account is not registered" })
        }

        const passwordHash = userExist.password



        // ─── Comparando Password ─────────────────────────────────────



        const isCorrect = await isCorrectPass(password, passwordHash)
        if (isCorrect) {

            const token = generateToken(userExist.email)

            const data = {
                token,
                user: userExist
            }



            return res.status(200).json({ msg: "Session and valid token", data })

        } else {
            return res.status(403).json({ msg: "Incorrect password" })
        }


    } catch (error) {
        console.log(error)
    }

}



