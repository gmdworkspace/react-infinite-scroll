import React from 'react';
import ReactDom from 'react-dom';
import ReactInfiniteScroll from '../src/ReactInfinteScroll';

const getContent = () => {
  let arr = [];
  for(let i = 0; i<= 500; i++) {
     arr[i] = 'Javascript is awesome, And I love it!';
  }
  return arr
};

let contents = getContent();

const loader = {
  element: <h1> Loading ...</h1>,
  show: false,
  onScrollEnd: () => {
    setTimeout(()=> {
      contents+= getContent();
    }, 3000)
    loader.show = false;
  }
};

ReactDom.render(
  <ReactInfiniteScroll loader={loader}>
    {contents.map((content) =>
      <p> {content} </p>)}
  </ReactInfiniteScroll>,
  document.getElementById('container')
);