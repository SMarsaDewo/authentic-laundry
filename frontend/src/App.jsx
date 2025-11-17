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
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { token } = useAuth();
  // console.log("Token sekarang:", token);
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
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
      </AuthProvider>
    </Router>
  );
}

export default App;
