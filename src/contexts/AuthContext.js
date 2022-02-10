import { createContext, useState } from 'react';
import { services } from '../services/services.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem('auth'));
  const [auth, setAuth] = useState(persistedAuth);
  function login(authData) {
    setAuth(authData);
    localStorage.setItem('auth', JSON.stringify(authData));
    checkCart();
  }

  function checkCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      // TODO send to server what's in the cart
      services.addProduct(auth, cart);
      // TODO erase what's in the localstorage cart
      localStorage.removeItem('cart');
    }
  }

  function logout() {
    setAuth(null);
    localStorage.removeItem('auth');
  }
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
