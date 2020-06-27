import Color from 'color';

export const rgba = (hex: string, alpha: number) =>
  Color(hex).alpha(alpha).rgb().string();
