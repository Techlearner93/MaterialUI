import React from "react";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  CardHeader,
  IconButton,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card variant="outlined">
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt=""
        />
        <CardHeader
          title="Card Title"
          subheader="Sub Header"
          action={
            <IconButton>
              <StarIcon style={{ color: "orange" }}></StarIcon>
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            vitae rerum deleniti quis eos, libero ducimus temporibus esse,
            doloribus porro deserunt dolorum alias distinctio fuga cupiditate
            nesciunt iure? Doloribus, ipsa!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
