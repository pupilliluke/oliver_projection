import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Landing from './pages/landing.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <>
          {/* <NavBar /> */}

    <Router>
      <Routes>

        <Route index element={<HomePage />} />
        <Route element={<HomePage />} />
                


      </Routes>
    </Router>
    </>
    
  );
}

export default App;
