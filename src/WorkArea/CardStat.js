import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
}));

export default function CardStat() {
  return (
    <div style={{ padding: "0.8em" }}>
      <Card sx={{ maxWidth: 390, height: 165 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <ThunderstormIcon />
            </IconButton>
          }
          title="42,33%"
          subheader="Bounce Rate"
        />

        <CardActions disableSpacing>
          <ExpandMore
            expand={false}
            onClick={() => {}}
            aria-expanded={false}
            aria-label="show more"
          >
            2.1%
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Card>
    </div>
  );
}
