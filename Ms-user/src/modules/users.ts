import {PrismaClient} from "@prisma/client"
import {User} from "../interfaces/User";

const prisma = new PrismaClient()

async function CreateUser( user: User ) {
    return prisma.users.create({
        data: {
            Email: user.email,
            FirstName: user.firstName,
            LastName: user.lastName,
            Password: user.password,
        }
    });
}

async function GetUsers(id: number, email: string, name: string) {
    await prisma.users.findMany({
        where: {
            OR: [
                {
                    UserId: {
                        equals: id
                    }
                },
                {
                    Email: {
                        contains: email
                    }
                },
            ]
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

async function UpdateUser(user: User) {
    await prisma.users.update({
        where: {
            Email: user.email
        },
        data: {
            Email: user.email,
            FirstName: user.firstName,
            LastName: user.lastName,
            Password: user.password,
        }
    })
}

export {CreateUser, GetUsers, GetUser, DeleteUser, UpdateUser};