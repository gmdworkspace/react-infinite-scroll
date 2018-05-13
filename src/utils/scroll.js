export const isScrollComplete = (element) => {
  if(element) {
    return  Math.ceil(element.scrollTop + element.clientHeight) >= element.scrollHeight;
  }
  return false;
};