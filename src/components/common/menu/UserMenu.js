import React from "react";
import { IconButton, Avatar, Menu } from "@mui/material";

const UserMenu = () => {
  const [userMenuEl, setUserMenuEl] = React.useState(null);
  const open = Boolean(userMenuEl);

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        sx={
          {
            // color: theme.palette.primary.light
          }
        }
        onClick={({ currentTarget }) => setUserMenuEl(currentTarget)}
      >
        <Avatar alt="user" src="/static/user.jpg" />
      </IconButton>
      <Menu
        anchorEl={userMenuEl}
        open={open}
        onClick={() => setUserMenuEl(null)}
        onClose={() => setUserMenuEl(null)}
      >
        Hello World
      </Menu>
    </>
  );
};

export default UserMenu;
