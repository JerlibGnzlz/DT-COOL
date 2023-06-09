import { Schema, model } from "mongoose";
import { User } from '../interfaces/user.Interfaces';



const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true,
            trim: true,
        },

    },
    {
        timestamps: true,
        versionKey: false
    })





export const Usermodel = model<User>("User", userSchema)