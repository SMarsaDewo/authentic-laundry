import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import OrderSummary from "./pages/OrderSummary";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<OrderSummary />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
