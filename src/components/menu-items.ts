'use client'
import { Role } from "@/constants/type";
import { Home, LineChart, ShoppingCart, User2, Salad, Settings } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    Ion: Home, 
    href: "/admin/dashboard",
    authApiRequired: true,
    role: [Role.admin]
  },
  {
    title: "Đơn Hàng",
    Ion: ShoppingCart,
    href: "/admin/orders",
    authApiRequired: true,
    role: [Role.admin]
  },
  {
    title: "Sản Phẩm",
    Ion: Salad,
    href: "/admin/products",
    authApiRequired: true,
    role: [Role.admin]

  },
  {
    title: "Tài Khoản",
    Ion: User2,
    href: "/admin/accounts",
    authApiRequired: true,
    role: [Role.admin]

  },
  {
    title: "Phân Tích",
    Ion: LineChart,
    href: "/admin/analytics",
    authApiRequired: true,
    role: [Role.admin]

  },
  {
    title: "Cài Đặt",
    Ion: Settings,
    href: "/admin/settings",
    authApiRequired: true,
    role: [Role.admin]

  }
];

export default menuItems;