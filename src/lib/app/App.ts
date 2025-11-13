import type Action from "@/lib/actions/Action";
import HomeAction from "@/lib/actions/HomeAction";
import AboutAction from "@/lib/actions/AboutAction";
import Error404Action from "../actions/Error404Action";

export default class App {
  run() {
    const path = this.getCurrentPath();
    const action = this.mapActionToPath(path);
    action.execute();

    window.addEventListener("hashchange", () => {
      const path = this.getCurrentPath();
      const action = this.mapActionToPath(path);
      action.execute();
    });
  }

  private getCurrentPath(): string {
    const pathRegex = /^#?\/?(.*)?/;
    const pathRegexMatches = pathRegex.exec(window.location.hash);
    const path = "/" + (pathRegexMatches ? (pathRegexMatches[1] ?? "") : "");

    return path;
  }

  private mapActionToPath(path: string): Action {
    if (path == "/") {
      return new HomeAction();
    } else if (path == "/about") {
      return new AboutAction();
    }

    return new Error404Action();
  }
}
