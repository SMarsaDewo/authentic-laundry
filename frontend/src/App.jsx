import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import OrderSummary from "./pages/OrderSummary";
import Dashboard from "./pages/DashboardAdmin";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  // console.log("Token sekarang:", token);
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<OrderSummary />} />
        <Route path="/login" element={<AdminLogin />} />


        <Route
          path="/dashboard-admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
