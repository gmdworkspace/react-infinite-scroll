import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ReactInfiniteScroll from 'src/ReactInfiniteScroll/ReactInfiniteScroll';

describe('ReactInfiniteScroll', () => {

  it('should render', () => {
    const wrapper = shallow(<ReactInfiniteScroll/>);
    expect(wrapper.length).to.equal(1);
  });

});