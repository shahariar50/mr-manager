import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import InsertChartIcon from "@mui/icons-material/InsertChart";

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
  { id: 3, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 4, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 5, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 6, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 7, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 8, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 9, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 10, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 11, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 12, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 13, title: "Dashboard", value: "dashboard", link: "/" },
  { id: 14, title: "Dashboard", value: "dashboard", link: "/" },
];
