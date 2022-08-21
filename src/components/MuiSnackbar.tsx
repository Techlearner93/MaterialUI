import React, { useState, forwardRef } from "react";
import { Snackbar, Button, Alert, AlertProps } from "@mui/material";

const SnackbarAlert = forwardRef<any, AlertProps>(function SnackAlert(
  props,
  ref
) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (e: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully !
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
