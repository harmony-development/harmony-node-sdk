export enum ActionType {
  NORMAL,
  PRIMARY,
  DESTRUCTIVE,
}

export enum FieldPresentation {
  DATA,
  CAPTIONED_IMAGE,
  ROW,
}

export enum ActionPresentation {
  BUTTON,
  DROPDOWN,
  MENU,
  SMALL_ENTRY,
  LARGE_ENTRY,
}

export interface IAction {
  text?: string;
  url?: string;
  id?: string;
  type?: ActionType;
  children?: IAction[];
}

export interface IEmbed {
  title: string;
  body: string;
  color: number;
  header: IEmbedHeading;
  footer: IEmbedHeading;
  fields: IEmbedField[];
  actions: IAction[];
}

export interface IEmbedHeading {
  text?: string;
  subtext?: string;
  url?: string;
  icon?: string;
}

export interface IEmbedField {
  title?: string;
  subtitle?: string;
  body?: string;
  image_url?: string;
  actions?: IAction[];
  presentation?: FieldPresentation;
}
