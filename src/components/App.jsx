import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Button } from './viewsRegistration/viewsRegistration.styled';
import '../index.css';

const Landing = lazy(() => import('./Landing/Landing'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Login = lazy(() => import('./viewsRegistration/Login'));
const Register = lazy(() => import('./viewsRegistration/Register'));

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [hideToggle, setHideToggle] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    document.documentElement.setAttribute(
      'data-theme',
      isDarkTheme ? 'light' : 'dark'
    );
  };

  useEffect(() => {
    const shouldHideToggle = location.pathname.includes('/login') || location.pathname.includes('/register');
    setHideToggle(shouldHideToggle);
  }, [location.pathname]);

  return (
    <div>
      {!hideToggle && <Button onClick={toggleTheme}>Toggle Theme</Button>}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/annabelous75/questify/" element={<Landing />} />
          <Route path="/annabelous75/questify/dashboard" element={<Dashboard />} />
          <Route path="/annabelous75/questify/login" element={<Login />} />
          <Route path="/annabelous75/questify/register" element={<Register />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

