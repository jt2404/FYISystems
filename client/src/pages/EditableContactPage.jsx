import React, { useState } from 'react';
import { GridDeleteForeverIcon } from '@mui/x-data-grid';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setContactPageDetailsAction } from '../redux/HomePage/action';
import CustomSnackbar from './CustomSnackbar';

const EditableContactPage = () => {
    const dispatch = useDispatch();
  const [alertOpen, setAlertOpen] = useState(false);

    const [form, setForm] = useState({
      title: '',
      bannertext: '',
      description: '',
      address: '',
      phoneHelp: '',
      emailHelp: '',
      addressHelp: '',
      phoneNumber: [''],
      email: [''],
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleArrayChange = (index, value, field) => {
      const updatedArray = [...form[field]];
      updatedArray[index] = value;
      setForm({ ...form, [field]: updatedArray });
    };
  
    const addArrayField = (field) => {
      setForm({ ...form, [field]: [...form[field], ''] });
    };
  
    const removeArrayField = (index, field) => {
      const updatedArray = form[field].filter((_, i) => i !== index);
      setForm({ ...form, [field]: updatedArray });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setAlertOpen(false);
      setContactPageDetailsAction(form, dispatch).then(() => {
        setAlertOpen(true);
      });
    };
  return (
    <>
    <CustomSnackbar
            open={alertOpen}
            message="Updated successfully!"
            severity="success"
            onClose={() => setAlertOpen(false)}
          />
        <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        maxWidth: 600,
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h6" fontWeight={600} color="primary">
        Contact Section
      </Typography>

      <TextField label="Title" name="title" value={form.title} onChange={handleChange} fullWidth required />
      <TextField label="Banner Text" name="bannertext" value={form.bannertext} onChange={handleChange} fullWidth required />
      <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth required multiline rows={3} />
      <TextField label="Address" name="address" value={form.address} onChange={handleChange} fullWidth required />
      <TextField label="Phone Help" name="phoneHelp" value={form.phoneHelp} onChange={handleChange} fullWidth />
      <TextField label="Email Help" name="emailHelp" value={form.emailHelp} onChange={handleChange} fullWidth />
      <TextField label="Address Help" name="addressHelp" value={form.addressHelp} onChange={handleChange} fullWidth />

      {/* Phone Numbers */}
      <Typography variant="subtitle1" fontWeight={600}>Phone Numbers</Typography>
      {form.phoneNumber.map((num, idx) => (
        <Box key={idx} display="flex" gap={1} alignItems="center">
          <TextField
            label={`Phone ${idx + 1}`}
            value={num}
            onChange={(e) => handleArrayChange(idx, e.target.value, 'phoneNumber')}
            fullWidth
          />
          <IconButton color="error" onClick={() => removeArrayField(idx, 'phoneNumber')}>

                <GridDeleteForeverIcon />
            {/* <DeleteIcon /> */}

          </IconButton>
        </Box>
      ))}
      <Button variant="outlined" 
    //   startIcon={<AddIcon />} 
      onClick={() => addArrayField('phoneNumber')}>
        Add Phone
      </Button>

      {/* Emails */}
      <Typography variant="subtitle1" fontWeight={600}>Emails</Typography>
      {form.email.map((mail, idx) => (
        <Box key={idx} display="flex" gap={1} alignItems="center">
          <TextField
            label={`Email ${idx + 1}`}
            value={mail}
            onChange={(e) => handleArrayChange(idx, e.target.value, 'email')}
            fullWidth
          />
          <IconButton color="error" onClick={() => removeArrayField(idx, 'email')}>
          <GridDeleteForeverIcon />

            {/* <DeleteIcon /> */}
          </IconButton>
        </Box>
      ))}
      <Button variant="outlined" 
    //   startIcon={<AddIcon />} 
      onClick={() => addArrayField('email')}>
        Add Email
      </Button>

      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
    </>
  )
}

export default EditableContactPage
