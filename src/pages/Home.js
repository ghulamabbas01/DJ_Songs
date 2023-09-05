import React from "react";

// import mui 
import { Box, Stack, IconButton, Avatar, Divider, Button } from "@mui/material";

// icons 
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// import image 
import Thambnil from "../static/Images/Thumbnail.svg"

// useNavigate

import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCreateEventClick = () => {
    navigate("/CreateEvent"); // Navigate to the CreateNewEvent page
  };

  // modefiy perfile
  const HandleModefiyProfileH = () => {
    navigate("/ModifyDetails");
  };

  return (
    <Box className="max_container bg-black z-0 text-gray-500 ">
      {/* top navbar start */}
      <Stack
        direction="row"
        justifyContent="space-between"
        className="px-16 py-3 ">
        <Box
          aria-label=""
          className="bg-slate-400 px-6 py-1 flex items-center rounded-3xl cursor-pointer">
          <HouseOutlinedIcon className="text-white " />
        </Box>
        <Box>
          <a href="/">
            <img
              src={Thambnil}
              alt="thaml"
              width={75}
              height={32}
              className="cursor-pointer"
            />
          </a>
        </Box>
        <IconButton aria-label="" onClick={HandleModefiyProfileH}>
          <Person2OutlinedIcon className="text-white" />
        </IconButton>
      </Stack>
      {/* top navbar end*/}
      {/*Header Name and Pic start*/}
      <Stack className="mt-5 items-center gap-4">
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
        <h3 className="uppercase font-medium text-white mb-2">Active Events</h3>
        <Divider color="gray" width="100%" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className=" bg-[#a3c9ff] py-3 pl-4 pr-6 rounded-2xl mt-1">
          <Box>
            <h4 className="text-white">Event Name</h4>
            <p className="text-black">04/10/2023</p>
          </Box>
          <Stack spacing={2} direction="row">
            <a
              href="/qr.png"
              download="/qr.png"
              className="bg-[#0a1c39] rounded-[40px] flex items-center justify-center px-4 h-10 tracking-widest text-white">
              <div>Download Image</div>
            </a>
            <button
              onClick={() => {
                navigate("/Events/:asd");
              }}
              className="bg-[#0060AB] px-4 rounded-[40px] h-10 tracking-widest  text-black font-medium">
              Open
            </button>
          </Stack>
        </Stack>
      </Stack>
      {/*Active Events end*/}
      {/*Past Events start*/}
      <Stack className="px-2 mt-[50px]">
        <h3 className="uppercase font-medium text-white mb-2">Past Events</h3>
        <Divider color="gray" width="100%" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className=" bg-white  py-3 pl-4 pr-6 rounded-2xl mt-1">
          <Box>
            <h4 className="text-black">Event Name</h4>
            <p className="text-black">04/10/2023</p>
          </Box>
          <Stack spacing={2} direction="row" alignItems="center">
            <p className="font-medium text-blue-600 tracking-widest cursor-pointer ">
              $200
            </p>
            <button
              onClick={() => {
                navigate("/Events/:asd");
              }}
              className="bg-[#00A62E] px-4 rounded-[40px] h-10 tracking-widest  text-black font-medium">
              <LibraryMusicIcon />
              Open
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
          onClick={handleCreateEventClick}
          sx={{ padding: 1.3, borderRadius: "40px" }}>
          Create New Event
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
