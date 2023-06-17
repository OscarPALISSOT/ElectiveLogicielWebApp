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
 * Get all users
 */
async function GetUsers() {
    return prisma.users.findMany({
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
    await prisma.users.delete({
        where: {
            Email: email
        }
    })
}

/**
 * Update a user
 * @param {string} email the user email to be updated
 * @param {User} updatedUser the updated user data
 */
async function UpdateUser(email: string ,updatedUser: User) {
    return prisma.users.update({
        where: {
            Email: email
        },
        data: {
            FirstName: updatedUser.firstName,
            LastName: updatedUser.lastName,
            Email: updatedUser.email,
        }
    })
}

/**
 * Update a user password
 */
async function UpdateUserPassword(email: string, password: string) {
    return prisma.users.update({
        where: {
            Email: email
        },
        data: {
            Password: password
        }
    })
}

export {CreateUser, GetUser, GetUsers,DeleteUser, UpdateUser, UpdateUserPassword};