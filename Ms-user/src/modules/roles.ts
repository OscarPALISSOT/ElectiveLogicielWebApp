import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

/**
 * Create a role
 * @param {string} role the role label to create
 */
async function CreateRole( role: string ) {
    return prisma.roles.create({
        data: {
            Role: role,
        }
    });
}

/**
 * Get a role
 * @param {string} role the role label to get
 */
async function GetRole(role: string) {
    return prisma.roles.findUnique({
        where: {
            Role: role
        }
    })
}

/**
 * Get all roles
 */
async function GetRoles() {
    return prisma.roles.findMany()
}

/**
 * Delete a role
 * @param {string} role the role label to delete
 */
async function DeleteRole(role: string) {
    return prisma.roles.delete({
        where: {
            Role: role
        }
    })
}

/**
 * Update a role
 * @param {string} role the role label to update
 * @param {string} newRole the new role label
 */
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