import { useEffect } from "react";

const useScrollValue = (scrollRef) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollRef.current = window.scrollY;
    });
  }, []);
};

export default useScrollValue;
