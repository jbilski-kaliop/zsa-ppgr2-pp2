import type Action from "@/lib/actions/Action";

export type Routing = { path: string | RegExp; action: () => Action }[];
