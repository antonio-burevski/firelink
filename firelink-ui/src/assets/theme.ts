export interface IFlTheme {
  primary: string;
  secondary: string;
  accent: string;
  alt: string;
  text: string;
  background: string;
}

export const defaultTheme: IFlTheme = {
  primary: "#910c00" /*red*/,
  secondary: "#0e1b26" /*dark blue*/,
  accent: "#ABA9BF" /**/,
  alt: "#fdb92e" /*yellow*/,
  background: "#E6E6E6" /*grey-white*/,
  text: "#000000" /*white*/,
};
