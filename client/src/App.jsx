import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Global.css";

import Dashboard from "./pages/Dashboard";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";
import BillsAndPayment from "./pages/BillsAndPayment";


function App() {

  return (
    <>
      <BrowserRouter>
        <div>
            <Routes>
              <Route path="/auth/signin" element={<Signin />} />
              <Route path="/auth/signup" element={<Signup />} />
              
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/payments" element={<BillsAndPayment />} />
          
              
              <Route path="/users" element={<Users />} />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
