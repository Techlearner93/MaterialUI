import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log(`Value: ${value}`);
  console.log(`Skill: ${skill}`);
  const handleChange = (e: any, newValue: string | null) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
