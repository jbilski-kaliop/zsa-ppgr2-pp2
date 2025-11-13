import type Action from "@/lib/actions/Action";
import Error404Action from "@/lib/actions/Error404Action";
import type { Routing } from "@/lib/types";

export default class App {
  private routing: Routing;

  constructor(routing: Routing) {
    this.routing = routing;
  }

  run() {
    window.addEventListener("hashchange", () => this.handleAction());
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }

  private handleAction() {
    const path = this.getCurrentPath();
    const action = this.getActionForPath(path);
    action.execute();
  }

  private getCurrentPath(): string {
    const pathRegex = /^#?\/?(.*)?/;
    const pathRegexMatches = pathRegex.exec(window.location.hash);
    const path = "/" + (pathRegexMatches ? (pathRegexMatches[1] ?? "") : "");

    return path;
  }

  private getActionForPath(path: string): Action {
    for (const route of this.routing) {
      if (path.match(route.path)) {
        const action = route.action();
        action.path = path;

        return action;
      }
    }

    return new Error404Action();
  }
}
