import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { isScrollComplete } from '../utils/scroll';
import { renderIf } from '../utils/render';

class ReactInfiniteScroll extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  handleScroll() {
    const {onScrollEnd} = this.props;
    const elem = document.documentElement;
    if(isScrollComplete(elem) && onScrollEnd) {
      onScrollEnd();
    }
  }

  render() {
    const {children, loaderElem, showLoader} = this.props;
    return (
      <div>
        <div>{children}</div>
        {renderIf(showLoader, <div className='loader'>{loaderElem}</div>)}
      </div>
    );
  }

}

ReactInfiniteScroll.propTypes = {
  children: PropTypes.element,
  showLoader: PropTypes.bool,
  loaderElem: PropTypes.element,
  onScrollEnd: PropTypes.func
};

export default ReactInfiniteScroll;