const express = require('express');
const router = express.Router();
const ProduitCtrl = require('../controllers/produitController');

//ecrire  les info dans la base
router.post('/',ProduitCtrl.createProduit);
router.get('/:id', ProduitCtrl.getOneProduit);
router.get('/', ProduitCtrl.getAllProduit);
router.patch('/:id', ProduitCtrl.modifyProduit);
router.delete('/:id', ProduitCtrl.deleteProduit);

module.exports=router;