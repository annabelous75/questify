import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import '../index.css'; // Импортируйте ваш файл стилей

const Landing = lazy(() => import('./Landing/Landing'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

const App = () => {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    document.documentElement.setAttribute(
      'data-theme',
      isDarkTheme ? 'light' : 'dark'
    );
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/annabelous75/questify/landing" element={<Landing />} />
          <Route path="/annabelous75/questify/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
