import { useState } from "react";

export const colors = {
  primary: "#002a5b",
  green: "#45da6f",
  gray: "#b0bece"
};

export const getFontWeightText = (fontWeight: number) => {
  switch (fontWeight) {
    case 400:
      return "Regular";
    case 500:
      return "Medium";
    case 600:
      return "SemiBold";
    case 700:
      return "Bold";
  }
};

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
};

export const gutter = 7.5;

export const API_URL = "https://s-api.sikayetvar.com";
