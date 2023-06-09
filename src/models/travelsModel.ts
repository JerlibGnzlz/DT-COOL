import { Schema, model } from "mongoose";
import { Destination } from "../interfaces/Destination.Interfaces"



const travelSchema = new Schema(
    {
        name: String
        ,
        description: {
            type: String,
            require: true,
        },

        user: {

            type: Schema.Types.ObjectId,
            ref: "User",
        },

        imageURL: String,

        public_id: String

    },
    {
        timestamps: true,
        versionKey: false
    })


travelSchema.pre('save', async function (next) {
    await this.populate("user");
    next()

});




export const TravelModel = model<Destination>("Travel", travelSchema)