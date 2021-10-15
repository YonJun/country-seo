import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { HeaderController } from "./HeaderController";

export function PageContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <HeaderController />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Container maxWidth="xl">
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
      <Container maxWidth="xl">
        <Box mt={8}>{children}</Box>
      </Container>
    </>
  );
}
