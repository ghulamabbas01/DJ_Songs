import React, { useState } from "react";
// useNavigate
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Divider,
} from "@mui/material";

import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import useEventId from "./EventDetails";

const EventPage = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  // const [eventId, setEventId] = useState(generateEventId()); // Generate a random event ID
  const [error, setError] = useState("");
  const { eventId, setEventId } = useEventId();

  // const CreateNewAccount = () => {
  //   if (selectedDate && selectedFile && eventName) {
  //     navigate(`/EventPage/${eventId}`); // Navigate to the event page with the generated event ID
  //   } else {
  //     setError("Name, Date, and Image are required.");
  //   }
  // };

  const generateEventId = () => {
    // Generate your event ID logic here
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const eventIdLength = 6;
    let newEventId = "";
    for (let i = 0; i < eventIdLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newEventId += characters.charAt(randomIndex);
    }
    setEventId(newEventId); // Set the new event ID using the context
  };

  // Initialize the useNavigate hook

  const handleFileInputChange = (e) => {
    // Define the logic for handling file input change
  };

  const handleClearClick = () => {
    // Handle clearing the selected file
    setSelectedFile("");
  };

  const clearInput = (inputField) => {
    setEventName("");
  };

  return (
    <Box className="max_container bg-black z-0 text-gray-500 px-1">
      {/* <div>
        <h1>Event Page</h1>
        <p>Event ID: {eventId}</p>
        <p>ewZw: {ewZw}</p>
      </div> */}
      <Box className="mt-5 text-center flex justify-center">
        <QRCode title="test" value={window.location.href} />
      </Box>
      <Box className="mt-10">
        <TextField
          id="input-with-icon-textfield"
          label="Username"
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
                  onClick={() => clearInput("eventName")}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Box>
      {/* ... (rest of your component code) */}
      <Stack className="bg-gray-500 px-6 mt-8 py-8 rounded-[40px] mx-3">
        <p className="text-[#CAC4D0]">Select Date</p>

        <Box className="mt-5">
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className="flex items-center"
          onClick={generateEventId}
          startIcon={<ArrowRightIcon />}
          sx={{ padding: 1.3, borderRadius: "40px" }}>
          Create Event
        </Button>
      </Box>
    </Box>
  );
};

export default EventPage;
