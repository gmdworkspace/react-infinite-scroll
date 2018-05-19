import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SuperReactInfiniteScroll from '../src/SuperReactInfiniteScroll';

class InfiniteScrollUsage extends Component {
  constructor() {
    super();
    this.MAX_RECORD_LENGTH = 700;
    this.state = {
      contentList: this.getContent()
    };
  }

  //Random content
  getContent() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr[i] = <p key={i}>Javascript is awesome, And I love it!</p>;
    }
    return arr
  };

  render() {
    const onScrollComplete = () => {
      //Async operation | API call
      setTimeout(() => {
        let newContent = this.state.contentList;
        newContent = newContent.concat(this.getContent());
        this.setState({
          contentList: newContent
        });
      }, 2000);
    };

    const loaderElem = <h1> Loading ...</h1>;

    return (
      <SuperReactInfiniteScroll
        loaderElem={loaderElem}
        onScrollComplete={onScrollComplete}
        dataList={this.state.contentList}
        totalDataLength={this.MAX_RECORD_LENGTH}
      />
    );
  }

}

ReactDom.render(<InfiniteScrollUsage />, document.getElementById('container'));