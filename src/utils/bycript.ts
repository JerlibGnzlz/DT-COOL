import bcrypt from "bcrypt";


// ─── Encriptar Password ──────────────────────────────────────────────────────


export const encryptPassword = async (password: string) => {
    return await bcrypt.hash(password, 8);
};

// ─── Comparar Password ───────────────────────────────────────────────────────

export const isCorrectPass = async (password: string, passwordHashado: string) => {
    return await bcrypt.compare(password, passwordHashado);
};

