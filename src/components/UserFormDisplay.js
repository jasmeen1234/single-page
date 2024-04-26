import { Container, TextField, Typography,Box, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs
import dataUserShowPersist from '../Zustand/DataPersist';

const UserFormDisplay = () => {
  const { userShow, setUserShow } = dataUserShowPersist();
  const alreadyHaveValue = JSON.parse(localStorage.getItem('userData'));
  const inputRef = useRef();
  const [count, setCount] = useState(1);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const [inputState, setInputState] = useState({
    userId: '',
    name: '',
    email: '',
    textarea: '',
    tel: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    textarea: '',
    tel: '',
  });

  function validateForm() {
    const { name, email, textarea, tel } = inputState;
    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      name: '',
      email: '',
      textarea: '',
      tel: '',
    };

    if (!name.length) {
      newErrors.name = 'Name cannot be empty';
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!textarea.length) {
      newErrors.textarea = 'Fill the text area';
      isValid = false;
    }
    if (!tel) {
      newErrors.tel = 'Incomplete';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userId = uuidv4();
      localStorage.setItem('userData', JSON.stringify({ ...inputState, userId }));
      // localStorage.getItem()
      setUserShow(userId);
      setUnsavedChanges(false);
      inputRef.current.innerText = 'Form Edited Successfully';
    } else {
      inputRef.current.innerText = '';
    }
  };

  useEffect(() => {
    setInputState(alreadyHaveValue);
  }, [userShow]);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setInputState((oldState) => ({
      ...oldState,
      [name]: value,
    }));

    setUnsavedChanges(true);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = ''; // This line will show a confirmation dialog
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return (
    <Container maxWidth="sx" >
      <Box component="form" onSubmit={handleOnSubmitForm} noValidate sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
       
          <TextField
        
           margin="normal"
           required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            value={inputState?.name}
           
            onChange={handleNameChange}
           
            variant="outlined"
            
            error={!!errors.name}
            helperText={errors.name}
          />
        
        
          <TextField
         
           margin="normal"
           required
           fullWidth
           type="email"
           id="email"
           autoComplete="email"
            value={inputState?.email}
            name="email"
            onChange={handleNameChange}
            label="Email address"
            variant="outlined"
        
            error={!!errors.email}
            helperText={errors.email}
          />
        
        
          <TextField
          fullWidth
            value={inputState?.textarea}
            name="textarea"
            onChange={handleNameChange}
            label="Address"
            multiline
            rows={4}
            variant="outlined"
           
            error={!!errors.textarea}
            helperText={errors.textarea}
          />
       
        
          <TextField
          fullWidth
            value={inputState?.tel}
            name="tel"
            onChange={handleNameChange}
            label="Phone"
            
           
            type="number"
            error={!!errors.tel}
            helperText={errors.tel}
          />
        
        <Typography className='text-blue-300 font-semibold'>
          Unique User Id is{inputState?.userId}
          
        </Typography>
        <Button variant="contained" color="primary"  type="submit" >
          Edit
        </Button>
        <Typography ref={inputRef} fontSize="small"   variant="body2" color="green.500" fontWeight={700}></Typography>
      </Box>
    </Container>
  );
};

export default UserFormDisplay;
