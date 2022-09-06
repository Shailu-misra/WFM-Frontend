import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import LoginUppcl from './components/LoginUppcl';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginUppcl />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
