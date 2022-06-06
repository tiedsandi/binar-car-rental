import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
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

function App() {
  return (
    <ThemeProvider theme={Theme}>
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
              <Route index element={<Dashboard />} />
              <Route path="user" element={<UserDashboard />} />
              <Route path="cars">
                <Route index element={<CarsList />} />
                <Route path="edit/:id" element={<EditCar />} />
                <Route path="new" element={<NewCar />} />
              </Route>
            </Route>

            {/* User */}
            <Route path="/cari-mobil">
              <Route index element={<CariMobil />} />
              <Route path="detail/:id" element={<DetailMobil />} />
              <Route path="metode-pembayaran" element={<MetodePembayaran />} />
              <Route path="pembayaran" element={<Pembayaran />} />
              <Route path="tiket/:idTicket" element={<Tiket />} />
            </Route>

            {/* NotFound */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider >
  );
}

export default App;
