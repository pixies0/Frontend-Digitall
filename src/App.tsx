import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/Login/LoginPage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { HomePage } from './pages/Home/HomePage';

import { theme } from './theme';
import '@mantine/core/styles.css';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
