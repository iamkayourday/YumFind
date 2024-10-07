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
import {NextUIProvider} from "@nextui-org/react";
import Faqs from './components/pages/Faqs';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <NextUIProvider>
      <Router>
        <div className='dark:bg-[#1e1e1f]'>         
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forgot" element={<ForgotPasswordForm/>} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/recipe/:id" element={< RecipeDetails/>} />
            <Route path="/favorites" element={<Favorites/>} /> 
            <Route path="/faqs" element={<Faqs/>} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </NextUIProvider>
  );
}

export default App;
