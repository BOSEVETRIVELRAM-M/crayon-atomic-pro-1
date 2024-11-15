export const Styles = {
    cardBody: {
        borderRadius: "12px",
        paddingLeft: "10px",
        paddingTop: "10px",
        paddingRight: "10px",
        paddingBottom: "15px",
        border: 'none',
        boxShadow: '0px 8px 20px #0000000A',
        width: "400px"
    },

    forgotPasswordTypo: {
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "20px",
        color: "#0E1824",
        paddingTop: "20px",
        paddingBottom: "10px"
    },

    content: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "14px",
        color: "#5C6266",
        paddingBottom: "20px"
    },

    emailTypo:{
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "12px",
        color: "#262C33",
        paddingBottom: "7px"
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

    getLink: {
        textTransform: "none",
        backgroundColor: "#49C792",
        borderRadius: "4px",
        fontFamily: "Poppins",
        fontWeight: "medium",
        fontSize: "14px",
        width: "100%",
        marginTop: "20px",
        marginBottom: "10px",
        "&:hover": {
            backgroundColor: "#42B383",
        }
    },

    cardAction: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    rememberTypo: {
        fontFamily: "Poppins",
        fontWeight: "regular",
        fontSize: "14px",
        color: "#5C6266",
        paddingLeft: "65px",
    },

    login:{
        color: "inherit",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "14px",
        color: "#353448"
    },
};