import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { isScrollComplete } from '../utils/scroll';
import { renderIf } from '../utils/render';

class ReactInfiniteScroll extends Component {
  constructor() {
    super();
    this.state = {
      loader: {
        show: false,
        element: null
      }
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  handleScroll() {
    const {onscrollEnd} = this.props;
    const elem = document.documentElement;
    if(isScrollComplete(elem)) {
      this.setState(
        {
          loader: {
            show: true
          }
        });
      if(onscrollEnd)
        onscrollEnd();
    }
  }

  render() {
    const {children, loader} = this.props;
    return (
      <div>
        <div>{children}</div>
        {renderIf(this.state.loader.show, <div className='loader'>{loader.element}</div>)}
      </div>
    );
  }

}

ReactInfiniteScroll.propTypes = {
  children: PropTypes.element,
  loader: PropTypes.element,
  onScrollEnd: PropTypes.func
};

export default ReactInfiniteScroll;