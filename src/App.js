import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/login/Login';
import HomePage from './components/homepage/HomePage'
import Mail from './components/mail/Mail'
import Reservation from './components/reservation/Reservation'
import Secret from './components/secret/Secret'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/vday' element={<Login />}></Route>
        <Route path='/vday/inbox' element={<HomePage />}></Route>
        <Route path='/vday/mail' element={<Mail />}></Route>
        <Route path='/vday/reservation' element={<Reservation />}></Route>
        <Route path='/vday/secret' element={<Secret />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
