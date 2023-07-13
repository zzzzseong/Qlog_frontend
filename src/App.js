import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/explore" element={<ExplorePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;