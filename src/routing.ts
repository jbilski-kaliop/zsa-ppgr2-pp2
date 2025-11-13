import AboutAction from "@/lib/actions/AboutAction";
import HomeAction from "@/lib/actions/HomeAction";
import type { Routing } from "@/lib/types";
import TodoAction from "./lib/actions/TodoAction";

export default [
  { path: /^\/$/, action: () => new HomeAction() },
  { path: /^\/about$/, action: () => new AboutAction() },
  { path: /^\/todo\/([0-9]+)/, action: () => new TodoAction() },
] as Routing;
