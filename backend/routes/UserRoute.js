import express from "express";
import { 
    getUsers, getUsersById, getUsersByName, saveUser, updateUser, deleteUser 
} from "../controllers/UserController.js"

const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.get('/users/:name', getUsersByName)
router.post('/users', saveUser)
router.patch('/users', updateUser)
router.delete('/users', deleteUser)

export default router;