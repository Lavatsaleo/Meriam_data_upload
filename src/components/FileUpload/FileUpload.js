// src/components/FileUpload/FileUpload.js
import React, { useState } from 'react';
import API from '../../services/api';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            await API.post('/files/upload', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME)}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
        } catch (error) {
            alert('Error uploading file');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
            <button type="submit">Upload</button>
        </form>
    );
};

export default FileUpload;
