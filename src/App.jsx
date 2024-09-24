//Imports
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import ForgotPasswordForm from './components/Auth/ForgotPasswordForm';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/forgot" element={<ForgotPasswordForm/>} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
