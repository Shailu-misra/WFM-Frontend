import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUppcl from './components/LoginUppcl';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainContent from './components/MainContent';
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginUppcl />} />
        <Route path='/*' element={<MainContent />} />
      </Routes>
    </BrowserRouter>
    
  );
  
}

export default App;
