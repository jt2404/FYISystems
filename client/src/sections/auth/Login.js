// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
import { Link as RouterLink } from 'react-router-dom';

import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
//
import AuthLoginForm from './AuthLoginForm';
import AuthWithSocial from './AuthWithSocial';
import { PATH_AUTH } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row' }}>
      <Box
      component="h4"
      >
        Sign in
</Box>
     

          
      </Stack>
{/* 
      <Alert severity="info" sx={{ mb: 3 }}>
        Use email : <strong>vijay.prajapati@drcsystems.com</strong> / password :<strong> password123</strong>
      </Alert> */}

      <AuthLoginForm />

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}
