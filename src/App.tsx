import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Links from './pages/Links';

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" theme="dark" />
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/links" element={<Links />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;