import { JwtPayload, sign, verify } from "jsonwebtoken"





export const generateToken = (id: string) => {
    const jwt = sign({ id }, process.env.JWT_SECRET || "password", {
        expiresIn: "3h",
    })
    return jwt
}



export const verifyToken = (jwt: string): JwtPayload | string => {
    const isOk = verify(jwt, process.env.JWT_SECRET || "password")
    return isOk
}
