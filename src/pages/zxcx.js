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
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Generate a random event ID
const generateEventId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const eventIdLength = 6;
  let eventId = "";
  for (let i = 0; i < eventIdLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    eventId += characters.charAt(randomIndex);
  }
  return eventId;
};

const CreateNewEvent = () => {
  const [eventName, setEventName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [eventId, setEventId] = useState(generateEventId()); // Generate a random event ID
  const [error, setError] = useState("");

  // Rest of your code...

  const CreateNewAccount = () => {
    if (selectedDate && selectedFile && eventName) {
      navigate(`/Event/${eventId}`); // Navigate to the event page with the generated event ID
    } else {
      setError("Name, Date, and Image are required.");
    }
  };

  // Rest of your code...

  return (
    <Box className="max_container bg-black z-0 text-gray-500 px-1">
      {/* ... (rest of your component code) */}
      <Stack className="bg-gray-500 px-6 mt-8 py-8 rounded-[40px] mx-3">
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className="flex items-center"
          onClick={CreateNewEventFunction}
          startIcon={<ArrowRightIcon />}
          sx={{ padding: 1.3, borderRadius: "40px" }}>
          Create Event
        </Button>
      </Box>
    </Box>
  );
};

export default CreateNewEvent;
