import React from "react";
import {
  IconButton,
  Avatar,
  Menu,
  styled,
  Typography,
  //   useTheme,
  Divider,
  Box,
  MenuList,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  MenuItem,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
}));
const MenuBody = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 0),
  color: theme.palette.text.primary,
}));
const MenuFooter = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
}));
const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
const ListItemText = styled(MuiListItemText)(({ theme }) => ({
  color: theme.palette.text.primary,
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
        <MenuBody>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
          </MenuList>
        </MenuBody>
        <Divider />
        <MenuFooter>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "100%" }}
            // sx={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </MenuFooter>
      </Menu>
    </>
  );
};

export default UserMenu;
