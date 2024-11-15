import React from "react";
import { Box } from "@mui/material";
import { Styles } from "../layout/layoutStyle";

export default function Layout({ children }) {
  return (
    <Box sx={Styles.box}>
      <Box sx={Styles.propsBox}>
        {children}
      </Box>
    </Box>
  );
}
