import React from 'react';
import {expect} from 'chai';
import {renderIf} from 'src/utils/render';

describe('render util', () => {

  it('returns elem when the condition is true', () => {
    const mockElem = <div></div>;
    expect(renderIf(true, mockElem)).to.equal(mockElem);
  });

  it('returns null when the condition is false', () => {
    expect(renderIf(false)).to.equal(null);
  });

  it('by default returns null', () => {
    expect(renderIf(null)).to.equal(null);
  });

});