// signUp.jsx
import { Box, Stack } from '@mui/material';
import signupPng from '../../assets/images/signupImg.png';
import { Styles } from './signupStyle';
import SignupCard from './signupCard';

function Signup() {
    return (
        <Stack sx={Styles.bodyBox}>
            <Box>
                <img src={signupPng} style={Styles.signUpSvg} alt="Signup Background" />
            </Box>
            <Box sx={Styles.signUpCard}>
                <SignupCard />
            </Box>
        </Stack>
    );
}

export default Signup;
