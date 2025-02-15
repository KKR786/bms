import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Global.css";

import Dashboard from "./pages/Dashboard";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";
import BillsAndPayment from "./pages/BillsAndPayment";
import Notifications from "./pages/Notifications";
import Bookings from "./pages/Bookings";
import Reports from "./pages/Reports";
import Messages from "./pages/Messages";
import Transactions from "./pages/Transactions";
import AddnewBillboard from "./pages/AddnewBillboard"
import Invoices from "./pages/Invoices";
import AllBillboards from "./pages/AllBillboards"
import BookBillBoards from "./pages/BookBillBoards"

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
              <Route path="/notifications" element={< Notifications/>} />
              <Route path="/bookings" element={< Bookings/>} />
              <Route path="/reports" element={< Reports/>} />
              <Route path="/messages" element={< Messages/>} />
              <Route path="/transactions" element={< Transactions/>} />
              <Route path="/addnewbillboard" element={< AddnewBillboard/>} />
              <Route path="/invoices" element={< Invoices/>} />
              <Route path="/allbillboards" element={< AllBillboards/>} />
              <Route path="/bookbillboards" element={< BookBillBoards/>} />
          
              
              <Route path="/users" element={<Users />} />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
