import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

export const MuiLoadingButton = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton variant="outlined" loading>
          Submit
        </LoadingButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <LoadingButton variant="outlined" loadingIndicator="Loading...">
          Fetch Data
        </LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator="Loading..." loading>
          Fetch Data
        </LoadingButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <LoadingButton
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>

        <LoadingButton
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
          loading
        >
          Save
        </LoadingButton>
      </Stack>
    </>
  );
};
