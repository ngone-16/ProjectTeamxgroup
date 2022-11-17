const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/userController');

//ecrire  les info dans la base
router.post('/',UserCtrl.createUser);
router.get('/:id', UserCtrl.getOneUser);
router.get('/', UserCtrl.getAllUser);
router.patch('/:id', UserCtrl.modifyUser);
router.delete('/:id', UserCtrl.deleteUser);

module.exports=router;