import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { AuthProvider } from './components/authContext'
import CreateRecipe from './pages/CreateRecipe.jsx'
import SavedRecipes from './pages/SavedRecipes.jsx'
import UserProfile from './pages/UserProfile.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

// recipePages //
import CaramelPudding from './pages/recipesPages/CaramelPudding.jsx'
import ChocolateCake from './pages/recipesPages/ChocolateCake.jsx'
import GlazedDonut from './pages/recipesPages/GlazedDonut.jsx'
import GrilledSteak from './pages/recipesPages/GrilledSteak.jsx'
import SpaghettiCarbonara from './pages/recipesPages/SpaghettiCarbonara.jsx'
import TradionalBurger from './pages/recipesPages/TraditionalBurger.jsx'
// ----------- //

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home */}
          <Route path='/' element={<Home />} />
          {/* ---- */}

          {/* Rotas das Receitas */}
          <Route path='/caramel-pudding' element={<CaramelPudding />} />
          <Route path='/chocolate-cake' element={<ChocolateCake />} />
          <Route path='/glazed-donut' element={<GlazedDonut />} />
          <Route path='/grilled-steak' element={<GrilledSteak />} />
          <Route path='/spaghetti-carbonara' element={<SpaghettiCarbonara />} />
          <Route path='/tradional-burger' element={<TradionalBurger />} />
          {/* ------------------ */}

          {/* Rotas CRUD */}
          <Route path='/login' element={<Login />} />
          <Route path='/create-recipe' element={<CreateRecipe />} />
          <Route path='/saved-recipes' element={<SavedRecipes />} />
          <Route path='/profile' element={<UserProfile />} />
          {/* ---------- */}

          {/* Rota para capturar todas as rotas não definidas */}
          <Route path='*' element={<ErrorPage />} />
          {/* ----------------------------------------------- */}

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
