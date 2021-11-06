import React from "react";
import {
  IconButton,
  Avatar,
  Menu,
  styled,
  Typography,
  useTheme,
  Divider,
  Box,
} from "@mui/material";

const MenuHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
}));
const MenuBody = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));
const MenuFooter = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const UserMenu = () => {
  const [userMenuEl, setUserMenuEl] = React.useState(null);
  const open = Boolean(userMenuEl);
  //   const theme = useTheme();

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
        PaperProps={{
          sx: {
            width: 280,
            "& ul": { padding: 0 },
          },
        }}
      >
        <MenuHeader>
          <div style={{ width: "max-content" }}>
            <Typography variant="h5" gutterBottom>
              Abdullah Al Sahariar
            </Typography>
            <Typography variant="body2" sx={{ margin: 0 }}>
              shahariar@gmail.com
            </Typography>
          </div>
        </MenuHeader>
        <Divider />
        <MenuBody></MenuBody>
        <Divider />
        <MenuFooter></MenuFooter>
      </Menu>
    </>
  );
};

export default UserMenu;
