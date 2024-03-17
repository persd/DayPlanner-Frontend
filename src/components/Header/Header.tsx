import { Box, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

interface Props {}

export const Header: FunctionComponent<Props> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: theme.palette.primary.dark,
        height: "64px",
        [theme.breakpoints.up("sm")]: {
          height: "72px",
        },
      }}
    ></Box>
  );
};
