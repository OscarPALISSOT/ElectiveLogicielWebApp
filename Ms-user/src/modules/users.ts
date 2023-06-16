import {PrismaClient} from "@prisma/client"
import {User} from "../interfaces/User";

const prisma = new PrismaClient()

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

async function GetUsers(email: string) {
    return prisma.users.findMany({
        where: {
            Email: email
        }
    })
}

async function GetUser(email: string) {
    await prisma.users.findUnique({
        where: {
            Email: email
        }
    })
}

async function DeleteUser(email: string) {
    await prisma.users.findUnique({
        where: {
            Email: email
        }
    })
}


//update user

export {CreateUser, GetUsers, GetUser, DeleteUser};