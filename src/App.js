import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CurrenLists from './pages/CurrenLists';
import List from './pages/List';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import MoveItem from './pages/MoveItem';

 
export default function App() {
  MoveItem();
 
  // return (   
  //     <>        
  //       <Router>
  //         <Header />                         
  //             <Routes>                             
  //                 <Route path="/" element={<Signup/>}/>
  //                 <Route path="/signup" element={<Signup/>}/>
  //                 <Route path="/login" element={<Login/>}/>
  //                 <Route path="/lists" element={<CurrenLists/>}/>
  //                 <Route path="/lists/list" element={<List/>}/>
  //                 <Route path="/forgotpassword" element={<ForgotPassword/>}/>
  //             </Routes>                    
  //       </Router>
  //     </>
   
  // );
}