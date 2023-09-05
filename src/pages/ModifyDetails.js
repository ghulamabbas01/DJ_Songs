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

// import image
import Thambnil from "../static/Images/Thumbnail.svg";

// icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ModifyDetails = () => {
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
      {/*Header Name and Pic start*/}
      <Stack className="mt-5 items-center ">
        <h3 className="text-2xl uppercase font-medium text-white">Dj name</h3>
        <p>04/10/2023</p>
        <img
          src={Thambnil}
          alt="thaml"
          width={150}
          height={100}
          className="cursor-pointer"
        />
      </Stack>
      {/*Header Name and Pic end*/}
      <Stack spacing={2} className="mt-12 mb-4">
        {/* usename textfield  */}
        <TextField
          id="input-with-icon-textfield"
          label="Username"
          placeholder="djjosu"
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
          placeholder="josuguti"
          fullWidth
          type="text"
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
          placeholder="djemail@gmail.com"
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
          placeholder="**********"
          type="password"
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
      {/* Buttons */}
      <Stack spacing={2} className="mt-6 px-12">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="flex items-center"
          startIcon={<ArrowRightIcon />}
          sx={{ padding: 1.3, borderRadius: "40px" }}
          onClick={handleCreateAccount}>
          Modify Details
        </Button>
      </Stack>
    </Box>
  );
};

export default ModifyDetails;
