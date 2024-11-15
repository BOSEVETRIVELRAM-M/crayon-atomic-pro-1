import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, TextField, Typography } from "@mui/material";
import AtomicLogo from "../../assets/images/AtomicLogo.png";
import GoogleIcon from "../../assets/images/googleIcon.png";
import OutlookIcon from "../../assets/images/outlookIcon.png";
import { Styles } from "./signupCardStyle";
import { Link } from 'react-router-dom';

export default function SignupCard() {
    return (
        <Box sx={Styles.container}>
        <Card sx={Styles.card}>
            <CardContent>
                <img src={AtomicLogo} alt="Atomic Logo" />
                <Typography sx={Styles.signUp}>Sign up</Typography>
                <Typography sx={Styles.signupContent}>
                    You're just a few details away to set up a culture of feedback and thriving environment
                </Typography>
                <Box sx={Styles.googleBox}>
                    <Button
                        sx={Styles.googleSignup}
                        startIcon={<img src={GoogleIcon} alt="Google Icon" style={Styles.icon}/>}
                    >
                        <Typography sx={Styles.buttonText}>Sign up with Google</Typography>
                    </Button>
                </Box>
                <Box sx={Styles.outlookBox}>
                    <Button
                        sx={Styles.outlookSignup}
                        startIcon={<img src={OutlookIcon} alt="Outlook Icon" style={Styles.icon} />}
                    >
                        <Typography sx={Styles.buttonText}>Sign up with Outlook</Typography>
                    </Button>
                </Box>
                <Divider sx={Styles.dividerLine}>
                    <Typography sx={Styles.dividerTypo}>or</Typography>
                </Divider>
                <Box sx={Styles.workEmailBox}>
                    <Typography sx={Styles.workEmailTypo}>Work Email</Typography>
                    <Typography color="error" sx={Styles.required}>*</Typography>
                </Box>
                <TextField sx={Styles.emailBox} placeholder="Enter your work email" />
                <Button variant="contained" sx={Styles.signupButton}>Sign up</Button>
            </CardContent>
            <CardActions>
                <Typography variant="body2" sx={Styles.loginText}>
                    Already have an account? <Link to="/login" style={Styles.loginBtn}>Log in</Link>
                </Typography>
            </CardActions>
        </Card>
        </Box>
    );
}