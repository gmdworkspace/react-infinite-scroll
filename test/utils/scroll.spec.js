import {expect} from 'chai';
import {isScrollComplete} from 'src/utils/scroll';

describe('scroll util', () => {

  it('returns true when the scroll complete', () => {
    const mockElement  = {
      scrollTop: 13,
      clientHeight: 2,
      scrollHeight: 15
    };
    expect(isScrollComplete(mockElement,100)).to.equal(true);
  });

  it('returns false when the scroll is not complete', () => {
    const mockElement  = {
      scrollTop: 10,
      clientHeight: 2,
      scrollHeight: 15
    };
    expect(isScrollComplete(mockElement,100)).to.equal(false);
  });

  it('returns false when a null value is passed to the function', () => {
    expect(isScrollComplete(null)).to.equal(false);
  });

});