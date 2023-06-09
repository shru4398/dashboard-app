import React from "react";
import Grid from "@mui/material/Grid";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icon from "@mui/material/Icon";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Header() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <List
          sx={{
            width: "100%",
            maxWidth: 900,
            height: 50,
            bgcolor: "background.paper",
          }}
        >
          <ListItem disableGutters>
            Team Alpha
            <Diversity1Icon />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={4}>
        <List
          sx={{
            width: "100%",
            maxWidth: 1000,
            height: 50,
            bgcolor: "background.paper",
          }}
        >
          <ListItem disableGutters>
            <Icon color="primary">add_circle</Icon>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={2}>
        <List
          sx={{
            width: "100%",
            maxWidth: 1200,
            height: 50,
            bgcolor: "background.paper",
          }}
        >
          <ListItem disableGutters>
            <AccountCircleIcon />
            <ListItemText primary={`User Name`} />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
