import { atom } from "recoil";

const yOffsets = atom({
  key: "yOffsets",
  default: { prevY: 0, prevPrevY: 0 },
});

export default yOffsets;
