import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from './components';
import HomePage from './pages/home-page/index';
import WorldCitiesPage from './pages/world-cities-page';
import ErrorPage from './pages/error-page';
import CartContext from './contexts/cart-context';
import PotteryPage from './pages/pottery-page';
import CartPage from './pages/cart-page';

const App = () => (
  <BrowserRouter>
    <CartContext.Provider value={18}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/world-cities" element={<WorldCitiesPage />} />
        <Route path="/pottery" element={<PotteryPage />} />
        <Route path="/cart" element={<CartPage />} />
        

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </CartContext.Provider>
  </BrowserRouter>
);

export default App;

