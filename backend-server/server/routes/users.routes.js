const router = require('express').Router();

const userLogic = require('../controllers/user.controller');

router.get('/', userLogic.getUsers);
router.post('/', userLogic.addUser);
router.get('/:id', userLogic.getUser);
router.put('/:id', userLogic.editUser);
router.delete('/:id', userLogic.deleteUser);

module.exports = router;