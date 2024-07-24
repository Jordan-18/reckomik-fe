import React, { useState  } from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';

import Main from './pages/Main.js';
function App() {
  return (
    <div className="App">
      <HeaderView />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>

      <FooterView />
    </div>
  );
}

export default App;
