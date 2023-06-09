import path from "path";
import multer from "multer";
import { NextFunction, Request, Response } from 'express';





const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/upload"),
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

export const uploadmiddleware = async (req: Request, res: Response, next: NextFunction) => {
    upload.single("image")(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: "Error uploading file" });

        } else if (err) {
            return res.status(500).json({ error: err.message });
        }
        next();

    });
};