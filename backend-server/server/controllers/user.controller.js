const User = require('../models/User');
const userController = {};

userController.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
};

userController.getUser = async(req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
};

userController.addUser = async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        status: 'Usuario creado'
    });
};

userController.editUser = async(req, res) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        type: req.body.type,
        email: req.body.email,
        isEntity: req.body.isEntity,
        entity: req.body.entity,
        password: req.body.password
    };

    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    res.json({
        status: 'Usuario actualizado'
    });
};

userController.deleteUser = async(req, res) => {
    const { id } = req.params;
    await User.findByIdAndRemove(id);
    res.json({
        status: 'Usuario eliminado'
    });
};

module.exports = userController;