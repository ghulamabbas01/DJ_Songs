import React from "react";

// import material ui
import { Box, Button, Stack } from "@mui/material";

// import router
import { useNavigate } from "react-router-dom";

// icons
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const LoginHome = () => {
  // routers
  const navigate = useNavigate();

  // navigate login
  function LoginHandleClick() {
    navigate("/Login");
  }
  // use a code
  function codeHandleClick() {
    navigate("/InterCode");
  }

  return (
    <Box className="max_container text-center bg-black text-white p-10 ">
      <h1 className="text-[64px] font-medium">DJ Song Requests</h1>
      <Stack spacing={2} className="my-16">
        <Button
          onClick={LoginHandleClick}
          variant="contained"
          color="primary"
          size="large"
          sx={{ padding: 1.3 }}
          startIcon={<Person2OutlinedIcon />}>
          Dj Login
        </Button>
        <Button
          onClick={codeHandleClick}
          variant="contained"
          color="primary"
          startIcon={123}
          size="large"
          sx={{ padding: 1.3 }}>
          Enter Code
        </Button>
      </Stack>
      <h1 className="text-[64px] font-medium">JukeJar</h1>
    </Box>
  );
};

export default LoginHome;
