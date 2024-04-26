import { Box, FormHelperText, TextField, Input, Stack, Typography, TextareaAutosize as Textarea, Button } from '@mui/material';

import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs
import dataUserShowPersist from '../Zustand/DataPersist';

const UserForm = () => {
  const { userShow, setUserShow } = dataUserShowPersist();
  const inputRef = useRef();
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  // const[userDisplay,setUserDisplay]=useState({userId: "",
  // name: "",
  // email: "",
  // textarea: "",
  // tel: "",})

  const [inputState, SetInputState] = useState({
    userId: "",
    name: "",
    email: "",
    textarea: "",
    tel: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    textarea: "",
    tel: "",
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
      setUserShow(userId);
      setUnsavedChanges(false);
      inputRef.current.innerText = 'Form Saved Successfully';
    } else {
      inputRef.current.innerText = '';
    }
  }

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    SetInputState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
    setUnsavedChanges(true);
  }

  useEffect(() => {
    const handleBeforeUnload = event => {
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
  // const handleSave=()=>{
  //    setUserDisplay(inputState)
  // }

  return (
    <div className="flex justify-center">
      <Box style={{ width: "100%" }} onSubmit={handleOnSubmitForm}>
      <div className="mb-4">
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
        </div>

        <div className="mb-4">
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
        </div>

        <div className="mb-4">
          <TextField
            value={inputState?.textarea}
            name="textarea"
            onChange={handleNameChange}
            label="Address"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            error={!!errors.textarea}
            helperText={errors.textarea}
          />
        </div>

        <div className="mb-4">
          <TextField
            value={inputState?.tel}
            name="tel"
            onChange={handleNameChange}
            label="Phone"
            variant="outlined"
            fullWidth
            type="number"
            error={!!errors.tel}
            helperText={errors.tel}
          />
        </div>

        <Button variant="contained" color="primary" fullWidth type='submit' >Save</Button>
        <Typography ref={inputRef} variant="body2"  className="mt-6" color="success">Form Saved Successfully</Typography>
        </Box>
    </div>
  );
}

export default UserForm;
