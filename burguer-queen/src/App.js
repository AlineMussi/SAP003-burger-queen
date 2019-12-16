import React from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseDatabase } from './firebaseUtil';
console.log(firebaseDatabase)

function App() {
  // firebaseDatabase.firebase.collection("breakfast")

  // firebaseDatabase.collection("breakfast").get().then(console.log)
  
  firebaseDatabase.collection('menu').doc('0')
  .get().then((doc => {
    console.log(doc.data());
  }));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;