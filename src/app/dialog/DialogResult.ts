export class DialogResult {
  action: DialogAction;
  object: any;

  constructor(action: DialogAction, object?: any) {
    this.action = action;
    this.object = object;
  }
}

export enum DialogAction {
  CREATE,
  SAVE,
  DELETE,
  CANCEL
}
