import { GoHome } from "react-icons/go";
import { LuChartSpline } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { TbTable } from "react-icons/tb";
import { BsInboxes } from "react-icons/bs";

export const sidebarLinks = [
  {
    name: "Dashboard",
    path: ".",
    icon: GoHome,
    end: true,
  },

  {
    name: "Charts",
    path: "charts",
    icon: LuChartSpline,
  },
  {
    name: "Calendar",
    path: "calendar",
    icon: IoCalendarOutline,
  },
  {
    name: "Datatables",
    path: "datatables",
    icon: TbTable,
  },
  {
    name: "Widgets",
    path: "widgets",
    icon: BsInboxes,
  },
];
