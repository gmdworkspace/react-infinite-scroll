import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import SuperReactInfiniteScroll from 'src/SuperReactInfiniteScroll/SuperReactInfiniteScroll';

describe('SuperReactInfiniteScroll', () => {
  let props;

  beforeEach(() => {
    props = {
      loaderElem: <p> Loading...</p>,
      dataList: [<h1 key={1}> item1 </h1>, <h1 key={2}> item2 </h1>],
      totalDataLength: 10
    };
  });

  it('should render', () => {
    const wrapper = shallow(<SuperReactInfiniteScroll/>);
    expect(wrapper.length).to.equal(1);
  });

  it('should render a record from dataList', () => {
    const wrapper = shallow(<SuperReactInfiniteScroll {...props}/>);
    expect(wrapper.find('.scroll-item-0')).to.have.length(1);
    expect(wrapper.find('.scroll-item-1')).to.have.length(1);
  });

  it('should show loader on state being true', () => {
    const wrapper = shallow(<SuperReactInfiniteScroll {...props}/>);
    wrapper.setState({showLoader: true});
    wrapper.update();
    expect(wrapper.find('.loader')).to.have.length(1);
  });

});