import React from 'react';
import ReactDOM from 'react-dom/client';
import 'w3-css/w3.css';
import './index.css';

const Header = () => {
  return (
    <>
      <h1 id="title" class="w3-monospace">Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);