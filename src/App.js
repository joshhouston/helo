import React from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Dashboard />
      <Form />
      <Auth />
    </div>
  );
}

export default App;
