// ForgotPasswordPage.js
import { Helmet } from 'react-helmet-async';
import ForgotPassword from '../auth/ForgotPassword';

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Forgot Password | Minimal UI</title>
      </Helmet>

      <ForgotPassword />
    </>
  );
}
