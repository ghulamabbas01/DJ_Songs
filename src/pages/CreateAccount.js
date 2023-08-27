import React, { useState } from "react";
// import material ui
import { Box, Button, Stack, TextField } from "@mui/material";

// icons
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className="max_container text-center bg-black text-gray-500 p-10 ">
      <Stack>
        {/* Username input */}

        <label
          for="input-group-1"
          className=" mb-2 text-sm font-medium text-white dark:text-white text-left">
          Username
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <BorderColorOutlinedIcon />
          </div>
          <input
            type="text"
            id="input-group-1"
            className=" text-gray-900 text-sm rounded-lg  block w-full pl-10 p-4 "
            placeholder="name@flowbite.com"
          />
        </div>
        {/* payPal input */}
        <label
          for="input-group-1"
          className=" mb-2 text-sm font-medium text-white dark:text-white text-left">
          PayPal Handle
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <PaymentOutlinedIcon />
          </div>
          <input
            type="text"
            id="input-group-1"
            className=" text-gray-900 text-sm rounded-lg  block w-full pl-10 p-4 "
            placeholder="name@flowbite.com"
          />
        </div>
        {/* payPal input */}
        <label
          for="input-group-1"
          className=" mb-2 text-sm font-medium text-white dark:text-white text-left">
          Email
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Person2OutlinedIcon />
          </div>
          <input
            type="text"
            id="input-group-1"
            className=" text-gray-900 text-sm rounded-lg  block w-full pl-10 p-4 "
            placeholder="name@flowbite.com"
          />
        </div>
        {/* Password input  */}
        <label
          for="input-group-1"
          className="mb-2 text-sm font-medium text-white dark:text-white text-left">
          Password
        </label>
        <div className="relative mb-6 flex items-center ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <LockOutlinedIcon />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full pl-10 p-4  "
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <VisibilityIcon
            onClick={handleTogglePassword}
            className="absolute right-4 cursor-pointer"
          />
        </div>
      </Stack>
      {/* buttons here */}
      <Stack spacing={2} className="my-16">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="flex items-center"
          startIcon={<DoubleArrowRoundedIcon />}
          sx={{ padding: 1.3 }}>
          Create Account
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateAccount;
