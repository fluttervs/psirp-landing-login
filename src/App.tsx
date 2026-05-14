import React, { useState } from 'react';
import { Home } from './pages/Home';
import { LoginPage } from './components/LoginPage';

export function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  if (showLogin) {
    return (
      <LoginPage
        onBack={() => setShowLogin(false)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((current) => !current)}
      />
    );
  }

  return (
    <Home
      onSignInClick={() => setShowLogin(true)}
      isDarkMode={isDarkMode}
      onToggleTheme={() => setIsDarkMode((current) => !current)}
    />
  );
}