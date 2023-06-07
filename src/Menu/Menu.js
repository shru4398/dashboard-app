import React from "react";
import { MenuData, BottomMenuData } from "./Menudata";
import { ListItemButton, ListItemText, Divider } from "@mui/material";
import "./Menu.css";

function Menu() {
  return (
    <span style={{ width: "100vh" }}>
      {MenuData.map((val) => {
        return (
          <ListItemButton key={val.title}>
            <span className="padding-5">{val.icon}</span>
            <ListItemText primary={val.title} />
          </ListItemButton>
        );
      })}
      <Divider light />
      <span className="bottom-menu">
        {BottomMenuData.map((val) => {
          return (
            <ListItemButton key={val.title}>
              <span className="padding-5">{val.icon}</span>
              <ListItemText primary={val.title} />
            </ListItemButton>
          );
        })}
      </span>
    </span>
  );
}

export default Menu;
