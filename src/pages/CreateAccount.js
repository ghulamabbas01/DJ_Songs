import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

// useNavigate
import { useNavigate } from "react-router-dom";

// icons 
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [paypalHandle, setPaypalHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCreateAccount = () => {
    if (username && password) {
      navigate("/Login");
    } else {
      setError("Username and password are required.");
    }
  };

  const clearInput = (inputField) => {
    switch (inputField) {
      case "username":
        setUsername("");
        break;
      case "paypalHandle":
        setPaypalHandle("");
        break;
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
  return (
    <Box className="max_container text-center bg-black text-gray-500 py-10 px-1 ">
      <Stack spacing={2} className="mt-20 mb-4">
        {/* usename textfield  */}
        <TextField
          id="input-with-icon-textfield"
          label="Username"
          placeholder="input"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DriveFileRenameOutlineOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffIcon
                  onClick={() => clearInput("username")}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        {/* paypal acount input  */}
        <TextField
          id="input-with-icon-textfield"
          label="Paypal handle"
          placeholder="input"
          fullWidth
          type="number"
          value={paypalHandle}
          onChange={(e) => setPaypalHandle(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PaymentOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffIcon
                  onClick={() => clearInput("paypalHandle")}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        {/* email  input*/}
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
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffIcon
                  onClick={() => clearInput("email")}
                  style={{ cursor: "pointer" }}
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
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Stack>
      {error && <Typography color="error">{error}</Typography>}
      {/* Buttons */}
      <Stack spacing={2} className="my-32 px-12">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="flex items-center"
          startIcon={<ArrowRightIcon />}
          sx={{ padding: 1.3, borderRadius: "40px" }}
          onClick={handleCreateAccount}>
          Create Account
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateAccount;
