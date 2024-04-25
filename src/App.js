import React,{useState}from 'react';
import './App.css';
import Counter from './components/Counter';
import RichText from './components/RichText';
import UserForm from './components/UserForm';
function App() {
  const [richTextData, setRichTextData] = useState('');
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
      <Counter/>
      <UserForm  onSubmit={handleSubmit}/>
      <RichText initialValue={richTextData}/>
    </div>
  );
}

export default App;
