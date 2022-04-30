import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoPageFound from './components/NoPageFound/NoPageFound';
import Register from './components/Register/Register';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NoPageFound></NoPageFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
