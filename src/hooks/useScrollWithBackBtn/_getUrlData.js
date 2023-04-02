/* url 값 가져오기 */
const _getUrlData = (urlStrings) => {
  return [window.location.pathname, urlStrings.prevUrl, urlStrings.prevPrevUrl];
};
export default _getUrlData;
