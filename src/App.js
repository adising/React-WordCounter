// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type or paste your paragraph here..."
        onChange={handleTextChange}
        value={text}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default App;
