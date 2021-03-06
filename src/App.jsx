import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext.js';
import { Cart, Home, Product, Success, SignIn, SignUp } from './pages';
import './styles/reset.css';
import { Background } from './components/Background.js';
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Background>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/success' element={<Success />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
        </Background>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}
