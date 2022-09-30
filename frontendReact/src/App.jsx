import React from "react";
import Home from './pages/Home'
import Historico from './pages/Historico/historico'
import Login from './pages/Login'

import {
  Route,
  Routes
} from 'react-router-dom'
//import Routes from "./routes"



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<Historico />} />
        <Route path=":userId" element={<Historico />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}


/*     {/* <Router>
<div className="App">
<Home />
</div>
</Router> }*/
export default App;