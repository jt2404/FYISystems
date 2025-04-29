import { Stack, Box } from '@mui/material';
import ForgotPasswordForm from './ForgotPasswordForm';
import LoginLayout from '../layouts/login';

export default function ForgotPassword() {
  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
        <Box component="h4">Forgot Password</Box>
      </Stack>
      <ForgotPasswordForm />
    </LoginLayout>
  );
}
