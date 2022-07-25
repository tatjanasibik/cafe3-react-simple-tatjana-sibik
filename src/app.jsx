import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/home-page';
import WorldCitiesPage from './pages/world-cities-page';
import ErrorPage from './pages/error-page';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/world-cities" element={<WorldCitiesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

