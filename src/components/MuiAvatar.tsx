import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4} p={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={5}>
          <Avatar sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>
            BW
          </Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            variant="rounded"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            variant="square"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="Candy"
          />
          <Avatar
            variant="square"
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="Candy"
          />
          <Avatar
            variant="square"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="Candy"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
