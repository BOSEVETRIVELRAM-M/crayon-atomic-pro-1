import React, { useState } from 'react';
import { Box, Button, Card, CardContent, IconButton, TextField, Typography, InputAdornment, CardActions, Snackbar, Divider } from "@mui/material";
import { Styles } from "./loginStyle";
import AtomicLogo from "../../assets/images/AtomicLogo.png";
import VisibleIcon from "../../assets/images/visible.png";
import HiddenIcon from "../../assets/images/hidden.png";
import { Link } from 'react-router-dom';

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box sx={Styles.loginContainer}>
      <Card sx={Styles.card}>
        <CardContent>
          <img src={AtomicLogo} alt="Atomic Logo" />
          <Typography sx={Styles.title}>Welcome!</Typography>
          <Typography sx={Styles.subtitle}>One positive feedback per day or week can make us grow exponentially</Typography>
          <Typography sx={Styles.emailTypo}>Email</Typography>
          <TextField sx={Styles.emailField} type="email" placeholder="Enter your email" />
          <Typography sx={Styles.passwordTypo}>Password</Typography>
          <TextField
            sx={Styles.passwordField}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    <img src={showPassword ? HiddenIcon : VisibleIcon} alt="visibility icon" style={Styles.visibiltyIcon} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </CardContent>
        <CardActions sx={Styles.cardActions}>
        <Typography sx={Styles.forgotPassword}>
            <Link to="/forgot-password" style={{ color: "inherit" }}>Forgot Password?</Link>
        </Typography>
        <Button variant="contained" sx={Styles.loginButton}>Log in</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
