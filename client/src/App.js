import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useContext, useState } from 'react';

import { ThemeProvider } from '@mui/material'
import { Theme } from './Theme';
import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import Dashboard from "./pages/admin/Dashboard";
import CarsList from "./pages/admin/CarsList";
import EditCar from "./pages/admin/EditCar";
import NewCar from "./pages/admin/NewCar";
import UserDashboard from "./pages/admin/UserDashboard";

import CariMobil from "./pages/user/CariMobil";
import DetailMobil from "./pages/user/DetailMobil";
import MetodePembayaran from "./pages/user/MetodePembayaran";
import Pembayaran from "./pages/user/Pembayaran";
import Tiket from "./pages/user/Tiket";

import { AuthContext } from "./context/AuthContext";
export const Data = createContext();

function App() {

  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/login" />;
  };


  return (
    <ThemeProvider theme={Theme}>
      <Data.Provider value={{ user, setUser, data, setData }}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" >
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>

              {/* Admin */}
              <Route path="/dashboard">
                <Route index element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>} />
                <Route path="user" element={<RequireAuth><UserDashboard /> </RequireAuth>} />
                <Route path="cars">
                  <Route index element={<RequireAuth><CarsList /> </RequireAuth>} />
                  <Route path="edit/:id" element={<RequireAuth><EditCar /> </RequireAuth>} />
                  <Route path="new" element={<RequireAuth><NewCar /> </RequireAuth>} />
                </Route>
              </Route>

              {/* User */}
              <Route path="/cari-mobil">
                <Route index element={<RequireAuth><CariMobil /> </RequireAuth>} />
                <Route path="detail/:id" element={<RequireAuth><DetailMobil /> </RequireAuth>} />
                <Route path="metode-pembayaran" element={<RequireAuth><MetodePembayaran /> </RequireAuth>} />
                <Route path="pembayaran" element={<RequireAuth><Pembayaran /> </RequireAuth>} />
                <Route path="tiket/:idTicket" element={<RequireAuth><Tiket /> </RequireAuth>} />
              </Route>

              {/* NotFound */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </Data.Provider>
    </ThemeProvider >
  );
}

export default App;
