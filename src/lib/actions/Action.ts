export default abstract class Action {
  protected _path: string = "";

  set path(value: string) {
    this._path = value;
  }

  get path() {
    return this._path;
  }

  constructor() {
    this.configure();
  }

  configure() {}

  abstract execute(): void;
}
