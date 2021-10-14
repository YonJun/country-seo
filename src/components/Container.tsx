import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export function PageContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Container maxWidth="lg">
            <Box py={2}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "bold" }}>
                Where in the world?
              </Typography>
            </Box>
          </Container>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Box mt={8}>{children}</Box>
      </Container>
    </>
  );
}
