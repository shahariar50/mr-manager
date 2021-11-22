import {
  Box,
  List,
  ListItem as MuiListItem,
  Button as MuiButton,
  Typography,
  styled,
  useTheme,
  Tooltip,
} from "@mui/material";
import React from "react";
import { SIDEBAR_MENU } from "constants/sidebarMenu";
import { withRouter } from "react-router";

const ListItem = styled(MuiListItem)(({ theme }) => ({
  padding: 0,
}));
const Button = styled(MuiButton)(({ theme, active }) => ({
  width: "100%",
  justifyContent: "flex-start",
  fontSize: theme.spacing(1.75),
  paddingLeft: theme.spacing(4),
  borderRight: 3,
  color: theme.palette.text.primary,
  ...(active && {
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
  }),
  borderRadius: 0,
}));

const DrawerMenu = ({ location, history, open }) => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: !open ? theme.spacing(2, 0) : 0 }}>
      {SIDEBAR_MENU?.map((menu) =>
        menu.type === "group" ? (
          <Box>
            {open && (
              <Typography
                variant="body2"
                component="h5"
                sx={{
                  fontWeight: 700,
                  paddingTop: theme.spacing(2),
                  paddingLeft: theme.spacing(4),
                }}
              >
                {menu.name}
              </Typography>
            )}
            <List disablePadding={!open}>
              {menu?.children?.map((menu) => (
                <Tooltip title={!open ? menu.title : ""} placement="right">
                  <ListItem>
                    <Button
                      size="large"
                      startIcon={<menu.icon />}
                      active={location?.pathname === menu?.link}
                      onClick={() => history.push(menu.link)}
                    >
                      {open && menu?.title}
                    </Button>
                  </ListItem>
                </Tooltip>
              ))}
            </List>
          </Box>
        ) : (
          ""
        )
      )}
    </Box>
  );
};

export default withRouter(DrawerMenu);
