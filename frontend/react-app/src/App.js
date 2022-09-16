import React from "react";
import Home from './pages/Home'
import Historico from './pages/Historico/historico'
import api from './services/api';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
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