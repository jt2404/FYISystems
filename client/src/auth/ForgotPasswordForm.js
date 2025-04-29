import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Stack, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router';
import axios from 'axios';
import FormProvider,{RHFTextField} from '../components/hook-form';
import { ForgotPasswordAPI } from '../services/AuthServices';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email must be valid'),
});

const defaultValues = {
  email: '',
};

export default function ForgotPasswordForm() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
    //   const response = await axios.post('/api/auth/forgot-password', { email: data.email });
      const response = await ForgotPasswordAPI({ email: data.email })  
      setSuccessMessage(response.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong');
      setSuccessMessage('');
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <RHFTextField name="email" label="Email address" />

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Submit
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
