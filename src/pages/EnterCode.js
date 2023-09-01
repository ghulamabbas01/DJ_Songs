import React, { useState } from "react";
import { Box, Button, Stack, TextField, InputAdornment } from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useNavigate } from "react-router-dom";

const InterCode = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClearClick = () => {
    setInputValue("");
  };

  const navigate = useNavigate();

  const handleJoinEvent = () => {
    if (inputValue.trim() !== "") {
      navigate(`/SongsHome`); // Modify the URL pattern as needed
    }
  };

  return (
    <Box className="max_container text-center bg-black text-gray-500 p-10 ">
      <Stack>
        <TextField
          id="input-with-icon-textfield"
          label="Event Code"
          placeholder="123456"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffRoundedIcon
                  className="absolute right-4 cursor-pointer"
                  onClick={handleClearClick}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Stack>
      <Stack spacing={2} className="my-24">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleJoinEvent}
          sx={{ padding: 1.3 }}>
          Join Event
        </Button>
      </Stack>
    </Box>
  );
};

export default InterCode;
