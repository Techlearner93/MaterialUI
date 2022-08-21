import React, { useState } from "react";
import { Stack, Rating, FormLabel } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (e: any, newValue: number | null) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <FormLabel>Ratings</FormLabel>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      ></Rating>
    </Stack>
  );
};
