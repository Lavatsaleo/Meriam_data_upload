// src/components/FileDownload/FileDownload.js
import React, { useState, useEffect } from 'react';
import API from '../../services/api';

const FileDownload = () => {
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
            <h2>Available Files</h2>
            <ul>
                {files.map(file => (
                    <li key={file}>
                        <a href={`http://localhost:5000/files/download/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileDownload;
