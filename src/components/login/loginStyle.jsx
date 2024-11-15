// components/loginPage/loginStyles.js
export const Styles = {
    card: {
        borderRadius: "12px",
        paddingLeft: "10px",
        paddingTop: "10px",
        paddingRight: "20px",
        paddingBottom: "20px",
        border: 'none',
        boxShadow: '0px 8px 20px #0000000A',
        width: "400px"
    },
    loginContainer: {
        margin: "-8px"
       
    },

    title: {
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "20px",
        color: "#0E1824",
        padding: "20px 0px 5px 0px"
    },

    subtitle: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "14px",
        color: "#71707E",
        paddingRight: "40px"
    },

    emailTypo: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "12px",
        color: "#262C33",
        paddingTop: "20px",
        paddingBottom: "5px"
    },
    emailField: {
        width: "100%", // Adjust as needed
        height: "48px", // Adjust as needed
        borderRadius: "4px",
        "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#EBEBEB", // Default border color
        },
        "&:hover fieldset": {
            borderColor: "#EBEBEB", // Hover border color
        },
        "&.Mui-focused fieldset": {
            borderColor: "#EBEBEB", // Focused border color
        },
        backgroundColor: "#FFFFFF", // Input background color
        color: "#353448", // Input text color
        },
        "& .MuiInputBase-input": {
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "medium",
            padding: "10px 12px",
        },
    },

    passwordTypo: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "12px",
        color: "#262C33",
        paddingTop: "10px",
        paddingBottom: "5px"
    },

    passwordField: { 
        width: "100%", // Adjust as needed
        height: "48px", // Adjust as needed
        borderRadius: "4px",
        "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#EBEBEB", // Default border color
        },
        "&:hover fieldset": {
            borderColor: "#EBEBEB", // Hover border color
        },
        "&.Mui-focused fieldset": {
            borderColor: "#EBEBEB", // Focused border color
        },
        backgroundColor: "#FFFFFF", // Input background color
        color: "#353448", // Input text color
        },
        "& .MuiInputBase-input": {
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "medium",
            padding: "10px 12px",
        },
    },

    visibiltyIcon: {
        width: "17px",
        height: "16px",
        paddingRight: "5px",
        color: "#000000"
    },
    
    forgotPassword: {
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "14px",
        color: "#353448",
        paddingLeft: "250px",
        whiteSpace: "noWrap",
        marginTop: "-15px",
        marginBottom: "2px"
    },

    loginButton: {
        textTransform: "none",
        backgroundColor: "#49C792",
        borderRadius: "4px",
        fontFamily: "Poppins",
        fontWeight: "medium",
        fontSize: "14px",
        width: "100%",
        marginTop: "20px",
        "&:hover": {
            backgroundColor: "#42B383",
        }
    },

    cardActions:{
        display: "flex",
        flexDirection: "column"
    },
  };
  