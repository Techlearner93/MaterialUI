import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Switch,
} from "@mui/material";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleChange = (e: any) => {
    setChecked(e.target.checked);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Theme</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="Dark mode"
            control={<Switch checked={checked} onChange={handleChange} />}
          />
          <FormControlLabel label="Light mode" control={<Switch />} />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
