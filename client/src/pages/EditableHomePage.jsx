import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box,TextField, Button, Typography, Stack } from '@mui/material';
import { setHomeMarqueeDetailsAction, setHomePageDetailsAction } from '../redux/HomePage/action';


const EditableHomePage = () => {

    const dispatch = useDispatch();
      const [fileName, setFileName] = useState("");
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setFileName(file.name);
      };
    
      // const { themeStretch } = useSettingsContext();
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        dispatch(setHomePageDetailsAction(formData,dispatch))
      };

      const [text, setText] = useState('');

  const handleSubmit2 = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('marqueeText', text);

    dispatch(setHomeMarqueeDetailsAction(formData, dispatch));
  };

  return (
    <>
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
          fullWidth
          required
        />

        <TextField label="Title" name="title" placeholder="Enter title" fullWidth required />

        <TextField label="Title 1" name="title1" placeholder="Enter title 1" fullWidth required />

        <TextField
          label="Subtitle"
          name="subtitle"
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
