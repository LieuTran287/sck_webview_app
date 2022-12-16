export const DARK_MODE = "dark";
export const LIGHT_MODE = "light";

export const appColors = {
  primaryBg: [`#FFFFFF`, `#000000`],
  primary: ['#1496bb', '#1496bb'],
  text: [`#333333`, `#FFFFFF`],
  buttonTitle: ["#FFFFFF", "#FFFFFF"],
  buttonBgDisable: ["#d2d2d2", "#d2d2d2"],
  avatarBg: ["#d9e2e7", "#d9e2e7"]
};

const colors = theme => {
  const themeColors = {};
  for (const key in appColors) {
    themeColors[key] = appColors[key][theme === DARK_MODE ? 1 : 0];
  }
  return {...themeColors};
};

export default colors;
