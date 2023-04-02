/* url 값 백업 */
const _saveUrlData = (curUrl, prevUrl, setUrlStrings) => {
  // console.log("_saveUrlData");
  // console.log("prevUrl", prevUrl);
  // console.log("curUrl", curUrl);
  // if (typeof prevUrl === "string") {
  //   // console.log("이때의 값", prevUrl);
  //   sessionStorage.setItem("prevPrevUrl", prevUrl);
  // }
  // sessionStorage.setItem("prevPrevUrl", prevUrl);
  // sessionStorage.setItem("prevUrl", curUrl);
  setUrlStrings({
    prevUrl: curUrl,
    prevPrevUrl: prevUrl,
  });
};

export default _saveUrlData;
