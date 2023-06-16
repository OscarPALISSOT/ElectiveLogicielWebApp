import {PrismaClient} from "@prisma/client"
import {Role} from "../interfaces/Role";

const prisma = new PrismaClient()

async function CreateRole( role: string ) {
    return prisma.roles.create({
        data: {
            Role: role,
        }
    });
}

async function GetRole(role: string) {
    await prisma.roles.findUnique({
        where: {
            Role: role
        }
    })
}

async function DeleteRole(role: string) {
    await prisma.roles.delete({
        where: {
            Role: role
        }
    })
}


//update role



export {CreateRole, GetRole, DeleteRole};