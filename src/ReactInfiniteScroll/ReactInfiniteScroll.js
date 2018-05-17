import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isScrollComplete} from '../utils/scroll';
import {renderIf} from '../utils/render';
import throttle from '../utils/throttle';

class ReactInfiniteScroll extends Component {
  constructor() {
    super();
    this.state = {
      onScrollCompleteTriggered: false,
      showLoader: false
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
    const hasScroll = this.hasMoreToScroll();
    if(!hasScroll) {
      this.setState({
        showLoader: false
      });
    }
    if (isScrollComplete(elem, scrollThresholdPercent) && onScrollComplete && hasScroll && !this.state.onScrollCompleteTriggered) {
      this.setState({
        onScrollCompleteTriggered: true,
        showLoader: true
      });
      onScrollComplete();
    }
  }

  render() {
    const {loaderElem, dataList} = this.props;
    return (
      <div>
        {
          dataList.map((content, i) => <div key={i} className={'scroll-item-'+i}>{content}</div>)
        }
        {renderIf(this.state.showLoader, <div className='loader'>{loaderElem}</div>)}
      </div>
    );
  }

}

ReactInfiniteScroll.propTypes = {
  loaderElem: PropTypes.element,
  onScrollComplete: PropTypes.func,
  dataList: PropTypes.array,
  totalDataLength: PropTypes.number,
  scrollThresholdPercent: PropTypes.number
};

ReactInfiniteScroll.defaultProps = {
  dataList: [],
  scrollThresholdPercent: 95
};

export default ReactInfiniteScroll;