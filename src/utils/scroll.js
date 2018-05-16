export const isScrollComplete = (element, scrollThresholdPercent=95) => {
  if(element) {
    return  Math.ceil(element.scrollTop + element.clientHeight) >= Math.ceil((scrollThresholdPercent/100) * element.scrollHeight);
  }
  return false;
};