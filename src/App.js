import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;