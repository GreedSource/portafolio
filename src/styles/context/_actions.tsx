import { themeTypes } from "./_state";

export abstract class StateAction {
  #type: string = "AnimatedDrawerStateAction";
}

export class ChangeThemeAction extends StateAction {
  theme: themeTypes;

  constructor(theme: themeTypes) {
    super();
    this.theme = theme;
  }
}
