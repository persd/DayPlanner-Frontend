import { Box, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

export const Main: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "1200px",
        flex: 1,
        margin: "auto",
        [theme.breakpoints.up("sm")]: {
          borderLeft: (theme) => `1px solid ${theme.palette.primary.main}`,
          borderRight: (theme) => `1px solid ${theme.palette.primary.main}`,
        },
      }}
    ></Box>
  );
};
