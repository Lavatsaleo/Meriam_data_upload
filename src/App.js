import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FileUpload from './components/FileUpload/FileUpload';
import FileDownload from './components/FileDownload/FileDownload';
import AdminPanel from './components/AdminPanel/AdminPanel';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/upload" component={FileUpload} />
                <Route path="/download" component={FileDownload} />
                <Route path="/admin" component={AdminPanel} />
            </Routes>
        </Router>
    );
};

export default App;
