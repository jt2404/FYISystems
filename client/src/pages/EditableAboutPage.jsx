import React, { useEffect, useState } from 'react';
import { GridDeleteForeverIcon } from '@mui/x-data-grid';
import { Box, Button, TextField, Typography, Chip, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomePageDetailsAction, setAboutPageDetailsAction, setFacilitiesDetailsAction } from '../redux/HomePage/action';
import CustomSnackbar from './CustomSnackbar';

const EditableAboutPage = () => {
  const dispatch = useDispatch();
  const [alertOpen, setAlertOpen] = useState(false);
  const [fileNames, setFileNames] = useState({});
  const [timingValue, setTimingValue] = useState('');
  const [timingList, setTimingList] = useState([]);
  const [bannerText, setBannerText] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { homePage } = useSelector((state) => state.HomePage);

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      setFileNames((prev) => ({ ...prev, [name]: file.name }));
    }
  };

  const handleTimingAdd = () => {
    if (timingValue.trim()) {
      setTimingList([...timingList, timingValue.trim()]);
      setTimingValue('');
    }
  };

  const handleTimingDelete = (index) => {
    setTimingList(timingList.filter((_, i) => i !== index));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setAlertOpen(false);
  //   const formData = new FormData(e.target);

  //   timingList.forEach((time) => formData.append('Timing[]', time));

  //   setAboutPageDetailsAction(formData, dispatch).then(() => {
  //     setAlertOpen(true);
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertOpen(false);
    const formData = new FormData();
  
    formData.append('bannertext', bannerText);
    formData.append('title', title);
    formData.append('description', description);
    if (e.target.bigImage?.files[0]) formData.append('bigImage', e.target.bigImage.files[0]);
    if (e.target.smallImage?.files[0]) formData.append('smallImage', e.target.smallImage.files[0]);
    if (e.target.bannerImage?.files[0]) formData.append('bannerImage', e.target.bannerImage.files[0]);
  
    timingList.forEach((time) => formData.append('Timing[]', time));
  
    setAboutPageDetailsAction(formData, dispatch).then(() => {
      setAlertOpen(true);
    });
  };
  
  const [facilities, setFacilities] = useState([
    { titles: '', descriptions: '', links: '', iconFile: null, iconFileName: '' },
  ]);

  const handleInputChange = (index, field, value) => {
    const updated = [...facilities];
    updated[index][field] = value;
    setFacilities(updated);
  };

  const handleFileChange2 = (index, file) => {
    const updated = [...facilities];
    updated[index].iconFile = file;
    updated[index].iconFileName = file?.name || '';
    setFacilities(updated);
  };

  const handleAddFacility = () => {
    setFacilities([
      ...facilities,
      { titles: '', descriptions: '', links: '', iconFile: null, iconFileName: '' },
    ]);
  };

  const handleRemoveFacility = (index) => {
    const updated = [...facilities];
    updated.splice(index, 1);
    setFacilities(updated);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setAlertOpen(false);
    const formData = new FormData();

    facilities.forEach((item, index) => {
      formData.append('titles', item?.titles);
      formData.append('descriptions', item?.descriptions);
      formData.append('links', item?.links);
      formData.append('icons', item?.iconFile);
    });
    // dispatch(setFacilitiesDetailsAction(formData, dispatch));ī
    setFacilitiesDetailsAction(formData, dispatch).then(() => {
      setAlertOpen(true);
    });
  };

  useEffect(() => {
    dispatch(fetchHomePageDetailsAction())
  }, [dispatch])

  useEffect(() => {
    if (homePage?.aboutSection) {
      setBannerText(homePage.aboutSection.bannertext || '');
      setTitle(homePage.aboutSection.title || '');
      setDescription(homePage.aboutSection.description || '');
      setTimingList(homePage.aboutSection.Timing || []);
      setFileNames({
        bigImage: homePage.aboutSection.bigImageUrl?.split('/').pop(),
        smallImage: homePage.aboutSection.smallImageUrl?.split('/').pop(),
        bannerImage: homePage.aboutSection.bannerUrl?.split('/').pop(),
      });
    }

    if (homePage?.facilities?.length) {
      setFacilities(
        homePage.facilities.map((fac) => ({
          titles: fac.title || '',
          descriptions: fac.description || '',
          links: fac.link || '',
          iconFile: null,
          iconFileName: fac.iconUrl?.split('/').pop() || '',
        }))
      );
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
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 700,
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
          About Section
        </Typography>

        <TextField
          label="Banner Text"
          name="bannertext"
          placeholder="Enter banner text"
          fullWidth
          required
          value={bannerText}
          onChange={(e) => setBannerText(e.target.value)}
        />

        <TextField label="Title" name="title" placeholder="Enter title" value={title}
          onChange={(e) => setTitle(e.target.value)} fullWidth required />

        <TextField
          label="Description"
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={3}
          required
        />

        <Box>
          <Button variant="outlined" component="label">
            Upload Big Image
            <input
              type="file"
              name="bigImage"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>
          {fileNames.bigImage && (
            <Typography variant="body2" mt={1} color="text.secondary">
              Selected file: <strong>{fileNames.bigImage}</strong>
            </Typography>
          )}
        </Box>

        <Box>
          <Button variant="outlined" component="label">
            Upload Small Image
            <input
              type="file"
              name="smallImage"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>
          {fileNames.smallImage && (
            <Typography variant="body2" mt={1} color="text.secondary">
              Selected file: <strong>{fileNames.smallImage}</strong>
            </Typography>
          )}
        </Box>

        <Box>
          <Button variant="outlined" component="label">
            Banner Image
            <input
              type="file"
              name="bannerImage"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>
          {fileNames.bannerImage && (
            <Typography variant="body2" mt={1} color="text.secondary">
              Selected file: <strong>{fileNames.bannerImage}</strong>
            </Typography>
          )}
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Add Timing (e.g. Mon - Fri 10AM to 6PM):
          </Typography>
          <Box display="flex" gap={1} mt={1}>
            <TextField
              label="Timing"
              value={timingValue}
              onChange={(e) => {
                setTimingValue(e.target.value);
              }}
              fullWidth
            />
            <Button onClick={handleTimingAdd} variant="contained">
              Add
            </Button>
          </Box>
          <Box mt={1} display="flex" gap={1} flexWrap="wrap">
            {timingList.map((time, index) => (
              <Chip
                key={index}
                label={time}
                onDelete={() => handleTimingDelete(index)}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit2}
        sx={{
          width: '100%',
          maxWidth: 700,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mt: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600} color="primary">
          Add Facilities
        </Typography>

        {facilities.map((facility, index) => (
          <Box
            key={index}
            sx={{
              border: '1px solid #ccc',
              borderRadius: 2,
              p: 2,
              position: 'relative',
            }}
          >
            <IconButton
              onClick={() => handleRemoveFacility(index)}
              sx={{
                justifyContent: 'end',
                width: '100%',
                ':hover': { backgroundColor: 'white  !important' },
              }}
              color="error"
              disabled={facilities.length === 1}
            >
              <GridDeleteForeverIcon />
            </IconButton>

            <TextField
              label="Title"
              value={facility.titles}
              onChange={(e) => handleInputChange(index, 'titles', e.target.value)}
              name="titles"
              fullWidth
              required
              sx={{ mb: 2 }}
            />

            <TextField
              label="Description"
              value={facility.descriptions}
              onChange={(e) => handleInputChange(index, 'descriptions', e.target.value)}
              name="descriptions"
              fullWidth
              multiline
              rows={2}
              required
              sx={{ mb: 2 }}
            />

            <TextField
              label="Link"
              value={facility.links}
              onChange={(e) => handleInputChange(index, 'links', e.target.value)}
              name="links"
              fullWidth
              sx={{ mb: 2 }}
            />

            <Button variant="outlined" component="label">
              Upload Icon
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleFileChange2(index, e.target.files[0])}
              />
            </Button>
            {facility.iconFileName && (
              <Typography variant="body2" mt={1} color="text.secondary">
                Selected file: <strong>{facility.iconFileName}</strong>
              </Typography>
            )}
          </Box>
        ))}

        <Box display="flex" justifyContent="space-between">
          <Button variant="outlined" onClick={handleAddFacility}>
            Add Another Facility
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditableAboutPage;
