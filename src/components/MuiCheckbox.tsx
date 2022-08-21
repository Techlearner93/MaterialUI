import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  const [acceptTNC, setAcceptTNC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log(acceptTNC);
  console.log(skills);

  const handleChange = (e: any) => {
    setAcceptTNC(e.target.checked);
  };

  const handleSkillChange = (e: any) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTNC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTNC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="React"
              control={
                <Checkbox
                  value="react"
                  checked={skills.includes("react")}
                  onChange={handleSkillChange}
                  size="small"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="Angular"
              control={
                <Checkbox
                  value="angular"
                  checked={skills.includes("angular")}
                  onChange={handleSkillChange}
                  size="small"
                  color="error"
                />
              }
            />
            <FormControlLabel
              label="Vue"
              control={
                <Checkbox
                  value="vue"
                  checked={skills.includes("vue")}
                  onChange={handleSkillChange}
                  size="small"
                  color="warning"
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
