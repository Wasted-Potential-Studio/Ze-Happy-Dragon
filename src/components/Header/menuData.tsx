import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Stories",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Tailed Experience",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
