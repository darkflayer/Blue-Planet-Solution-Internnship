import React from 'react';
import RegisterParticipantPage from './pages/RegisterParticipantPage';
import NoticeBoardPage from './pages/noticeBoardPage';

function App() {
  return (
    <div className="App">
      <h1>Register Participant</h1>
      <RegisterParticipantPage />
    </div>

    
  );
}

function app() {
  return (
    <div className="app">
      <NoticeBoardPage />
    </div>
  );
}
export default App;
export { app };
