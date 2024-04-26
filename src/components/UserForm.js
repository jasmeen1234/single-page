import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import dataUserShowPersist from '../Zustand/DataPersist';

const UserForm = () => {
  const { setUserShow } = dataUserShowPersist();
  const inputRef = useRef();
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

  const validateForm = () => {
    const { name, email, textarea, tel } = inputState;
    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      name: !name.length ? 'Name cannot be empty' : '',
      email: !emailRegex.test(email) ? 'Invalid email address' : '',
      textarea: !textarea.length ? 'Fill the text area' : '',
      tel: !tel ? 'Incomplete' : '',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userId = uuidv4();
      localStorage.setItem('userData', JSON.stringify({ ...inputState, userId }));
      setUserShow(userId);
      setUnsavedChanges(false);
      inputRef.current.innerText = 'Form Saved Successfully';
    } else {
      inputRef.current.innerText = '';
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setUnsavedChanges(true);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = ''; // Display a confirmation dialog
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return (
    <Container maxWidth="sm" >
      <Box
        component="form"
        onSubmit={handleOnSubmitForm}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={inputState.name}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          value={inputState.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          label="Address"
          name="textarea"
          multiline
          rows={4}
          value={inputState.textarea}
          onChange={handleInputChange}
          error={!!errors.textarea}
          helperText={errors.textarea}
        />
        <TextField
          fullWidth
          label="Phone"
          name="tel"
          value={inputState.tel}
          onChange={handleInputChange}
          error={!!errors.tel}
          helperText={errors.tel}
        />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
        <Typography ref={inputRef} variant="body2" sx={{ color: 'green.500', fontWeight: 700 }}></Typography>
      </Box>
    </Container>
  );
};

export default UserForm;
