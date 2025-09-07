import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import ProtectedRoute from './components/ProtectRoute'; // Import ProtectedRoute
import NotFound from './components/NotFound'; // Import NotFound component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;