export const isScrollComplete = (element, scrollThresholdPercent) => {
  if(element && scrollThresholdPercent) {
    return  Math.ceil(element.scrollTop + element.clientHeight) >= Math.ceil((scrollThresholdPercent/100) * element.scrollHeight);
  }
  return false;
};