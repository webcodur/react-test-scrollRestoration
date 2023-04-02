import { useEffect } from "react";

const useScrollTriger = (
  backBtnDetected,
  setBackBtnDetected,
  urlHistRef,
  scrollHistRef
) => {
  useEffect(() => {
    const curY = scrollHistRef.current.curY;
    const prevPrevY = scrollHistRef.current.prevPrevY;
    console.log("curY", curY);
    console.log("prevPrevY", prevPrevY);

    const curUrl = urlHistRef.current.curUrl;
    const prevPrevUrl = urlHistRef.current.prevPrevUrl;
    console.log("curUrl", curUrl);
    console.log("prevPrevUrl", prevPrevUrl);

    if (backBtnDetected) {
      console.log("!!! backBtnDetected", backBtnDetected);
    }
    if (prevPrevUrl === curUrl) {
      console.log("!!! 이전 url로 온 상태");
    }
    if (backBtnDetected && prevPrevUrl === curUrl) {
      setBackBtnDetected(false);
      console.log("!!! 스크롤 이동 to", prevPrevY);
      window.scroll({
        top: prevPrevY,
        behavior: "smooth",
      });
    }
  }, [backBtnDetected]);
};

export default useScrollTriger;
