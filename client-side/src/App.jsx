import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { AuthProvider } from './components/authContext'
import CreateRecipe from './pages/CreateRecipe.jsx'
import SavedRecipes from './pages/SavedRecipes.jsx'
import UserProfile from './pages/UserProfile.jsx'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/create-recipe' element={<CreateRecipe />}/>
          <Route path='/saved-recipes' element={<SavedRecipes />}/>
          <Route path='/profile' element={<UserProfile />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
