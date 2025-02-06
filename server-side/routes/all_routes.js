import express from 'express';
import { getUsers, createUser, loginUser, createRecipe, authenticateToken, getUserRecipes, updateNameProfile } from '../controllers/functions.js';

const router = express.Router();

// Rota para buscar todos os usuários
router.get("/users", getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/new-recipe", authenticateToken ,createRecipe);
router.get("/get-recipes", authenticateToken, getUserRecipes);
router.put("/update-nameProfile", authenticateToken,updateNameProfile);

// Rota de teste
router.get('/test', (req, res) => {
    res.send('API rodando');
});

export default router;