import React,{useState}from 'react';
import './App.css';
import Counter from './components/Counter';
import RichText from './components/RichText';
import UserForm from './components/UserForm';
function App() {
  // eslint-disable-next-line
  const [richTextData, setRichTextData] = useState('');
  // eslint-disable-next-line
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
  return (
    <div className="App">
      <div className='left'>
      <Counter/>
      <RichText  formData={formData}/>
      </div>
      <div className='right'>
      <UserForm  onSubmit={handleSubmit}/>
      </div>
      
    </div>
  );
}

export default App;
