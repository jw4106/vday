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
      <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/inbox' element={<HomePage />}></Route>
        <Route exact path='/mail' element={<Mail />}></Route>
        <Route exact path='/reservation' element={<Reservation />}></Route>
        <Route exact path='/secret' element={<Secret />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
