import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Global.css";
import { useState } from "react";
import { useAuthContext } from "./hooks/useAuth";

import Nav from "./components/navigation/Nav";
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
import AddnewBillboard from "./pages/AddnewBillboard";
import Invoices from "./pages/Invoices";
import AllBillboards from "./pages/AllBillboards";
import BookBillBoards from "./pages/BookBillBoards";

function App() {
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleClickOutside = () => {
    if (isProfileOpen) {
      setIsProfileOpen(false);
    }
  };

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100" onClick={handleClickOutside}>
          {user && <Nav handle={setIsOpen} />}
          <div
            className={`${
              isOpen ? "ml-64" : "ml-0"
            } transition-margin duration-300 ease-in-out`}
          >
            <div className="flex-1 ">
              <Routes>
                <Route
                  path="/auth/signin"
                  element={!user ? <Signin /> : <Dashboard />}
                />
                <Route
                  path="/auth/signup"
                  element={!user ? <Signup /> : <Dashboard />}
                />

                <Route path="/" element={user ? <Dashboard /> : <Signin />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<AccountSettings />} />
                <Route path="/payments" element={<BillsAndPayment />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/addnewbillboard" element={<AddnewBillboard />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/allbillboards" element={<AllBillboards />} />
                <Route path="/bookbillboards" element={<BookBillBoards />} />

                <Route path="/users" element={<Users />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
