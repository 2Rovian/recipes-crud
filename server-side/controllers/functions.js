import User from "../models/userSchema.js";
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
        if (!user){
            return res.status(404).json({ message: "Usuário não encontrado" })
        }

        // verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
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