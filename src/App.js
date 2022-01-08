import React from "react";
import {Route, Routes} from "react-router-dom";
import Register from "./components/auth/Register";
import Firstpage from "./pages/Firstpage";
import Sclogin from "./pages/Sclogin";




function App() {

  return (
    <div className="App">
        {/*<Register/>*/}
        {/*<Login/>*/}
        {/*<Protected/>*/}
        {/*<Logout/>*/}
        <Routes>
          <Route path="/" element={<Firstpage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="login-success" element={<Sclogin/>}/>
        </Routes>
    </div>
  );
}

export default App;
