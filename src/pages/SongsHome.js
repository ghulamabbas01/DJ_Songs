import React from "react";

// import mui
import { Box, Stack, IconButton, Avatar, Divider, Button } from "@mui/material";

// icons
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// import image
import Thambnil from "../static/Images/Thumbnail.svg";

// useNavigate

import { useNavigate } from "react-router-dom";

const SongsHome = () => {
  const navigate = useNavigate();
  const createNewEvent = () => {
    navigate("/RequestSong");
  };

  return (
    <Box className="max_container bg-black z-0 text-gray-500 ">
      {/*Header Name and Pic start*/}
      <Stack className="items-center gap-4 pt-7">
        <h3 className="text-2xl uppercase font-medium text-white">Dj name</h3>
        <img
          src={Thambnil}
          alt="thaml"
          width={150}
          height={100}
          className="cursor-pointer"
        />
      </Stack>
      {/*Header Name and Pic end*/}
      {/*Active Events start*/}
      <Stack className="px-2 mt-[50px]">
        <h3 className="uppercase font-medium text-white mb-2">Current Bids</h3>
        <Divider color="gray" width="320px" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className=" bg-[#6daeff] py-3 pl-4 pr-6 rounded-2xl mt-1">
          <Box>
            <h4 className="text-black font-medium mb-2">Song Name</h4>
            <p className="text-black">Artist Name</p>
          </Box>
          <Stack spacing={2} direction="row" alignItems="center">
            <p className="text-black font-medium">$200</p>
            <button className="bg-[#001C39] shadow-xl  rounded-[40px] px-4 h-10 tracking-widest text-white font-medium">
              Bid +
            </button>
            <button className="bg-[#ABDFBC] shadow-xl  rounded-[40px] px-4 h-10 tracking-widest text-black font-medium">
              <ThumbUpOutlinedIcon className="mr-2" />
              20
            </button>
          </Stack>
        </Stack>
      </Stack>
      {/*Active Events end*/}
      {/*----------------------------------Past Events start---------------------------------*/}
      <Stack className="px-2 mt-[50px]">
        <h3 className="uppercase font-medium text-white mb-2">
          Accepted Songs
        </h3>
        <Divider color="gray" width="320px" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className=" bg-white py-3 pl-4 pr-6 rounded-2xl mt-1">
          <Box className="flex items-center gap-5">
            <CheckCircleOutlineIcon className="text-black" />
            <div>
              <h4 className="text-black font-medium mb-2">Song Name</h4>
              <p className="text-gray-500">Artist Name</p>
            </div>
          </Box>
          <Stack spacing={2} direction="row" alignItems="center">
            <p className="text-black font-medium">$200</p>
            <button className="bg-white shadow-xl border-[1px] rounded-[40px] px-4 h-10 tracking-widest text-black font-medium">
              <ThumbUpOutlinedIcon className="mr-2" />
              20
            </button>
          </Stack>
        </Stack>
      </Stack>
      {/*Past Events end*/}
      <Stack spacing={2} className="mt-12 px-12">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="flex items-center"
          startIcon={<ArrowRightIcon />}
          fullWidth
          onClick={createNewEvent}
          sx={{ padding: 1.3, borderRadius: "40px" }}>
          Request a Song
        </Button>
      </Stack>
    </Box>
  );
};

export default SongsHome;
