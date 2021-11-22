import {
  Box,
  List,
  ListItem as MuiListItem,
  Button as MuiButton,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import InventoryIcon from "@mui/icons-material/Inventory";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ReplayIcon from "@mui/icons-material/Replay";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
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

const DrawerMenu = ({ location }) => {
  const theme = useTheme();

  return (
    <Box>
      {SIDEBAR_MENU.map((menu) =>
        menu.type === "group" ? (
          <Box>
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
            <List>
              {menu.children.map((menu) => (
                <ListItem>
                  <Button
                    size="large"
                    startIcon={<menu.icon />}
                    active={location.pathname === menu.link}
                  >
                    {menu.title}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          ""
        )
      )}

      <Box>
        <Typography
          variant="body2"
          component="h5"
          sx={{
            fontWeight: 700,
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(4),
          }}
        >
          Product
        </Typography>
        <List>
          <ListItem>
            <Button size="large" startIcon={<InventoryIcon />}>
              Products
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<ShoppingBasketIcon />}>
              Orders
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<ReplayIcon />}>
              Return
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<AddBusinessIcon />}>
              Purchase
            </Button>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography
          variant="body2"
          component="h5"
          sx={{
            fontWeight: 700,
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(4),
          }}
        >
          People
        </Typography>
        <List>
          <ListItem>
            <Button size="large" startIcon={<SupervisedUserCircleIcon />}>
              Customers
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<GroupIcon />}>
              Users
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<ManageAccountsIcon />}>
              Stuff
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<TransferWithinAStationIcon />}>
              Suppliers
            </Button>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography
          variant="body2"
          component="h5"
          sx={{
            fontWeight: 700,
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(4),
          }}
        >
          Others
        </Typography>
        <List>
          <ListItem>
            <Button size="large" startIcon={<PaymentIcon />}>
              Payment
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<MoneyOffIcon />}>
              Expenses
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<ContactMailIcon />}>
              Contacts
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<SettingsIcon />}>
              Settings
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<PersonIcon />}>
              Profile
            </Button>
          </ListItem>
          <ListItem>
            <Button size="large" startIcon={<RotateLeftIcon />}>
              Reset Password
            </Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default withRouter(DrawerMenu);
