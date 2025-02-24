import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Landing from './pages/landing';

function App() {
  return (
    <>
          {/* <NavBar /> */}

    <Router>
      <Routes>

        <Route index element={<Landing />} />
        


      </Routes>
    </Router>
    </>
    
  );
}

export default App;
