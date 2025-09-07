import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; 
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {
  const navigate = useNavigate();
  const username = Cookies.get('username');

  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('token'); 
    navigate('/'); 
  };

  return (
    <div>
      <div className="dashboard-container">
        <h3><span>Hi {username}</span> Page under construction!</h3>
        <p>We're working hard to bring you this feature. Stay tuned!</p>
        <button style={{ width: 150 }} onClick={handleLogout}> 
          <FaSignOutAlt size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;