import React from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Post from './components/post/Post';
import Nav from './components/nav/Nav';
import routes from './routes';
import {HashRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className='row' >
      <Nav />
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
