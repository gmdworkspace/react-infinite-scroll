export const isScrollComplete = (element) => {
  if(element) {
    return  Math.ceil(element.scrollTop + window.screen.availHeight) >= element.scrollHeight;
  }
  return false;
};