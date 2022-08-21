import React, { useState } from "react";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  const [show, setShow] = useState<boolean | null>(true);

  return (
    <Stack spacing={2}>
      {show ? (
        <Alert severity="error" onClose={() => setShow(false)}>
          This is an error alert
        </Alert>
      ) : null}
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        This is an success alert
      </Alert>

      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        variant="outlined"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>

      <Alert variant="filled" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        This is an success alert
      </Alert>
    </Stack>
  );
};
