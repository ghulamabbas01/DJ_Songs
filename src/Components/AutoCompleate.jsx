import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Divider, InputAdornment, Popper } from "@mui/material";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function AutoCompleate() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [songname, setSongname] = useState("");

  const clearInput = () => {
    setSongname(""); // Clear the tip input
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
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
      </Popper>
    </Box>
  );
}
