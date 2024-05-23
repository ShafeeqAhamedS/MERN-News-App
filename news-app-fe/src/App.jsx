import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllNewsComponent from './components/GetAllNewsComponent/GetAllNewsComponent';
import AddNewNewsComponent from './components/AddNewNewsComponent/AddNewNewsComponent';
import EditNewsComponent from './components/EditNewsComponent/EditNewsComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>News Reader App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add News</Link>
                <Link to="/admin/edit" >Edit News</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllNewsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewNewsComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditNewsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;