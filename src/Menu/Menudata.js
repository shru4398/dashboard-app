import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ShortTextIcon from "@mui/icons-material/ShortText";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";

export const MenuData = [
  {
    title: "Overview",
    icon: <HomeIcon />,
  },
  {
    title: "Opportunities",
    icon: <CategoryIcon />,
  },
  {
    title: "My competitors",
    icon: <PersonIcon />,
  },
  {
    title: "Briefs",
    icon: <ShortTextIcon />,
  },
  {
    title: "Saved",
    icon: <BookmarkIcon />,
  },
];

export const BottomMenuData = [
  {
    title: "Setting",
    icon: <SettingsIcon />,
  },
  {
    title: "Help",
    icon: <HelpIcon />,
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
  },
];
