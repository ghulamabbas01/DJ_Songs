import React, { useState } from "react";
import { Box, Button, Stack, TextField, InputAdornment } from "@mui/material";

import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// icons
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "" || password === "") {
      setErrorMessage("Please Create Account");
      return;
    }
    navigate("/Home"); // Navigate to the dashboard on successful login
  };

  // Function to clear input fields
  const clearInput = (inputField) => {
    switch (inputField) {
      case "email":
        setEmail("");
        break;
      case "password":
        setPassword("");
        break;
      default:
        break;
    }
  };

  // navigate create account
  function CreateHandleClick() {
    navigate("/CreateAccount");
  }

  return (
    <Box className="max_container text-center bg-black z-0 text-gray-500 px-1 ">
      <Stack spacing={2} className="pt-20">
        <TextField
          id="input-with-icon-textfield"
          label="Email"
          placeholder="input"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person2OutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffIcon
                  onClick={() => clearInput("email")}
                  className="cursor-pointer"
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        {/* Password input  */}
        <TextField
          id="input-with-icon-textfield"
          label="Password"
          placeholder="input"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffIcon
                  onClick={() => clearInput("password")}
                  className="cursor-pointer"
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </Stack>
      <Stack spacing={2} className="mt-48 px-12">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<ArrowRightIcon />}
          sx={{ padding: 1.3, borderRadius: "40px" }}
          onClick={handleLogin}>
          Logins
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={CreateHandleClick}
          startIcon={<ArrowRightIcon />}
          sx={{ padding: 1.3, borderRadius: "40px" }}>
          Create Account
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
