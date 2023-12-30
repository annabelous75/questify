import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import '../index.css'; // Перевірте, чи імпортуєте стилі
import PrivateRoute from 'Route/privateRoute';
const Landing = lazy(() => import('../pages/Landing/Landing'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
  };

  return (
    <div>
      <button onClick={toggleTheme} className="button">Toggle Theme</button>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/annabelous75/questify/" element={<Landing />} />
          <PrivateRoute path="/annabelous75/questify/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

