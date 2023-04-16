import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theming';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
