const Produit = require('../models/produits');
exports.createProduit = (req, res) => {
    const produit = new Produit(req.body);

    produit.save()
        .then((produit) => {
            return res.status(201).json({produit})
        })
        .catch((error) => {return res.status(400).json({error})})
    
}
//
exports.getOneProduit = (req, res) => {
    const id = req.params.id;
    Produit.findOne({_id: id})
    .then((produit) => { return res.status(200).json({produit})})
    .catch((error) => {return res.status(400).json({error})});
}

//
exports.getAllProduit = (req, res) => {
    
    Produit.find()
    .then((produits) => { return res.status(200).json({produits})})
    .catch((error) => {return res.status(400).json({error})});
}

//
exports.modifyProduit = ( req, res) => {
    const id= req.params.id ;
    Produit.updateOne({ _id: id}, { ...req.body, _id: id })
    .then(() => res.status(200).json({ message: 'Produit modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

//
exports.deleteProduit = (req, res ) => {
    const id= req.params.id ;
    Produit.deleteOne({ _id: id })
    .then(() => res.status(200).json({ message: 'Produit supprimé !'}))
    .catch(error => res.status(400).json({ error }));

}