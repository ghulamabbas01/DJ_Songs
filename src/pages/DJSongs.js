import React from "react";
// import mui
import { Box, Stack, IconButton, Avatar, Divider, Button } from "@mui/material";

// icons
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

// import image
import Thambnil from "../static/Images/Thumbnail.svg";

const DjSongs = () => {
  return (
    <Box
      className="max_container bg-black z-0 text-gray-500"
      sx={{ height: 700 }}>
      {/* top navbar start */}
      <Stack
        direction="row"
        justifyContent="space-between"
        className="px-16 py-3 bg-[#211F26]">
        <Box
          aria-label=""
          className="bg-slate-400 px-6 py-1 flex items-center rounded-3xl cursor-pointer">
          <HouseOutlinedIcon className="text-white " />
        </Box>
        <Box>
          <img
            src={Thambnil}
            alt="thaml"
            width={75}
            height={32}
            className="cursor-pointer"
          />
        </Box>
        <Box aria-label=""></Box>
      </Stack>
      {/* top navbar end*/}
      {/*Header Name and Pic start*/}
      <Stack className="mt-5 items-center ">
        <h3 className="text-2xl uppercase font-medium text-white">Dj name</h3>
        <p>04/10/2023</p>
        <img
          src={Thambnil}
          alt="thaml"
          width={150}
          height={100}
          className="cursor-pointer"
        />
      </Stack>
      {/*Header Name and Pic end*/}

      <Stack className="px-2 mt-[50px]">
        <h3 className="uppercase font-medium text-white mb-2">Active Events</h3>
        <Divider color="gray" width="320px" />
        {/*Active Events end*/}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className=" bg-white py-3 pl-4 pr-6 rounded-2xl mt-1 ">
          <Box>
            <h4 className="text-black font-medium">Song Name</h4>
            <p className="text-black">Artist Name</p>
          </Box>
          <Stack spacing={2} direction="row" alignItems="center">
            <p className="text-red-900 font-medium">$200</p>
            <button className="bg-[#59b972] rounded-[40px] px-4 h-10 tracking-widest text-black font-medium">
              <TaskAltIcon />
              Accept
            </button>
            <button className="bg-[#DE3730] px-4 rounded-[40px] h-10 tracking-widest  text-black font-medium">
              <DoDisturbIcon />
              Reject
            </button>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className=" bg-white py-3 pl-4 pr-6 rounded-2xl mt-1">
          <Box>
            <h4 className="text-black font-medium">Song Name</h4>
            <p className="text-black">Artist Name</p>
          </Box>
          <Stack spacing={2} direction="row" alignItems="center">
            <p className="text-red-900 font-medium">$200</p>
            <button className="bg-[#59b972] rounded-[40px] px-4 h-10 tracking-widest text-black font-medium">
              <TaskAltIcon />
              Accept
            </button>
            <button className="bg-[#DE3730] px-4 rounded-[40px] h-10 tracking-widest  text-black font-medium">
              <DoDisturbIcon />
              Reject
            </button>
          </Stack>
        </Stack>
      </Stack>
      {/*Active Events end*/}
      {/*---------------------------------------Past Events start -------------------------*/}
      <Stack className="px-2 mt-[50px]">
        <h3 className="uppercase font-medium text-white mb-2">Past Events</h3>
        <Divider color="gray" width="320px" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className=" bg-white py-3 pl-4 pr-6 rounded-2xl mt-1">
          <Box className="flex items-center gap-2">
            <CheckCircleOutlineIcon className="text-black" />
            <div>
              <h4 className="text-black font-medium">Song Name</h4>
              <p className="text-black">Artist Name</p>
            </div>
          </Box>
          <Stack spacing={2} direction="row" alignItems="center">
            <p className="text-red-900 font-medium">$200</p>
            <button className="bg-white shadow-xl border-[1px] rounded-[40px] px-4 h-10 tracking-widest text-black font-medium">
              <ThumbUpOutlinedIcon className="mr-2" />
              20
            </button>
            <button className="bg-white shadow-xl border-[1px] rounded-[40px] px-4 h-10 tracking-widest text-black font-medium">
              <ThumbDownOutlinedIcon className="mr-2" />
              20
            </button>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className=" bg-white py-3 pl-4 pr-6 rounded-2xl mt-1">
          <Box className="flex items-center gap-2">
            <CheckCircleOutlineIcon className="text-green-600" />
            <div>
              <h4 className="text-black font-medium">Song Name</h4>
              <p className="text-black">Artist Name</p>
            </div>
          </Box>
          <Stack spacing={2} direction="row" alignItems="center">
            <p className="text-green-600 font-medium">$200</p>
            <button className="bg-white shadow-xl border-[1px] rounded-[40px] px-4 h-10 tracking-widest text-black font-medium">
              <ThumbUpOutlinedIcon className="mr-2" />
              20
            </button>
            <button className="bg-white shadow-xl border-[1px] rounded-[40px] px-4 h-10 tracking-widest text-black font-medium">
              <ThumbDownOutlinedIcon className="mr-2" />
              20
            </button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DjSongs;
