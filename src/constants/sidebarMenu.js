import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ReplayIcon from "@mui/icons-material/Replay";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import GroupIcon from "@mui/icons-material/Group";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import PaymentIcon from "@mui/icons-material/Payment";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

export const SIDEBAR_MENU = [
  {
    id: 1,
    name: "General",
    value: "general",
    type: "group",
    children: [
      {
        id: 1,
        title: "Dashboard",
        value: "dashboard",
        link: "/",
        type: "menu",
        icon: DashboardRoundedIcon,
      },
      {
        id: 2,
        title: "Reports",
        value: "reports",
        link: "/reports",
        type: "menu",
        icon: InsertChartIcon,
      },
    ],
  },
  {
    id: 2,
    name: "Product",
    value: "product",
    type: "group",
    children: [
      {
        id: 1,
        title: "Products",
        value: "products",
        link: "/products",
        type: "menu",
        icon: InventoryIcon,
      },
      {
        id: 2,
        title: "Orders",
        value: "orders",
        link: "/orders",
        type: "menu",
        icon: ShoppingBasketIcon,
      },
      {
        id: 3,
        title: "Return",
        value: "return",
        link: "/return",
        type: "menu",
        icon: ReplayIcon,
      },
      {
        id: 3,
        title: "Purchase",
        value: "purchase",
        link: "/purchase",
        type: "menu",
        icon: AddBusinessIcon,
      },
    ],
  },
  {
    id: 3,
    name: "People",
    value: "people",
    type: "group",
    children: [
      {
        id: 1,
        title: "Customers",
        value: "customers",
        link: "/customers",
        type: "menu",
        icon: SupervisedUserCircleIcon,
      },
      {
        id: 2,
        title: "Users",
        value: "users",
        link: "/users",
        type: "menu",
        icon: GroupIcon,
      },
      {
        id: 3,
        title: "Stuff",
        value: "stuff",
        link: "/stuff",
        type: "menu",
        icon: ManageAccountsIcon,
      },
      {
        id: 4,
        title: "Suppliers",
        value: "suppliers",
        link: "/suppliers",
        type: "menu",
        icon: TransferWithinAStationIcon,
      },
    ],
  },
  {
    id: 4,
    name: "Others",
    value: "others",
    type: "group",
    children: [
      {
        id: 1,
        title: "Payments",
        value: "payments",
        link: "/payments",
        type: "menu",
        icon: PaymentIcon,
      },
      {
        id: 2,
        title: "Expenses",
        value: "expenses",
        link: "/expenses",
        type: "menu",
        icon: MoneyOffIcon,
      },
      {
        id: 3,
        title: "Contacts",
        value: "contacts",
        link: "/contacts",
        type: "menu",
        icon: ContactMailIcon,
      },
      {
        id: 4,
        title: "Settings",
        value: "settings",
        link: "/settings",
        type: "menu",
        icon: SettingsIcon,
      },
      {
        id: 5,
        title: "Profile",
        value: "profile",
        link: "/profile",
        type: "menu",
        icon: PersonIcon,
      },
      {
        id: 6,
        title: "Reset Password",
        value: "reset-password",
        link: "/reset-password",
        type: "menu",
        icon: RotateLeftIcon,
      },
    ],
  },
];
