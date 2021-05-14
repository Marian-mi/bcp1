import React, { useState } from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  return (
    <div className="app-container">
      <UserInput changeUserName={setUserName} />
      <UserOutput userName={userName} />
    </div>
  );
}

export default App;
