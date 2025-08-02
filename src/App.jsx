import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './Authentication/Auth';
import ForgotPassword from './Authentication/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
