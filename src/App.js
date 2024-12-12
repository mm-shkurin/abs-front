import YourMenuComponent from "./components/Header/head";
import Main from "./components/main/main";
import Equipment from "./components/Goods/prem";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/Header/head";
import CarList from "./components/Goods/prem";
import CardDetails from "./components/Card/Card";
import Register from "./components/Login/register";
import Login from "./components/Login/login";
import AddCarForm from "./components/Goods/post-form";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div className="changeable_content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Main />} />
          <Route path='/car/:id' element={<CardDetails />} />
          <Route path='/list' element={<CarList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reg' element={<Register />} />
          <Route path='/form' element={<AddCarForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
