
import express from 'express';
import {CreateRole} from "../modules/roles";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({ message: 'Role routes' });
});

router.post('/create', async function(req, res, next) {
    const {role} = req.query;
    const newRole = await CreateRole(role as string)
    res.status(200).json({ message: newRole });
});

export default router;