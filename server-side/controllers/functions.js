import { User, Recipe } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

// Buscar todos os usuários
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Criar usuário
export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validação de campos obrigatórios
        if (!username || !password) {
            return res.status(400).json({ message: "Username e password são obrigatórios" });
        }

        // verificar se user existe
        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(400).json({ message: "usuário ja cadastrado" })
        }

        // Criptografa a senha
        const saltRounds = 10; // Número de rounds para gerar o salt
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // cria novo user
        const newUser = new User({ username, password: hashedPassword })
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // verifica se user existe
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" })
        }

        // verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: "senha inválida" })
        }

        // Gera o token JWT
        const token = jwt.sign(
            { userId: user._id, username: user.username }, // Payload
            process.env.JWT_SECRET, // Chave secreta
            { expiresIn: '2h' } // Tempo de expiração
        );

        // Retorna o token e algumas informações do usuário
        res.status(200).json({ message: "Login bem-sucedido", token, user: { id: user._id, username: user.username } });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Criar uma nova receita
export const createRecipe = async (req, res) => {
    try {
        const { title, description, ingredients, instructions, imageUrl, cookingTime } = req.body;
        const userId = req.user.userId; // Obtém o ID do usuário do token JWT

        // Validação de campos obrigatórios
        if (!title || !description || !ingredients || !instructions || !cookingTime) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        // Cria a nova receita
        const newRecipe = new Recipe({
            title,
            description,
            ingredients,
            instructions,
            cookingTime,
            imageUrl,
            createdBy: userId // Associa a receita ao usuário que a criou
        });

        await newRecipe.save();

        // Atualiza o usuário para incluir a receita salva
        await User.findByIdAndUpdate(userId, { $push: { savedRecipes: newRecipe._id } });

        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// middleware
export const authenticateToken = (req, res, next) => {
    // Obtém o token do cabeçalho Authorization
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Formato: Bearer <token>

    // Se não houver token, retorna erro 401 (Não autorizado)
    if (!token) {
        return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
    }

    // Verifica o token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido ou expirado." });
        }

        // Se o token for válido, adiciona o usuário à requisição
        req.user = user;
        next(); // Passa para o próximo middleware ou rota
    });
};

export const getUserRecipes = async (req, res) => {
    try {
        const userId = req.user.userId; // Obtém o ID do usuário do token JWT
        const user = await User.findById(userId).populate('savedRecipes');
        res.status(200).json(user.savedRecipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateNameProfile = async (req, res) => {
    try {
        const { userId, name_profile } = req.body;
        const user = await User.findByIdAndUpdate(
            userId,
            { name_profile },
            { new: true }
        );

        res.status(200).json({ message: 'Perfil atualizado com sucesso.', user });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar perfil.', error });
    }
}