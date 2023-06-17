import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
    try {
        const salt = await bcrypt.genSalt(process.env.SALT_ROUNDS as unknown as number);

        return await bcrypt.hash(password, salt)
    } catch(error) {
        console.log(error)
    }
}