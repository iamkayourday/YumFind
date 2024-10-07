//Imports
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import ForgotPasswordForm from './components/Auth/ForgotPasswordForm';
import Home from './components/pages/Home';
import RecipeDetails from './components/pages/RecipeDetails';
import AboutUs from './components/pages/AboutUs';
import Favorites from './components/pages/Favorites';
import { ChakraBaseProvider } from '@chakra-ui/react';
// import Mode from './components/Utils/Mode'

function App() {
  return (
    <ChakraBaseProvider>
    <Router>
      <div className='dark:bg-[#1e1e1f]'>         
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot" element={<ForgotPasswordForm/>} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/recipe/:id" element={< RecipeDetails/>} />
          <Route path="/favorites" element={<Favorites/>} /> {/* Add the favorites route */}
        </Routes>
      </div>
      <ToastContainer />
    </Router>
    </ChakraBaseProvider>
  );
}

export default App;
