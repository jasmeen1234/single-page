import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const RichText = ({ formData }) => {
    return (
        <div style={{ padding: '10px', height: '80px' }}>
            <ReactQuill
                readOnly={true} // Make the editor read-only
                theme="snow"
                value={JSON.stringify(formData, null, 2)} // Display form data as JSON
            />
        </div>
    );
};

export default RichText;
