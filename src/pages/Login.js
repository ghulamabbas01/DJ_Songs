import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      setErrorMessage("Please fill in both email and password.");
      return;
    }
    navigate("/Home"); // Navigate to the dashboard on successful login
  };

  // navigate create account
  function CreateHandleClick() {
    navigate("/CreateAccount");
  }

  return (
    <Box className="max_container text-center bg-black text-gray-500 p-10 ">
      <h1 className="text-[48px] font-medium pb-7 text-white">Login</h1>
      <Stack>
        <label className="mb-2 text-sm font-medium text-white dark:text-white text-left">
          Your Email
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Person2OutlinedIcon />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="text-gray-900 text-sm rounded-lg block w-full pl-10 p-4"
            placeholder="name@flowbite.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Password input  */}
        <label className="mb-2 text-sm font-medium text-white dark:text-white text-left">
          Password
        </label>
        <div className="relative mb-6 flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <LockOutlinedIcon />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="input-group-2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <VisibilityIcon
            onClick={handleTogglePassword}
            className="absolute right-4"
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </Stack>
      <Stack spacing={2} className="my-24">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
          sx={{ padding: 1.3 }}
          onClick={handleLogin}>
          Logins
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="flex items-center"
          onClick={CreateHandleClick}
          startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
          sx={{ padding: 1.3 }}>
          Create Account
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
