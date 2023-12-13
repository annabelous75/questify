import React from 'react';

const Dashboard = ({ userName }) => {
  return (
    <div>
        console.log('Rendering Dashboard component');
      <h1>Welcome, {userName}!</h1>
      <p>This is your Dashboard. Here, you can manage your quests and challenges.</p>
      {/* Додайте інші компоненти та функціональність, які вам потрібні */}
    </div>
  );
};

export default Dashboard;
