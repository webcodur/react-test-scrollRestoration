// utils
import _getUrlData from "./_getUrlData";
import _saveUrlData from "./_saveUrlData";
// library
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import urlStringsState from "../../state/urlStrings";
import { useRecoilState } from "recoil";

const useScrollWithBackBtn = (curY, setCustomScrollNeeded) => {
  // const prevPrevY = sessionStorage.getItem("prevPrevY");
  // const prevY = sessionStorage.getItem("prevY");
  // sessionStorage.setItem("prevY", curY);
  // sessionStorage.setItem("prevPrevY", prevY);

  const [urlStrings, setUrlStrings] = useRecoilState(urlStringsState);
  const location = useLocation();

  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    let [curUrl, prevUrl, prevPrevUrl] = _getUrlData(urlStrings);

    console.log("curUrl", curUrl);
    console.log("prevUrl", prevUrl);
    console.log("prevPrevUrl", prevPrevUrl);
    console.log("--------------");
    // console.log("curY", curY);
    // console.log("prevY", prevY);
    // console.log("prevPrevY", prevPrevY);
    // console.log("==================");

    // if (_isScrollRestoreNeeded(curUrl, prevPrevUrl)) {
    //   console.log("진입성공");
    //   _moveScroll(prevPrevY);
    // } else {
    //   _moveScroll(0);
    // }

    // if (curUrl === prevPrevUrl) {
    //   _moveScroll(prevPrevY);
    // } else {
    //   _moveScroll(0);
    // }
    if (curUrl === prevPrevUrl) {
      setCustomScrollNeeded(true);
    }

    _saveUrlData(curUrl, prevUrl, setUrlStrings);
  }, [location.pathname]);
};

export default useScrollWithBackBtn;
