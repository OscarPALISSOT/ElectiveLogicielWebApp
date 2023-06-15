import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function CreateUser(email: string, name: string, password: string) {
    await prisma.user.create({
        data: {
            email: email,
            name: name,
            password: password,
        }
    })
}

async function GetUsers(id: number, email: string, name: string) {
    await prisma.user.findMany({
        where: {
            OR: [
                {id: {
                    equals: id
                    }
                },
                {email: {
                    contains: email
                    }
                },
                {name: {
                    contains: name
                    }
                }
            ]
        }
    })
}
async function GetUser(email: string) {
    await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}

async function DeleteUser(email: string) {
    await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}
async function UpdateUser(email: string, name: string, password: string) {
    await prisma.user.update({
        where: {
            email: email
        },
        data: {
            email: email,
            name: name,
            password: password,
        }
    })
}

export {CreateUser, GetUsers, GetUser, DeleteUser, UpdateUser};