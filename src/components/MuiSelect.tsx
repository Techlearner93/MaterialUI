import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (e: any) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        fullWidth
        select
        color="success"
        value={countries}
        onChange={handleChange}
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="CN">China</MenuItem>
      </TextField>
    </Box>
  );
};
