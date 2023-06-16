import {PrismaClient} from "@prisma/client"
import {Role} from "../interfaces/Role";

const prisma = new PrismaClient()

async function CreateRole( role: Role ) {
    return prisma.role.create({
        data: {
            Role: role.role,
        }
    });
}

async function GetRole(role: string) {
    await prisma.role.findUnique({
        where: {
            Role: role
        }
    })
}

async function DeleteRole(role: string) {
    await prisma.role.delete({
        where: {
            Role: role
        }
    })
}


//update role



export {CreateRole, GetRole, DeleteRole};