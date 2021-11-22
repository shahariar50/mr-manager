import React from "react";
import {
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  IconButton,
  Slide,
  styled,
  Toolbar,
  useScrollTrigger,
  Drawer as MuiDrawer,
  Divider,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserMenu from "../menu/UserMenu";
import DrawerMenu from "../menu/DrawerMenu";

const fullDrawerWidth = 280;
const smallDrawerWidth = 80;

const openMixin = (theme) => ({
  width: fullDrawerWidth,
  overflowX: "hidden",
  transition: theme.transitions.create(["width"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
});
const closeMixin = (theme) => ({
  width: smallDrawerWidth,
  overflowX: "hidden",
  transition: theme.transitions.create(["width"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
});

const AppBar = styled(MuiAppBar)(({ open, theme }) => ({
  width: `calc(100% - ${fullDrawerWidth}px)`,
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  // backgroundColor: alpha(theme.palette.background.default, 0.72),
  transition: theme.transitions.create(["width"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  ...(!open && {
    width: `calc(100% - ${smallDrawerWidth}px)`,
  }),
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  flexShrink: 0,
  ...openMixin(theme),
  "& .MuiDrawer-paper": {
    ...openMixin(theme),
    boxSizing: "border-box",
  },
  ...(!open && {
    ...closeMixin(theme),
    "& .MuiDrawer-paper": { ...closeMixin(theme), boxSizing: "border-box" },
  }),
}));
const DrawerHeader = styled("div")(({ theme, open }) => ({
  padding: theme.spacing(1, 0),
}));

const Main = styled("div")(({ theme, open }) => ({}));

function HideOnScroll({ children, window }) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const MainLayout = ({ children, ...props }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar open={isSidebarOpen}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                mr: 2,
                // color: theme.palette.primary.light
              }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              <IconButton
                size="large"
                color="inherit"
                sx={{
                  mr: 2,
                  // color: theme.palette.primary.light
                }}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <UserMenu />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer variant="permanent" anchor="left" open={isSidebarOpen}>
        <DrawerHeader>
          <h1 style={{ margin: "0" }}>Mr.{isSidebarOpen && " Manager"}</h1>
        </DrawerHeader>
        <Divider />
        <DrawerMenu open={isSidebarOpen} />
      </Drawer>
      <Main>{children}</Main>
    </Box>
  );
};

export default MainLayout;
