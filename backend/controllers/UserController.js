import User from "../models/UserModel.js";

export const getUsers = async(req,res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

export const getUsersById = async(req,res) =>{
    try {
        const user = await User.findById(req.param.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const getUsersByName = async(req,res) =>{
    try {
        const user = await User.find({name:req.param.name});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const saveUser = async(req,res) =>{
    const user = new User(req.body);
    try {
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export const updateUser = async(req,res) =>{
    try {
        const updatedUser = await User.updateOne({id:req.param.id}, {$set:req.body});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export const deleteUser = async(req,res) =>{
    try {
        const deletedUser = await User.deleteOne({id:req.param.id});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}