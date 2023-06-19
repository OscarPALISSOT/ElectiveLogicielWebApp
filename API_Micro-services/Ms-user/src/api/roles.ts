
import express from 'express';
import { CreateRole, DeleteRole, GetRole, GetRoles, UpdateRole } from '../modules/roles';

const router = express.Router();

/**
 * ping role route
 */
router.get('/', function (req, res, next) {
  res.status(200).json({ message: 'Role routes' });
});


/**
 * create a role
 */
router.post('/create', async function (req, res, next) {
  const { role } = req.query;
  try {
    const newRole = await CreateRole(role as string);
    res.status(200).json({ response: newRole });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * get a role
 */
router.get('/getRole', async function (req, res, next) {
  const { role } = req.query;
  try {
    const Role = await GetRole(role as string);
    res.status(200).json({ response: Role });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * get all roles
 */
router.get('/getRoles', async function (req, res, next) {
  try {
    const Roles = await GetRoles();
    res.status(200).json({ response: Roles });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


/**
 * delete a role
 */
router.delete('/deleteRole', async function (req, res, next) {
  const { role } = req.query;
  try {
    await DeleteRole(role as string);
    res.status(200).json({ response: 'Role deleted' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * update a role
 */
router.put('/updateRole', async function (req, res, next) {
  const { role, newRole } = req.query;
  try {
    const updatedRole = await UpdateRole(role as string, newRole as string);
    res.status(200).json({ response: updatedRole });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;