import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ReactInfiniteScroll from 'src/ReactInfiniteScroll/ReactInfiniteScroll';

describe('ReactInfiniteScroll', () => {
  let props;

  beforeEach(() => {
    props = {
      loaderElem: <p> Loading...</p>,
      dataList: [<h1 key={1}> item1 </h1>, <h1 key={2}> item2 </h1>],
      totalDataLength: 10
    };
  });

  it('should render', () => {
    const wrapper = shallow(<ReactInfiniteScroll/>);
    expect(wrapper.length).to.equal(1);
  });

  it('should render a record from dataList', () => {
    const wrapper = shallow(<ReactInfiniteScroll {...props}/>);
    expect(wrapper.find('.scroll-item-0')).to.have.length(1);
    expect(wrapper.find('.scroll-item-1')).to.have.length(1);
  });

  it('should show loader on state being true', () => {
    const wrapper = shallow(<ReactInfiniteScroll {...props}/>);
    wrapper.setState({showLoader: true});
    wrapper.update();
    expect(wrapper.find('.loader')).to.have.length(1);
  });

});