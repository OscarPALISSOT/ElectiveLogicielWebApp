import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/User';

const prisma = new PrismaClient();


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
    },
  });
}


/**
 * Get a user
 * @param {string} email the user email to get
 */
async function GetUser(email: string) {
  return prisma.users.findUnique({
    where: {
      Email: email,
    },
    select: {
      UserId: true,
      FirstName: true,
      LastName: true,
      Email: true,
      RegistrationDate: true,
      UpdatedAt: true,
      Role: {
        select: {
          Role: true,
        },
      },
    },
  });
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
      Role: {
        select: {
          Role: true,
        },
      },
    },
  });
}

/**
 * Delete a user
 * @param {string} email the user email to be deleted
 */
async function DeleteUser(email: string) {
  await prisma.users.delete({
    where: {
      Email: email,
    },
  });
}

/**
 * Update a user
 * @param {string} email the user email to be updated
 * @param {User} updatedUser the updated user data
 */
async function UpdateUser(email: string, updatedUser: User) {
  return prisma.users.update({
    where: {
      Email: email,
    },
    data: {
      FirstName: updatedUser.firstName,
      LastName: updatedUser.lastName,
      Email: updatedUser.email,
    },
  });
}

/**
 * Update a user password
 */
async function UpdateUserPassword(email: string, password: string) {
  return prisma.users.update({
    where: {
      Email: email,
    },
    data: {
      Password: password,
    },
  });
}

/**
 * Get a user hashed password
 * @param {string} email the user email to get
 */
async function GetUserPassword(email: string) {
  return prisma.users.findUnique({
    where: {
      Email: email,
    },
    select: {
      UserId: true,
      Email: true,
      Password: true,
    },
  });
}


/**
 * Add user roles
 * @param {string} email the user email to be updated
 * @param {string[]} roles the roles to be added
 */
async function AddUserRoles(email: string, roles: string[]) {
  return prisma.users.update({
    where: {
      Email: email,
    },
    data: {
      Role: {
        connectOrCreate: roles.map((role) => {
          return {
            where: {
              Role: role,
            },
            create: {
              Role: role,
            },
          };
        }),
      },
    },
  });
}

/**
 * Remove user roles
 * @param {string} email the user email to be updated
 * @param {string[]} roles the roles to be deleted
 */
async function RemoveUserRoles(email: string, roles: string[]) {
  return prisma.users.update({
    where: {
      Email: email,
    },
    data: {
      Role: {
        disconnect: roles.map((role) => {
          return {
            Role: role,
          };
        }),
      },
    },
  });
}

/**
 * add token to user
 * @param {string} email the user email to be updated
 * @param {string} token the token to be added
 */
async function AddTokenToUser(email: string, token: string) {
  return prisma.users.update({
    where: {
      Email: email,
    },
    data: {
      Token: token,
    },
  });
}

export { CreateUser, GetUser, GetUsers, DeleteUser, UpdateUser, UpdateUserPassword, GetUserPassword, AddUserRoles, RemoveUserRoles, AddTokenToUser };