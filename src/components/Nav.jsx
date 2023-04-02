import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const [backBtnDetected, setBackBtnDetected] = useState(false);
  const scrollRef = useRef(0);
  const scrollHistRef = useRef({
    curY: 0,
    prevY: 0,
    prevPrevY: 0,
  });
  const urlHistRef = useRef({
    curUrl: "",
    prevUrl: "",
    prevPrevUrl: "",
  });

  /* 이벤트 지정 */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollRef.current = window.scrollY;
    });
    window.addEventListener("popstate", () => {
      setBackBtnDetected(true);
    });
  }, []);

  /* 값 저장 */
  useEffect(() => {
    urlHistRef.current = {
      curUrl: window.location.pathname,
      prevUrl: urlHistRef.current.curUrl,
      prevPrevUrl: urlHistRef.current.prevUrl,
    };
    scrollHistRef.current = {
      curY: scrollRef.current,
      prevY: scrollHistRef.current.curY,
      prevPrevY: scrollHistRef.current.prevY,
    };
    console.log("backBtnDetected instant", backBtnDetected);
    setTimeout(() => {
      console.log("backBtnDetected after", backBtnDetected);
      if (backBtnDetected) {
        console.log("RESTORE");
        window.scroll({
          top: scrollHistRef.current.prevPrevY,
          // behavior: "smooth",
        });
      } else {
        console.log("GOTOTOP");
        window.scroll({
          top: 0,
          // behavior: "smooth",
        });
      }
    }, 100);
  }, [location.pathname, backBtnDetected]);

  return (
    <>
      <div className="sticky flex">
        <div className="eachMenu">
          <Link to="/">홈</Link>
        </div>
        <div className="eachMenu">
          <Link to="/aboutUs">AboutUs</Link>
        </div>
        <div className="eachMenu">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
