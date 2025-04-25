import { useState } from 'react';
import { Box, Button, TextField, Typography, Avatar, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AuthDetails } from '../redux/Auth/AuthProfile';
import { updateUserData } from '../services/UsersService';
import CustomSnackbar from './CustomSnackbar';

const ProfilePage = () => {
  const user = useSelector((state) => state.Auth?.payload?.data?.user);
const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    contact: '',
    role: user?.role || '',
  });
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertOpen(false);

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('contact', form.contact);
    formData.append('role', form.role);
    if (photo) formData.append('profilePhoto', photo);

    updateUserData(user?._id, formData).then((res) => {
      setAlertOpen(true);
  console.log(res);
      
      dispatch(AuthDetails(res));

    });
  };

  return (
    <>
      <CustomSnackbar
        open={alertOpen}
        message="Profile updated successfully!"
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
          margin: '0 auto',
        }}
      >
        <Typography variant="h6" fontWeight={600} color="primary">
          Edit Profile
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            alt="Profile"
            src={photo ? URL.createObjectURL(photo) :  `http://localhost:5000/${user?.profile}` }
            sx={{ width: 64, height: 64 }}
          />
          <Button variant="outlined" component="label">
            Upload Photo
            <input type="file" accept="image/*" hidden onChange={handlePhotoChange} />
          </Button>
        </Stack>
        {photoName && (
          <Typography variant="body2" color="text.secondary">
            Selected file: <strong>{photoName}</strong>
          </Typography>
        )}

        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter full name"
          fullWidth
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email address"
          fullWidth
          required
        />

        <TextField
          label="Contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="Enter contact number"
          fullWidth
          required
        />

        <TextField
          label="Role"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Enter role (e.g., Admin, User)"
          fullWidth
          required
        />

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProfilePage;
