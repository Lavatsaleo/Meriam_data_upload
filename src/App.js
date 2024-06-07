import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import FileUpload from "./components/FileUpload/FileUpload";
import FileDownload from "./components/FileDownload/FileDownload";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
// import Home from './components/Home'; 

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/upload" element={<FileUpload />} />
				<Route path="/download" element={<FileDownload />} />
				<Route path="/admin" element={<AdminPanel />} />
				<Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
			</Routes>
		</Router>
	);
};

export default App;
