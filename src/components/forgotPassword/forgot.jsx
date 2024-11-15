import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, TextField, Typography, Snackbar, Alert } from "@mui/material";
import AtomicLogo from "../../assets/images/AtomicLogo.png";
import { Styles } from "./forgotStyle";
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [notification, setNotification] = useState(false);
  const navigate = useNavigate();

  const handleGetLinkClick = () => {
    // Simulate an API response
    setTimeout(() => {
      // Navigate to reset password page with state
      navigate('/reset-password', { state: { showAlert: true } });
    },100);
  };

  return (
    <Box>
      <Card sx={Styles.cardBody}>
        <CardContent>
          <img src={AtomicLogo} alt="Atomic Signals Logo" />
          <Typography sx={Styles.forgotPasswordTypo}>Forgot Password</Typography>
          <Typography sx={Styles.content}>Provide us the registered email to reset your password.</Typography>
          <Typography sx={Styles.emailTypo}>Email</Typography>
          <TextField
            sx={Styles.emailField}
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
          />
          <Button
            sx={Styles.getLink}
            variant="contained"
            fullWidth
            onClick={handleGetLinkClick}
          >
            Get Link
          </Button>
        </CardContent>
        <CardActions sx={Styles.cardAction}>
          <Typography sx={Styles.rememberTypo}>
            Remembered the password?{" "}
            <Link to="/login" style={Styles.login}>Log in</Link>
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
}
