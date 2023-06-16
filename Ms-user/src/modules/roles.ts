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
    return prisma.roles.findUnique({
        where: {
            Role: role
        }
    })
}

async function GetRoles() {
    return prisma.roles.findMany()
}

async function DeleteRole(role: string) {
    return prisma.roles.delete({
        where: {
            Role: role
        }
    })
}


async function UpdateRole(role: string, newRole: string) {
    return prisma.roles.update({
        where: {
            Role: role
        },
        data: {
            Role: newRole
        }
    })
}



export {CreateRole, GetRole, DeleteRole, GetRoles, UpdateRole};