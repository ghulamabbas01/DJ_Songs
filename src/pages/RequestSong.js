import React, { useState } from "react";
import AutoCompleate from "../Components/AutoCompleate";
import {
  Box,
  InputAdornment,
  TextField,
  Button,
  Divider,
  Stack,
} from "@mui/material";

// icons
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

// useNavigate
import { useNavigate } from "react-router-dom";

// import image
import paypal from "../static/Images/paypal.png";
import googlapay from "../static/Images/googlepay.png";
import cardpay from "../static/Images/card.png";

const RequestSong = () => {
  const navigate = useNavigate();
  const [tip, setTip] = useState("");

  const clearInput = () => {
    setTip(""); // Clear the tip input
  };

  const handlaClick = () => {
    navigate("/DjSongs");
  };

  return (
    <Box className="max_container text-center bg-black z-0 text-gray-500   ">
      <AutoCompleate />
      <Box className=" px-1">
        <TextField
          id="input-with-icon-textfield"
          label="Tip Amount"
          placeholder="input"
          fullWidth
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffIcon
                  onClick={clearInput}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Box>
      <Box className="px-[15px] mt-12 ">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handlaClick}
          sx={{ padding: 1.3, borderRadius: "40px" }}>
          Request Song
        </Button>
        <div className="w-[300px] h-[1px] bg-white flex z-30 mt-10"></div>
        <button className="p-4 bg-white text-black w-[340px] mt-10 rounded-t-md">
          Payment Method
        </button>
      </Box>
      <Stack direction="row" className="pb-32 pt-8 px-6 bg-black" spacing={1}>
        <img
          src={paypal}
          alt="thaml"
          width={150}
          height={100}
          className="cursor-pointer bg-white rounded-t-md"
        />
        <img
          src={googlapay}
          alt="thaml"
          width={150}
          height={100}
          className="cursor-pointer bg-white rounded-t-md"
        />
        <img
          src={cardpay}
          alt="thaml"
          width={150}
          height={100}
          className="cursor-pointer bg-white rounded-t-md"
        />
      </Stack>
    </Box>
  );
};

export default RequestSong;
