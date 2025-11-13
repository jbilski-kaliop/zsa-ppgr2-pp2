import Action from "@/lib/actions/Action";

export default class HomeAction extends Action {
  execute(): void {
    const appEl = document.getElementById("app");
    if (appEl) {
      appEl.innerHTML = "<h1>Home</h1>";
    }
  }
}
