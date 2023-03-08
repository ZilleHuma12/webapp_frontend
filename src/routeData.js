
import Home from "./Views/Home";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";

import DashboardLayout from "./Layouts/DashboardLayout";
import GeneralLayout from "./Layouts/GeneralLayout";

export const routes = [
  {
    path: "/",
    layout: DashboardLayout,
    component: Home,
  },
  {
    path: "/signin",
    layout: GeneralLayout,
    component: Signin,
  },
  {
    path: "/signup",
    layout: GeneralLayout,
    component: Signup,
  },
];
