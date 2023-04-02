const _isScrollRestoreNeeded = (curUrl, prevPrevUrl) => {
  let isBackBtnClicked = false;
  let isPrevPrevPageSame = false;
  window.onpopstate = function (event) {
    console.log("진입1");
    isBackBtnClicked = true;
  };
  if (curUrl === prevPrevUrl) {
    console.log("진입2");
    isPrevPrevPageSame = true;
  }
  return isBackBtnClicked && isPrevPrevPageSame;
};

export default _isScrollRestoreNeeded;
