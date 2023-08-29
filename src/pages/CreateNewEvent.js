import React, { useState } from "react";

import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Divider,
} from "@mui/material";

// useNavigate
import { useNavigate } from "react-router-dom";

// icons
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CreateNewEvent = () => {
  const [eventName, setEventName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const clearInput = (field) => {
    if (field === "eventName") {
      setEventName("");
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleClearClick = () => {
    setSelectedFile(null);
  };

  const CreateNewAccount = () => {
    if (selectedDate && selectedFile && eventName) {
      navigate("/Home");
    } else {
      setError("Name,Date and Image are required.");
    }
  };

  return (
    <Box className="max_container bg-black z-0 text-gray-500 px-1">
      <Box className="pt-6">
        {/* Event Name textfield  */}
        <TextField
          id="input-with-icon-textfield"
          label="Event Name"
          placeholder="input"
          fullWidth
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
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
      </Box>
      <Stack className="bg-gray-500 px-6 mt-8 py-4 rounded-[40px] mx-3">
        <p className="text-[#CAC4D0]">Select Date</p>
        <Box className="flex flex-row justify-between mb-7 mt-7 pb-3 border-b-[1px]">
          <h3 className="text-[#E6E0E9]">Enter Dates</h3>
          <DateRangeOutlinedIcon className="text-[#CAC4D0]" />
        </Box>

        <TextField
          id="input-with-icon-textfield"
          label="Date"
          type="date"
          fullWidth
          variant="outlined"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box className="text-end mt-6">
          <button className="text-[#D0BCFF] py-[10px] px-3">Cencel</button>
          <button className="text-[#D0BCFF] py-[10px] px-3">Ok</button>
        </Box>
      </Stack>
      <Box className="mt-10">
        <TextField
          id="input-file-textfield"
          label="Insert Picture for QR code (optional)"
          type="file"
          fullWidth
          variant="outlined"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              accept: ".pdf,.doc,.docx,.png,.jpg",
            },
            startAdornment: (
              <IconButton component="label">
                <AttachFileIcon style={{ color: "white" }} />
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
              </IconButton>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {selectedFile && (
                  <IconButton onClick={handleClearClick}>
                    <HighlightOffIcon
                      style={{ color: "white" }}
                      className="text-white"
                    />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box className="mt-10 px-12">
        {error && (
          <Typography color="error" className="text-center pb-2">
            {error}
          </Typography>
        )}
        {/* button  */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className="flex items-center"
          onClick={CreateNewAccount}
          startIcon={<ArrowRightIcon />}
          sx={{ padding: 1.3, borderRadius: "40px" }}>
          Create Event
        </Button>
      </Box>
    </Box>
  );
};

export default CreateNewEvent;
