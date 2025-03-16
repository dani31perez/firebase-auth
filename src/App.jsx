import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import ResetPassword from "./components/ResetPassword";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const subscribed = onAuthStateChanged(auth, (currUser) => setUser(currUser));
    return () => subscribed();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <DashBoard /> :<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/dashboard" element={user ? <DashBoard /> :<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
