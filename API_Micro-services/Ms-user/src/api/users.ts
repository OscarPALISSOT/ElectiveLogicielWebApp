import bcrypt from 'bcrypt';
import express from 'express';
import {CreateUser, DeleteUser, GetUser, GetUsers, UpdateUser, UpdateUserPassword} from "../modules/users";
import {User} from "../interfaces/User";
import {hashPassword} from "../modules/hashPassword";

const router = express.Router();

/**
 * ping user route
 */
router.get('/', function(req, res, next) {
    res.status(200).json({ message: 'Users routes' });
});

/**
 * create a user
 */
router.post('/create', async function(req, res, next) {
    const {email, firstName, lastName, password, roles} = req.query
    const hashPwd = await hashPassword(password as string)
    if (!hashPwd) {
        res.status(500).json({ error: 'Error while hashing password' });
    }
    const user = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: hashPwd,
        roles: (roles as string).replace(' ', '').split(',')
    } as User
    try {
        const newUser = await CreateUser(user)
        res.status(200).json({ response: newUser });
    } catch(error) {
        res.status(500).json({ error: error });
    }
});


/**
 * get a user by email
 */
router.get('/getUser', async function(req, res, next) {
    const {email} = req.query;
    try {
        const users = await GetUser(email as string)
        res.status(200).json({ response: users });
    } catch(error) {
        res.status(500).json({ error: error });
    }
});


/**
 * get all users
 */
router.get('/getUsers', async function(req, res, next) {
    try {
        const users = await GetUsers()
        res.status(200).json({ response: users });
    } catch(error) {
        res.status(500).json({ error: error });
    }
});

/**
 * delete a user
 */
router.delete('/deleteUser', async function(req, res, next) {
    const {email} = req.query;
    try {
        await DeleteUser(email as string)
        res.status(200).json({ response: 'User deleted' });
    } catch(error) {
        res.status(500).json({ error: error });
    }
});

/**
 * update a user
 */
router.patch('/updateUser', async function(req, res, next) {
const {email, firstName, lastName, roles, userEmail} = req.query

    const user = {
        email: email,
        firstName: firstName,
        lastName: lastName,
    } as User
    try {
        await UpdateUser(userEmail as string, user)
        const updatedUser = await GetUser(email as string)
        res.status(200).json({ response: updatedUser });
    } catch(error) {
        res.status(500).json({ error: error });
    }
});

/**
 * update a user password
 */
router.patch('/updateUserPassword', async function(req, res, next) {
    const {email, password} = req.query

    const hashPwd = await hashPassword(password as string)
    if (!hashPwd) {
        res.status(500).json({ error: 'Error while hashing password' });
    }

    try {
        await UpdateUserPassword(email as string, hashPwd as string)
        res.status(200).json({ response: 'Password updated' });
    } catch(error) {
        res.status(500).json({ error: error });
    }
});

export default router;