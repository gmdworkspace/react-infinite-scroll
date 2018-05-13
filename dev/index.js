import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ReactInfiniteScroll from '../src/ReactInfinteScroll';

class InfiniteScrollUsage extends Component {
  constructor() {
    super();
    this.MAX_RECORD_LENGTH = 700;
    this.state = {
      contentList: this.getContent(),
      showLoader: false
    };
  }

  //Random content
  getContent() {
    let arr = [];
    for (let i = 0; i < 200; i++) {
      arr[i] = 'Javascript is awesome, And I love it!';
    }
    return arr
  };

  render() {
    const onScrollComplete = () => {
      //HIDE loader when maximum record length reached
      if (this.state.contentList.length >= this.MAX_RECORD_LENGTH) {
        this.setState({showLoader: false});
        return;
      }

      this.setState({showLoader: true});

      //Async operation | API call
      setTimeout(() => {
        let newContent = this.state.contentList;
        newContent = newContent.concat(this.getContent());
        this.setState({
          contentList: newContent,
          showLoader: false
        });
      }, 2000);
    };

    const loaderElem = <h1> Loading ...</h1>;

    return (
      <ReactInfiniteScroll
        loaderElem={loaderElem}
        showLoader={this.state.showLoader}
        onScrollComplete={onScrollComplete}
      >
        {this.state.contentList.map((content) =>
          <p> {content} </p>)}
      </ReactInfiniteScroll>
    );
  }

}

ReactDom.render(<InfiniteScrollUsage />, document.getElementById('container'));