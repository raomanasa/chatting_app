import React from 'react';
import {BrowserRouter ,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <button id="login"><Link to="/login">Login</Link></button>
    </BrowserRouter>
  );
}

export default App;
