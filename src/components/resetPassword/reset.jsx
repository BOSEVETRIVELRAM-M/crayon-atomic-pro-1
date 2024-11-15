import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography, IconButton, InputAdornment, CardActions, Snackbar, Divider } from "@mui/material";
import { Styles } from './resetStyle';
import AtomicLogo from "../../assets/images/AtomicLogo.png";
import VisibleIcon from "../../assets/images/visible.png";
import HiddenIcon from "../../assets/images/hidden.png";
import ClearIcon from "../../assets/images/multiply.png";
import { useLocation, useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notification, setNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(""); // State for dynamic notification message

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.showAlert) {
      setNotification(true);
      setNotificationMessage("Link sent to registered email"); // You can change this message based on the situation
    }
  }, [location.state]);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
  const handleCloseNotification = () => setNotification(false);

  const handleResetPassword = () => {
    setNotificationMessage("Password reset successful"); // Update message
    setNotification(true); // Trigger Snackbar

    setTimeout(() => {
      navigate('/login'); // Redirect to login page
    }, 1000); // Delay for notification to be visible before redirecting
  };

  return (
    <Box sx={Styles.container}>
      <Card sx={Styles.card}>
        <CardContent>
          <img src={AtomicLogo} alt="Atomic Signals Logo" />
          <Typography sx={Styles.resetTypo}>Reset Password</Typography>
          <Typography sx={Styles.content}>Please provide a new password for your account</Typography>

          <Box sx={Styles.new}>
            <Typography sx={Styles.newTypo}>New password</Typography>
            <Typography color="error" sx={Styles.required}>*</Typography>
          </Box>
          <TextField
            sx={Styles.passwordField}
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    <img src={showPassword ? HiddenIcon : VisibleIcon} alt="visibility icon" style={Styles.visibiltyIcon} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          <Box sx={Styles.new}>
            <Typography sx={Styles.conformNew}>Confirm new password</Typography>
            <Typography color="error" sx={Styles.conformRequired}>*</Typography>
          </Box>
          <TextField
            sx={Styles.passwordField}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm new password"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                    <img src={showConfirmPassword ? HiddenIcon : VisibleIcon} alt="visibility icon" style={Styles.visibiltyIcon} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
        <CardActions sx={Styles.cardAction}>
          <Button variant="contained" sx={Styles.resetBtn} onClick={handleResetPassword}>Reset password</Button>
        </CardActions>
      </Card>

      {/* Notification Snackbar */}
      <Snackbar
        sx={Styles.snackBar}
        open={notification}
        autoHideDuration={1000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {/* Custom Alert without checkmark */}
        <Box sx={Styles.alertmsg}>
            {notificationMessage} {/* Display the dynamic message */}
            <Divider orientation='vertical' flexItem variant='middle' sx={Styles.divider}/>
            <img src={ClearIcon} style={Styles.clear}/>
        </Box>
      </Snackbar>
    </Box>
  );
}
