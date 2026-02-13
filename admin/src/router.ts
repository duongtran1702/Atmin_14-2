import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Landing } from "./pages/Landing";
import { Timeline } from "./pages/Timeline";
import { Feelings } from "./pages/Feelings";
import { HeartGame } from "./pages/HeartGame";
import { Letter } from "./pages/Letter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/landing",
    Component: Landing,
  },
  {
    path: "/timeline",
    Component: Timeline,
  },
  {
    path: "/feelings",
    Component: Feelings,
  },
  {
    path: "/game",
    Component: HeartGame,
  },
  {
    path: "/letter",
    Component: Letter,
  },
]);