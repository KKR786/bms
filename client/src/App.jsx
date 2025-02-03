import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Global.css";

import Dashboard from "./pages/Dashboard";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Users from "./pages/Users";

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
            <Routes>
              <Route path="/auth/signin" element={<Signin />} />
              <Route path="/auth/signup" element={<Signup />} />
              
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
