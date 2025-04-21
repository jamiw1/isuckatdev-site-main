import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;