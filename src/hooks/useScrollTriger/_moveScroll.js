/* scroll 위치 이동 */
const _moveScroll = (Y) => {
  window.scroll({
    top: Y,
    behavior: "smooth",
  });
};

export default _moveScroll;
