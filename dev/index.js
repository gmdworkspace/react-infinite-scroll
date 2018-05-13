import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ReactInfiniteScroll from '../src/ReactInfinteScroll';

class InfiniteScrollUsage extends Component {
  constructor() {
    super();
    this.maxCount = 0;
    this.state = {
      content: this.getContent(),
      showLoader: false
    };
  }

  getContent() {
    let arr = [];
    for (let i = 0; i < 200; i++) {
      ++this.maxCount;
      arr[i] = 'Javascript is awesome, And I love it!';
    }
    return arr
  };

  render() {
    const onScrollEnd = () => {
      if (this.maxCount >= 1000) {
        this.setState({showLoader: false});
        return;
      }
      this.setState({showLoader: true});
      setTimeout(() => {
        let newContent = this.state.content;
        newContent = newContent.concat(this.getContent());
        this.setState({
          content: newContent,
          showLoader: false
        });
      }, 2000);
    };

    const loaderElem = <h1> Loading ...</h1>;

    return (
      <ReactInfiniteScroll
        loaderElem={loaderElem}
        showLoader={this.state.showLoader}
        onScrollEnd={onScrollEnd}
      >
        {this.state.content.map((content) =>
          <p> {content} </p>)}
      </ReactInfiniteScroll>
    );
  }

}

ReactDom.render(<InfiniteScrollUsage />, document.getElementById('container'));