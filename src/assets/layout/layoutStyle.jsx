import signupPng from "../../assets/images/signupImg.png";

export const Styles = {
    box: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EFEEFB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: `url(${signupPng})`,
        backgroundSize: "contain", // Use "contain" to fit the image within the area
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the image within the container
    },

    propsBox: {
        width: "400px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)"
    }
};


