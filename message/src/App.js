import React from 'react';
import './App.css';

// A simple React component to display a message
function MessageComponent() {
  return (
    <div className="message">
      <h1>Hello, Welcome to My Simple React App!</h1>
      <p>This is a simple message displayed using JSX.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Render the MessageComponent */}
      <MessageComponent />
    </div>
  );
}

export default App;
