import React, { useEffect, useState } from 'react'
import { GridDeleteForeverIcon } from '@mui/x-data-grid';
import { Box, TextField, Button, Typography, Stack, IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomePageDetailsAction, setServicePageDetailsAction } from '../redux/HomePage/action';
import CustomSnackbar from './CustomSnackbar';


const EditableServicePage = () => {

  const dispatch = useDispatch()
  const [alertOpen, setAlertOpen] = useState(false);
  const { homePage } = useSelector((state) => state.HomePage);
  const [bannerText, setBannerText] = useState('');
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


  const [services, setServices] = useState([
    { titles: '', descriptions: '', imageUrl: '', links: '' },
  ]);

  const handleServiceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedServices = [...services];
    updatedServices[index][name] = value;
    setServices(updatedServices);
  };
  const addService = () => {
    setServices([...services, { titles: '', descriptions: '', imageUrl: '', links: '' }]);
  };

  const removeService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  const [fileName, setFileName] = useState('');
  const [serviceImg, setServiceImg] = useState('')

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) setFileName(file.name);
  // };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) setServiceImg(file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertOpen(false);
  
    const data = {
      title,
      bannerText,
      description,
      service: services,
    };
  
    setServicePageDetailsAction(data, dispatch).then(() => {
      setAlertOpen(true);
    });
  };
  

  useEffect(() => {
    dispatch(fetchHomePageDetailsAction())
  }, [dispatch])

  useEffect(() => {
    if (homePage?.servicesSection) {
      const section = homePage.servicesSection;

      setBannerText(section.bannertext || '');
      setTitle(section.title || '');
      setDescription(section.description || '');

      const mappedServices = (section.services || []).map((service) => ({
        titles: service.title || '',
        descriptions: service.description || '',
        imageUrl: service.imageUrl || '',
        links: service.link || '',
      }));

      setServices(mappedServices.length ? mappedServices : [{ titles: '', descriptions: '', imageUrl: '', links: '' }]);
    }
  }, [homePage]);

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
        onSubmit={(e) => handleSubmit(e, services)}
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
          Add Services Section
        </Typography>

        <TextField
          label="Banner Text"
          name="bannertext"
          placeholder="Enter banner text"
          value={bannerText}
          onChange={(e) => setBannerText(e.target.value)}
          fullWidth
          required
        />

        <TextField label="Main Title" name="title" placeholder="Enter title" value={title}
          onChange={(e) => setTitle(e.target.value)} fullWidth required />

        <TextField
          label="Description"
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
          fullWidth
          required
        />

        {/* <Box>
          <Button variant="outlined" component="label">
            Upload Banner Image
            <input
              type="file"
              name="bannerImage"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>
          {fileName && (
            <Typography variant="body2" mt={1} color="text.secondary">
              Selected file: <strong>{fileName}</strong>
            </Typography>
          )}
        </Box> */}

        <Typography variant="subtitle1" fontWeight={600}>
          Services
        </Typography>

        {services.map((service, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            gap={1}
            border={1}
            p={2}
            borderRadius={1}
            width='100%'
          >
            <IconButton
              onClick={() => removeService(index)}
              sx={{ justifyContent: 'end', width: '100%', ":hover": { backgroundColor: 'white  !important' } }}
              color="error"
              disabled={services.length === 1}
            >

              <GridDeleteForeverIcon color='error' />
            </IconButton>
            <TextField
              label="Service Title"
              name="titles"
              value={service.titles}
              onChange={(e) => handleServiceChange(index, e)}
              fullWidth
              required
            />
            <TextField
              label="Service Description"
              name="descriptions"
              value={service.descriptions}
              onChange={(e) => handleServiceChange(index, e)}
              fullWidth
              required
            />
            {/* <TextField
              label="Image URL"
              name="imageUrl"
              value={service.imageUrl}
              onChange={(e) => handleServiceChange(index, e)}
              fullWidth
              required
            /> */}
            <Box>
              <Button variant="outlined" component="label">
                Image URL
                <input
                  type="file"
                  name="serviceImages"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange2}
                />
              </Button>
              {serviceImg && (
                <Typography variant="body2" mt={1} color="text.secondary">
                  Selected file: <strong>{serviceImg}</strong>
                </Typography>
              )}
            </Box>
            <TextField
              label="Link"
              name="links"
              value={service.links}
              onChange={(e) => handleServiceChange(index, e)}
              fullWidth
              required
            />

          </Box>
        ))}

        <Button
          variant="outlined"
          color="secondary"
          // startIcon={<AddIcon />}
          onClick={addService}
        >
          Add More Services
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

export default EditableServicePage
