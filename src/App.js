import React, { useEffect, useState  } from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';

import Main from './pages/Main.js';
import globalContenxt from './utils/globalContenxt.js';

function App() {
  const [globalApi, setglobalApi] = useState(process.env.REACT_APP_BE_API_URL);
  const [Extention, setExtention] = useState(process.env.REACT_APP_KOMIK_USED);
  const [globalData, setglobalData] = useState([])

  useEffect(() => {
    setglobalData({
      'api': globalApi,
      'extention': Extention
    })
    
  }, [])

  return (
    <globalContenxt.Provider value={{ globalData, setglobalData }}>
      <div className="App">
        <HeaderView />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </BrowserRouter>

        <FooterView />
      </div>
    </globalContenxt.Provider>
  );
}

export default App;
