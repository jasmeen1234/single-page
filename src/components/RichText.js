import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichText = () => {
  const [editorHtml, setEditorHtml] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorHtml(savedContent);
    }
  }, []);

  const handleChange = (html) => {
    setEditorHtml(html);
    localStorage.setItem('editorContent', html);
  };

  return (
    <div className="w-full bg-white rounded-lg p-8 gap-30">
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        className="bg-white gap-30"
        modules={{
          toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
          ]
        }}
      />
    </div>
  );
};

export default RichText;
