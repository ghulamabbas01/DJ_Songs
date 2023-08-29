import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Divider, InputAdornment } from "@mui/material";
import Popover from "@mui/material/Popover";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function AutoCompleate() {
  const [anchorEl, setAnchorEl] = useState(null); // Initialize with null

  const [songname, setSongname] = useState("");

  const clearInput = () => {
    setSongname(""); // Clear the input
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const boxMargin = open ? "mt-52" : "mt-10"; // Set margin based on popover open/close state

  return (
    <Box className="pt-5 px-1">
      <TextField
        id="input-with-icon-textfield"
        label="Song Name from DJ library"
        placeholder="input"
        fullWidth
        onClick={handleClick}
        value={songname}
        onChange={(e) => setSongname(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DriveFileRenameOutlineOutlinedIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <HighlightOffIcon
                onClick={() => clearInput("songname")}
                style={{ cursor: "pointer" }}
              />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Box className={boxMargin}></Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <Box sx={{ width: 180, bgcolor: "#6daeff", color: "#fff" }}>
          <Box className="py-2 px-3">
            <h6 className="font-medium">Song</h6>
            <p className="text-black">Author</p>
          </Box>
          <Divider className="text-black" />
          <Box className="py-2 px-3">
            <h6 className="font-medium">Song</h6>
            <p className="text-black">Author</p>
          </Box>
          <Divider className="text-black" />
          <Box className="py-2 px-3">
            <h6 className="font-medium">Song</h6>
            <p className="text-black">Author</p>
          </Box>
          <Divider className="text-black " />
        </Box>
      </Popover>
    </Box>
  );
}
