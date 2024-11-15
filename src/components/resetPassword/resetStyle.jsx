export const Styles = {
    card: {
        borderRadius: "12px",
        paddingLeft: "10px",
        paddingTop: "10px",
        paddingRight: "10px",
        paddingBottom: "18px",
        border: 'none',
        boxShadow: '0px 8px 20px #0000000A',
        width: "410px"
    },

    container: {
        margin: "-10px"
    },

    resetTypo: {
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "20px",
        color: "#0E1824",
        paddingTop: "20px",
        paddingBottom: "8px"
    },

    content: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "14px",
        color: "#5C6266",
        paddingRight: "40px",
        paddingBottom: "20px"
    },

    new: {
        display: "flex",
        alignItems: "center",
        paddingBottom: '7px',
    },

    newTypo: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "12px",
        color: "#484759",
        paddingBottom: "0px"
    },

    required: {
        fontFamily: "Poppins",
        fontWeight: "regular",
        fontSize: "12px",
        paddingLeft: "2px"
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

    conformNew:{
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "12px",
        color: "#484759",
        paddingTop: "10px"
    },

    conformRequired: {
        fontFamily: "Poppins",
        fontWeight: "regular",
        fontSize: "12px",
        paddingLeft: "2px",
        paddingTop: "10px"
    },

    resetBtn: {
        textTransform: "none",
        backgroundColor: "#49C792",
        borderRadius: "4px",
        fontFamily: "Poppins",
        fontWeight: "medium",
        fontSize: "14px",
        width: "99%",
        marginTop: "-5px",
        "&:hover": {
            backgroundColor: "#42B383",
        },
    },

    cardAction: {
        paddingLeft: "15px"
    },

    snackBar: {
        whiteSpace: "nowrap", 
        marginTop: "-115px", 
        border: "1px solid #7FDCA4",
        borderRadius: "12px",
        backgroundColor: "#CEF3E4",  // Custom background color
        width: "290px",  // Custom width
        height: "50px", // Custom height
    },

    alertmsg: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: "Poppins",
        fontWeight: "medium",
        fontSize: "14px",
    },

    divider: {
        paddingLeft: "20px",
        borderColor: "white",
        height: "20px"
    },

    clear: {
        width: "10px",
        height: "10px",
        paddingLeft: "20px"
    }
};