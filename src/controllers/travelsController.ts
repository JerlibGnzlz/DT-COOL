import { Request, RequestHandler, Response, } from 'express';
import { TravelModel } from '../models/travelsModel';
import cloudinary from 'cloudinary';
import fs from "fs"
import { Usermodel } from '../models/UsersModel';





export const createTravel = async (req: any, res: Response) => {


    const { name, description, imageURL, public_id } = req.body

    const { user } = req


    try {

        if (!req.file) {
            return res.status(400).json({ msg: "No se puede guardar la imagen" })

        }

        if (!name || !description) {
            return res.status(400).json({ msg: "both fields are required" })
        }


        const travel = await TravelModel.findOne({ name })

        if (travel) {
            return res.status(400).json({ msg: "Travel name already exists", travel })
        }
        const users = await Usermodel.findOne(user)

        if (!users) {
            return res.status(400).json({ msg: "user required" })
        }

        const result = await cloudinary.v2.uploader.upload(req.file.path)

        const newTravel = new TravelModel(
            {
                name,
                description,
                imageURL: result.url,
                public_id: result.public_id,
                user: users.id
            })
        await newTravel.save()

        await fs.unlink(req.file.path, (err) => {
            if (err) throw err;
            console.log("path was deleted")
        })




        if (newTravel) {
            return res.status(201).json({ msg: "Travel created successfully", newTravel })
        }

    } catch (error) {
        console.log(error
        )
    }

}

export const getsTravel = async (req: Request, res: Response) => {


    try {
        const allTravel = await TravelModel.find()

        if (allTravel) {

            return res.status(200).json({ msg: "Get all Travel", allTravel })
        }

    } catch (error) {
        console.log(error)
    }
}

export const getTravel = async (req: Request, res: Response) => {

    const { id } = req.params


    try {
        const oneTravel = await TravelModel.findOne({ _id: id })

        if (oneTravel) {

            return res.status(200).json({ msg: "Get one Travel", oneTravel })

        }
    } catch (error) {
        console.log(error)

    }
}



export const updateTravel = async ({ params, body }: Request, res: Response) => {

    const { id } = params

    const updateTravel = await TravelModel.findByIdAndUpdate(
        id,
        body,
        { new: true })

    try {

        if (updateTravel) {

            return res.status(200).json({ msg: "Travel update", updateTravel });
        }
    } catch (error) {
        console.log(error
        )
    }
}


export const deleteTravel = async (req: Request, res: Response) => {


    const { id } = req.params

    try {
        const deleteTravel = await TravelModel.findByIdAndRemove(id)

        if (deleteTravel) {

            return res.status(200).json({ msg: "The Travel was deleted", deleteTravel })
        }

    } catch (error) {
        console.log(error)
    }
}