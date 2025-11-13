import AboutAction from "@/lib/actions/AboutAction";
import HomeAction from "@/lib/actions/HomeAction";
import type { Routing } from "@/lib/types";

export default [
  { path: "/", action: () => new HomeAction() },
  { path: "/about", action: () => new AboutAction() },
] as Routing;
