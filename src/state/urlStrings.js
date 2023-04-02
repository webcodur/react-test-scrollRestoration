import { atom } from "recoil";

const urlStrings = atom({
  key: "urlStrings",
  default: { prevUrl: null, prevPrevUrl: null },
});

export default urlStrings;
