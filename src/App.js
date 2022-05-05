import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import InventorySingleItem from './components/InventorySingleItem/InventorySingleItem';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NoPageFound from './components/NoPageFound/NoPageFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>}>
        </Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventorySingleItem></InventorySingleItem>
          </RequireAuth>}>
        </Route>
        <Route path='*' element={<NoPageFound></NoPageFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
