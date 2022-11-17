const users = require('../models/users');
const User = require('../models/users');
exports.createUser = (req, res) => {
    const user = new User(req.body);

    user.save()
        .then((user) => {
            return res.status(201).json({user})
        })
        .catch((error) => {return res.status(400).json({error})})
    
}
//
exports.getOneUser = (req, res) => {
    const id = req.params.id;
    User.findOne({_id: id})
    .then((user) => { return res.status(200).json({user})})
    .catch((error) => {return res.status(400).json({error})});
}

//
exports.getAllUser = (req, res) => {
    
    User.find()
    .then((users) => { return res.status(200).json({users})})
    .catch((error) => {return res.status(400).json({error})});
}

//
exports.modifyUser = ( req, res) => {
    const id= req.params.id ;
    User.updateOne({ _id: id}, { ...req.body, _id: id })
    .then(() => res.status(200).json({ message: 'User modifié !'}))
    .catch(error => res.status(400).json({ error }));
}
/*function modifyUser(user) {
    users = users.map(p => p.id === +user.id ? user : p);
}

patch('/users/:id',
        (req, res) => {
            modifyUser(req.body);
            res
                .status(200)
                .json(req.body);
        })*/

//
exports.deleteUser = (req, res ) => {
    const id= req.params.id ;
    User.deleteOne({ _id: id })
    .then(() => res.status(200).json({ message: 'User supprimé !'}))
    .catch(error => res.status(400).json({ error }));

}