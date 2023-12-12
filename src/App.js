import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import { SignUp } from "./components/SignUp";
import "./App.css";
import { Auth } from "./components/Auth";
import { useState } from "react";
import { PlayerRegistration } from "./components/PlayerRegistration"
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {user ? (
          <Route
            path="services"
            element={<Services logout={() => setUser(false)} />}
          />
        ) : (
          <Route path="services" element={<Navigate to="/" />} />
        )}
        <Route path="contact" element={<Contact />} />
        <Route path="PlayerRegistration" element={<PlayerRegistration />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<UserList />} />
        {!user && (
          <Route
            path="auth"
            element={<Auth authenticate={() => setUser(true)} />}
          />
        )}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
