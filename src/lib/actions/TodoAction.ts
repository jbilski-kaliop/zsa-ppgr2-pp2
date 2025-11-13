import Action from "@/lib/actions/Action";

export default class TodoAction extends Action {
  todoId!: number;

  configure() {
    const pattern = /todo\/([0-9]+)/;
    const matches = pattern.exec(window.location.hash);
    this.todoId = matches ? (parseInt(matches[1]) ?? NaN) : NaN;
  }

  execute(): void {
    console.log(`todo ${this.todoId}`);
  }
}
