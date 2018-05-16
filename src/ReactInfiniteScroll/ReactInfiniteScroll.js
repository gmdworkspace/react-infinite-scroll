import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isScrollComplete} from '../utils/scroll';
import {renderIf} from '../utils/render';
import throttle from '../utils/throttle';

class ReactInfiniteScroll extends Component {
  constructor() {
    super();
    this.state = {
      onScrollCompleteTriggered: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.throttleHandleScroll = throttle(this.handleScroll, 150).bind(this);
    this.hasMoreToScroll = this.hasMoreToScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.throttleHandleScroll;
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  /*eslint-disable camelcase*/
  UNSAFE_componentWillReceiveProps() {
    this.setState({
      onScrollCompleteTriggered: false,
    });
  }

  hasMoreToScroll() {
    const {dataList, totalDataLength} = this.props;
    return dataList.length < totalDataLength;
  }

  handleScroll() {
    const {onScrollComplete, scrollThresholdPercent} = this.props;
    const elem = document.documentElement;
    if (isScrollComplete(elem, scrollThresholdPercent) && onScrollComplete && this.hasMoreToScroll() && !this.state.onScrollCompleteTriggered) {
      this.setState({
        onScrollCompleteTriggered: true,
      });
      onScrollComplete();
    }
  }

  render() {
    const {loaderElem, showLoader, dataList} = this.props;
    return (
      <div>
        {
          dataList.map((content, i) =>
            <div key={i}>{content}</div>)
        }
        {renderIf(showLoader, <div className='loader'>{loaderElem}</div>)}
      </div>
    );
  }

}

ReactInfiniteScroll.propTypes = {
  children: PropTypes.element,
  showLoader: PropTypes.bool,
  loaderElem: PropTypes.element,
  onScrollComplete: PropTypes.func,
  dataList: PropTypes.array,
  totalDataLength: PropTypes.number,
  scrollThresholdPercent: PropTypes.number
};

ReactInfiniteScroll.defaultProps = {
  dataList: []
};

export default ReactInfiniteScroll;