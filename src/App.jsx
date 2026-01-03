import { BrowserRouter as Router ,Routes, Route,Navigate } from "react-router-dom";
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import UpdateRestaurant from './pages/UpdateRestaurant';
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin/*" element={<ProtectedRoute allowedRole="admin" />}/>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="/customer/*" element={<ProtectedRoute allowedRole="customer" />}/>
          <Route path="restaurant/update" element={<UpdateRestaurant/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}