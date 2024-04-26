import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import RichText from './components/RichText';
import UserForm from './components/UserForm';
import ColorRang from './components/ColorRang';
import UserFormDisplay from './components/UserFormDisplay';


function App() {
  const [count, setCount] = useState(0);
 
  const [richTextData, setRichTextData] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });
  

  const handleSubmit = (formData) => {
    const { name, address, email, phone, password } = formData;
    const richTextContent = `Name: <strong>${name}</strong><br/>
      Address: <em>${address}</em><br/>
      Email: <u>${email}</u><br/>
      Phone: <strong><em>${phone}</em></strong><br/>
      Password: ${password}`;  // Password won't be formatted

    setRichTextData(richTextContent);
  };

  const handleRangeChange = (value) => {
    setCount(value);
  };

  return (
    <div className="App">
      <div className='left'>
        <Counter count={count} handleRangeChange={handleRangeChange} />
        <RichText   formData={formData} />
      </div>
      <div className='right'>
        <UserForm   onSubmit={handleSubmit} />
         <UserFormDisplay />
        
      </div>
      <ColorRang count={count} handleRangeChange={handleRangeChange} />
    </div>
  );
}

export default App;
