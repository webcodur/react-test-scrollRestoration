/* scroll 위치 백업 */
const _saveScrollData = (curY, prevY) => {
  if (prevY) {
    sessionStorage.setItem("prevPrevUrl", prevY);
  }
  sessionStorage.setItem("prevY", curY);
};
export default _saveScrollData;
