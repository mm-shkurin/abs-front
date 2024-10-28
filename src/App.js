import YourMenuComponent from "./components/Header/head";
import Main from "./components/main/main";
import Equipment from "./components/Goods/prem";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/Header/head";
import CarList from "./components/Goods/prem";
import CardDetails from "./components/Card/Card";



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
          <Route path='/cosmetology' element={<CarList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
