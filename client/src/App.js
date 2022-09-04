//import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
      <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status"></div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path = '/login' element={<PublicRoute> < Login/> </PublicRoute>}/>
          <Route path = '/register' element={<PublicRoute> <Register/> </PublicRoute>}/>
          <Route path = '/' element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
           </Routes>
      </BrowserRouter>

  );
}

export default App;