import Home from "./pages/PageOne";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Contacts from "./pages/Contacts";
import Card from "./pages/Card";
import Err from "./pages/Err";

export const routes = [
  // --------------------------- isNavBar
  {
    id: 1,
    isNavBar: true,
    isExact: true,
    path: "/",
    name: "logo",
    className: "logo",
    component: Home
  },
  {
    id: 2,
    isNavBar: true,
    isExact: true,
    path: "/",
    name: "Главная",
    className: "nav-link",
    component: Home
  },
  {
    id: 3,
    isNavBar: true,
    isExact: true,
    path: "/delivery",
    name: "Доставка",
    className: "nav-link",
    component: Delivery
  },
  {
    id: 4,
    isNavBar: true,
    isExact: true,
    path: "/payment",
    name: "Оплата",
    className: "nav-link",
    component: Payment
  },
  {
    id: 5,
    isNavBar: true,
    isExact: true,
    path: "/contacts",
    name: "Контакты",
    className: "nav-link",
    component: Contacts
  },
  {
    id: 6,
    isNavBar: false,
    isExact: true,
    path: "/card",
    name: "Карточка товара",
    className: "nav-link",
    component: Card
  },
  {
    id: 7,
    isNavBar: false,
    isExact: true,
    path: "/card2",
    name: "Карточка товара",
    className: "nav-link",
    component: Card
  },

  {
    id: 2,
    isMobile: true,
    isExact: true,
    path: "/",
    name: "Главная",
    className: "nav-link",
    component: Home
  },
  {
    id: 3,
    isMobile: true,
    isExact: true,
    path: "/delivery",
    name: "Доставка",
    className: "nav-link",
    component: Delivery
  },
  {
    id: 4,
    isMobile: true,
    isExact: true,
    path: "/payment",
    name: "Оплата",
    className: "nav-link",
    component: Payment
  },
  {
    id: 5,
    isMobile: true,
    isExact: true,
    path: "/contacts",
    name: "Контакты",
    className: "nav-link",
    component: Contacts
  },
  {
    id: 6,
    isMobile: false,
    isExact: true,
    path: "/card",
    name: "Карточка товара",
    className: "nav-link",
    component: Card
  },
  {
    id: 7,
    isMobile: false,
    isExact: true,
    path: "/card2",
    name: "Карточка товара",
    className: "nav-link",
    component: Card
  },

  // --------------------------- 404
  {
    id: 18,
    isExact: true,
    component: Err,
    status: 404
  }
];
