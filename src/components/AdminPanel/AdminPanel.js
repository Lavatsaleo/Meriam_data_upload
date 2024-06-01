// src/components/AdminPanel/AdminPanel.js
import React, { useState, useEffect } from 'react';
import API from '../../services/api';

const AdminPanel = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await API.get('/admin/files', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setFiles(response.data.files);
            } catch (error) {
                alert('Error fetching files');
            }
        };

        fetchFiles();
    }, []);

    return (
        <div>
            <h2>Admin Panel</h2>
            <ul>
                {files.map(file => (
                    <li key={file}>{file}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
