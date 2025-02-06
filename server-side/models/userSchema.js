import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name_profile: { type: String, required: false},
    savedRecipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }]
});

const recipeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    cookingTime: { type: String, required: true },
    imageUrl: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

// Models
const User = mongoose.model('User', userSchema);
const Recipe = mongoose.model('Recipe', recipeSchema);

// Exportar ambos os modelos
export { User, Recipe };