import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { fetchHomePageDetailsAction, setHomeMarqueeDetailsAction, setHomePageDetailsAction } from '../redux/HomePage/action';
import CustomSnackbar from './CustomSnackbar';


const EditableHomePage = () => {

  const dispatch = useDispatch();
  const [fileName, setFileName] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const { homePage } = useSelector((state) => state.HomePage);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  // const { themeStretch } = useSettingsContext();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setAlertOpen(false);
  //   const formData = new FormData(e.target);

  //   setHomePageDetailsAction(formData, dispatch).then(() => {
  //     setAlertOpen(true);
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertOpen(false);
  
    const formData = new FormData();
    formData.append('bannertext', form.bannertext);
    formData.append('title', form.title);
    formData.append('title1', form.title1);
    formData.append('subtitle', form.subtitle);
  
    const file = e.target.bannerImage.files[0];
    if (file) {
      formData.append('bannerImage', file);
    }
  
    setHomePageDetailsAction(formData, dispatch).then(() => {
      setAlertOpen(true);
    });
  };
  

  const [text, setText] = useState('');
  const [form, setForm] = useState({
    bannertext: '',
    title: '',
    title1: '',
    subtitle: '',
  });

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setAlertOpen(false);
    const formData = new FormData();
    formData.append('marqueeText', text);

    setHomeMarqueeDetailsAction(formData, dispatch).then(() => {
      setAlertOpen(true);
    });
  };

  useEffect(() => {
    dispatch(fetchHomePageDetailsAction())
  }, [dispatch])
  useEffect(() => {
    if (homePage?.heroSection) {
      const {
        bannertext = '',
        title = '',
        title1 = '',
        subtitle = '',
      } = homePage.heroSection;

      setForm({
        bannertext,
        title,
        title1,
        subtitle,
      });

      // Also set file name from bannerUrl if present
      if (homePage.heroSection.bannerUrl) {
        const parts = homePage.heroSection.bannerUrl.split('/');
        setFileName(parts[parts.length - 1]);
      }
    }

    if (homePage?.marqueeText) {
      setText(homePage.marqueeText);
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
          Add Banner
        </Typography>

        <TextField
          label="Banner Text"
          name="bannertext"
          placeholder="Enter banner text"
          value={form.bannertext}
          onChange={(e) => setForm({ ...form, bannertext: e.target.value })}
          fullWidth
          required
        />

        <TextField label="Title" name="title" placeholder="Enter title" value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })} fullWidth required />

        <TextField label="Title 1" name="title1" placeholder="Enter title 1" value={form.title1}
          onChange={(e) => setForm({ ...form, title1: e.target.value })} fullWidth required />

        <TextField
          label="Subtitle"
          name="subtitle"
          value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
          placeholder="Enter subtitle"
          fullWidth
          required
        />

        <Box>
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
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
      <br />
      <Box
        component="form"
        onSubmit={handleSubmit2}
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
          Add Marquee Text
        </Typography>

        <TextField
          label="Marquee Text"
          name="marqueeText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter marquee text"
          fullWidth
          required
        />

        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditableHomePage;
