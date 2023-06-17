import {PrismaClient} from "@prisma/client"
import {User} from "../interfaces/User";

const prisma = new PrismaClient()


/**
 * Create a user
 * @param {User} user the user to be created
 */
async function CreateUser(user: User) {

    return prisma.users.create({
        data: {
            Email: user.email,
            FirstName: user.firstName,
            LastName: user.lastName,
            Password: user.password,
            Role: {
                connectOrCreate: user.roles.map((role) => {
                    return {
                        where: {
                            Role: role
                        },
                        create: {
                            Role: role
                        }
                    }
                })
            }
        }
    });
}


/**
 * Get a user
 * @param {string} email the user email to get
 */
async function GetUser(email: string) {
    return prisma.users.findUnique({
        where: {
            Email: email
        },
        select: {
            UserId: true,
            FirstName: true,
            LastName: true,
            Email: true,
            RegistrationDate: true,
            UpdatedAt: true,
        }
    })
}

/**
 * Delete a user
 * @param {string} email the user email to be deleted
 */
async function DeleteUser(email: string) {
    await prisma.users.findUnique({
        where: {
            Email: email
        }
    })
}


//update user

export {CreateUser, GetUser, DeleteUser};