import React, { useState } from 'react';
import AdminLogin from '@/components/AdminLogin';
import AdminResults from '@/components/AdminResults';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminResults />;
};

export default Admin;
