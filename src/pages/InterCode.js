import React, { useState } from "react";
// import material ui
import { Box, Button, Stack, TextField } from "@mui/material";

// icons
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const InterCode = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClearClick = () => {
    setInputValue("");
  };
  return (
    <Box className="max_container text-center bg-black text-gray-500 p-10 ">
      <h1 className="text-[48px] font-medium pb-10 text-white">Event Code</h1>
      <Stack>
        {/* code input  */}
        <label
          for="input-group-1"
          class="mb-2 text-sm font-medium text-white dark:text-white text-left">
          Event Code
        </label>
        <div className="relative mb-6 flex items-center">
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-4 p-4"
            placeholder="Event Code"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <HighlightOffRoundedIcon
            className="absolute right-4 cursor-pointer"
            onClick={handleClearClick}
          />
        </div>
      </Stack>
      <Stack spacing={2} className="my-24">
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ padding: 1.3 }}>
          Join Event
        </Button>
      </Stack>
    </Box>
  );
};

export default InterCode;
